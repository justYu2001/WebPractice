const { createApp, ref, computed, watch } = Vue;

const STORAGE_KEY = "todos-vuejs-2.0";
const todoStorage = {
    fetch() {
        const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        todos.forEach((todo, index) => {
            todo.id = index;
        });
        todoStorage.uid = todos.length;
        return todos;
    },
    save(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },
};

// visibility filters
const filters = {
    all(todos) {
        return todos;
    },
    active(todos) {
        return todos.filter((todo) => !todo.completed);
    },
    completed(todos) {
        return todos.filter((todo) => todo.completed);
    },
};

// app Vue instance
const app = createApp({
    setup() {
       const todos = ref(todoStorage.fetch());
       const visibility = ref("all");
       const filteredTodos = computed(() => filters[visibility.value](todos.value));
       const remaining = computed(() => filters.active(todos.value).length);
       const pluralize = (n) => n === 1 ? "item" : "items";

       const newTodo = ref("");
       const addTodo = () => {
           const value = newTodo.value && newTodo.value.trim();
           if(!value) {
               return;
           }
           todos.value.push({
               id: todoStorage.uid++,
               title: value,
               completed: false,
           });
           newTodo.value = "";
       };

       const removeTodo = (todo) => {
           todos.value.splice(todos.value.indexOf(todo), 1);
       }

       const editedTodo = ref(null);
       let beforeEditCache = null;
       const editTodo = (todo) => {
           beforeEditCache = todo.title;
           editedTodo.value = todo;
       }

       const doneEdit = (todo) => {
           if(!editedTodo.value){
               return;
           }
           editedTodo.value = null;
           todo.title = todo.title.trim();
           if(!todo.title){
               removeTodo(todo);
           }
       }

       const cancelEdit = (todo) => {
           editedTodo.value = null;
           todo.title = beforeEditCache;
       }

       const removeCompleted = () => {
           todos.value = filters.active(todos.value);
       }

       const allDone = computed({
           get: () => remaining.value === 0,
           set: (value) => todos.value.forEach((todo) => todo.completed = value),
       })

       watch(
           todos, 
           () => {
                todoStorage.save(todos.value);
       },{
           deep: true,
       });
       

       return {
           todos,
           visibility,
           filteredTodos,
           remaining,
           pluralize,
           newTodo,
           addTodo,
           removeTodo,
           editedTodo,
           editTodo,
           doneEdit,
           cancelEdit,
           removeCompleted,
           allDone,
       }
    },
    // a custom directive to wait for the DOM to be updated
    // before focusing on the input field.
    // http://vuejs.org/guide/custom-directive.html
    directives: {
        "todo-focus": {
            updated(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            },
        },
    },
});

// mount
const vm = app.mount(".todoapp");

// handle routing
function onHashChange() {
    const visibility = window.location.hash.replace(/#\/?/, "");
    if (filters[visibility]) {
        vm.visibility = visibility;
    } else {
        window.location.hash = "";
        vm.visibility = "all";
    }
}

window.addEventListener("hashchange", onHashChange);
onHashChange();

<template>
    <h1>{{ count }}</h1>
    <button @click="plus">Plus</button>
    <p>double:{{ doubleCount }}</p>
    <p>quadrupleCount: {{ quadrupleCount }}</p>
    <p>nonReactiveCount:{{ nonReactiveCount }}</p>
    <div ref="root"></div>
    <div
        v-for="(item, index) in list"
        :ref="
            (el) => {
                divs[index] = el;
            }
        "
    >
        {{ item }}
    </div>
    <!-- <h2>data</h2>
    <p>{{ count }}</p>
    <button @click="plus">click</button>
    <p>double:{{ doubleCount }}</p>
    <p>quadrupleCount: {{ quadrupleCount }}</p>
    <p>{{ plueOne }}</p>

    <button @click="plusObj">obj</button>

    <p>original:{{ original }}</p>
    <p>copy:{{ copy }}</p>
    <button @click="plusOriginal">click</button> -->
</template>

<script>
import {
    ref,
    reactive,
    toRefs,
    computed,
    readonly,
    watch,
    watchEffect,
    onMounted,
    onBeforeUpdate,
} from 'vue';

export default {
    setup() {
        const count = ref(0);
        const doubleCount = computed(() => count.value * 2);
        const quadrupleCount = computed(() => doubleCount.value * 2);
        const plus = () => count.value++;
        const root = ref(null);

        const list = ref([1, 2, 3]);
        const divs = ref([]);

        // const data = reactive({
        //     count: 0,
        //     doubleCount: computed(() => data.count * 2),
        //     quadrupleCount: computed(() => data.doubleCount * 2),
        //     obj: {
        //         count: 0,
        //     },
        //     plueOne: computed({
        //         get: () => data.count + 1,
        //         set: (val) => (data.count = val - 1),
        //     }),
        //     plus: () => data.count++,
        //     plusObj: () => data.obj.count++,
        // });

        // watch(count, (val, oldVal) => {
        //     console.log('old', oldVal);
        //     console.log('new', val);
        // });

        // watch(
        //     () => data.count,
        //     (val, oldVal) => {
        //         console.log('old', oldVal);
        //         console.log('new', val);
        //     }
        // );

        // watch(
        //     [() => data.count, () => data.doubleCount],
        //     ([newCount, newDoubleCount], [prevConut, prevDoubleCount]) => {
        //         console.log('prevConut', prevConut);
        //         console.log('newCount', newCount);
        //         console.log('prevDoubleCount', prevDoubleCount);
        //         console.log('newDoubleCount', newDoubleCount);
        //     }
        // );

        // watch(
        //     data,
        //     (val, oldVal) => {
        //         console.log('old', oldVal);
        //         console.log('new', val);
        //     },
        //     { deep: true }
        // );

        const stop = watchEffect(() => {
            console.log('wattchEffect', count.value);
        });

        stop();

        onMounted(() => {
            console.log(root.value);
            for (const div of divs.value) {
                console.log(div);
            }
        });

        onBeforeUpdate(() => {
            divs.value = [];
        });

        const original = ref(0);
        const copy = readonly(original);
        const plusOriginal = () => original.value++;

        return {
            count,
            plus,
            doubleCount,
            quadrupleCount,
            nonReactiveCount: 0,
            root,
            list,
            divs,
            // ...toRefs(data),
            original,
            copy,
            plusOriginal,
        };
    },
};
</script>

<style></style>

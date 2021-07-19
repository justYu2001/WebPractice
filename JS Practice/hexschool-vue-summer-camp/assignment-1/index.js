const app = Vue.createApp({
    data() {
        return {
            users:[],
            currentUser: {},
            status: true,
            isShow: false,
        }
    },
    methods: {
        async getData () {
            try {
                const url = "https://randomuser.me/api/?results=21";
                let res = await axios.get(url);
                if(res.status === 200){
                    let users = res.data.results;
                    users.forEach((user) => {
                        user.isFollowed = false;
                        user.birthday = {
                            year: "",
                            month: "",
                            date: "",
                        };
                        let [year, month, date] = user.dob.date.split(/-|T/);
                        user.birthday.year = year;
                        user.birthday.month = Number.parseInt(month).toString();
                        user.birthday.date = Number.parseInt(date).toString();
                    });
                    return users;
                } else {
                    console.log("get data error:", res.status);
                }
            } catch (error) {
                console.log(error);
            }
        },
        toggleFollowed (user) {
            user.isFollowed = !user.isFollowed;
        },
        followBtnStyle (user) {
            if(user.isFollowed){
                return "unfollow-btn";
            } else {
                return "follow-btn";
            }
        },
        showUserDetail(user) {
            this.currentUser = user;
            this.isShow = true;
        }
    },
    computed : {
        detailStyle () {
            if(this.isShow) {
                return "detail active";
            } else {
                return "detail";
            }
        }
    },
    async mounted() {
        try {
            this.users = await this.getData();
        } catch (error) {
            console.log(error);
        }
    },
}).mount("#app");
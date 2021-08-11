<template>
    <ul>
        <li><router-link to="/">Go to Home</router-link></li>
        <li>
            <router-link to="/about" custom v-slot="{ navigate }"
                ><button @click="navigate" role="link">
                    Go to About
                </button></router-link
            >
        </li>
        <li v-for="i in 5" :key="i">
            <router-link :to="`/users/${i}`" replace>
                /users/{{ i }}</router-link
            >
        </li>
    </ul>
</template>
<style>
.router-link-active {
    background-color: #000;
    color: #fff;
}
</style>
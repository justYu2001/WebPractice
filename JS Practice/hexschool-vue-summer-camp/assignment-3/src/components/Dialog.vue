<template>
    <transition name="fade">
        <div
            :class="$style['dialog-container']"
            @click.self="$emit('update:isShow', false)"
        >
            <transition name="dialog" v-show="isShow">
                <div :class="$style['dialog-body']">
                    你確定要刪除所有的任務嗎?
                    <div :class="$style['btn-group']">
                        <button :class="$style.yes" @click="returnOk">
                            確認
                        </button>
                        <button
                            :class="$style.cancel"
                            @click="$emit('update:isShow', false)"
                        >
                            取消
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        isShow: Boolean,
    },
    emits: ['ok', 'update:isShow'],
    methods: {
        returnOk() {
            this.$emit('update:isShow', false);
            this.$emit('ok', true);
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';

.dialog-container {
    background-color: rgba(33, 33, 33, 0.46);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-body {
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);
    border-radius: 4px;
    background-color: #fff;
    padding: 30px;
    font-weight: bold;
    font-size: 24px;
}

.btn-group {
    margin-top: 30px;
    button {
        @extend %btn;
        font-size: 18px;
        background-color: transparent;
        font-weight: bold;
        float: right;
        padding: 5px 10px;
        border-radius: 5px;
        &:hover {
            background-color: #eee;
        }
    }

    .cancel {
        color: $gray;
    }

    .yes {
        color: $red;
    }
}
</style>

<style lang="scss">
.dialog-enter-from,
.dialog-leave-to {
    transform: scale(0);
}

.dialog-leave-from,
.dialog-enter-to {
    transform: scale(1);
}

.dialog-leave-active,
.dialog-enter-active {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
    opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>

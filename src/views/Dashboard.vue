<template>
  <div class="dashboard" ref="dashboard">
    <Head></Head>
    <Menu @collapse = collapseMenu></Menu>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Head from '../components/Head';
import Menu from '../components/Menu';

export default {
    components: {
        Head,
        Menu
    },
    methods: {
      collapseMenu() {
        this.$refs.dashboard.className = "main";
      }
    }
}
</script>

<style>

.main {
  background: var(--warning);
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
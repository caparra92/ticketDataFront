<template>
  <div class="dashboard" ref="dashboard">
    <Head></Head>
    <Menu></Menu>
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

    }
}
</script>

<style>

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
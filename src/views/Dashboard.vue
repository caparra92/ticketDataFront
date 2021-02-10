<template>
  <div class="dashboard">
    <Head></Head>
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Head from '../components/Head';
import Menu from '../components/Menu';

export default {
    components: {
        Head,
        Menu
    }
}
</script>

<style>

</style>
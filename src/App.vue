<template>
  <div id="app">
    <Head></Head>
    <Menu></Menu>
    <FormData></FormData>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Head from './components/Head'
import FormData from './components/FormData';


export default {
  name: 'App',
  components: {
    Menu,
    Head,
    FormData
  }
}
</script>

<style>
  :root {
    --primary: #7f32a8;
    --primary_hover: #572374;
    --white: #fff;
    --border_radius: 3px;
    --font_lg: 18px;
    --font_md: 14px;
    --font_sd: 10px;
    --shadow_bottom: 0px 0px 3px rgba(0,0,0,0.4)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }
</style>

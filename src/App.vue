<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
};
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
  --shadow_bottom: 0px 0px 3px rgba(0, 0, 0, 0.4);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}

.row {
  display: flex;
  height: 100%;
}

.col-1 {
  width: 8.33%;
}

.col-2 {
  width: 16.66%;
}

.col-3 {
  width: 24.99%;
}

.col-4 {
  width: 33.33%;
}

.col-5 {
  width: 41.65%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.41%;
}

.col-8 {
  width: 66.66%;
}

.col-9 {
  width: 74.97%;
}

.col-10 {
  width: 83.33%;
}

.col-11 {
  width: 91.63%;
}

.col-12 {
  width: 100%;
}

.form-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.form-container form {
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-input,
.form-label {
  margin: 5px;
  font-size: var(--font_md);
}

.form-label {
  line-height: 2.5;
}

.form-input {
  width: 100%;
  height: 40px;
  box-shadow: var(--shadow);
  border: none;
  outline: none;
  border-bottom: 1px solid var(--primary);
  line-height: 1;
}
</style>

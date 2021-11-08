<template>
  <div class="login-container">
    <div class="row">
      <div class="col-6 login__left"></div>
      <div class="col-6 login__right">
        <form>
          <div class="form-row">
            <label class="form-label" for="user">User</label>
            <div class="col-9">
              <input
                type="text"
                id="user"
                name="user"
                class="form-input"
                placeholder="User"
                v-model="user"
              />
            </div>
          </div>
          <div class="form-row">
            <label class="form-label" for="password">Password</label>
            <div class="col-9">
              <input
                type="password"
                id="password"
                name="password"
                class="form-input"
                placeholder="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="row button-container">
            <button class="form-button form-button-login" @click.prevent="login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.user,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
    
<style>
.login-container {
  width: 100%;
  height: 100vh;
}

.login__left,
.login__left {
  height: 100%;
}

.login__left {
  background-color: var(--purple);
}

.login__right {
  display: flex;
}

.login__right form {
  width: 500px;
  margin: auto;
}

.form-button-login {
  display: block;
  width: 100px;
  height: 40px;
  background-color: var(--purple);
  color: var(--white);
}

.form-button-login:hover {
  background-color: var(--purple_hover);
}

.button-container {
  margin-top: 10px;
}
</style>
<template>
  <div class="login-container">
    <div class="row">
      <div class="col-6 login__left"></div>
      <div class="col-6 login__right">
        <form>
          <div class="form-row">
            <label class="form-label" for="user"
              >User</label
            >
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
            <label class="form-label" for="password"
              >Password</label
            >
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
              <button class="form-button form-button-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
    
<style>
    .login-container {
        width: 100%;
        height: 100vh;
    }

    .login__left, .login__left {
        height: 100%;
    }

    .login__left {
        background-color: var(--primary);
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
        background-color: var(--primary);
        color: var(--white);
    }

    .form-button-login:hover {
        background-color: var(--primary_hover);
    }

    .button-container {
        margin-top: 10px;
    }
</style>
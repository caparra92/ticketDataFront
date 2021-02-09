<template>
  <section class="menu">
      <div class="head-logo">
          <h2 class="header-logo__content">Logo</h2>
      </div>
      <div class="menu__container">
          <ul class="menu__container-list">
              <li class="menu__container-element">
                  <a href="#"><i class="fa fa-plus"></i> New</a>
              </li>
              <li class="menu__container-element">
                  <a href="#"><i class="fa fa-ticket"></i> My tickets</a>
              </li>
              <li class="menu__container-element">
                  <a href="#"><i class="fa fa-bar-chart"></i> Graphics</a>
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
    .head-logo {
        width: 100%;
        margin: 20px 0;
        text-align: center;
    }

    .header-logo__content {
        color: var(--white);
    }

    .menu {
        position: fixed;
        height: 100%;
        width: 250px;
        background-color: var(--primary);
        border-radius: var(--border_radius);
    }

    .menu__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu__container-list {
        width: 100%;
        height: 300px;
        padding: 0;
    }

    .menu__container-element {
        width: 100%;
        height: 50px;
        padding: 10px 5px;
        list-style: none;
        color: var(--white);
    }

    .menu__container-element:hover {
        background-color: var(--primary_hover);
        color: var(--primary);
        cursor: pointer;
    }

    .menu__container-element a {
        text-decoration: none;
        color: var(--white);
        padding: 10px;
        line-height: 1.5;
        font-size: var(--font_lg);
    }

    .menu__container-element i {
        margin-right: 5px;
    }
</style>
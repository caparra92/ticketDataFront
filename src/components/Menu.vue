<template>
  <section class="menu" ref="toggle">
    <div class="head-logo">
      <h2 ref="logo">
        <router-link to="/dashboard" class="header-logo__content"
          >Logo</router-link
        >
      </h2>
    </div>
    <div class="menu__container">
      <ul class="menu__container-list" ref="menu_list">
        <li class="menu__container-element">
          <router-link to="/dashboard/new"
            ><i class="fa fa-plus"></i
            ><span class="menu__container-element-title">New</span></router-link
          >
        </li>
        <li class="menu__container-element">
          <router-link to="/dashboard/tickets"
            ><i class="fa fa-ticket"></i>
            <span class="menu__container-element-title"
              >My tickets</span
            ></router-link
          >
        </li>
        <li class="menu__container-element">
          <router-link to="/graphics"
            ><i class="fa fa-bar-chart"></i>
            <span class="menu__container-element-title"
              >Graphics</span
            ></router-link
          >
        </li>
      </ul>
    </div>
    <div class="menu__toggle">
      <div class="menu__toggle-icon" @click="collapse">
        <i class="fa fa-angle-double-left"><span></span></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      listMenu: ["New, My tickets", "Graphics"],
      collapsed: false
    };
  },
  methods: {
    collapse() {
      this.collapsed = true;
      this.$refs.toggle.className = "menu__xs";
      let anchor = this.$refs.logo.children[0];
      anchor.style.visibility = "hidden";
      for (const li of this.$refs.menu_list.children) {
        for (const el of li.children) {
          let span = el.children[1];
          span.textContent = "";
        }
      }
      this.$store.dispatch("collapseMenu", true);
    },
    expand() {
      this.$refs.toggle.removeClass = "menu_xs"
      // this.$refs.toggle.className = "menu";
      for (const li of this.$refs.menu_list.children) {
        for (const el of li.children) {
          let span = el.children[1];
          this.listMenu.forEach((title) => {
            span.textContent += title;
          });
        }
      }
    },
  },
};
</script>

<style>
.head-logo {
  width: 100%;
  margin: 20px 0;
  text-align: center;
}

.header-logo__content {
  color: var(--white);
  text-decoration: none;
}

.menu {
  position: fixed;
  height: 100%;
  width: 250px;
  background-color: var(--purple);
  border-radius: var(--border_radius);
  z-index: 10;
  transition: linear all 0.5s;
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
  background-color: var(--purple_hover);
  color: var(--purple);
  cursor: pointer;
}

.menu__container-element a {
  width: 100%;
  text-decoration: none;
  color: var(--white);
  padding: 10px;
  line-height: 1.5;
  font-size: var(--font_lg);
}

.menu__container-element i {
  margin-right: 5px;
}

.menu__toggle {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1em;
  margin: 0.2em 0.4em;
}

.menu__toggle-icon {
  position: absolute;
  padding: 2px;
  width: 50px;
  height: 40px;
  border-radius: 3px;
  right: 1em;
  bottom: 1em;
  border: 1px solid var(--white);
  background: var(--pink);
  text-align: center;
  cursor: pointer;
  transition: all 0.05s;
}

.menu__toggle-icon:hover {
  background: var(--pink_hover);
  transform: scale(1.03);
}

.menu__toggle-icon i {
  font-size: var(--font_lg);
  color: var(--white);
  line-height: 1.8;
}

.menu__xs {
  width: 50px;
  position: fixed;
  height: 100%;
  background-color: var(--purple);
  border-radius: var(--border_radius);
  z-index: 10;
  transition: linear all 0.5s;
}

@media (max-width: 900px) {
  .menu {
    width: 50px;
  }

  .menu__container-element-title {
    display: none;
  }

  .header-logo__content {
    visibility: hidden;
  }

  .menu__toggle-icon {
    visibility: hidden;
  }
}

@media (min-width: 901px) and (max-width: 1300px) {
  .menu {
    width: 150px;
  }
}
</style>
<template>
  <div class="badge">
      <div class="user-badge">
        <a href="#" @click="showOptions">
            <img class="user-badge__avatar" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="avatar">
        </a>
    </div>
  <div class="user-badge__options" ref="options">
      <ul>
          <li><a href="#"><i class="fa fa-ticket"></i> My tickets</a></li>
          <li><a href="#"><i class="fa fa-sign-out"></i> Logout</a></li>
      </ul>
  </div>
  </div>
</template>

<script>

let visible = false;

export default {
    name: 'Badge',
    methods: {
        showOptions() {
            visible = !visible;
            let options = this.$refs.options;
            visible ?  options.style.visibility = 'visible' : options.style.visibility = 'hidden';
        }
    }
}
</script>

<style>

    .user-badge {
        height: 100%;
        width: 70px;
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 10px;
    }

    .user-badge__avatar {
        border-radius: 50%;
        max-width: 100%;
        width: 100%;
    }

    .user-badge__options {
        position: absolute;
        top: 58px;
        right: 27px;
        display: flex;
        width: 150px;
        height: 100px;
        border-radius: var(--border_radius);
        border: 1px solid var(--primary);
        visibility: hidden;
    }

    .user-badge__options ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .user-badge__options li {
        width: 100%;
        list-style: none;
        padding: 10px 0;
    }

    .user-badge__options li a{
        text-decoration: none;
        font-size: var(--font_lg);
        margin: 5px;
    }
</style>
<template>
  <header class="header">
      <h2 class="header__content">Admin panel</h2>
      <Badge></Badge>
  </header>
</template>

<script>
import Badge from './Badge';

export default {
    name: 'Head',
    components: {
        Badge
    }
}
</script>

<style>
    .header {
        position: fixed;
        display: inline-block;
        width: calc(100% - 250px);
        left: 250px;
        z-index: 10;
        background-color: var(--white);
    }

    .header__content {
        height: 70px;
        padding: 10px;
        font-size: 18px;
        line-height: 2.5;
        border: none;
        border-bottom: 2px solid var(--purple);
        box-shadow: var(--shadow_bottom);
    }
</style>
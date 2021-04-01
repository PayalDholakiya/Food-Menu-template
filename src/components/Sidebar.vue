<template>
  <transition name="transition">
    <sidebar
      v-if="open"
      class=" absolute flex top-10 h-screen bg-white bg-opacity-95 w-1/6"
    >
      <ul class="list-none cursor-pointer text-2xl font-serif">
        <li class="mb-4" @click="open = !open">
          Close Menu
        </li>
        <li class="mb-4">
          <router-link to="/"> Food</router-link>
        </li>
        <li>
          <router-link to="/about"> About</router-link>
        </li>
      </ul>
    </sidebar>
  </transition>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
    },
  },
}
</script>
<style scoped>
.transition-enter,
.transition-leave-to {
  transform: translateX(-100%);
}
.transition-enter-active,
.transition-leave-active {
  transition: transform 0.9s;
}
</style>

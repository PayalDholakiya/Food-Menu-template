<template>
  <header class="my-10  text-2xl flex flex-row justify-center justify-between">
    <div class="transition-color duration-300" @click="$emit('toggle')">
      <img class="h-8 cursor-pointer" src="../assets/menu.png" />
    </div>
    <div class="font-serif cursor-pointer">My Food</div>
    <div class="font-serif cursor-pointer">Mail</div>
  </header>
</template>


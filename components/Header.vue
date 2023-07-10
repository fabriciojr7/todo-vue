<template>
  <header class="flex flex-col gap-6 items-center py-6 text-lg border-b-2 border-zinc-400">
    <h1 class="text-4xl font-bold">
        ToDo-<span class="text-green-500">Vue</span>
    </h1>

    <nav>
      <ul class="flex items-center justify-center gap-6">
        <li><NuxtLink to="/">Todas</NuxtLink></li>
        <li><NuxtLink to="/pending-tasks">Pendentes</NuxtLink></li>
        <li><NuxtLink to="/completed-tasks">Concluídas</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .router-link-exact-active{
    color: #47b980;
  }
</style>
<script setup>
import Sidebar from './components/Sidebar.vue';
import Navebar from './components/Navebar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <!-- <navebar />
  <Sidebar />-->
  <header>      
    
    <div class="max-w-7xl mx-auto"> 

      <nav class="p-2">
        <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/">Home</RouterLink>
        <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/clients">Clients</RouterLink>
        <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/sdas">Sda</RouterLink>

      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">

    <RouterView />
  </main>

</template>

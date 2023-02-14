<script setup>
import { onMounted, ref } from 'vue';
import useActivites from '@/composables/Activites';

const {Activite,getActivite,updateActivite,errors} = useActivites();
const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(()=> {console.log(props.id); getActivite(props.id);});

</script>
<template>
  <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateActivite(props.id)">
            <div class="space-y-6">
                

                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                    <input type="text" 
                    id="name"
                    v-model="Activite.name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="mb-6">
                    <label for="prefixe" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">prefixe</label>
                    <input type="text" 
                    id="prefixe"
                    v-model="Activite.prefixe"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="mb-6">
                    <label for="client_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">client id</label>
                    <input type="text" 
                    id="client_id"
                    v-model="Activite.client_id"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                
                <div class="mt-4">
                   <button 
                   type="submit"
                   class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                    update
                    </button>
                </div>
            </div>
            
        </form>
        
    </div>
</template>
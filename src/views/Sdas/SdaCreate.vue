<script setup>

import { reactive } from 'vue';
import useSdas from '@/composables/Sda';



const {storeSda,errors}= useSdas();
const form =reactive({
    number: ""
})



</script>
<template>
    
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeSda(form)">
            <div class="space-y-6">
                

                <div class="mb-6">
                    <label for="number" class="
                    block mb-2 text-sm font-medium 
                    text-gray-900 
                    dark:text-white">number</label>
                    <input type="text" 
                    id="number"
                    v-model="form.number"
                     class="bg-gray-50 border 
                     border-gray-300 
                     text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 
                     focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 
                     dark:border-gray-600 
                     dark:placeholder-gray-400 
                     dark:text-white 
                     dark:focus:ring-blue-500 
                     dark:focus:border-blue-500">
                </div>
                
                <div class="mt-4">
                   <button 
                   type="submit"
                   class="px-4 py-2 
                   bg-green-500 
                   hover:bg-green-700 
                   text-white rounded">Create</button>
                </div>
            </div>
            
        </form>
        
    </div>
</template>
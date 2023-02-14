<script setup>

import { onMounted, ref } from 'vue';
import useActivites from '@/composables/Activites';



const { Activites,getActivites,destroyActivite } = useActivites();

onMounted( ()=>  getActivites().catch(err=>alert(err.message)));

</script>

<template>
<div class="mt-12">
    <div class="flex justify-end m2 p-2">
        <router-link :to="{name: 'ActivitesCreate'}" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">New Activite</router-link>
    </div>
<div class="relative overflow-x-auto">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Activite id
                </th>
                <th scope="col" class="px-6 py-3">
                    Activite name
                </th>
                <th scope="col" class="px-6 py-3">
                    Activite prefixe
                </th>
                <th scope="col" class="px-6 py-3">
                    Client name
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Activite in Activites" v-bind:key="Activite.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 " v-text="Activite.id"></td>
                <td scope="row" class="px-6 py-4 " v-text="Activite.name"></td>
                <td scope="row" class="px-6 py-4 " v-text="Activite.prefixe"></td>
                <td scope="row" class="px-6 py-4 " v-text="Activite.clientName"></td>
                <td scope="row" class="px-6 py-4 space-x-2">
                    <router-link :to="{ name: 'ActivitesEdit', params: { id: Activite.id } }" 
                    class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">
                    Edit</router-link>
                    <button @click="destroyActivite(Activites.id)"
                    class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Delet</button>
                </td>

            </tr>
        </tbody>
    </table>
</div>

</div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

import useSdas from '@/composables/Sda';



const { sdas,getSdas,destroySda } = useSdas();

onMounted( ()=>  getSdas().catch(err=>alert(err.message)));

</script>

<template>
<div class="mt-12">
    <div class="flex justify-end m2 p-2">
        <router-link :to="{name: 'SdaCreate'}" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">New Sda</router-link>
    </div>
<div class="relative overflow-x-auto">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Sda id
                </th>
                <th scope="col" class="px-6 py-3">
                    Sda number
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="sda in sdas" v-bind:key="sda.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 " v-text="sda.id"></td>

                <td scope="row" class="px-6 py-4 " v-text="sda.number"></td>

                <td scope="row" class="px-6 py-4 space-x-2">
                    <router-link :to="{ name: 'SdaEdit', params: { id: sda.id } }" 
                    class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">
                    Edit</router-link>
                    <button @click="destroySda(sda.id)"
                    class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Delet</button>
                </td>

            </tr>
        </tbody>
    </table>
</div>

</div>
</template>

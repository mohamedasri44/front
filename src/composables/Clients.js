import{ ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"


export default function useClients(){

    const clients = ref([]);
    const client = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getClients = async() =>{
        const response = await axios.get("clients");
        clients.value = response.data.data;
        
    };

    const getClient = async(id) =>{
       const response =  await axios.get("clients/" + id)
       client.value = response.data.data;
    }
    const storeClient = async(data) =>{
    
    try{

        await axios.post("clients",data);
       await router.push({name: "ClientIndex"});
    } catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    
    }
    const updateClient = async(id) =>{
        try{
            await axios.put("clients/"+id,client.value);
            await router.push({name: "ClientIndex"});
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }
    const destroyClient = async(id) =>{
        try{
            if(!window.confirm("Are you sure?")){
                return;
            }
            await axios.delete("clients/"+id);
            await getClients();
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }

    return {
        client,
        clients,
        getClient,
        getClients,
        storeClient,
        updateClient,
        destroyClient,
        errors,
    };
}
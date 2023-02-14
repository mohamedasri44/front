import{ ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"


export default function useClientSdas(){

    const clientSdas = ref([]);
    const clientSda = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getClientSdas = async() =>{
        await axios.get("ClientSda").then((response) => {
            clientSdas.value = response.data.data;
        });
        
       
//        clientSda.value = response.data.data;   
        //return clientSda;
    };

    const getClientSda = async(id) =>{
       const response =  await axios.get("ClientSda/" + id)
       clientSda.value = response.data.data;
    }
    const storeClientSda  = async(data) =>{
    
    try{

        await axios.post("ClientSda",data);
       await router.push({name: "ClientSdaIndex"});
    } catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    
    }
    const updateClientSda  = async(id) =>{
        try{
            await axios.put("ClientSda/"+id,client.value);
            await router.push({name: "ClientSdaIndex"});
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }
    const destroyClientSda  = async(id) =>{
        try{
            if(!window.confirm("Are you sure?")){
                return;
            }
            await axios.delete("ClientSda/"+id);
            await getClientSdas();
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }

    return {
        clientSda,
        clientSdas,
        getClientSda,
        getClientSdas,
        storeClientSda,
        updateClientSda,
        destroyClientSda,
        errors,
    };
}
import{ ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"


export default function useSdas(){

    const sdas = ref([]);
    const sda = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getSdas = async() =>{
        const response = await axios.get("sdas");
        sdas.value = response.data.data;
        
    };

    const getSda = async(id) =>{
       const response =  await axios.get("sdas/" + id)
       sda.value = response.data.data;
    }
    const storeSda = async(data) =>{
    
    try{

        await axios.post("sdas",data);
       await router.push({name: "SdaIndex"});
    } catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    
    }
    const updateSda = async(id) =>{
        try{
            await axios.put("sdas/"+id,sda.value);
            await router.push({name: "SdaIndex"});
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }
    const destroySda = async(id) =>{
        try{
            if(!window.confirm("Are you sure?")){
                return;
            }
            await axios.delete("sdas/"+id);
            await getSdas();
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }

    return {
        sda,
        sdas,
        getSda,
        getSdas,
        storeSda,
        updateSda,
        destroySda,
        errors,
    };
}
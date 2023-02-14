import{ ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"


export default function useActivites(){

    const Activites = ref([]);
    const Activite = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getActivites = async() =>{
        const response = await axios.get("Activites");
        Activites.value = response.data.data;
        
    };

    const getActivite = async(id) =>{
       const response =  await axios.get("Activites/" + id)
       Activite.value = response.data.data;
    }
    const storeActivite = async(data) =>{
    
    try{

        await axios.post("Activites",data);
       await router.push({name: "ActivitesIndex"});
    } catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    
    }
    const updateActivite = async(id) =>{
        try{
            await axios.put("Activites/"+id,Activite.value);
            await router.push({name: "ActivitesIndex"});
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }
    const destroyActivite = async(id) =>{
        try{
            if(!window.confirm("Are you sure?")){
                return;
            }
            await axios.delete("Activites/"+id);
            await getActivite();
        }
      catch(error){
        if(error.response.status === 422)
        {
            errors.value = error.response.data.errors;
        }
    }
    }

    return {
        Activite,
        Activites,
        getActivite,
        getActivites,
        storeActivite,
        updateActivite,
        destroyActivite,
        errors,
    };
}
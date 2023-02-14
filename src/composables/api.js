 /*  import axios from "axios";

const axiosInstance = axios.create({
     baseURL: `${window.location.protocol}//${window.location.host}/api/`,
        headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
}
});

export default function useApi() {

    const $get = (url, params = {}) => {
        return axiosInstance.get(url, params).then(response =>{
         return response.data;
});
}
const $post = (url, data = {}) => {
    return axiosInstance.post(url, data).then(response =>{
     return response.data;
});
}
const $put = (url, data = {}) => {
    return axiosInstance.put(url, data).then(response =>{
     return response.data;
});
}
const $delete = (url, data = {}) => {
    return axiosInstance.delete(url, data).then(response =>{
     return response.data;  
});
}

return {
$get,
$post,
$put,
$delete
}
}*/
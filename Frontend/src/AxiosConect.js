import axios from 'axios';

const BASE_URL = 'http://localhost:8080/mascotasDB';

const apiInstance = axios.create({baseURL:BASE_URL});

export default apiInstance;



export const AxiosTest = () =>{

    console.log(apiInstance);

}
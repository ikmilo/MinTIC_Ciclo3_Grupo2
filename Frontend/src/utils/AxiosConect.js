import React from 'react';
import axios from 'axios';


const serverEnv = {
    host: '',
    port: '',
    url: 'http://localhost:8080',
}


const loginAPI = () => {
    axios.get(serverEnv.url)
        .then(res => {
            console.log(res);
        })

}




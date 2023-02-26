import axios from 'axios'

export const axiosInstance = axios.create({
    headers:{
        'Content-Type':'application/json'
    }
})


// we create this file is toString, if you want to send any headers in the request 
// you should not do those things from every axios object instead we can have one global 
// axios instance
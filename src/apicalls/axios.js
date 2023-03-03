import axios from 'axios'

export const axiosInstance = axios.create({
    headers:{
        'Content-Type':'application/json',
        authorization:`Bearer ${localStorage.getItem('token')}`
    }
})


// we create this file is toString, if you want to send any headers in the request 
// you should not do those things from every axios object instead we can have one global 
// axios instance

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJ1c2VySWQiOiI2M2Y4NGE5YjY5MzU0MTc0MmE0MWY3M2YiLCJpYXQiOjE2Nzc4MTY2NzcsImV4cCI6MTY3NzkwMzA3N30.
// ACaqhvH4nC8RsxfvbQxbAWcJ8kvjUxtUCrwUdk8fWUA
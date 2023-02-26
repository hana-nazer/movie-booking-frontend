import { axiosInstance } from "./axios";

//register a new user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (error) {
    return error.response;
  }
};


//login 
export const LoginUser=async(payload)=>{
    try {
        const response = await axiosInstance.post('/api/users/login',payload)
        return response.data
    } catch (error) {
        
    }
}
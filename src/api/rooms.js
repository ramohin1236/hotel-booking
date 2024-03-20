import axios from "axios"
import axiosSecure from "."

// get all rooms
export const getAllRooms = async()=>{
    const {data}=await axios('http://localhost:8000/rooms')
    return data
}

// get Single rooms

export const getSingleRoom = async (id) => {
    try {
        const { data } = await axiosSecure.get(`rooms/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching single room:', error);
        throw error; 
    }
};

// get rooms by host
export const getHostRoom = async (email)=>{
    const {data} = await axiosSecure(`/room/${email}`)
    return data;
}




// add rooms by host
export const addRooms = async (roomData)=>{
    const {data}= await axiosSecure.post('/rooms',roomData)
    return data
}
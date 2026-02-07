import axios from "axios"
import { useEffect } from "react"
import { serverUrl } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { setMessages, setMessagesLoading } from "../redux/messageSlice"

const getMessage= () => {
    const dispatch = useDispatch();
    const {userData, selectedUser}= useSelector(state=> state.user);
    useEffect(()=>{
        const fetchMessages = async() =>{
            try {
                dispatch(setMessagesLoading(true));
                const result = await axios.get(`${serverUrl}/api/message/get/${selectedUser._id}`,{
                    withCredentials:true,
                })

                dispatch(setMessages(result.data));
            } catch (error) {
                console.log("nigesh");
                console.log(error);
            } finally{
                dispatch(setMessagesLoading(false)); 
            }
        }
        fetchMessages()
    },[selectedUser])
}

export default getMessage
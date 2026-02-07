import axios from "axios"
import { useEffect } from "react"
import { serverUrl } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { setAuthLoading, setUserData } from "../redux/userSlice"

const getCurrentUser= () => {
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.user);
    
    useEffect(()=>{
        if (userData) {
            dispatch(setAuthLoading(false));
            return;
        }
        const fetchUser = async() =>{
            try {
                dispatch(setAuthLoading(true))
                const result = await axios.get(`${serverUrl}/api/user/current`,{
                    withCredentials:true,
                })

                dispatch(setUserData(result.data));
            } catch (error) {
                console.log(error);
                dispatch(setUserData(null));
            } finally{
                dispatch(setAuthLoading(false))
            }
        }
        fetchUser()
    },[])
}

export default getCurrentUser
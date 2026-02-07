import React, { useEffect, useRef } from "react";
import dp from "../assets/dp.jpg"
import { useSelector } from "react-redux";

function SenderMessage({image,message}){
    const scroll = useRef(); 
    const {userData} = useSelector(state => state.user); 

    useEffect( () => {
        scroll?.current.scrollIntoView({behavior : "smooth"})
    },[message,image])

    const handleImageScroll = () => {
        scroll?.current.scrollIntoView({behavior : "smooth"})
    }

    return (
        <div className="flex items-start gap-[20px]">
           
            <div ref={scroll} className="w-fit max-w-[500px] px-[20px] py-[10px] bg-[rgb(32,199,255)] text-white text-[19px] rounded-tr-none rounded-2xl
        relative right-0 ml-auto shadow-gray-400 shadow-lg flex flex-col gap-[10px]">
                {image && <img onLoad={handleImageScroll} src={image} className="w-[150px] rounded-lg"/>}
                {message && <span>{message}</span>}
            </div>
             <div className="bg-white cursor-pointer w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg
            ">
                <img src={userData.image || dp} className="h-[100%]" />
            </div> 
        </div>
    )
}

export default SenderMessage
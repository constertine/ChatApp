import React, { useEffect, useRef } from "react";
import dp from "../assets/dp.jpg"
import { useSelector } from "react-redux";

function ReceiverMessage({image,message}){
    const scroll = useRef(); 
    const {selectedUser} = useSelector(state => state.user); 

    useEffect( () => {
        scroll?.current.scrollIntoView({behavior : "smooth"})
    },[message,image])

    const handleImageScroll = () => {
        scroll?.current.scrollIntoView({behavior : "smooth"})
    }

    return (
        <div className="flex items-start gap-[20px]">
           
            <div className="bg-white cursor-pointer w-[40px] h-[40px] rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg
            ">
                <img src={selectedUser.image || dp} className="h-[100%]" />
            </div> 

            <div ref={scroll} className="w-fit max-w-[500px] px-[20px] py-[10px] bg-[rgb(32,199,255)] text-white text-[19px] rounded-tl-none rounded-2xl
        relative left-0 mr-auto shadow-gray-400 shadow-lg flex flex-col gap-[10px]">
                {image && <img onLoad={handleImageScroll} src={image} className="w-[150px] rounded-lg"/>}
                {message && <span>{message}</span>}
            </div>

        </div>
    )
}

export default ReceiverMessage
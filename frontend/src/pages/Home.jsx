import React from "react";
import Sidebar from "../components/Sidebar";
import MessageArea from "../components/MessageArea";
import getMessage from "../customHooks/getMessages";

function Home(){
    getMessage();
    return(
        <div className="flex w-full h-[100vh] overflow-hidden">
            <Sidebar/>
            <MessageArea/>
        </div>
    )
}

export default Home
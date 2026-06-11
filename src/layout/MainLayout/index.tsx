import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {Outlet} from "@tanstack/react-router";

export default function MainLayout(){
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <Sidebar/>
            <div className="bg-background border-l border-t rounded-tl-[10px] border-outline-variant ml-64 flex-1 flex overflow-y-scroll">
                <Outlet/>
            </div>
        </div>
    );
}
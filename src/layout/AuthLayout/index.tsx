import Sidebar from "../Sidebar";
import {Outlet} from "@tanstack/react-router";

export default function AuthLayout(){
    return (
        <div className="flex flex-col h-screen">
            <Sidebar/>
            <div className="bg-background border-l border-t border-outline-variant ml-64 flex-1 flex overflow-y-scroll">
                <Outlet/>
            </div>
        </div>
    );
}
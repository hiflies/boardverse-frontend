import './App.css'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import Library from "./pages/Library";
import GameDetail from "./pages/GameDetail";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <Sidebar/>
            <div className="bg-background border-l border-t rounded-tl-[10px] border-outline-variant ml-64 flex-1 flex overflow-y-scroll">
                {/*<HomePage/>*/}
                {/*<Library/>*/}
                <GameDetail/>
                {/*<LoginPage/>*/}
                {/*<Profile/>*/}
            </div>
        </div>
    )
}

export default App

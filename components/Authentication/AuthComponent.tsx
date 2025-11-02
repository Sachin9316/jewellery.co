import React, {useState} from 'react';
import NavBar from "@/components/Common/NavBar";
import Login from "@/components/Authentication/Login";
import Register from "@/components/Authentication/Register";

function AuthComponent() {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="flex flex-col">

            <div className="w-full bg-chart-1 md:pt-36 pt-16 relative">
                <NavBar invert={true}/>
            </div>

            <div className="flex">
                {
                    showLogin ? <Login setShowLogin={setShowLogin}/> : <Register setShowLogin={setShowLogin}/>
                }
            </div>
        </div>
    );
}

export default AuthComponent;

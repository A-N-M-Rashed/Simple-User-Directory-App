import { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = ()=>{
    const [dark, setDark]= useState(false);
    useEffect(()=>{
        document.body.style.backgroundColor= dark? "#000000": "#ffffff";
        document.body.style.color= dark? "#ffffff": "#000000";
    }, [dark])
    return (
        <div className="border-b-2 flex justify-center items-center gap-2">
            <Link to = "/"> Home </Link>
            <Link to = "/users"> Users </Link>
            <Link to = "/about"> About </Link>
            <button 
            type= "button"
            onClick={()=>setDark(!dark)}>
                {dark ? "Light" : "Dark"}
            </button>
        </div>
    )
}

export default Navbar;
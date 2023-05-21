import {BsHousesFill} from "react-icons/bs";
import {BiMenu} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between p-6 m-6 bg-gradient-to-b shadow-xl from-slate-400 to-slate-500 rounded-lg">


        <Link to="/" className="flex flex-row items-center space-x-4 text-2xl font-bold text-white"> <BsHousesFill size={25} color="white"/> <span>Property Hunter</span> </Link>

        <ul className="flex flex-row justify-between space-x-20 font-bold text-lg">
          <li><Link to="/" className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear">Home</Link></li>
          <li><Link to="/about" className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear">About</Link></li>
          <li><Link to={"/properties"} className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear">Properties</Link></li>
        </ul>

        <div className="space-x-6">
          <Link to={"/signin"} className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear border-2 border-orange-400 text-white text-xl">Sign In</Link>
          <Link to={"/signup"} className="bg-orange-400 p-2 rounded-lg transition ease-linear text-white text-xl border-2 border-orange-400 hover:bg-slate-500">Sign Up</Link>
        </div>


      </div>

      <div className="md:hidden flex relative items-center justify-between p-6 m-6 bg-gradient-to-b shadow-xl from-slate-400 to-slate-500 rounded-lg">
        <button onClick={() => setClicked(!clicked)}><BiMenu size={25} color="white"/></button>

        <div className={`absolute w-max from-slate-400 to-slate-500 rounded-lg flex-col p-6 bg-gradient-to-t shadow-xl top-24 left-0 ${clicked ? "flex" : "hidden" }`}>
          <ul className="flex flex-col justify-between items-center space-y-8 font-bold text-lg">
            <li><Link to="/" className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear">Home</Link></li>
            <li><Link to="/about" className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear">About</Link></li>
            <li><Link to={"/properties"} className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear">Properties</Link></li>
            <li><Link to={"/signin"} className="hover:bg-orange-400 p-2 rounded-lg transition ease-linear border-2 border-orange-400 text-white text-xl">Sign In</Link></li>
            <li><Link to={"/signup"} className="bg-orange-400 p-2 rounded-lg transition ease-linear text-white text-xl border-2 border-orange-400 hover:bg-slate-500">Sign Up</Link></li>
          </ul>

          
            
          

        </div>

        <Link to="/" className="flex flex-row items-center space-x-4 text-2xl font-bold text-white"><BsHousesFill size={25} color="white"/> <span>Property Hunter</span>  </Link>

      </div>
    </div>
  )
}

export default Navbar

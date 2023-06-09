import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai";



function Hero() {
  const [type, setType] = useState("residential");
  const [price, setPrice] = useState("1,000,000 - 2,500,000");
  const [city, setCity] = useState("all");

  return (
    <div className={`bg-[url('src/assets/bg.webp')] h-screen mx-6 my-10 rounded-xl bg-blend-overlay bg-black/[0.5] bg-no-repeat bg-cover flex flex-col items-center justify-center space-y-12`}>
      <h1 className=" text-3xl md:text-6xl text-slate-800 bg-white p-8 shadow-2xl rounded-lg">Let&apos;s find the best for you </h1>
      <div className="space-x-6 flex flex-col space-y-9 md:flex-row md:space-y-0 items-center">

        <select name="type" onChange={(e) => setType(e.target.value)} className="outline-none border-none p-4 text-lg rounded-lg">
          <option disabled>Select Property Type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>

        <select name="price" onChange={(e) => setPrice(e.target.value)} className="outline-none border-none p-4 text-lg rounded-lg">
          <option disabled>Select Price Range</option>
          <option value="1,000,000 - 2,500,000">1,000,000 - 2,500,000 Rs</option>
          <option value="2,500,000 - 4,500,000">2,500,000 - 4,500,000 Rs</option>
          <option value="2,500,000 - 4,500,000">2,500,000 - 4,500,000 Rs</option>
          <option value="4,500,000 - 7,500,000">4,500,000 - 7,500,000 Rs</option>
          <option value="7,500,000 - 10,000,000">7,500,000 - 10,000,000 Rs</option>
          <option value="7,500,000 - 10,000,000">7,500,000 - 10,000,000 Rs</option>
          <option value="10,000,000">Above 10,000,000 Rs</option>
        </select>

        <select name="city" onChange={(e) => setCity(e.target.value)} className="outline-none border-none p-4 text-lg rounded-lg">
          <option disabled>Select City</option>
          <option value="all">Anywhere</option>
          <option value="lahore">Lahore</option>
          <option value="islamabad">islamabad</option>
          <option value="multan">Multan</option>
          <option value="peshawar">Peshawar</option>
          <option value="karachi">Karachi</option>
          <option value="faisalabad">Faisalabad</option>
          <option value="gujranwala">Gujranwala</option>
          <option value="gujrat">Gujrat</option>
          <option value="sialkot">Sialkot</option>
          <option value="sargodha">Sargodha</option>        
        </select>

        <button className="bg-white p-2 rounded-lg hover:bg-orange-400 transition ease-linear"><AiOutlineSearch size={25}/></button>
        

      </div>
      
    </div>
  )
}

export default Hero

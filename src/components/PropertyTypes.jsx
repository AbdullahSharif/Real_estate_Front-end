import { useEffect, useState } from "react";
import Commercial from "../assets/commercial.jpeg";
import Residential from "../assets/residential.webp";
import { request }  from "../utils/fetchApi";
import { Link } from "react-router-dom";

function PropertyTypes() {
    const [numProperties, setNumProperties] = useState({});

    useEffect(() => {
        const fetchNumProperties = async () => {
            try {
                const data =  await request("/properties/all/property/count", "GET");
                console.log(data)
                setNumProperties(data);

            } catch (error) {
                console.error(error.message);
            }

        }
        fetchNumProperties();
    }, [numProperties])

  return (
    <div className="flex flex-col space-y-16 text-3xl font-semibold">
      <h2 className="text-center bg-slate-800 text-white m-6 p-2 rounded-xl">Different Types of properties</h2>
      <div className="flex md:flex-row flex-col md:justify-around space-y-6 md:space-y-0">

      
      <Link to={"/properties/all/property?type=commercial"} className="bg-slate-800 p-6 rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col space-y-4 items-center hover:scale-105 transition ease-in-out shadow-2xl">
        <div className="relative">
            <img src={Commercial} alt="commercial properties" className="max-w-lg h-96 rounded-tr-[4rem] rounded-bl-[4rem]" />
            <p className="absolute bottom-4 bg-white p-4 rounded-xl right-2">{numProperties?.commercial} properties</p>
        </div>
        <h4 className="text-white text-xl">Commercial</h4>
      </Link>

      <Link to={"/properties/all/property?type=residential"} className="bg-slate-800 p-6 rounded-bl-[4rem] rounded-tr-[4rem] flex flex-col space-y-4 items-center hover:scale-105 transition ease-in-out shadow-2xl">
        <div className="relative">
            <img src={Residential} alt="commercial properties" className="max-w-lg h-96 rounded-tr-[4rem] rounded-bl-[4rem]" />
            <p className="absolute bottom-4 bg-white p-4 rounded-xl right-2">{numProperties?.residential} properties</p>
        </div>
        <h4 className="text-white text-xl">Residential</h4>
      </Link>

      </div>

    </div>
  )
}

export default PropertyTypes

import { useEffect, useState } from "react"
import {request} from "../utils/fetchApi.js";
import { Link } from "react-router-dom";


function FeaturedProperties() {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const getFeaturedProperties = async () => {
      try {
        const data =  await request("/properties/all/property/featured", "GET");
        // console.log(data)
        setProperties(data.properties);

    } catch (error) {
        console.error(error.message);
    }
    }

    getFeaturedProperties();

  }, [])

  return (
    <div className="p-8">
      <h2 className="bg-slate-800 text-white text-center text-4xl rounded-lg p-2 font-semibold mt-16">Featured Properties</h2>
      {
      properties &&
      // <div>
      //   We have the featured properties
      //   {console.log(properties)}
      // </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center space-y-16 mt-6 md:space-y-8 md:space-x-8">
          {
            properties.map(property => {
              return (
                <Link key={property._id} to={`/properties/all/property/${property._id}`} className="w-full md:max-w-lg border-2 p-4 border-slate-800 rounded-xl shadow-xl hover:scale-105 transition ease-in-out mt-7">
                  <img src={property.images} alt="property image" className=" w-full h-96 md:max-w-lg object-cover rounded-lg" />
                  <p>{property.title}</p>
                  <p>{property.description}</p>
                  <p>
                    <span>{property.area} {property.areaType}</span>
                    <span>{property.type}</span>
                  </p>
                  <p>{property.city}</p>
                </Link>
              );
            })
          }
        </div>
      }
        
    </div>
  )
}

export default FeaturedProperties

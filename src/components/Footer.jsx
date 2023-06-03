import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="p-8 ">
      <div className="bg-slate-800 rounded-xl text-white p-4 flex flex-col space-y-6 md:flex-row md:space-y-0 items-center justify-around">
        <Link className="text-3xl font-semibold" to={"/"}>Property Hunter</Link>
        <div className="flex flex-col items-center font-semibold">
          <Link to={"/"} className="hover:text-orange-400 ">Home</Link>
          <Link to={"/about"} className="hover:text-orange-400 "></Link>
          <Link to={"/properties"} className="hover:text-orange-400 mt-6">Properties</Link>
          <Link to={"/properties/all/property?type=commercial"} className="hover:text-orange-400 mt-6">Commercial Properties</Link>
          <Link to={"/properties/all/property?type=residential"} className="hover:text-orange-400 mt-6">Residential Properties</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Footer

import { Link } from "react-router-dom";

function Navbar(){
  return(
    <>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
    <a href="#" className="flex items-center">
      <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Rabin Adhikari</span>
    </a>
    <div className="flex items-center lg:order-2">
      <div className="hidden mt-2 mr-4 sm:inline-block">
        <span />
      </div>
      <Link to="/create-page" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">+ Create</Link>      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
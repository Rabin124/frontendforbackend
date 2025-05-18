import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";import axios from "axios"
function HomePage() {
  const fetchBooks = async ()=>{
   const response = await axios.get("http://localhost:3000/api/books")
  }
  useEffect(()=>{
    fetchBooks();
  },[])
  return (
<>
<Navbar/>
<div className="flex flex-wrap justify-center gap-4">

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>

</>
  );
}

export default HomePage;

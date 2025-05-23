import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";

function Form() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    bookName: "",
    bookAuthor: "",
    bookGenre: "",
    bookPrice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };
  
  console.log(bookData);

  const createBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/books", bookData);
      // console.log(response);
      if (response.status === 200) {
        navigate("/");
        alert("Book created successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating book:", error);
      alert("Failed to create book");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={createBook}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
                    Book Name
                  </label>
                  <input 
                    onChange={handleChange} 
                    type="text" 
                    name="bookName" 
                    id="title" 
                    placeholder="Book Name" 
                    value={bookData.bookName}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
                    Book Genre
                  </label>
                  <input 
                    onChange={handleChange} 
                    type="text" 
                    name="bookGenre" 
                    id="category" 
                    placeholder="Book Genre" 
                    value={bookData.bookGenre}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="author" className="mb-3 block text-base font-medium text-[#07074D]">
                    Book Author
                  </label>
                  <input 
                    onChange={handleChange} 
                    type="text" 
                    name="bookAuthor" 
                    id="author" 
                    placeholder="Author Name" 
                    value={bookData.bookAuthor}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                  />
                </div>
              </div>
              <div className="w-full px-3">
                <div className="mb-5">
                  <label htmlFor="content" className="mb-3 block text-base font-medium text-[#07074D]">
                    Book Price
                  </label>
                  <input
                  type="number" 
                    onChange={handleChange} 
                    name="bookPrice" 
                    id="content" 
                    rows="4" 
                    placeholder="Write your book price here..." 
                    value={bookData.bookPrice}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button title="Submit" type="submit" />
              <Link to="/">
                <Button title="Cancel" type="button" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
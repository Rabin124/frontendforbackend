import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

function EditPage() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get(`https://pern-book-management-system.onrender.com/api/books/${id}`);
    setBook(response.data.datas);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  const editBook = async (event) => {
    event.preventDefault();
    const response = await axios.patch(
      "https://pern-book-management-system.onrender.com/api/books/" + id,
      book
    );
    if (response.status == 200) {
      alert("Edited successfully");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={editBook}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Book Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={book.bookName}
                    type="text"
                    name="bookName"
                    id="title"
                    placeholder="Book Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="category"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Book Genre
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="bookGenre"
                    id="category"
                    placeholder="Book Genre"
                    value={book.bookGenre}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="author"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Book Author
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="bookAuthor"
                    id="author"
                    placeholder="Author Name"
                    value={book.bookAuthor}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3">
                <div className="mb-5">
                  <label
                    htmlFor="content"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Book Price
                  </label>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="bookPrice"
                    id="content"
                    rows="4"
                    placeholder="Write your book price here..."
                    value={book.bookPrice}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button title="Edit" type="submit" />
              {/* <button>Edit Book</button> */}
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
export default EditPage;

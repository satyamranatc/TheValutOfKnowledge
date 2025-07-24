import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function BookDetails() {
    let {id} = useParams();
    let [bookData,setBookData] = useState({});
    useEffect(() => {
        async function getBook() {
            try {
                let response = await axios.get(`http://localhost:5500/api/books/byId/${id}`);
                setBookData(response.data);
                console.log(response.data);
            } catch (err) {
                console.error("Failed to fetch books:", err);
            }
        }
        getBook();
        
    },[])
  return (
    <div>
        <div className="book-card">
              <h2>{bookData.BookName}</h2>
              <h4>{bookData.BookAuthor}</h4>
              <p>{bookData.BookDescription}</p>
              <iframe src={bookData.BookPdfLink} height={700} width={700} frameborder="0"></iframe>
        </div>
    </div>
  )
}

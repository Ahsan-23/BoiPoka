import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDb';

const BookDetails = () => {
    const {bookId} =useParams();
    const id=parseInt(bookId);
    const data=useLoaderData();
    console.log(bookId);
    const book=data.find(book=>book.bookId===id)
    const {bookName,author,category,rating,review,totalPages,bookId:currentBookId,image}=book;

    const handleMarkAsRead=(id)=>{
        addToStoredReadList(id);
    }
    return (
        <div className='w-11/12 mx-auto flex gap-4'>
            
            <img className='w-64 mb-2' src={image} alt="" />
            <br />
            <div className=' '>
            <h2 className='text-3xl font-bold'>{bookName}</h2>
            <p><span className='font-bold'>By: </span>{author}</p>
            <div className="divider "></div>
            <p className='font-bold'>{category}</p>
            <div className="divider "></div>
            <p><span className='font-bold '> Review</span>:{review}</p>
            <div className="divider "></div>
            <p className='font-bold'>Rating : {rating}</p>

            
            
            <div className='flex gap-5 mt-2'>
            <button className="btn btn-outline w-[100px]">Read</button>
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-accent bg-blue-500 w-[100px]">Wishlist</button>
            </div>
            </div>
            
        </div>
    );
};

export default BookDetails;
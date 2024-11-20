import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Books to Freshen Up Your BookShelf</h1>
            
            <button className="btn bg-green-600 mt-8">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
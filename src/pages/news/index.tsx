import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewsCard from "../../components/NewsCard";
import Pagination from "../../shared/Pagination";
import RelatedBox from "../../shared/RelatedBox";
import ErrorPage from "../error";

const NewsPage = ({validCategories}) => {
  const { category } = useParams(); 
  if (!validCategories.includes(category)) {
    return <ErrorPage />;
}
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="p-4 grid grid-cols-12 gap-5">
      <div className="w-full flex flex-col col-span-12 lg:col-span-9 gap-5 ">
        <div className='flex w-full justify-between items-center  border-b-2 border-b-foreground py-2 mb-2 '>
  <h1 className="text-2xl md:text-3xl font-semibold ">{category?.toUpperCase()}</h1>
  
        </div>
  <div className="grid  gap-10 sm:grid-cols-2 md:grid-cols-3 ">
    {placeholders.map((item, index) => (
      <NewsCard
      category={"sonxəbərlər"}
      image="https://plus.unsplash.com/premium_photo-1673014201324-2eccc35d8387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
      title="Teknoloji Dünyasında Çarpıcı Gelişmeler"
      description="Yeni teknolojiler dünya çapında büyük bir değişim yaratıyor. Bu yenilikler, hem bireylerin hem de şirketlerin günlük yaşamını etkiliyor."
      likes={120}
      dislikes={10}
      views={340}
      time="12.01.2024/8:56"
      />
    ))}
  </div>
  <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      </div>
      <div className="lg:col-span-3 col-span-12 ">
     <RelatedBox placeholders={placeholders}/>
      </div>
     
    </div>
  );
};

export default NewsPage;

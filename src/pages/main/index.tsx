import React from "react";
import HeroSection from "../../components/HeroSection";
import NewsCard from "../../components/NewsCard";
import RelatedCard from "../../components/RelatedCard";
import RelatedBox from "../../shared/RelatedBox";
import MainPageCategoryList from "../../components/MainPageCategoryList";

const MainPage = () => {
  const dummyData = {
    title: "Son Dakika: Teknoloji Dünyasındaki Yenilikler",
    category: "Teknoloji",
    date: "28 Kasım 2024",
    views: 1250,
    likes: 340,
    dislikes: 20,
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5ld3xlbnwwfHx8fDE2ODAwNTA1NjE&ixlib=rb-1.2.1&q=80&w=1080",
    excerpt:
      "Teknoloji dünyasında her gün yeni gelişmeler yaşanıyor. İşte son çıkan ürünler ve trendler hakkında bilmeniz gerekenler...",
  };
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="w-full  grid ">
      <HeroSection />
      <div className="grid grid-cols-12 gap-8  py-10 ">
      <div className="flex flex-col gap-10  bg- p-2 rounded-lg col-span-12  lg:col-span-9">

      <MainPageCategoryList placeholders={placeholders} category="Gündəm"/>
      <MainPageCategoryList placeholders={placeholders} category="İdman"/>
      <MainPageCategoryList placeholders={placeholders} category="Siyasət"/>
      <MainPageCategoryList placeholders={placeholders} category="Biznes"/>
     





    </div>


       <RelatedBox placeholders={placeholders}/>
      </div>
    </div>
  );
};

export default MainPage;

import HeroSection from "../../components/HeroSection";
import RelatedBox from "../../shared/RelatedBox";
import MainPageCategoryList from "../../components/MainPageCategoryList";

const MainPage = () => {
  
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

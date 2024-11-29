import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'

type MainPageCategoryListProps = {
  placeholders: unknown[]; 
  category: string;      
};
const MainPageCategoryList:React.FC<MainPageCategoryListProps> = ({ placeholders, category }) => {
  return (

    <div className="w-full flex flex-col gap-5 ">
        <div className='flex w-full justify-between items-center  border-b-2 border-b-foreground py-2 mb-2 '>
  <h1 className="text-2xl md:text-3xl font-semibold ">{category}</h1>
   <Link to="#" className='font-light flex items-center gap-2 cursor-pointer  text-sm'>Hamsına bax <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
 </Link>
        </div>
  <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-3 ">
    {placeholders.map((_, index) => (
      <NewsCard
      key={index}
      category={"siyaset"}
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
      </div>
  )
}

export default MainPageCategoryList
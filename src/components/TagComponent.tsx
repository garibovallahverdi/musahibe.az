import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const TagComponent = () => {

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const newsHeadlines = [
        "Qarabağ Sülhü",
        "Neft Qiymətləri",
        "İqlim Dəyişikliyi",
        "Təhsil Yenilikləri",
        "Enerji Böhranı",
        "Texnologiya İnkişafı",
        "İdman Turniri",
        "Yeni İxtira",
        "Seçki Nəticələri",
        "Koronavirus Tədqiqatı",
        "İqtisadi Yüksəliş",
        "Sənaye Layihələri",
        "Turizm Mövsümü",
        "Kənd Təsərrüfatı",
        "Mədəniyyət Tədbirləri",
        "Beynəlxalq Zirvə",
        "Kosmik Missiya",
        "Şəhər İnkişafı",
        "Bank Faizləri",
        "Sərgi Açılışı",
      ];


     

  // Haber Başlıklarını sürüklemek için işlevler
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.dataset.isDragging = "true";
      container.dataset.startX = `${e.pageX - container.offsetLeft}`;
      container.dataset.scrollLeft = `${container.scrollLeft || 0}`;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (container && container.dataset.isDragging === "true") {
      const startX = parseFloat(container.dataset.startX || "0");
      const scrollLeft = parseFloat(container.dataset.scrollLeft || "0");
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX; // Mouse hareket mesafesi
      container.scrollLeft = scrollLeft - walk; // Kaydırma işlemi
    }
  };

  const handleMouseUpOrLeave = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.dataset.isDragging = "false";
    }
  };
  return (
    <div
    className="w-full px-3 py-1 mx-auto flex overflow-x-scroll gap-2"
    ref={scrollContainerRef}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUpOrLeave}
    onMouseLeave={handleMouseUpOrLeave}
    style={{ cursor: "grab" }}
  >
    {newsHeadlines.map((item, index) => (
      <Link
        key={index}
        to={`/search/${item}`}
        className="block w-max whitespace-nowrap  text-xs py-1  border border-foreground cursor-pointer rounded-full px-2"
      >
        {item}
      </Link>
    ))}
  


       
  </div>
  )
}

export default TagComponent
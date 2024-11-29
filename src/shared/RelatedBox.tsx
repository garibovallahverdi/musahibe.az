import React from 'react'
import RelatedCard from '../components/RelatedCard'

const RelatedBox = ({placeholders}) => {
  return (
    <div className="lg:col-span-3 h-max col-span-12  shadow-lg rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
    <div className="grid lg:grid-cols-1 grid-cols-3 gap-3">
      {placeholders.map((item,index) => (
        <RelatedCard
        title="Teknoloji Dünyasında Çarpıcı Gelişmeler"
        description="Yeni teknolojiler dünya çapında büyük bir değişim yaratıyor. Bu yenilikler, hem bireylerin hem de şirketlerin günlük yaşamını etkiliyor."
        />
      ))}
    </div>
  </div>
  )
}

export default RelatedBox
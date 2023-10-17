import React from 'react'

const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImage }) => {

  const handleClick = () => {
    changeBigShoeImage(imgUrl.bigShoe)
  }
  return (
    <div
      className={`border-2 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
          ${
            bigShoeImg === imgUrl.bigShoe
              ? 'border-coral-red'
              : 'border-transparent'
          }
          cursor-pointer max-sm:flex-1

  `}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-fit"
        />
      </div>
    </div>
  )
}

export default ShoeCard

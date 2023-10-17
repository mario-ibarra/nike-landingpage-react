
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { bigShoe1 } from '../assets/images'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { useState } from 'react'


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container sm:text-lg">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl mb-4 pb-6 xl:bg-white xl:z-10">
          Our Summer Collections
        </p>
        <h1 className="text-8xl mb-10 font-palanquin font-bold max-sm:text-[77px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-500 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-lg text-gray-500 font-palanquin mb-4">
          Discover stylish Nike arribals, quality comfort and innovation for
          your active life.
        </p>

        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-bold text-4xl font-palanquin">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        
          <img src={bigShoeImg} alt="shoe collection" width={610} height={500}
          className='relative z-10 object-contain'
          
          />
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((shoe) => (
          <div key={shoe.thumbnail}>
            <ShoeCard
             imgUrl={shoe}
             changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}}
             bigShoeImg={bigShoeImg}
             />
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Hero

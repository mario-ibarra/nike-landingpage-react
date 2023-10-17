import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer-picture"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h2 className="text-8xl mb-10 font-palanquin font-bold max-sm:text-[77px] max-sm:leading-[82px]">
          <span className="text-red-500 inline-block mt-3">Special</span> Offers
        </h2>
        <p className="info-text mb-4">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <p className="info-text mb-10">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <div className='flex flex-wrap gap-4'>
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn more" 
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor= 'text-slate-300'
          />
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer

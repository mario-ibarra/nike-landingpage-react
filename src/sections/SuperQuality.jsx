import Button from '../components/Button'
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="gap-4 [&>*]:mb-6">
        <h2 className="text-4xl font-bold capitalize font-palanquin sm:text-8xl">
          We Provide You <span className="text-coral-red">Super Quality</span>{' '}
          Shoes
        </h2>
        <p className="text-lg font-montserrat info-text sm:text-xl">
          Ensuring premium confort and style, our meticulosly crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, inovation and touch of elegance.
        </p>
        <p className="text-lg info-text sm:text-xl">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label='View Datils'/>
      </div>
      <div className="flex items-center justify-center flex-1 mt-10 sm:mt-0">
        <img src={shoe8} alt="shoe 8"
        width={570}
        height={522}
          className='object-contain'
        />
      </div>
      
    </div>
  )
}

export default SuperQuality

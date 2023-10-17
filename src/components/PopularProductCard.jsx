
import { star } from '../assets/icons'

const PopularProductCard = ({ ...product }) => {
  return (
    <div className="flex flex-col flex-1 w-full gap-3 pb-2 max-sm:w-full">
      <img
        src={product.imgURL}
        alt="shoe colection"
        width={350}
        height={350}
        className="object-fit"
      />
      <div className="flex justify-start gap-2 my-4">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          4.5
        </p>
      </div>

      <h3 className="mb-2 text-2xl font-semibold tracking-wider font-palanquin sm:text-lg">
        {product.name}
      </h3>
      <p className="text-2xl font-semibold leading-normal tracking-wider font-montserrat text-coral-red">
        {product.price}
      </p>
    </div>
  )
}

export default PopularProductCard

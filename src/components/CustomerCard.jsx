import { star } from "../assets/icons"

const CustomerCard = ({ customerName, imgURL, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer avatar"
        className="rounded-full object-cover w-[120] h-[120px] mb-10"
      />
      <p className="my-4 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2">
        <img src={star} alt="rating star" width={24} height={24} className="object-contain mb-4"/>
      <p className="mb-4">Rating: {rating}</p>
      </div>
      <h3 className="font-semibold font-palanquin text-center text-2xl">{customerName}</h3>
    </div>
  )
}

export default CustomerCard

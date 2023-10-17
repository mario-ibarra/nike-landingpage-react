
const ServiceCard = ({label, imgURL, subtext}) => {
  return (
    <div className="grid p-4 m-4 rounded-lg shadow-lg sm:w-[350px] sm:min-h-full sm:p-8">
      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-coral-red mb-6">
        <img src={imgURL} alt="icon"
        width={24}
        height={24}
        
        />
      </div>
      <h3 className="mb-4 text-3xl font-palanquin font-semibold sm:text-4xl">{label}</h3>
      <p className="info-text break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard
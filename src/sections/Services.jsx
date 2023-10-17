import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center max-container">
    
    
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  )
}

export default Services

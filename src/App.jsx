import './index.css'

import {
  Hero,
  CustomersReviews,
  Footer,  
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProduct,
  Services,
} from './sections'
import Navbar from './components/Navbar'

const  App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b"><Hero /></section>
      <section className="padding"><PopularProduct /></section>
      <section className="padding"><SuperQuality /></section>
      <section className="py-10 padding-x"><Services /></section>
      <section className="padding"><SpecialOffer /></section>
      <section className="bg-plae-blue padding"><CustomersReviews /></section>
      <section className="w-full py-16 padding-x sm:py-32"><Subscribe /></section>
      <section className="bg-[#000000] padding-x py-8">
        <Footer />
      </section>
    </main>
  )
}

export default App
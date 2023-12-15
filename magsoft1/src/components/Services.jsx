import React from 'react';
import { vrfeature } from "../assets";
import { Technologies } from '.';

const Services = () => {
  return (
    <section id="services" className={`cs_services flex xl:mt-40 flex-col`}>
      <div className='worksheading pb-10 mb-10'>
        <h1 className="font-poppins font-semibold md:text-[45px] xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          OUR SERVICES
        </h1>
        {/* <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] xl:mt-10">
          At the core of our approach is a specialized team, seamlessly merging technical expertise with business insight. Our unwavering commitment to excellence is reflected in our exclusive focus on one solution at a time, ensuring agile responsiveness and undivided attention. This deliberate strategy allows us to deliver high-quality, tailored solutions that address the unique needs of our clients. By prioritizing singular focus over multitasking, we swiftly adapt to evolving requirements. Our partnership goes beyond the conventional, with a team deeply invested in understanding and overcoming your challenges. Choose us for a dedicated ally committed to your success and delivering unparalleled solutions.
        </p> */}
      </div>
      <div className='cs_services_anims'>
        <img src={vrfeature} alt="services" className="w-[50%] h-[60%] relative" />
        <Technologies />
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import styles from "../style";
import { goatz, popeye, dronesecurity } from "../assets";

const works = () => {
    return (
        <section id="products" className={`md:flex-row flex-col xl:mt-40 md:mt-20 md:mb-10 pb-10 ${styles.paddingY}`}>
            <div className='worksheading pb-10 mb-10'>
                <h1 className="font-poppins font-semibold md:text-[45px] xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                    OUR WORKS
                </h1>
                <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] xl:mt-10">
                    At the core of our approach is a specialized team, seamlessly merging technical expertise with business insight. Our unwavering commitment to excellence is reflected in our exclusive focus on one solution at a time, ensuring agile responsiveness and undivided attention. This deliberate strategy allows us to deliver high-quality, tailored solutions that address the unique needs of our clients. By prioritizing singular focus over multitasking, we swiftly adapt to evolving requirements. Our partnership goes beyond the conventional, with a team deeply invested in understanding and overcoming your challenges. Choose us for a dedicated ally committed to your success and delivering unparalleled solutions.
                </p>
            </div>
            <div className='xl:mt-24 container workslist'>
                <a href="#link">
                    <div className="glass">
                        <h2 className="font-poppins font-semibold text-white text-[18px] leading-[30.8px] mt-4">POPEYE</h2>
                        <img src={popeye} alt="discount" className='mt-4' />
                        <h5 className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5">Advanced Robotic Manipulation System for Medical Precision</h5>
                        <span className="card-button font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5" href="#link">Explore</span>
                    </div>
                </a>
                <a>
                    <div className="glass">
                        <h2 className="font-poppins font-semibold text-white text-[18px] leading-[30.8px] mt-4">GOATZ</h2>
                        <img src={goatz} alt="discount" className='mt-4' />
                        <h5 className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5">Dynamic Livestock Investment Strategy</h5>
                        <span className="card-button font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5" href="#link">Explore</span>
                    </div>
                </a>
                <a>
                    <div className="glass">
                    <h2 className="font-poppins font-semibold text-white text-[18px] leading-[30.8px] mt-4">EAGLE EYZ</h2>
                        <img src={dronesecurity} alt="discount" className='mt-4' />
                        <h5 className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5">Enhance community safety with Autonomous Drone Surveillance</h5>
                        <span className="card-button font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5" href="#link">Explore</span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default works
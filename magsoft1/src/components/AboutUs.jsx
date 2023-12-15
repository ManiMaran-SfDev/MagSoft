import React from 'react';
import styles from '../style';
import { accumulate, act, analyze } from '../assets';

const AboutUs = () => {
    return (
        <section id="aboutus" className={`md:flex-row flex-col ${styles.paddingY}`}>
            <div className='aboutus'>
                <h1 className="font-poppins font-semibold md:text-[45px] xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                    ABOUT US
                </h1>
                <div className='vismis xl:mt-20'>
                    <div className='vision'>
                        <h3 className="font-poppins font-semibold text-gradient text-[25px] leading-[30.8px]">OUR VISION</h3>
                        <p className={`${styles.paragraph} max-w-[750px] xl:mt-14`}> At Magsoft, we are driven by a profound vision - to be the catalyst for innovation in a rapidly changing world. We believe in the transformative power of ideas and their ability to reshape industries, redefine norms, and solve intricate challenges. Our commitment lies in translating these ideas into tangible solutions that not only address complex business scenarios but also pioneer advancements in the realms of technology, society, environment, politics, and beyond.</p>
                    </div>
                    <div className='mission'>
                        <h3 className="font-poppins font-semibold text-gradient text-[25px] leading-[30.8px]">OUR MISSION</h3>
                        <p className={`${styles.paragraph} max-w-[750px] xl:mt-14`}>Driven by a shared commitment to achieving excellence, our overarching goal is to bring meaningful ideas into action. Anchored in the fusion of critical thinking and profound expertise, our cohesive team adeptly maneuvers through the nuanced terrain of modern business intricacies. We find fulfillment in our capacity to unravel intricate challenges and transform them into efficient, streamlined solutions, showcasing our prowess in problem-solving and innovation.</p>
                    </div>
                </div>
            </div>
            <div className='container aboutlist xl:mt-32'>
                <div className='par_aboutglass'>
                    <div className="aboutglass">
                        <img src={accumulate} alt='accumulate' className='mt-3' />
                        <h2 className="font-poppins font-semibold text-gradient text-[20px] leading-[30.8px] xl:mt-5">ACCUMULATE</h2>
                        <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] xl:mt-6">Demonstrating a proficiency in identifying optimal data collection nodes, the initiation of subsequent organic ingestion and data analysis processes is facilitated. Extensive experience in systematically accumulating data from strategic points enables effective mitigation of challenges</p>
                    </div>
                </div>
                <div className='par_aboutglass'>
                    <div className="aboutglass">
                        <img src={analyze} alt='accumulate' className='mt-3' />
                        <h2 className="font-poppins font-semibold text-gradient text-[20px] leading-[30.8px] xl:mt-5">ANALYZE</h2>
                        <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] xl:mt-6">Utilizing a rigorous analytical approach, we assess challenges to provide a rationalized perspective on pain points. Our proposed business solutions leverage core strengths for enhanced performance and improvement</p>
                    </div>
                </div>
                <div className='par_aboutglass'>
                    <div className="aboutglass">
                        <img src={act} alt='accumulate' className='mt-3' />
                        <h2 className="font-poppins font-semibold text-gradient text-[20px] leading-[30.8px] xl:mt-5">ACT</h2>
                        <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] xl:mt-6">The initiation of our cutting-edge technology process commences with meticulous planning, progresses through the implementation of robust architectural patterns, advances via intelligent incremental execution, rigorous testing, seamless deployment, and culminates in responsible maintenance for maturation</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
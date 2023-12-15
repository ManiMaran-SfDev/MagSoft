import React from 'react'
import styles from '../style'
import { analyzecard, cloudcard, cybercard, enterprisecard, mobappcard, networkcard, robotarmcard, webappcard, devopscard, platformcard, srecard } from '../assets'

const technologies = () => {
    return (
        // <section className={`md:flex-row flex-col md:mb-10 pb-10 ${styles.paddingY}`}>
            <div className="void" id="void">
                <div className="crop">
                    <ul className='techlist' id="card-list">
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name w-5">
                                    <img src={webappcard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>WEB DEVELOPMENT</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={mobappcard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>MOBILE APP DEVELOPMENT</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={analyzecard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>DATA ANALYZATION</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name w-5">
                                    <img src={robotarmcard} />
                                </span>
                                <span className=' techtext text-white text-center font-semibold'>ROBOTIC ARM AUTOMATION</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={enterprisecard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>ENTERPRISE SOFTWARES</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={cybercard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>CYBERSECURITY SERVICES</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={networkcard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>NETWORKING SERVICES</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={cloudcard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>CLOUD COMPUTING SERVICES</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={devopscard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>DEVOPS INTEGRATION SERVICES</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={platformcard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>PLATFORM SETUP SERVICES</span>
                            </div>
                        </li>
                        <li className='techlist'>
                            <div className="card">
                                <span className="model-name">
                                    <img src={srecard} />
                                </span>
                                <span className='techtext text-white text-center font-semibold'>SITE RELIABILITY ENGINEERING</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        // </section>
    )
}

export default technologies
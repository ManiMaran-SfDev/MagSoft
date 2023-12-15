import React from 'react'
import styles from '../style'
import { footermagsoftlogo, instagram, facebook, twitter, linkedin } from '../assets'

const CompanyCard = () => {
    return (
        <div className='companycard'>
            <div className="compcardparent">
                <div className="compcard">
                    <div className="complogo">
                        <span className="circle circle2"></span>
                        <span className="circle circle3"></span>
                        <span className="circle circle4"></span>
                        <span className="circle circle5">
                            <img src={footermagsoftlogo} alt="MagSoft" />
                        </span>
                    </div>
                    <div className="footerglass"></div>
                    <div className="content">
                        <span className="title">MAGSOFT</span>
                    </div>
                    <div className="bottom">
                        <div className="social-buttons-container">
                            <button className="social-button .social-button1">
                                <img src={facebook} alt="Facebook" />
                            </button>
                            <button className="social-button .social-button2">
                                <img src={instagram} alt="Instagram" />
                            </button>
                            <button className="social-button .social-button3">
                                <img src={twitter} alt="Twitter" />
                            </button>
                            <button className="social-button .social-button4">
                                <img src={linkedin} alt="LinkedIn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard
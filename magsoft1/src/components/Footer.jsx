import styles from "../style";
import { magsoft_logo } from "../assets";
import { footerLinks, socialMedia } from "..";
import CompanyCard from "./CompanyCard";

const Footer = () => (
  <section id="contactus" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} footercard md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col justify-start">
        <CompanyCard />
      </div>
      <div className="ofcdetails flex-[1] flex flex-col justify-start mr-10">
        <div className="ofcaddress_email">
          <h3 className="font-poppins font-semibold text-gradient text-[25px] leading-[30.8px]">CONTACT US</h3>
          <div className="address font-poppins font-normal mt-5 text-white">
            <a href="mailto:admin@magsoft.co.uk"><p>admin@magsoft.co.uk</p></a>
            <a href="mailto:info@magsoft.co.uk"><p className="mt-4">info@magsoft.co.uk</p></a>
            <a href="mailto:hr@magsoft.co.uk"><p className="mt-4">hr@magsoft.co.uk</p></a>
          </div>
        </div>
        <div className="ofcaddress">
          <h3 className="font-poppins font-semibold text-gradient text-[25px] leading-[30.8px]"> USA OFFICE</h3>
          <div className="address font-poppins font-normal mt-5 text-white">
            <p>2001 Scenic Dr</p>
            <p>Ewing</p>
            <p>New Jersey 08628</p>
            <p>USA</p>
            <p>Ph: +44-609 937 0720</p>
          </div>
        </div>
        <div className="ofcaddress">
          <h3 className="font-poppins font-semibold text-gradient text-[25px] leading-[30.8px]">UK OFFICE</h3>
          <div className="address font-poppins font-normal mt-5 text-white">
            <p>39 Grantham Drive</p>
            <p>Springfield</p>
            <p>Essex</p>
            <p>CM1 6DY</p>
            <p>United Kingdom</p>
            <p>Ph: +44-7935 744321</p>
          </div>
        </div>
        <div className="ofcaddress">
          <h3 className="font-poppins font-semibold text-gradient text-[25px] leading-[30.8px]">INDIA OFFICE</h3>
          <div className="address font-poppins font-normal mt-5 text-white">
            <p>21/11 10th Avenue</p>
            <p>Ashok Nagar</p>
            <p>Chennai</p>
            <p>India 600083</p>
            <p>Ph: +91-89397 39129</p>
          </div>
        </div>
      </div>
      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 MagSoft. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;

import styles from "../style";
import { magsoft_icon, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[10px] px-5 bg-discount-gradient rounded-[10px] mb-2 md:mb-6">
          <img src={magsoft_icon} alt="discount" className="w-[30px] h-[27px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Innovate
            </span> , Integrate
            <span className="text-white">, Inspire.</span>
          </p>
        </div>
      <div>
      <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[66px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-8 md:mb-5 ">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Software Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[750px] mt-5`}>
        Step into a Digital Symphony: where our avant-garde solutions bring 
        innovation to life! Picture us as digital artisans, gracefully crafting web 
        wonders and mobile marvels. We're not just coding; we're sculpting dreams 
        into reality, weaving stories with data, and surfing clouds like poetry in 
        motion. Join us in the realm where tech dreams become personal, each keystroke a 
        brushstroke of creativity, and every innovation infused with the laughter that echoes 
        through our corridors of imagination.
        </p>
      </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

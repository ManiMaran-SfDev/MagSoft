import styles from "./style";
import { motion, useScroll, useSpring } from "framer-motion";
import { Footer, Navbar, Stats, Hero, Services, Works, AboutUs } from "./components";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-primary w-full overflow-hidden">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <AboutUs />
          <Services />
          <Works />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

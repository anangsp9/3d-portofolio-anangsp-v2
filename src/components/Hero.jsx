import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import tapIcon from "../assets/tap.png";

const FingerSwipeUp = () => (
  <motion.img
    src={tapIcon}
    alt="Swipe Up Gesture"
    className="w-14 h-14 object-contain"
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='fixed bottom-10 w-full flex justify-center items-center z-50'>
        <a href='#about'>
          {isMobile ? (
            <FingerSwipeUp />
          ) : (
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          )}
        </a>
      </div>
    </section>
  );
};

export default Hero;

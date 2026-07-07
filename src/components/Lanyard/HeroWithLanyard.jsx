import { useEffect, useState } from "react";
import Lanyard from "./Lanyard";
import { styles } from "../../styles";

const HeroWithLanyard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row">
      {/* Lanyard - full screen overlay (mobile & desktop) */}
      <section className="absolute inset-0 z-20 flex justify-center items-start">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={isMobile ? 32 : 20}
        />
      </section>

      {/* Text - mobile: di bawah, desktop: di kiri */}
      <section
        className={`flex-1 flex flex-col justify-end lg:justify-center items-start ${styles.paddingX} pb-32 lg:pb-0 relative z-10`}
      >
        {/* Garis Dekoratif dan Tulisan */}
        <div className="flex flex-row items-start gap-3">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Welcome to<br /><span className="text-[#915EFF]">My Portofolio</span>
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroWithLanyard;

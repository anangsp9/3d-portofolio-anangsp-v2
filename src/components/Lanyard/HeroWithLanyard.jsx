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
    <section className="w-full h-screen flex flex-col-reverse lg:flex-row">
      {/* SECTION KIRI (Mobile: bawah, Desktop: kiri) */}
      <section
        className={`flex-1 flex flex-col justify-center items-start ${styles.paddingX} relative z-10`}
      >
        {/* Garis Dekoratif dan Tulisan */}
        <div className="flex flex-row items-start gap-3">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Welcome to <span className="text-[#915EFF]">My Portofolio</span>
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION KANAN (Mobile: atas, Desktop: kanan) */}
      <section className="flex-1 h-full relative z-0 flex justify-center items-start pt-16 lg:pt-0">
        <Lanyard
          position={isMobile ? [0, -2, 20] : [0, 0, 20]} // ✅ geser ke bawah kalau mobile
          gravity={[0, -40, 0]}
        />
      </section>
    </section>
  );
};

export default HeroWithLanyard;

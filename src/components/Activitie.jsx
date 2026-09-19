import { Data } from "../db/db";
import ImageCarousel from "./ImageCarousel";
import Typewriter from "./typewriter";
import { motion } from "motion/react";

export default function ActivitiePage() {
  return (
    <>
      <section
        id="activitie"
        className="min-h-screen w-full flex flex-col justify-center items-center gap-8 px-20"
      >
        <Typewriter textProps={"Activitie"} />
        {/* <div>
          {Data.years.map((item) => (
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              type="button"
              className="group m-5 font-palanquin-dark
              inline-flex  cursor-pointer items-center 
              justify-center gap-2 rounded-xl border border-slate-600/80 bg-slate-900/70 px-4 py-3  font-bold uppercase  text-slate-300 shadow-lg shadow-slate-950/20 backdrop-blur-sm  hover:border-rose-400/70 hover:bg-rose-950/70 hover:text-rose-100 hover:shadow-rose-950/30    focus sm:w-auto sm:min-w-40 sm:px-6"
            >
              {item}
            </motion.button>
          ))}
        </div> */}
        <ImageCarousel slides={Data.image} />

        {/* <div className="grid grid-cols-3  items-center gap-10 text-center ">
          {Data.image.map((item) => (
            <div key={item.id}>
              <img src={pathImg + item.imgName} alt={item.title} />
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}

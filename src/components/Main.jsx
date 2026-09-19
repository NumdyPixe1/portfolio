import { Data } from "../db/db";
import { motion } from "motion/react";

export default function MainPage() {
  const pathImg = "src\\assets\\images\\";

  return (
    <>
      <section
        id="main"
        className="min-h-screen w-full flex flex-col justify-center items-center gap-8 px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-25 text-center md:text-left max-w-2xl">
          <img
            src="src\assets\images\me\me.png"
            className=" rounded-full  w-50 h-50"
          />
          <div className=" flex flex-col gap-2">
            <h1 className="font-bungee flex items-center justify-center md:justify-start gap-3 text-5xl font-bold leading-none">
              Numdao Ratchamueangfang
            </h1>

            <p className="font-palanquin-dark text-gray-600 leading-relaxed">
              I’m a recent graduate with a major in Interactive Design and Game
              Development, I have a strong passion for both playing and
              committed to learning and developing games.
            </p>

            <div id="social" className="flex flex-row w-72">
              {Data.socials.map((item) => (
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  target="_blank"
                  href={item.link}
                  key={item.id}
                  className="max-w-12 m-2"
                >
                  <img src={pathImg + item.imgName} alt={item.title} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

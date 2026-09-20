import { Data } from "../db/db";
import ImageCarousel from "./ImageCarousel";
import Typewriter from "./typewriter";
import { motion } from "motion/react";

export default function WorkPage() {
  return (
    <>
      <section
        id="work"
        className="min-h-screen w-full flex flex-col justify-center items-center gap-8 px-20"
      >
        <Typewriter textProps={"Works"} />
        <ImageCarousel slides={Data.image} />
      </section>
    </>
  );
}

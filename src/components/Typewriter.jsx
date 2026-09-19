import { motion } from "motion/react";

export default function Typewriter({ textProps }) {
  const characters = Array.from(textProps);
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      display: "inline-block",
      width: 0,
      overflow: "hidden",
    },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <>
      <div className="typewriter-wrapper">
        {/* การเปลี่ยน key ทุกครั้งที่ text เปลี่ยน จะบังคับให้แอนิเมชันเริ่มพิมพ์ใหม่โดยอัตโนมัติ */}
        <motion.span
          whileInView="visible"
          key={textProps}
          variants={containerVariants}
          initial="hidden"
        >
          {characters.map((char, index) => (
            <motion.span
              className="font-bungee text-4xl "
              key={index}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </>
  );
}

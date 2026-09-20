import { Data } from "../db/db";
import ImageCarousel from "./ImageCarousel";
import Typewriter from "./typewriter";
import { motion } from "motion/react";

export default function ExperiencePage() {
  // อนิเมชันเส้นกึ่งกลาง
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // 💡 แก้ไขตรงนี้: เปลี่ยน x: 20 ตอน hidden ให้กลับเป็น x: 0 ตอน visible (ไม่ใช่ y: 0)
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0, // รีเซ็ตค่า X กลับมาที่เดิมเพื่อไม่ให้ตำแหน่งเบี้ยว
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      <section
        id="experience"
        className="min-h-screen w-full flex flex-col justify-center items-center gap-8 px-4 md:px-20"
      >
        <Typewriter textProps={"Experience"} />

        {Data.timelineData && (
          <div className="w-full min-h-screen rounded-4xl bg-gray-50 flex flex-col items-center py-20 px-4">
            {/* Container หลักของ Timeline แนวตั้ง */}
            <div className="relative w-full max-w-4xl flex flex-col items-center">
              {/* เส้นแกนกลางแนวตั้ง */}
              <motion.div
                className="absolute w-1 bg-gray-300 top-0 bottom-0 left-1/2 -translate-x-1/2 z-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={lineVariants}
              />

              {/* รายการจุดข้อมูลแต่ละปี */}
              <div className="w-full flex flex-col gap-16 relative z-10">
                {Data.timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                    className={`flex items-center w-full ${
                      item.position === "left" ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* 1. ฝั่งกล่องข้อความเนื้อหา */}
                    <div className="w-[calc(50%-24px)] px-4 md:px-8">
                      <div
                        className={`flex flex-col ${item.position === "left" ? "items-end text-right" : "items-start text-left"}`}
                      >
                        <span
                          className="text-xl font-bold mb-1"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </span>
                        <h4 className="font-bold text-base text-gray-800">
                          {item.title}
                        </h4>
                        <p className="font-bold text-base text-gray-500">
                          {item.location}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 max-w-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* 2. จุดวงกลมตรงกลาง */}
                    <div className="w-12 flex justify-center items-center relative z-20">
                      <div
                        className="w-5 h-5 rounded-full border-4 border-white shadow-md transform transition-transform hover:scale-125"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>

                    {/* 3. ฝั่งว่างสำหรับบาลานซ์ Grid */}
                    <div className="w-[calc(50%-24px)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

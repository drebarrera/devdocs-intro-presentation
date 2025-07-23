import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import SMTypewriterText from "../SMTypewriterText";

export default function LearningGoals({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <img id="profile" 
        src="/images/cdmx.webp" 
        className={`w-[225px] h-[225px] object-cover`}
        style={{ borderRadius: "10px" }} 
        onClick={() => {slide > 1 && setLightbox({
          show: true,
          title: "Programming from Mexico City",
          content: <div className="flex flex-col items-center gap-[10px]">
            <img
              src="/images/cdmx.webp" 
              className={`w-full max-h-[500px] object-contain`}
            />
            <p>I am always working towards positive growth - no matter where I am. I have built applications from Mexico City, Saigon, Tokyo, and Zurich.</p>
          </div>,
          setLightbox: setLightbox
        })}}
      />
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} timeout={0} step={50} onFinish={() => nextSlide()} content={[
          {node: "Excited to Document, Build, and Deploy", className: "text-2xl md:text-3xl font-medium"},
          {node: "", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col gap-[5px]">
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 2} step={50} onFinish={() => nextSlide()}>Obsessed with intelligible documentation, interfaces, and dashboards.</SMTypewriterText>
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 3} step={50} onFinish={() => nextSlide()}>Inspired by DevDoc's model of knowledge graphs and automation.</SMTypewriterText>
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 4} step={50} onFinish={() => nextSlide()}>Philosopher at heart; Passionate about building impactful tech.</SMTypewriterText>
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 5} step={50} onFinish={() => nextSlide()}>Balancing problem-solving drive with intuitive decision-making.</SMTypewriterText>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-row justify-between">
      <div onClick={() => {setPage((prevPage) => prevPage - 1)}} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-[24px] w-[24px] fill-white"><path d="M560-232.35 312.35-480 560-727.65 623.65-664l-184 184 184 184z"/></svg>
        <p className="text-[18px]">Back</p>
      </div>
      <div onClick={() => setPage(0)} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <p className="text-[18px]">Back to Home</p>
        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"  className="h-[24px] w-[24px] fill-white"><path d="m496.35-480-184-184L376-727.65 623.65-480 376-232.35 312.35-296z"/></svg>
      </div>
    </div>
  </div>;
}
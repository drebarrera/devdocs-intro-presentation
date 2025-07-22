import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import SMTypewriterDiv from "../SMTypewriterDiv";

export default function Strengths({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] min-h-[325px] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
        <img id="profile" 
          src="/images/capital_factory_meeting.webp" 
          className={`w-[225px] h-[225px] object-cover`} 
          style={{ borderRadius: "10px" }} 
          onClick={() => {slide > 1 && setLightbox({
            show: true,
            title: "Hispanic Hackers: Tech Stacks and Career Hacks",
            content: <img
              src="/images/capital_factory_meeting.webp" 
              className={`w-full max-h-[500px] object-contain`}
            />,
            setLightbox: setLightbox
          })}}
        />
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} timeout={0} step={50} onFinish={() => nextSlide()} content={[
          {node: "Strengths", className: "text-2xl md:text-3xl font-medium"},
          {node: "", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col gap-[5px]">
         <SMTypewriterDiv className="flex flex-row gap-[8px]" show={slide == 2} step={50} onFinish={() => nextSlide()} content={[
            {node: "Ideation & Product Vision:", className: "text-lg md:text-lg font-medium"},
            {node: "✦✦✦✦✦", className: "text-lg md:text-lg hover:underline"}
          ]}/>
          <SMTypewriterDiv className="flex flex-row gap-[8px]" show={slide == 3} step={50} onFinish={() => nextSlide()} content={[
            {node: "Communication:", className: "text-lg md:text-lg font-medium"},
            {node: "✦✦✦✦", className: "text-lg md:text-lg hover:underline"}
          ]}/>
          <SMTypewriterDiv className="flex flex-row gap-[8px]" show={slide == 4} step={50} onFinish={() => nextSlide()} content={[
            {node: "Data Driven Results:", className: "text-lg md:text-lg font-medium"},
            {node: "✦✦✦✦", className: "text-lg md:text-lg hover:underline"}
          ]}/>
          <SMTypewriterDiv className="flex flex-row gap-[8px]" show={slide == 5} step={50} onFinish={() => nextSlide()} content={[
            {node: "Leadership:", className: "text-lg md:text-lg font-medium"},
            {node: "✦✦✦", className: "text-lg md:text-lg hover:underline"}
          ]}/>
        </div>
        <SMTypewriterDiv className="flex flex-col" show={slide == 6} step={50} onFinish={() => nextSlide()} content={[
          {node: "Commitment to Growth:", className: "text-lg md:text-xl font-medium"},
          {node: "• Actively working on emotional intelligence.", className: "text-base ml-[10px]"},
          {node: "• Refining teaching skills through hands-on leadership.", className: "text-base ml-[10px]"},
          {node: "• Continuously learning from other talented peers and professionals.", className: "text-base ml-[10px]"},
          {node: "• Taking on challenging problems with initiative and ownership.", className: "text-base ml-[10px]"}
        ]}/>
      </div>
    </div>
    <div className="w-full flex flex-row justify-between">
      <div onClick={() => {setPage((prevPage) => prevPage - 1)}} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-[24px] w-[24px] fill-white"><path d="M560-232.35 312.35-480 560-727.65 623.65-664l-184 184 184 184z"/></svg>
        <p className="text-[18px]">Back</p>
      </div>
      <div onClick={() => setPage((prevPage) => prevPage + 1)} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <p className="text-[18px]">Next</p>
        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"  className="h-[24px] w-[24px] fill-white"><path d="m496.35-480-184-184L376-727.65 623.65-480 376-232.35 312.35-296z"/></svg>
      </div>
    </div>
  </div>;
}
import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import Carousel from "../Carousel";
import SMTypewriterText from "../SMTypewriterText";

export default function LessonsLearned({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <Carousel className="w-[225px] h-[225px] shrink-0" style={{ borderRadius: "10px" }} slideWidth={225}>
      <img id="profile" 
        src="/images/swiftsend_icon.webp" 
        className={`w-[70%] aspect-square`} 
        style={{ borderRadius: slide == 1 ? "150px" : "10px" }}
        onClick={() => {slide > 1 && setLightbox({
          show: true,
          content: <img
            src="/images/swiftsend_icon.webp" 
            className={`w-full object-contain max-h-[300px] aspect-square`}
          />,
          setLightbox: setLightbox
        })}}
      />
      <img id="profile" 
        src="/images/email_basics.webp" 
        className={`w-[225px] h-[225px] object-contain`} 
        onClick={() => {slide > 1 && setLightbox({
          show: true,
          title: "SwiftSend High-Level Overview",
          content: <div className="flex flex-col items-center gap-[10px]">
            <img
              src="/images/email_basics.webp" 
              className={`w-full object-contain max-h-[500px]`}
            />
            <p className="text-center">At a high level, SwiftSend is a middleware service that provides a interface between a SMTP client and the frontend client. The purpose of SwiftSend is to manage drafting, sending, access, and recipient state to provide a secure and regulated communication system.</p>
          </div>,
          setLightbox: setLightbox
        })}}
      />
      </Carousel>
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "Lessons Learned", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col gap-[5px]">
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 2} step={50} onFinish={() => nextSlide()}>• AWS SES is too restrictive for agile product development needs - especially for marketing and personalization objectives.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 3} step={50} onFinish={() => nextSlide()}>• The nuances associated with email servers, the role of DNS in delivery, and preserving IP address integrity.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 4} step={50} onFinish={() => nextSlide()}>• Refinement of my AWS infrastructure and identity access management skills.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 5} step={50} onFinish={() => nextSlide()}>• Express.js introduces latency and statefulness in serverless applications due to its footprint, latent startup time, and statefulness.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 6} step={50} onFinish={() => nextSlide()}>• Vercel has a size restriction of 12 functions (or files in a package). A build stage is required to bundle node modules to each file.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 7} step={50} onFinish={() => nextSlide()}>• Complex problems require thorough analysis and planning.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 8} step={50} onFinish={() => nextSlide()}>• Not every problem needs to be solved in-house.</SMTypewriterText>
        </div>
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
import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import SMTypewriterText from "../SMTypewriterText";

export default function SESPolicies({setPage}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
    <svg width="150" height="150" className="shrink-0" viewBox="-21.5 0 299 299" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M60.556 47.602 0 144.01l60.556 96.424 1.056-.753L60.837 47.8z" fill="#876929"/><path d="m128.187 223.105-67.631 17.329V47.602l67.631 17.325z" fill="#D9A741"/><path d="m255.979 71.868-32.6 5.391L148.538 0l-37.207 16.292 4.908 9.153-26.333 10.526v243.428l38.28 19.153.637-.499-.589-250.235 81.142 122.968z" fill="#876929"/><path d="m148.538 0 99.679 49.837-39.417 71.52z" fill="#D9A741"/><path d="M255.975 71.868 256 234.596l-127.813 63.956-.017-277.869 80.63 146.291z" fill="#D9A741"/></svg>
    <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "AWS SES Policies and Configuration", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col">
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 2} step={50} onFinish={() => nextSlide()}>• AWS closely monitors email activity to preserve IP address integrity.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 3} step={50} onFinish={() => nextSlide()}>• Soft bounces (emails which fail for circumstantial reason) and hard bounces (emails which fail because of permanent reasons) are tracked.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 4} step={50} onFinish={() => nextSlide()}>• Complaints or spam reports are tracked.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 5} step={50} onFinish={() => nextSlide()}>• By default, AWS suppresses messages sent to addresses with a high complaint or bounce rate.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 6} step={50} onFinish={() => nextSlide()}>• Organizations are penalized for bounce rates above 5% and complaint rates above 0.5%.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 7} step={50} onFinish={() => nextSlide()}>• Message delivery, bounces, and complaints can be monitored using AWS SNS.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 8} step={50} onFinish={() => nextSlide()}>• To receive Production Access, an organization must show their strategy for mitigating bounces and complaints.</SMTypewriterText>
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
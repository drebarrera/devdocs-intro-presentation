import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import Carousel from "../Carousel";
import SMTypewriterDiv from "../SMTypewriterDiv";
import SMTypewriterText from "../SMTypewriterText";

export default function OdinDashboard({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <Carousel className="w-[225px] h-[225px] shrink-0" style={{ borderRadius: "10px" }} slideWidth={225}>
              <img id="profile" 
          src="/images/odin_icon.webp" 
          className={`w-[50%] aspect-square`} 
          onClick={() => {slide > 1 && setLightbox({
            show: true,
            content: <img
              src="/images/odin_icon.webp" 
              className={`h-[300px] aspect-square`}
            />,
            setLightbox: setLightbox
          })}}
        />
        <img id="profile" 
          src="/images/odin_organization_page.webp" 
          className={`w-[225px] h-[225px] object-contain`} 
          onClick={() => {slide > 1 && setLightbox({
            show: true,
            title: "Odin Dashboard Organization Page",
            content: <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/images/odin_organization_page.webp" 
                className={`w-full max-h-[700px] object-contain`}
              />
              <p className="text-center">The Odin Dashboard is the central resource for the CircleSquare community, allowing users to send messages, submit hours, pay invoices, and manage projects.</p>
            </div>,
            setLightbox: setLightbox
          })}}
        />
      </Carousel>
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "The Odin Dashboard", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col">
          <SMTypewriterDiv className="flex flex-col" show={slide == 2} step={50} onFinish={() => nextSlide()} content={[
            {node: "What Is It?", className: "text-lg md:text-xl font-medium"},
            {node: "• Provides a central resource hub for clients, contractors, and other stakeholders of CircleSquare Labs.", className: "text-base ml-[10px]"},
          ]}/>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 3} step={50} onFinish={() => nextSlide()}>• Gives organizational access to create and manage projects.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 4} step={50} onFinish={() => nextSlide()}>• Features include time tracking for contractors, billable invoices to clients, and kanban boards.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 5} step={50} onFinish={() => nextSlide()}>• Track the progress of projects through in-depth analytics and telemetry integration.</SMTypewriterText>
        </div>
        <SMTypewriterDiv className="flex flex-col" show={slide == 6} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend's Role:", className: "text-lg md:text-xl font-medium"},
          {node: "Create and track event-driven emails from conception to delivery.", className: "text-base"}
        ]}/>
      </div>
    </div>
    <div className="w-full flex flex-row justify-between">
      <div onClick={() => {setPage(0)}} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
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
import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import SMTypewriterDiv from "../SMTypewriterDiv";
import Carousel from "../Carousel";

export default function SwiftSend({setPage, setLightbox, slideSet, changeSlideSet}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>>, slideSet: number, changeSlideSet: Function }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
    return false;
  }

  return <div 
      id="profileBox" 
      className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip flex flex-col gap-[10px] pointer-events-auto ${slide == 1 && "profileHover"}`} 
      style={{ 
        width: slide == 1 ? slideSet == 1 ? "225px" : "150px" : "100%",
        height: slide == 1 ? slideSet == 1 ? "225px" : "150px" : "",
        borderWidth: slide == 1 ? "2px" : 0, 
        borderRadius: slide == 1 ? "150px" : "20px", 
        padding: slide > 1 ? "25px" : "0px", 
        marginLeft: slideSet == 0 ? "250px" : "0px",
        opacity: slideSet == 0 ? 0.5 : 1,
        background: slide == 1 ? "#111111" : "#111111cc"
      }}
      onMouseEnter={() => changeSlideSet(1)}
      onClick={() => slideSet == 1 && slide == 1 && (nextSlide() || setPage(1))} 
    >
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <div className={`aspect-square flex justify-center items-center`} style={{ height: slide == 1 ? "100%" : "225px" }}>
        {
          slide == 1 ? 
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
          /> : 
          <Carousel className="w-[225px] h-[225px]" style={{ borderRadius: "10px" }} slideWidth={225}>
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
              src="/images/swiftsend_purpose.webp" 
              className={`w-[225px] h-[225px] object-contain`} 
              onClick={() => {slide > 1 && setLightbox({
                show: true,
                title: "SwiftSend High-Level Overview",
                content: <div className="flex flex-col items-center gap-[10px]">
                  <img
                    src="/images/swiftsend_purpose.webp" 
                    className={`w-full object-contain max-h-[500px]`}
                  />
                  <p className="text-center">At a high level, SwiftSend is a middleware service that provides a interface between a SMTP client and the frontend client. The purpose of SwiftSend is to manage drafting, sending, access, and recipient state to provide a secure and regulated communication system.</p>
                </div>,
                setLightbox: setLightbox
              })}}
            />
          </Carousel>
        }
      </div>
      {slide >= 2 && <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 2} timeout={800} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "Self-Managed Email Backend Service", className: "text-lg md:text-xl"}
        ]}/>
        <SMTypewriterDiv className="flex flex-col" show={slide >= 3} timeout={200} step={50} onFinish={() => nextSlide()} content={[
          {node: "Problem:", className: "text-lg md:text-xl font-medium shrink-0"},
          {node: "Develop an e-mail backend service capable of facilitating the drafting, sending, and management of HTML template and plain text emails.", className: "text-base md:text-lg"}
        ]}/>
        <SMTypewriterDiv className="flex flex-col" show={slide >= 4} timeout={200} step={50} onFinish={() => nextSlide()} content={[
          {node: "Scope:", className: "text-lg md:text-xl font-medium shrink-0"},
          {node: "Integrated into the Odin Dashboard frontend.", className: "text-base md:text-lg"}
        ]}/>
        <SMTypewriterDiv className="flex flex-col" show={slide >=5} step={50} onFinish={() => nextSlide()} content={[
          {node: "Constraints:", className: "text-lg md:text-xl font-medium"},
          {node: "• Solution must be low-cost.", className: "text-base ml-[10px]"},
          {node: "• Privacy and security is essential.", className: "text-base ml-[10px]"},
          {node: "• Recipient state management to maintain high deliverability.", className: "text-base ml-[10px]"},
          {node: "• Scalable and easily integrated into daily user habits.", className: "text-base ml-[10px]"},
        ]}/>
      </div>}
    </div>
    {slide >= 2 && <div className="w-full flex flex-row justify-between">
      <div/>
      <div onClick={() => setPage((prevPage) => prevPage + 1)} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <p className="text-[18px] text-[var(--theme-f)]">Next</p>
        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"  className="h-[24px] w-[24px] fill-white"><path d="m496.35-480-184-184L376-727.65 623.65-480 376-232.35 312.35-296z"/></svg>
      </div>
    </div>}
  </div>;
}
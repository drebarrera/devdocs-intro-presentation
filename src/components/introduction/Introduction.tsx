import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import TypewriterText from "../TypewriterText";

export default function Introduction({setPage, setLightbox, slideSet, changeSlideSet}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>>, slideSet: number, changeSlideSet: Function }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
    console.log('ns', slide);
    return false;
  }

  return <div 
    id="profileBox" 
    className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto ${slide == 1 && "profileHover"}`} 
    style={{ 
      width: slide == 1 ? slideSet == 0 ? "225px" : "150px" : "100%", 
      height: slide == 1 ? slideSet == 0 ? "225px" : "150px" : "",
      borderWidth: slide == 1 ? "2px" : 0, 
      borderRadius: slide == 1 ? "150px" : "20px", 
      padding: slide > 1 ? "25px" : "0px", 
      marginLeft: slideSet == 1 ? "250px" : "0px",
      opacity: slideSet == 1 ? 0.5 : 1
    }}
    onMouseEnter={() => changeSlideSet(0)} 
    onClick={() => slideSet == 0 && slide == 1 && (nextSlide() || setPage(1))} 
    >
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] p-[10px]" style={{ overflowY: slide == 1 ? "hidden" : "auto" }} >
      <img id="profile" 
        src="/images/profile.webp" 
        className={`w-[225px] h-full max-h-[225px] aspect-square`} 
        style={{ borderRadius: slide == 1 ? "150px" : "10px" }}
        onClick={() => {slide > 1 && setLightbox({
          show: true,
          content: <img
            src="/images/profile.webp" 
            className={`w-full object-contain max-h-[500px] aspect-square`}
          />,
          setLightbox: setLightbox
        })}}
      />
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 2} timeout={800} step={50} onFinish={() => nextSlide()} content={[
          {node: "Andrés Barrera", className: "text-2xl md:text-3xl font-medium"},
          {node: "Software & Product Engineer", className: "text-lg md:text-xl"}
        ]}/>
        <TypewriterDiv className="flex flex-row gap-[5px] items-center hover:underline" trigger={slide == 3} show={slide >= 3} timeout={200} step={50} onFinish={() => nextSlide()} content={[
          {node: <svg fill="white" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>},
          {node: "Austin, TX", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col">
          <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 4} step={50} onFinish={() => nextSlide()} content={[
            {node: "Coding Since:", className: "text-base md:text-lg font-medium"},
            {node: "2014", className: "text-base md:text-lg hover:underline", onClick: () => window.open('https://www.drebarrera.com/manifesto', '_blank')}
          ]}/>
          <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 5} step={50} onFinish={() => nextSlide()} content={[
            {node: "Education:", className: "text-base md:text-lg font-medium"},
            {node: "Purdue University", className: "text-base md:text-lg"}
          ]}/>
          <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 6} step={50} onFinish={() => nextSlide()} content={[
            {node: "Major:", className: "text-base md:text-lg font-medium"},
            {node: "B.S. Computer Engineering", className: "text-base md:text-lg"}
          ]}/>
        </div>
        <TypewriterText className="flex flex-row gap-[8px]" trigger={slide == 7} step={50} onFinish={() => nextSlide()}>I'm a Software and Product Engineer located in Austin specializing in system architecture, web and mobile design, and AI integration.</TypewriterText>
        <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 8} step={50} onFinish={() => nextSlide()} content={[
          {node: "Portfolio:", className: "text-base md:text-lg font-medium"},
          {node: "www.drebarrera.com", className: "text-base md:text-lg hover:underline", onClick: () => {
            window.open('https://www.drebarrera.com', '_blank')
          }}
        ]}/>
      </div>
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
import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import Carousel from "../Carousel";
import SMTypewriterText from "../SMTypewriterText";

export default function Architecture({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <Carousel className="w-[225px] h-[225px] shrink-0" style={{ borderRadius: "10px" }} slideWidth={225}>
        <img id="profile" 
          src="/images/swiftsend.webp" 
          className={`w-[225px] h-[225px] object-contain`} 
          onClick={() => {slide > 1 && setLightbox({
            show: true,
            title: "SwiftSend Architecture",
            content: <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/images/swiftsend.webp" 
                className={`w-full object-contain max-h-[700px]`}
              />
            </div>,
            setLightbox: setLightbox
          })}}
        />
      </Carousel>
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "Architecture", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col gap-[10px]">
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 2} step={50} onFinish={() => nextSlide()}>1. The sending application makes a request to the SwiftSend middleware service.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 3} step={50} onFinish={() => nextSlide()}>2. Sender is authenticated and recipient is checked in the SwiftSend schema of the CircleSquare database for authorization to send.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 4} step={50} onFinish={() => nextSlide()}>3. If either authentication or authorization fails, SwiftSend returns an error to the sending application.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 5} step={50} onFinish={() => nextSlide()}>4. Messages that pass authentication and authorization are formatted and a request is sent to AWS SES.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 6} step={50} onFinish={() => nextSlide()}>5. AWS SES recieves the message and processes, assigning DKIM and SPF verification.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 7} step={50} onFinish={() => nextSlide()}>6. Mail delivery is monitored by AWS and notifications on delivery status are sent via SNS webhook to SwiftSend.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 8} step={50} onFinish={() => nextSlide()}>7. Bounce notifications are handled in SwiftSend, where soft bounces are retried and hard bounce recipients are marked as unauthorized to send.</SMTypewriterText>
          <SMTypewriterText className="text-base ml-[10px]" show={slide == 9} step={50} onFinish={() => nextSlide()}>8. Notifications are tracked and stored in the CircleSquare database for reference from the application.</SMTypewriterText>
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
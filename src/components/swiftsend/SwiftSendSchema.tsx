import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import Carousel from "../Carousel";
import SMTypewriterDiv from "../SMTypewriterDiv";

export default function SwiftSendSchema({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <Carousel className="w-[225px] h-[225px] shrink-0" style={{ borderRadius: "10px" }} slideWidth={225}>
        <img id="profile" 
          src="/images/swiftsend_schema.webp" 
          className={`w-[225px] h-[225px] object-contain`} 
          onClick={() => {slide > 1 && setLightbox({
            show: true,
            title: "SwiftSend Schema",
            content: <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/images/swiftsend_schema.webp" 
                className={`w-full object-contain max-h-[700px]`}
              />
            </div>,
            setLightbox: setLightbox
          })}}
        />
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
          {node: "SwiftSend Schema", className: "text-lg md:text-xl"}
        ]}/>
        <SMTypewriterDiv className="flex flex-col" show={slide == 2} step={5} onFinish={() => nextSlide()} content={[
          {node: "Email Registry", className: "text-base", step: 50},
          {node: "• Storing: IAM user access keys. Access keys are created and stored per sending address and organization key set.", className: "text-base ml-[10px]"},
          {node: "• Updated: On upload by an admin on the Odin Dashboard system.", className: "text-base ml-[10px]"},
        ]} />
        <SMTypewriterDiv className="flex flex-col" show={slide == 3} step={5} onFinish={() => nextSlide()} content={[
          {node: "Email Assignment", className: "text-base", step: 50},
          {node: "• Storing: Email identities assigned per user, sending address, and organization key set.", className: "text-base ml-[10px]"},
          {node: "• Updated: On assignment by an admin on the Odin Dashboard system.", className: "text-base ml-[10px]"},
        ]} />
        <SMTypewriterDiv className="flex flex-col" show={slide == 4} step={5} onFinish={() => nextSlide()} content={[
          {node: "Email Recipient Status", className: "text-base", step: 50},
          {node: "• Storing: Authorization of emails addresses that have been sent to in the past.", className: "text-base ml-[10px]"},
          {node: "• Updated: On complaint or bounce via SNS webhook.", className: "text-base ml-[10px]"},
        ]} />
        <SMTypewriterDiv className="flex flex-col" show={slide == 5} step={5} onFinish={() => nextSlide()} content={[
          {node: "Emails", className: "text-base", step: 50},
          {node: "• Storing: Emails sent with their status, notifications, and SES MessageId.", className: "text-base ml-[10px]"},
          {node: "• Updated: On email message sent from client or notification (ie Sent or Rendering Error) via SNS webhook.", className: "text-base ml-[10px]"},
        ]} />
        <SMTypewriterDiv className="flex flex-col" show={slide == 6} step={5} onFinish={() => nextSlide()} content={[
          {node: "Email Recipients", className: "text-base", step: 50},
          {node: "• Storing: Email recipients for each email and the status of their individual delivery.", className: "text-base ml-[10px]"},
          {node: "• Updated: On email message sent from client or notification (ie Delivery or Bounce) via SNS webhook.", className: "text-base ml-[10px]"},
        ]} />
        <SMTypewriterDiv className="flex flex-col" show={slide == 7} step={5} onFinish={() => nextSlide()} content={[
          {node: "Email Templates", className: "text-base", step: 50},
          {node: "• Storing: Email template information, content, and parameters.", className: "text-base ml-[10px]"},
          {node: "• Updated: On creation, update, or delete via the Odin Dashboard.", className: "text-base ml-[10px]"},
        ]} />
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
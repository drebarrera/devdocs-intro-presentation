import type { Dispatch, ReactNode, SetStateAction } from "react";

export type LightboxType = {
  show: boolean;
  title?: string;
  content?: ReactNode;
  setLightbox: Dispatch<SetStateAction<LightboxType>>;
}

export default function Lightbox({ show, title, content, setLightbox } : LightboxType) {
  return show && <div id="lightbox" className="absolute w-full h-fit md:max-w-[1500px] max-h-[100%] overflow-clip bg-[#000000cc] p-[20px] flex flex-col items-center gap-[30px] pointer-events-auto" style={{borderRadius: "25px"}}>
    <div className="relative w-full flex flex-row justify-between max-h-[100%] gap-[10px]">
      <h3 className="text-2xl">{title}</h3>
      <div className="w-[32px] h-[32px] flex justify-center items-center hover:bg-[#333] cursor-pointer" 
        style={{ borderRadius: "20px" }}
        onClick={() => setLightbox({
          show: false,
          setLightbox: setLightbox
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-[28px] w-[28px] fill-white"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>
      </div>
    </div>
    <div className="relative overflow-y-auto">
      {content}
    </div>
  </div>
}
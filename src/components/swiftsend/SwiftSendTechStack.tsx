import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import SMTypewriterDiv from "../SMTypewriterDiv";

export default function SwiftSendTechStack({setPage}: { setPage: Dispatch<SetStateAction<number>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <div className="w-full text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "Tech Stack", className: "text-lg md:text-xl"}
        ]}/>
        <div className="w-full h-fit overflow-x-auto">
          <div className="w-fit flex flex-col pb-[20px]">
            <TypewriterDiv className="flex flex-row border-b-2 py-[3px] border-[#ffffff88] items-center gap-[5px]" trigger={slide == 2} show={slide >= 2} step={50} onFinish={() => nextSlide()} content={[
              {node: "Purpose", className: "w-[210px] px-[5px] text-base font-medium"},
              {node: "Tool", className: "w-[500px] px-[5px] text-base font-medium"},
            ]}/>
            {slide >= 3 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[210px] px-[5px]">Frontend</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]"
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v720zm320 0v-360h320v280q0 33-23.5 56.5T760-120zm0-440v-280h240q33 0 56.5 23.5T840-760v200z"/></svg>}
                show={slide >= 3} 
                step={50} 
                onFinish={() => nextSlide()} 
                content={[
                  {node: <img height="20" width="20" src="/images/odin_icon.webp" className="shrink-0 grow-0"/>},
                  {node: "Odin Dashboard - Built with", className: "text-base"},
                  {node: <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#3178c6"/><path fill="#fff" d="M233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1 23-1.1 34-3.4 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6.31 13 .94 4.6.63 9.3 1.6 14 2.9s9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1-23 1.3-34 3.8-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-28.1-15.44z"/></svg>},
                  {node: "Typescript", className: "text-base"},
                  {node: "+", className: "text-base"},
                  {node: <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 11.698 6.216L4.906 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5M10 10V4h1v6z" fill="#fff"/></svg>},
                  {node: "Next.js", className: "text-base"}
                ]}
              />
            </div>}
            {slide >= 4 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[210px] px-[5px]">Database / Authentication</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]" 
                show={slide >= 4} 
                step={50} 
                onFinish={() => nextSlide()} 
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M480-520q150 0 255-47t105-113q0-66-105-113t-255-47q-150 0-255 47T120-680q0 66 105 113t255 47Zm0 100q41 0 102.5-8.5T701-456q57-19 98-49.5t41-74.5v100q0 44-41 74.5T701-356q-57 19-118.5 27.5T480-320q-41 0-102.5-8.5T259-356q-57-19-98-49.5T120-480v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-420Zm0 200q41 0 102.5-8.5T701-256q57-19 98-49.5t41-74.5v100q0 44-41 74.5T701-156q-57 19-118.5 27.5T480-120q-41 0-102.5-8.5T259-156q-57-19-98-49.5T120-280v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-220Z"/></svg>}
                content={[
                  {node: <img height="20" width="20" src="/images/circlesquare_icon.webp" className="shrink-0 grow-0"/>},
                  {node: "CircleSquare Backend -", className: "text-base"},
                  {node: <svg width="20" height="20" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z" fill="url(#a)"/><path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z" fill="url(#b)" fill-opacity=".2"/><path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z" fill="#3ECF8E"/><defs><linearGradient id="a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse"><stop stop-color="#249361"/><stop offset="1" stop-color="#3ECF8E"/></linearGradient><linearGradient id="b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>},
                  {node: "Supabase", className: "text-base hover:underline", onClick: () => window.open('https://www.supabase.com', '_blank')},
                ]}
              />
            </div>}
            {slide >= 5 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[210px] px-[5px]">SMTP Provider</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]" 
                show={slide >= 5} 
                step={50} 
                onFinish={() => nextSlide()} 
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" className="fill-[#bbbbbb] hover:fill-[#ffffff]" height="20" viewBox="0 -960 960 960" width="20"><path d="m720-160-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM416-520l264-154v-86h-10L416-613 169-760h-9v88l256 152ZM155-280q-31 0-53-22t-22-53v-410q0-31 22-53t53-22h530q31 0 53 22t22 53v209q-10-2-20-3t-20-1q-98 0-169 70.5T480-320q0 10 1 20t3 20H155Z"/></svg>}
                content={[
                  {node: <svg width="20" height="20" viewBox="-21.5 0 299 299" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M60.556 47.602 0 144.01l60.556 96.424 1.056-.753L60.837 47.8z" fill="#876929"/><path d="m128.187 223.105-67.631 17.329V47.602l67.631 17.325z" fill="#D9A741"/><path d="m255.979 71.868-32.6 5.391L148.538 0l-37.207 16.292 4.908 9.153-26.333 10.526v243.428l38.28 19.153.637-.499-.589-250.235 81.142 122.968z" fill="#876929"/><path d="m148.538 0 99.679 49.837-39.417 71.52z" fill="#D9A741"/><path d="M255.975 71.868 256 234.596l-127.813 63.956-.017-277.869 80.63 146.291z" fill="#D9A741"/></svg>},
                  {node: "AWS Simple Email Service (SES)", className: "text-base"}
                ]}
              />
            </div>}
            {slide >= 6 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[210px] px-[5px]">Email Notification Endpoint</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]" 
                show={slide >= 6} 
                step={50} 
                onFinish={() => nextSlide()} 
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"/></svg>}
                content={[
                {node: <svg width="20" height="20" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m98.875 232.033-26.433-7.408-25.001-28.508 31.272-.863zm-61.125-18.8-14.875-4.166-14.058-16.034 17.082-2.809z" fill="#995B80"/><path d="m0 191.017 15.204 3.091 2.207-3.882V58.503l-2.207-2.561L0 64.6z" fill="#7B3F65"/><path d="M73.933 69.708 15.208 55.942v138.166l8.798-.818 13.744 19.943 10.6-22.205 25.583-2.378z" fill="#C17B9D"/><path d="m33.958 198.133 26.063 5.25 1.716-4.045V37.44l-1.716-3.665-26.063 13.208z" fill="#7B3F65"/><path d="M208.734 81.516 60.021 33.775v169.612l17.221-2.216 21.633 30.862 17.126-35.85 92.733-11.933z" fill="#C17B9D"/><path d="m181.833 256.492-37.566-10.525-35.509-40.5 46.033-.468z" fill="#995B80"/><path d="m89.591 208.95 38.33 7.417 2.977-2.566V4.117L127.921 0l-38.33 19.158z" fill="#7B3F65"/><path d="M256 64.033 127.925 0v216.367l22.597-4.528 31.311 44.653 26.901-56.309-.017-.002L256 190.708z" fill="#C17B9D"/></svg>},
                {node: "AWS Simple Notification Service (SNS)", className: "text-base"}
              ]}/>
            </div>}
            {slide >= 7 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[210px] px-[5px]">Middleware Service</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]" 
                show={slide >= 7} 
                step={50} 
                onFinish={() => nextSlide()} 
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/></svg>}
                content={[
                  {node: <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#3178c6"/><path fill="#fff" d="M233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1 23-1.1 34-3.4 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6.31 13 .94 4.6.63 9.3 1.6 14 2.9s9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1-23 1.3-34 3.8-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-28.1-15.44z"/></svg>},
                  {node: "TypeScript", className: "text-base"},
                  {node: "+", className: "text-base"},
                  {node: <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957 6.27 6.27 0 0 1-7.306-.933 6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>},
                  {node: "Express.js", className: "text-base"},
                  {node: "+", className: "text-base"},
                  {node:  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m7.5 1-.577 1.003L1.175 12 .6 13h13.8l-.575-1-5.748-9.997zm0 2.006L2.329 12H12.67z" fill="#fff"/></svg>},
                  {node: "Vercel", className: "text-base"}
              ]}/>
            </div>}
          </div>
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
import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import SMTypewriterDiv from "../SMTypewriterDiv";

export default function SMTPProvider({setPage}: { setPage: Dispatch<SetStateAction<number>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <div className="w-full text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} step={50} onFinish={() => nextSlide()} content={[
          {node: "SwiftSend", className: "text-2xl md:text-3xl font-medium"},
          {node: "Choosing a SMTP Provider", className: "text-lg md:text-xl"}
        ]}/>
        <div className="w-full h-fit overflow-x-auto">
          <div className="w-fit flex flex-col pb-[20px]">
            <TypewriterDiv className="flex flex-row border-b-2 py-[3px] border-[#ffffff88] items-center gap-[5px]" trigger={slide == 2} show={slide >= 2} step={50} onFinish={() => nextSlide()} content={[
              {node: "Provider", className: "w-[120px] px-[5px] text-base font-medium"},
              {node: "Cost", className: "w-[120px] px-[5px] text-base font-medium"},
              {node: "Deliverability", className: "w-[120px] px-[5px] text-base font-medium hover:underline", onClick: () => window.open('https://www.emaildeliverabilityreport.com/en/deliverability/amazon-ses/2024/', '_blank')},
              {node: "Security", className: "w-[120px] px-[5px] text-base font-medium"},
              {node: "Dedicated IP Cost", className: "w-[120px] px-[5px] text-base font-medium"},
              {node: "Scalability", className: "w-[120px] px-[5px] text-base font-medium"},
            ]}/>
            {slide >= 3 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[120px] px-[5px]">Mailgun</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]"
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/></svg>}
                show={slide >= 3} 
                step={50} 
                onFinish={() => nextSlide()} 
                content={[
                  {node: "$15/mo ", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "83.66%", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "2FA, TLS, HIPAA, GDPR", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "+$75/mo", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "1 Domain Limit, 10,000 emails/mo", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                ]}
              />
            </div>}
            {slide >= 3 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[120px] px-[5px]">SendGrid</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]"
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/></svg>}
                show={slide >= 4} 
                step={50} 
                onFinish={() => nextSlide()} 
                content={[
                  {node: "$19.95/mo ", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "79.63%", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "TLS, GDPR, 2FA", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "+$70/mo", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "1 Domain Limit, 50,000+ emails/mo", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                ]}
              />
            </div>}
            {slide >= 3 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <div className="w-[120px] px-[5px] flex flex-row gap-[5px] items-center">
                <p className="text-base">AWS SES</p>
                <TypewriterDiv 
                  content={[
                    {node: <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffff00"><path d="M200-160v-80h560v80H200Zm0-140-51-321q-2 0-4.5.5t-4.5.5q-25 0-42.5-17.5T80-680q0-25 17.5-42.5T140-740q25 0 42.5 17.5T200-680q0 7-1.5 13t-3.5 11l125 56 125-171q-11-8-18-21t-7-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820q0 15-7 28t-18 21l125 171 125-56q-2-5-3.5-11t-1.5-13q0-25 17.5-42.5T820-740q25 0 42.5 17.5T880-680q0 25-17.5 42.5T820-620q-2 0-4.5-.5t-4.5-.5l-51 321H200Z"/></svg>}
                  ]}
                  trigger={slide == 8}
                  step={50}
                  timeout={500}
                />
              </div>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]"
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/></svg>}
                show={slide >= 5} 
                step={50} 
                onFinish={() => nextSlide()} 
                content={[
                  {node: "$0.10/1000 emails/mo ", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "85.9%", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "IAM, Full Configurability", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "$24.95/mo", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "10,000 Domains, RBAC", className: "w-[120px] px-[5px] text-base text-green-500"},
                ]}
              />
            </div>}
            {slide >= 3 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[120px] px-[5px]">Gmail SMTP</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]"
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/></svg>}
                show={slide >= 6} 
                step={50} 
                onFinish={() => nextSlide()} 
                content={[
                  {node: "Free", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "80.19%", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "TLS, 2FA", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "No Option", className: "w-[120px] px-[5px] text-base text-red-500"},
                  {node: "$14/mo/user for G-Workplace", className: "w-[120px] px-[5px] text-base text-red-500"},
                ]}
              />
            </div>}
            {slide >= 3 && <div className="flex flex-row items-center gap-[5px] border-[#ffffff44] border-b-[1px] py-[3px] text-base">
              <p className="w-[120px] px-[5px]">Postmark</p>
              <SMTypewriterDiv 
                className="flex flex-row gap-[8px] items-center px-[5px]"
                triggerNode={<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" className="fill-[#bbbbbb] hover:fill-[#ffffff]"><path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/></svg>}
                show={slide >= 7} 
                step={50} 
                onFinish={() => nextSlide()} 
                content={[
                  {node: "$15/mo", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                  {node: "82.11%", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "2FA, GDPR, TLS", className: "w-[120px] px-[5px] text-base text-green-500"},
                  {node: "+$95.50", className: "w-[120px] px-[5px] text-base text-red-500"},
                  {node: "5 Domain Limit, 10,000 emails/mo", className: "w-[120px] px-[5px] text-base text-yellow-500"},
                ]}
              />
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
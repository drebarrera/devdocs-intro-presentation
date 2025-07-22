import { useState, type Dispatch, type SetStateAction } from "react";
import TypewriterDiv from "../TypewriterDiv";
import type { LightboxType } from "../Lightbox";
import SMTypewriterText from "../SMTypewriterText";

export default function LearningGoals({setPage, setLightbox}: { setPage: Dispatch<SetStateAction<number>>, setLightbox: Dispatch<SetStateAction<LightboxType>> }) {
  const [slide, setSlide] = useState<number>(1);

  const nextSlide = () => {
    setSlide((prevSlide) => prevSlide + 1);
  }

  return <div id="profileBox" className={`max-w-[800px] max-h-[100%] border-white cursor-pointer overflow-clip bg-[#111111cc] flex flex-col gap-[10px] pointer-events-auto`} style={{ width: "100%", borderRadius: "20px", padding: "25px" }}>
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-[30px] max-h-[100%] overflow-y-auto p-[10px]">
      <img id="profile" 
        src="/images/cdmx.webp" 
        className={`w-[225px] h-[225px] object-cover`}
        style={{ borderRadius: "10px" }} 
        onClick={() => {slide > 1 && setLightbox({
          show: true,
          title: "Programming from Mexico City",
          content: <div className="flex flex-col items-center gap-[10px]">
            <img
              src="/images/cdmx.webp" 
              className={`w-full max-h-[500px] object-contain`}
            />
            <p>I am always working towards positive growth - no matter where I am. I have built applications from Mexico City, Saigon, Tokyo, and Zurich.</p>
          </div>,
          setLightbox: setLightbox
        })}}
      />
      <div className="w-fit text-white flex flex-col gap-[15px]">
        <TypewriterDiv className="flex flex-col" trigger={slide == 1} timeout={0} step={50} onFinish={() => nextSlide()} content={[
          {node: "Learning Goals", className: "text-2xl md:text-3xl font-medium"},
          {node: "", className: "text-lg md:text-xl"}
        ]}/>
        <div className="flex flex-col gap-[5px]">
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 2} step={50} onFinish={() => nextSlide()}>Build fluency in production-grade software practices.</SMTypewriterText>
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 3} step={50} onFinish={() => nextSlide()}>Learn to quantify project success and personal impact.</SMTypewriterText>
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 4} step={50} onFinish={() => nextSlide()}>Strengthen skills in data modeling, analysis, and applied intelligence.</SMTypewriterText>
          <SMTypewriterText className="text-lg md:text-lg font-medium" show={slide == 5} step={50} onFinish={() => nextSlide()}>Balance problem-solving drive with intuitive decision-making.</SMTypewriterText>
        </div>
        <div className="flex flex-col gap-[5px]">
        <SMTypewriterText show={slide == 6} step={50} onFinish={() => nextSlide()} className="text-lg md:text-xl font-medium">Nominal Tools I'd Like to Learn</SMTypewriterText>
        <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 7} step={50} onFinish={() => nextSlide()} content={[
          {node: "•", className: "text-base ml-[10px] mr-[8px]"},
          {node: <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M18.928 14.179q-.32.135-.643.135-.513 0-.923-.178a2 2 0 0 1-.69-.491q-.281-.313-.432-.735c-.151-.422-.149-.586-.149-.911q0-.501.149-.93.15-.43.429-.747a2 2 0 0 1 .69-.501 2.25 2.25 0 0 1 .923-.183q.345.001.664.104.321.104.581.304c.26.2.316.299.427.496a1.7 1.7 0 0 1 .206.676h-.935q-.088-.374-.337-.562a.97.97 0 0 0-.607-.187q-.331 0-.562.128c-.231.128-.28.199-.375.344q-.143.217-.209.491c-.066.274-.066.372-.066.569q0 .28.066.548.066.267.209.479.143.213.375.342c.232.129.342.128.562.128q.488 0 .754-.247.266-.245.311-.714h-.987V11.8h1.872v2.413h-.624l-.1-.505a1.44 1.44 0 0 1-.579.471m2.896-4.429v3.632H24v.828h-3.155V9.75zM2.785 11.999c0-.709.343-1.376.948-1.962l1.109 4.221h.764l1.075-3.815 1.06 3.815h.766l1.321-4.856h-.86l-.861 3.725-1.039-3.726H6.28l-1.039 3.725-.84-3.632c1.489-1.025 3.868-1.69 6.548-1.69 2.512 0 4.764.529 6.261 1.445-1.632-1.535-4.565-2.612-7.915-2.614C4.161 6.635 0 9.036 0 11.999s4.161 5.367 9.293 5.367c3.338 0 6.261-1.075 7.9-2.6-1.497.911-3.741 1.428-6.244 1.428-4.51-.001-8.164-1.877-8.164-4.195m9.194-.553a1.2 1.2 0 0 0-.444-.384 1.4 1.4 0 0 0-.622-.135q-.393 0-.7.14a1.3 1.3 0 0 0-.489.387c-.244.311-.372.75-.372 1.269 0 .23.033.448.097.643a1.5 1.5 0 0 0 .285.515c.261.304.633.465 1.077.465.233 0 .422-.024.581-.074.138-.043.23-.1.306-.149a1.36 1.36 0 0 0 .444-.489c.09-.166.135-.323.145-.403l.007-.055h-.633l-.002.045c-.017.206-.287.574-.769.574-.688 0-.852-.498-.864-.937h2.306v-.05a3.2 3.2 0 0 0-.085-.766 1.8 1.8 0 0 0-.268-.596m-1.139.05c.51 0 .783.275.833.84h-1.651c.025-.458.388-.84.818-.84m4.678.415a1.6 1.6 0 0 0-.268-.515 1.25 1.25 0 0 0-.437-.346 1.4 1.4 0 0 0-.586-.126 1.14 1.14 0 0 0-.531.128 1.1 1.1 0 0 0-.346.28v-1.49h-.631v4.413h.6v-.301a1 1 0 0 0 .211.206q.258.185.626.185c.263 0 .501-.059.7-.176q.269-.157.448-.444a2 2 0 0 0 .235-.584 2.7 2.7 0 0 0 .069-.603 2 2 0 0 0-.09-.627m-.567.717c0 .346-.069.636-.202.84a.68.68 0 0 1-.605.325c-.377 0-.819-.263-.819-1.008 0-.356.045-.631.135-.84.13-.301.351-.446.671-.446.342 0 .572.133.7.41.106.227.12.505.12.719"/></svg>},
          {node: "WebGL", className: "text-base"},
        ]}/>
        <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 8} step={50} onFinish={() => nextSlide()} content={[
          {node: "•", className: "text-base ml-[10px] mr-[8px]"},
          {node: <svg width="24" height="24" viewBox="0 -6.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-82.637%" y1="-92.82%" x2="103.767%" y2="106.042%" id="a"><stop stop-color="#F9A03C" offset="0%"/><stop stop-color="#F7974E" offset="100%"/></linearGradient><linearGradient x1="-258.924%" y1="-248.97%" x2="97.62%" y2="98.768%" id="b"><stop stop-color="#F9A03C" offset="0%"/><stop stop-color="#F7974E" offset="100%"/></linearGradient><linearGradient x1="-223.163%" y1="-261.968%" x2="94.028%" y2="101.691%" id="c"><stop stop-color="#F9A03C" offset="0%"/><stop stop-color="#F7974E" offset="100%"/></linearGradient><linearGradient x1="11.339%" y1="-1.822%" x2="82.496%" y2="92.107%" id="d"><stop stop-color="#F26D58" offset="0%"/><stop stop-color="#F9A03C" offset="100%"/></linearGradient><linearGradient x1="15.844%" y1="3.858%" x2="120.126%" y2="72.38%" id="e"><stop stop-color="#B84E51" offset="0%"/><stop stop-color="#F68E48" offset="100%"/></linearGradient><linearGradient x1="46.984%" y1="23.466%" x2="51.881%" y2="147.391%" id="f"><stop stop-color="#F9A03C" offset="0%"/><stop stop-color="#F7974E" offset="100%"/></linearGradient></defs><path d="M255.52 175.619c.115-1.115.197-2.24.261-3.371.078-1.339-80.562-77.85-80.562-77.85h-1.928s81.736 86.215 82.229 81.22" fill="url(#a)"/><path d="M83.472 149.077q-.16.353-.323.704-.172.37-.349.734c-2.57 5.36 35.987 43.053 39.088 38.474.141-.202.283-.416.424-.618.157-.24.312-.47.467-.71 2.48-3.765-38.206-41.032-39.307-38.584" fill="url(#b)"/><path d="M137.957 202.083c-.109.24-.885 1.552-1.594 2.245-.12.24 37.64 37.688 37.64 37.688h3.4c.002 0-35.446-38.35-39.446-39.933" fill="url(#c)"/><path d="M255.835 171.568c-1.766 39.147-34.152 70.448-73.72 70.448h-5.35l-39.514-38.928c3.25-4.584 6.272-9.333 8.962-14.285h35.902c11.354 0 20.594-9.235 20.594-20.595 0-11.355-9.24-20.595-20.594-20.595h-21.246c1.619-8.557 2.504-17.381 2.504-26.408 0-9.165-.901-18.114-2.578-26.808h13.197l81.61 80.414c.097-1.078.174-2.155.233-3.243M21.467 0H0v53.213h21.467c37.493 0 68 30.499 68 67.992 0 10.2-2.275 19.883-6.318 28.576l39.163 38.59c12.859-19.24 20.376-42.339 20.376-67.166C142.688 54.373 88.307 0 21.467 0" fill="url(#d)"/><path d="M182.115 0H95.187C116.419 12.963 134 31.344 145.979 53.213h36.136c11.354 0 20.594 9.235 20.594 20.595 0 11.357-9.24 20.592-20.594 20.592h-8.12l81.61 80.413c.192-2.181.312-4.376.312-6.605 0-17.939-6.437-34.395-17.125-47.203 10.688-12.802 17.125-29.261 17.125-47.197C255.917 33.112 222.813 0 182.115 0" fill="url(#e)"/><path d="M176.765 242.016H95.808c16.296-10.064 30.384-23.35 41.443-38.928zm-54.453-53.645-39.16-38.59c-10.819 23.251-34.395 39.422-61.685 39.422H0v53.208h21.467c42.01 0 79.09-21.488 100.845-54.04" fill="url(#f)"/></svg>},
          {node: "D3.js", className: "text-base"},
        ]}/>
        <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 9} step={50} onFinish={() => nextSlide()} content={[
          {node: "•", className: "text-base ml-[10px] mr-[8px]"},
          {node: <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(-59.999 11.02 13.127)" fill="#e10098" d="M-.43 12.534h22.901v1.187H-.43z"/><path fill="#e10098" d="M4.545 21.162h22.902v1.187H4.545z"/><path transform="rotate(-59.999 11.023 24.622)" fill="#e10098" d="M10.43 18.008h1.187v13.227H10.43z"/><path transform="rotate(-59.999 20.974 7.384)" fill="#e10098" d="M20.381.771h1.187v13.227h-1.187z"/><path transform="rotate(-30.001 11.026 7.38)" fill="#e10098" d="M4.412 6.787h13.227v1.187H4.412z"/><path transform="rotate(-30.001 20.982 13.128)" fill="#e10098" d="M20.389 1.677h1.187v22.901h-1.187z"/><path fill="#e10098" d="M5.454 9.386h1.187v13.228H5.454zm19.906 0h1.187v13.228H25.36z"/><path transform="rotate(-30.001 20.973 24.615)" fill="#e10098" d="M15.222 24.097h11.504v1.037H15.222z"/><path d="M28.12 23a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 28.12 23M8.2 11.5a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 8.2 11.5M3.88 23a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 3.88 23M23.8 11.5a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 23.8 11.5M16 30a2.5 2.5 0 1 1 2.5-2.5A2.493 2.493 0 0 1 16 30m0-23.009a2.5 2.5 0 1 1 2.5-2.5 2.493 2.493 0 0 1-2.5 2.5" fill="#e10098"/></svg>},
          {node: "GraphQL", className: "text-base"},
          {node: "/", className: "text-base"},
          {node: <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="512" height="512" rx="150" fill="#398CCB"/><path fill-rule="evenodd" clip-rule="evenodd" d="m255.446 75 71.077 41.008v22.548l86.031 49.682v84.986l23.077 13.322v82.062L364.6 409.615l-31.535-18.237-76.673 44.268-76.214-44.012-31.093 17.981-71.031-41.077v-81.992l22.177-12.803v-85.505l84.184-48.6.047-.002v-23.628zm71.077 84.879v38.144l-71.031 41.008-71.03-41.008v-37.087l-.047.002-65.723 37.962v64.184l30.393-17.546 71.03 41.008v81.992l-21.489 12.427 57.766 33.358 58.226-33.611-21.049-12.174v-81.992l71.031-41.008 29.492 17.027V198.9zm-14.492 198.09v-50.054l43.338 25.016v50.054zm105.138-50.123-43.338 25.016v50.123l43.338-25.085zM96.515 357.9v-50.054l43.339 25.016v50.053zm105.139-50.054-43.339 25.016v50.053l43.339-25.015zm119.608-15.923 43.338-25.015 43.338 25.015-43.338 25.039zm-172.177-25.085-43.339 25.085 43.339 24.969 43.338-24.969zm53.838-79.476v-50.054l43.292 25.038v50.031zm105.092-50.054-43.292 25.038v50.008l43.292-24.992zm-95.861-15.97 43.292-25.015 43.339 25.015-43.339 25.016z" fill="#fff"/></svg>},
          {node: "tRPC", className: "text-base"},
        ]}/>
        <TypewriterDiv className="flex flex-row gap-[8px]" trigger={slide == 10} step={50} onFinish={() => nextSlide()} content={[
          {node: "•", className: "text-base ml-[10px] mr-[8px]"},
          {node: <svg width="24" height="24" viewBox="-78.5 0 413 413" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M87.932 36.714c-4.55-4.571-10.896-7.394-17.951-7.394-7.029 0-13.326 2.823-17.822 7.394h-.13c-4.535 4.55-7.358 10.9-7.358 17.93 0 7.055 2.823 13.352 7.359 17.875l.129.102c4.496 4.55 10.793 7.346 17.822 7.346 7.055 0 13.402-2.797 17.951-7.346L88 72.52c4.558-4.523 7.354-10.82 7.354-17.876 0-7.029-2.796-13.38-7.354-17.929zm-17.951 346.64a25.5 25.5 0 0 0 17.951-7.368l.067-.134c4.558-4.487 7.354-10.838 7.354-17.817 0-7.056-2.796-13.38-7.354-17.952h-.067c-4.55-4.625-10.896-7.42-17.951-7.42-7.029 0-13.326 2.795-17.822 7.42h-.13c-4.535 4.572-7.358 10.896-7.358 17.952 0 6.98 2.823 13.33 7.359 17.817l.129.134a25.15 25.15 0 0 0 17.822 7.368m137.972-76.72c6.275-1.646 11.957-5.673 15.423-11.761l.468-.887c3.082-5.776 3.644-12.44 1.998-18.344-1.659-6.324-5.735-11.917-11.81-15.418l-.352-.237c-5.918-3.242-12.662-3.947-18.857-2.274-6.297 1.57-11.952 5.775-15.4 11.814-3.492 5.981-4.223 12.88-2.55 19.231 1.725 6.244 5.761 11.89 11.796 15.418h.04c6.047 3.475 12.898 4.104 19.244 2.458M95.97 180.387c-6.654-6.637-15.824-10.794-25.988-10.794-10.124 0-19.272 4.157-25.912 10.794-6.61 6.614-10.686 15.76-10.686 25.898 0 10.165 4.076 19.339 10.686 26.029 6.64 6.582 15.788 10.712 25.912 10.712 10.164 0 19.334-4.13 25.988-10.712 6.623-6.69 10.7-15.864 10.7-26.029 0-10.137-4.077-19.284-10.7-25.898m-14.61-43.164c14.726 2.426 27.976 9.482 38.087 19.673h.08a72 72 0 0 1 4.625 5.147l25.284-14.629c-3.399-10.271-3.555-21.01-.826-31.072 3.609-13.487 12.35-25.56 25.453-33.137l.433-.26c12.96-7.345 27.696-8.861 41-5.253a54.52 54.52 0 0 1 33.186 25.48v.026c7.529 13.015 9.059 27.96 5.464 41.393-3.581 13.478-12.363 25.631-25.453 33.155l-3.452 2.043h-.352c-12.109 5.771-25.426 6.663-37.655 3.447-10.044-2.667-19.258-8.26-26.47-16.23l-25.243 14.585a69.7 69.7 0 0 1 4.509 24.694 70.7 70.7 0 0 1-4.51 24.824l25.244 14.53c7.212-8.072 16.426-13.562 26.47-16.229 13.469-3.684 28.405-2.114 41.46 5.49l.833.393v.053c12.613 7.627 21.078 19.441 24.619 32.767a54.43 54.43 0 0 1-5.464 41.344l-.454.914-.054-.08c-7.564 12.573-19.48 21.091-32.638 24.695-13.5 3.554-28.432 2.038-41.473-5.46v-.106c-13.103-7.578-21.844-19.678-25.453-33.133-2.729-10.035-2.573-20.779.826-31.046l-25.284-14.584c-1.45 1.78-3.02 3.452-4.625 5.071l-.08.076c-10.11 10.142-23.361 17.198-38.088 19.548v29.217c10.494 2.194 19.9 7.448 27.273 14.816l.035.08c9.88 9.825 15.994 23.517 15.994 38.57 0 15.003-6.115 28.61-15.994 38.489l-.035.156c-9.946 9.879-23.598 15.993-38.65 15.993-14.972 0-28.642-6.114-38.56-15.993h-.036v-.156c-9.893-9.879-16.02-23.486-16.02-38.49a54.26 54.26 0 0 1 16.02-38.569v-.08h.035c7.36-7.368 16.779-12.622 27.246-14.816v-29.217c-14.74-2.35-27.95-9.406-38.048-19.548l-.107-.076C7.89 243.053 0 225.624 0 206.285c0-19.284 7.89-36.714 20.511-49.389h.107c10.098-10.19 23.308-17.247 38.048-19.673v-29.087A55.34 55.34 0 0 1 31.42 93.293h-.035v-.08c-9.893-9.928-16.02-23.518-16.02-38.57 0-14.976 6.127-28.695 16.02-38.574l.035-.049C41.34 6.115 55.01 0 69.98 0c15.053 0 28.705 6.115 38.65 16.02v.05h.036c9.88 9.878 15.994 23.597 15.994 38.573 0 15.052-6.115 28.642-15.994 38.57l-.035.08c-7.373 7.319-16.779 12.568-27.273 14.843zm142.017-19.392-.21-.312c-3.492-5.882-9.058-9.803-15.213-11.502-6.346-1.672-13.197-.963-19.284 2.511h.04c-6.075 3.448-10.138 9.094-11.837 15.418a25.3 25.3 0 0 0 2.551 19.231l.116.16a25 25 0 0 0 15.284 11.57 24.83 24.83 0 0 0 19.21-2.48l.325-.156c5.905-3.528 9.838-9.094 11.484-15.208 1.673-6.298 1.008-13.197-2.466-19.232" fill="white"/></svg>},
          {node: "Apache Kafka", className: "text-base"},
        ]}/>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-row justify-between">
      <div onClick={() => {setPage((prevPage) => prevPage - 1)}} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-[24px] w-[24px] fill-white"><path d="M560-232.35 312.35-480 560-727.65 623.65-664l-184 184 184 184z"/></svg>
        <p className="text-[18px]">Back</p>
      </div>
      <div onClick={() => setPage(0)} className="h-fit w-fit py-[2px] px-[10px] flex flex-row bg-[#333] gap-[5px] items-center hover:bg-black cursor-pointer" style={{ borderRadius: "5px" }}>
        <p className="text-[18px]">Back to Home</p>
        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"  className="h-[24px] w-[24px] fill-white"><path d="m496.35-480-184-184L376-727.65 623.65-480 376-232.35 312.35-296z"/></svg>
      </div>
    </div>
  </div>;
}
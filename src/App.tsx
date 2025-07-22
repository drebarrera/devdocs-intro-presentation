import { useEffect, useRef, useState } from "react";
import "./index.css";
import "./assets/fonts/fonts.css";
import Introduction from "./components/introduction/Introduction";
import Lightbox from "./components/Lightbox";
import type { LightboxType } from "./components/Lightbox";
import TechStack from "./components/introduction/TechStack";
import AboutMe from "./components/introduction/AboutMe";
import Strengths from "./components/introduction/Strengths";
import LearningGoals from "./components/introduction/LearningGoals";
import SwiftSend from "./components/swiftsend/SwiftSend";
import SwiftSendPurpose from "./components/swiftsend/SwiftSendPurpose";
import OdinDashboard from "./components/swiftsend/OdinDashboard";
import SwiftSendTechStack from "./components/swiftsend/SwiftSendTechStack";
import SMTPProvider from "./components/swiftsend/SMTPProvider";
import Vocabulary from "./components/swiftsend/Vocabulary";
import SESConstraints from "./components/swiftsend/SESConstraints";
import SESPolicies from "./components/swiftsend/SESPolicies";
import Architecture from "./components/swiftsend/Architecture";
import AuthenticationAuthorization from "./components/swiftsend/AuthenticationAuthorization";
import SwiftSendSchema from "./components/swiftsend/SwiftSendSchema";
import SNSImplementation from "./components/swiftsend/SNSImplementation";
import Ratatoskr from "./components/swiftsend/Ratatoskr";
import Frontend from "./components/swiftsend/Frontend";
import Improvements from "./components/swiftsend/Improvements";
import LessonsLearned from "./components/swiftsend/LessonsLearned";
import Deployment from "./components/swiftsend/Deployment";

function App() {
  const progressBar = useRef(null);
  const [magnification, setMagnification] = useState<number>(1.1);
  const [page, setPage] = useState<number>(0);
  const [lightbox, setLightbox] = useState<LightboxType>({} as LightboxType);
  const [slideSet, setSlideSet] = useState<number>(1);
  const [slideChangeTimeout, setSlideChangeTimeout] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);

  const changeSlideSet = (n: number) => {
    if (slideChangeTimeout || n == slideSet) return;
    setSlideChangeTimeout(true);
    setSlideSet(n);
    setTimeout(() => {
      setSlideChangeTimeout(false);
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(`--magnification`, magnification.toString());
  }, [magnification]);

  useEffect(() => {
    if (width < 760) setMagnification(0.8);
  }, [width]);

  return (
    <main 
      className="w-screen h-screen overflow-clip" 
      style={{ 
        fontFamily: "Inter", 
        fontWeight: "300", 
        textUnderlineOffset: 2, 
        color: "white"
      }}
    >
      <div id="overlay1" className="fixed h-full aspect-square ml-[25%] z-[1] translate-x-[-50%]"/>
      <div id="overlay2" className="fixed h-full aspect-square ml-[50%] z-[2] translate-x-[-50%]"/>
      <div id="overlay3" className="fixed h-full aspect-square ml-[75%] z-[3] translate-x-[-50%]"/>
      <div id="content" className="absolute w-screen h-screen z-[4]"></div>
      <div className="absolute w-screen h-screen flex flex-col justify-center items-center p-[15px] overflow-clip pointer-events-none" style={{ zIndex: slideSet == 1 ? 6 : 5 }}>
        <div className="w-full h-full flex flex-row justify-center items-center overflow-clip">
          <div className="w-full h-full max-h-[100vh] flex flex-col justify-center items-center gap-[10px] overflow-clip" style={{ opacity: 1 }}>
            {page >= 1 && slideSet == 1 && <div className="hidden md:flex w-full max-w-[800px] h-fit p-[20px] flex-row justify-center items-center gap-[10px]">
              <p className="shrink-0">Slide {page} of 17</p>
              <div ref={progressBar} className="w-full h-[4px] bg-[#ddd] overflow-clip" style={{ borderRadius: "4px" }}>
                <div className="h-[4px] bg-blue-400" style={{ borderRadius: "4px", width: page * ((progressBar.current as HTMLElement | null)?.clientWidth ?? 0) / 17  }} />
              </div>
            </div>}
            {
              page == 0 || slideSet == 1 && page == 1 ? <SwiftSend setPage={setPage} setLightbox={setLightbox} slideSet={slideSet} changeSlideSet={changeSlideSet} /> :
              slideSet == 1 && page == 2 ? <OdinDashboard setPage={setPage} setLightbox={setLightbox} /> : 
              slideSet == 1 && page == 3 ? <SwiftSendPurpose setPage={setPage} setLightbox={setLightbox} /> : 
              slideSet == 1 && page == 4 ? <Vocabulary setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 5 ? <SwiftSendTechStack setPage={setPage} /> :
              slideSet == 1 && page == 6 ? <SMTPProvider setPage={setPage} /> :
              slideSet == 1 && page == 7 ? <SESConstraints setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 8 ? <SESPolicies setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 9 ? <Architecture setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 10 ? <SwiftSendSchema setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 11 ? <AuthenticationAuthorization setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 12 ? <SNSImplementation setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 13 ? <Ratatoskr setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 14 ? <Deployment setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 15 ? <Frontend setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 16 ? <LessonsLearned setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 1 && page == 17 ? <Improvements setPage={setPage} setLightbox={setLightbox} /> :
              <></>
            }
            <p className="text-3xl text-white" style={{ opacity: slideSet == 1 && page == 0 ? 1 : 0, visibility: page == 0 ? "visible" : "hidden" }}>SwiftSend</p>
          </div>
        </div>
        <Lightbox show={lightbox?.show ?? false} title={lightbox?.title} content={lightbox?.content} setLightbox={setLightbox}/>
      </div>
      <div className="absolute w-screen h-screen z-[6] flex flex-col justify-center items-center p-[15px] overflow-clip pointer-events-none" style={{ zIndex: slideSet == 0 ? 6 : 5 }}>
        <div className="w-full h-full flex flex-row justify-center items-center overflow-clip">
          <div className="w-full h-full flex flex-col justify-center items-center gap-[10px] overflow-clip" style={{ opacity: 1 }}>
            {
              page == 0 || slideSet == 0 && page == 1 ? <Introduction setPage={setPage} setLightbox={setLightbox} slideSet={slideSet} changeSlideSet={changeSlideSet} /> :
              slideSet == 0 && page == 2 ? <AboutMe setPage={setPage} setLightbox={setLightbox} /> : 
              slideSet == 0 && page == 3 ? <TechStack setPage={setPage} setLightbox={setLightbox} /> : 
              slideSet == 0 && page == 4 ? <Strengths setPage={setPage} setLightbox={setLightbox} /> :
              slideSet == 0 && page == 5 ? <LearningGoals setPage={setPage} setLightbox={setLightbox} /> :
              <></>
            }
            <p className="text-3xl text-white" style={{ opacity: slideSet == 0 && page == 0 ? 1 : 0, visibility: page == 0 ? "visible" : "hidden" }}>Andrés Barrera</p>
          </div>
        </div>
        <Lightbox show={lightbox?.show ?? false} title={lightbox?.title} content={lightbox?.content} setLightbox={setLightbox}/>
      </div>
      {!lightbox?.show && <div className="hidden md:flex fixed w-fit h-[30px] bg-[#ffffff22] z-[10] right-0 top-0 m-[20px] flex-row justify-center items-center overflow-clip gap-[5px]" style={{ borderRadius: "20px" }}>
        <div onClick={() => setMagnification((prev) => prev - 0.1)} className="h-full px-[10px] text-base md:text-lg font-medium flex justify-center items-center bg-[#ffffff33] hover:bg-[#ffffff22] cursor-pointer">-</div>
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        <p className="text-base">{magnification.toFixed(1)}</p>
        <div onClick={() => setMagnification((prev) => prev + 0.1)} className="h-full px-[10px] text-base md:text-lg font-medium flex justify-center items-center bg-[#ffffff33] hover:bg-[#ffffff22] cursor-pointer">+</div>
      </div>}
    </main>
  )
}

export default App

import { Children, isValidElement, useEffect, useRef, useState, type ReactNode } from "react";

export default function Carousel({ children, className, style, slideWidth } : { children: ReactNode, className?: string, style?: object, slideWidth: number }) {
  const [slide, setSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      console.log(slideWidth * slide)
      carouselRef.current.scrollTo({
        left: slideWidth * slide,
        behavior: 'smooth'
      });
    }
  }, [slide]);

  const childrenItems = Children.toArray(children).map((child, index) => {
    if (isValidElement(child)) {
      return (
        <div
          key={index}
          className="w-full flex justify-center items-center"
          style={{ flex: '0 0 auto', width: slideWidth }}
        >
          {child}
        </div>
      );
    }
    return null;
  });

  const lastSlide = () => {
    if (slide > 0) {
      if (carouselRef.current) carouselRef.current.style.overflowX = "scroll";
      setSlide((slide) => slide - 1);
    }
  }

  const nextSlide = () => {
    if (carouselRef.current) carouselRef.current.style.overflowX = "scroll";
    if (slide < childrenItems.length - 1) setSlide((slide) => slide + 1);
  }

  return <div className={`relative aspect-square ${className ?? ""} flex flex-row overflow-clip items-center`} style={style ?? {}}>
    <div ref={carouselRef} className="relative aspect-square flex flex-row overflow-clip items-center">
    {
      childrenItems
    }
    </div>
    {slide > 0 && <div className="absolute w-[20%] aspect-square left-0 m-[2px] flex justify-center items-center bg-[#111111aa]" onClick={() => lastSlide()} style={{ borderRadius: "30px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-[30px] w-[30px] fill-white"><path d="M560-232.35 312.35-480 560-727.65 623.65-664l-184 184 184 184z"/></svg>
    </div>}
    {slide <= childrenItems.length - 2 && <div className="absolute w-[20%] aspect-square right-0 m-[2px] flex justify-center items-center bg-[#111111aa]" onClick={() => nextSlide()} style={{ borderRadius: "30px" }}>
      <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"  className="h-[30px] w-[30px] fill-white"><path d="m496.35-480-184-184L376-727.65 623.65-480 376-232.35 312.35-296z"/></svg>
    </div>}
  </div>
}
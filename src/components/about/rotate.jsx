import {
    motion,
    MotionProps,
    useTransform,
    useViewportScroll,
  } from "framer-motion";
  import { throttle } from "throttle-debounce-ts";
  //import "normalize.css";
  import { useEffect, useRef, useState } from "react";
  //import "./styles.css";
  
  // * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
  function useElementViewportPosition(ref) {
    const [position, setPosition] = useState([0, 0]);
  
    useEffect(() => {
      if (!ref || !ref.current) return;
  
      const pageHeight = document.body.scrollHeight;
      const start = ref.current.offsetTop;
      const end = start + ref.current.offsetHeight;
  
      setPosition([start / pageHeight, end / pageHeight]);
    }, []);
  
    return { position };
  }
  
  const slideAnimation = {
    variants: {
      full: { backgroundColor: "#663399" },
      partial: { backgroundColor: "#808080" },
    },
    initial: "partial",
    whileInView: "full",
    viewport: { amount: 1, once: true },
  };
  
  export default function AppI() {
    const ref = useRef(null);
    const carouselRef = useRef(null);
    const { position } = useElementViewportPosition(ref);
    const [carouselEndPosition, setCarouselEndPosition] = useState(0);
    const { scrollYProgress, scrollY } = useViewportScroll();
    const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);
  
    useEffect(() => {
      window.addEventListener("scroll", () =>
        console.log({ scrollYProgress: scrollYProgress.current, scrollY })
      );
    }, []);
  
    useEffect(() => {
      if (!carouselRef || !carouselRef.current) return;
      const parent = carouselRef.current.parentElement;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
  
      const resetCarouselEndPosition = () => {
        if (carouselRef && carouselRef.current) {
          const newPosition =
            carouselRef.current.clientWidth -
            window.innerWidth +
            scrollbarWidth +
            parent.offsetLeft * 2;
  
          setCarouselEndPosition(-newPosition);
        }
      };
  
      resetCarouselEndPosition();
      const handleResize = throttle(10, resetCarouselEndPosition);
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div>
        <section ref={ref}>
          <div className="container" style={{ height: "300vh" }}>
            <div className="sticky-wrapper">
              <motion.div ref={carouselRef} className="carousel" style={{ x }}>
                {Array.from(Array(8).keys()).map((i) => (
                  <motion.div
                    {...slideAnimation}
                    key={i}
                    className="carousel__slide"
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
    
      </div>
    );
  }
  
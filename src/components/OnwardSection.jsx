import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './OnwardStyles.css';

const OnwardSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // پشکنینی قەبارەی شاشە
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 100);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ئەنیمەیشنی جوڵە بۆ دێسکتۆپ (لە مۆبایلدا دەبێتە 0 واتە لە ناوەڕاست دەمێنێتەوە)
  const moveX = useTransform(
    scrollYProgress, 
    [0, 0.45], 
    isMobile ? ["0%", "0%"] : ["5%", "240%"]
  );
  
 
   // Wave fill — لە خوارەوە بۆ سەرەوە پڕ دەبێتەوە
  const fillPercent = useTransform(scrollYProgress, [0.1, 0.8], [0, 100]);

  // ئۆپاسیتی تێکستەکان تەنها بۆ دێسکتۆپ
  const textOneOpacity = useTransform(scrollYProgress, [0.4, 0.5], isMobile ? [1, 1] : [1, 0]);
  const textTwoOpacity = useTransform(scrollYProgress, [0.5, 0.6], isMobile ? [1, 1] : [0, 1]);

  return (
    <section ref={containerRef} className="onward-container">
      <div className="sticky-wrapper max-w-7xl mx-auto">
        
        {/* تێکستی یەکەم - لە مۆبایلدا لە سەرەوەیە */}
        <motion.div className="fixed-right-text text-box-wrapper max-w-lg mx-auto text-center" style={{ opacity: textOneOpacity }}>
          <div className="text-box mt-24 lg:mt-0 max-w-lg text-center">
           
            <h3 className=''><em className='text-primary'>Turn On</em> & Drive Growth Goals</h3>
            <p className=''>The game changes when your core values connect with your offering. You unlock new audiences and your team’s potential.</p>
           
          </div>
        </motion.div>

        {/* پیتی N - لە مۆبایلدا لە ناوەڕاست جێگیرە بەڵام ڕەنگەکەی دەگۆڕێت */}
        {/* پیتی N بە ئەنیمەیشنی Wave */}
        <motion.div className="visuals-layer " style={{ x: moveX }}>
          <div className="visual-group size-72 md:size-80 lg:size-96  -translate-x-16 lg:translate-x-0 ">
            <div className="logo-n-wrapper ">
              <svg viewBox="0 0 294 332" className="logo-svg">
                <defs>
                  {/* Wave clipPath */}
                  <clipPath id="waveClip">
                    <motion.rect
                      rotate="180"
                      x="0"
                      width="294"
                      height="332"
                      style={{
                        y: useTransform(fillPercent, (v) => 332 - (332 * v) / 100),
                      }}
                    />
                  </clipPath>

                  {/* Wave mask بۆ ئەفێکتی شەپۆل */}
                  <mask id="waveMask">
                    {/* پاشخانی سپی — هەموو شوێن دیار بێت */}
                    <rect x="0" y="600" width="294"  height="332" fill="white" />

                    {/* شەپۆلی سەرەوە — ئەمە بەشی سەرەوەی fill ەکە wave دەکات */}
                    <motion.g
                      style={{
                        y: useTransform(fillPercent, (v) => 332 - (332 * v) / 100),
                      }}
                    >
                      {/* بەشی خوارەوەی mask سپی — fill نیشان بدات */}
                      <rect x="-40" y="30" width="520" rotate="360" height="340" fill="white" />

                      {/* شەپۆل — ڕەش واتە ئەم بەشە شاردراوە */}
                      <rect x="-10" y="-40" width="520" rotate="180" height="70" fill="black" />

                      {/* Wave shape */}
                      <path
                        d="M-10,20 Q30,0 73,20 T157,20 T240,20 T320,20 L320,35 L-10,35 Z"
                        fill="white"
                        className="wave-path"
                      />
                    </motion.g>
                  </mask>
                </defs>

                {/* پیتی N — ڕەنگی تاریک (پشتەوە) */}
                <path
                  d="M2.16992 330V325L18.6699 320C24.6699 318.333 29.0033 315.167 31.6699 310.5C34.3366 305.5 35.6699 299.667 35.6699 293V52.5C32.0033 44.5 29.0033 38.5 26.6699 34.5C24.6699 30.5 22.3366 27.1667 19.6699 24.5C17.0033 21.5 13.3366 17.8333 8.66992 13.5L0.169922 5V0H88.6699L254.67 226.5V38C254.67 31.3333 253.503 25.3333 251.17 20C249.17 14.6667 244.837 11.1667 238.17 9.5L221.67 5V0H293.17V5L279.67 9.5C273.67 11.5 270.003 15 268.67 20C267.337 25 266.67 30.8333 266.67 37.5V331.5H238.67L47.6699 69V293C47.6699 299.667 48.6699 305.333 50.6699 310C52.6699 314.667 56.8366 318 63.1699 320L78.1699 325V330H2.16992Z"
                  fill="#333"
                />

                {/* پیتی N — ڕەنگی سوور بە wave mask */}
                <path
                  d="M2.16992 330V325L18.6699 320C24.6699 318.333 29.0033 315.167 31.6699 310.5C34.3366 305.5 35.6699 299.667 35.6699 293V52.5C32.0033 44.5 29.0033 38.5 26.6699 34.5C24.6699 30.5 22.3366 27.1667 19.6699 24.5C17.0033 21.5 13.3366 17.8333 8.66992 13.5L0.169922 5V0H88.6699L254.67 226.5V38C254.67 31.3333 253.503 25.3333 251.17 20C249.17 14.6667 244.837 11.1667 238.17 9.5L221.67 5V0H293.17V5L279.67 9.5C273.67 11.5 270.003 15 268.67 20C267.337 25 266.67 30.8333 266.67 37.5V331.5H238.67L47.6699 69V293C47.6699 299.667 48.6699 305.333 50.6699 310C52.6699 314.667 56.8366 318 63.1699 320L78.1699 325V330H2.16992Z"
                  fill="#C61E1E"
                  mask="url(#waveMask)"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* تێکستی دووەم - لە مۆبایلدا لە خوارەوەیە */}
        <motion.div className="fixed-left-text text-box-wrapper max-w-lg text-center " style={{ opacity: textTwoOpacity }}>
          <div className="text-box  max-w-lg pt-14 md:pt-0">
           
            <h3 cclassName='text-center'><em className='text-primary'>Tune In</em> & Transform Internal Culture</h3>
            <p>Something magical happens when you tap into what you believe, and then translate that into how you hire, treat, and structure your team.</p>
           
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OnwardSection;
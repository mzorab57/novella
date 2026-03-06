import { useEffect, useRef, useState } from "react";

export const useInView = (options = 0.15) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // لێرەدا پشکنین دەکەین ئەگەر ئۆبجێکت بوو تەنها threshold وەربگرێت
  const threshold = typeof options === 'object' ? options.threshold : options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // observer.unobserve(entry.target); // ئەگەر ویستت یەکجار بێت لێرە لای مەبە
        }
      },
      { threshold: threshold || 0.15 } // دڵنیابوونەوە لە هەبوونی ژمارە
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isInView };
};
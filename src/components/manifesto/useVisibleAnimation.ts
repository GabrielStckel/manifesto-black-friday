import { useEffect, useRef, useState } from "react";

export function useVisibleAnimation<T extends HTMLElement>(once = false, rootMargin = "0px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setVisible(entry.isIntersecting);
      if (once && entry.isIntersecting) observer.disconnect();
    }, { rootMargin });
    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin]);
  return { ref, visible };
}
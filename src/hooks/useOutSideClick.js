import { useEffect, useRef } from "react";

export default function UseOutSideClick(Handler) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        Handler();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [Handler]);

  return ref;
}

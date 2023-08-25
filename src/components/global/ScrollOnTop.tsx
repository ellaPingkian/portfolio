import { useEffect } from "react";

function ScrollOnTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollOnTop;
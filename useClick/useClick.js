// return을 통해 클릭이벤트(onClick)가 실행되지 않도록 한다.

import { useEffect, useRef } from "react"

const useClick = (onClick) => {

  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [])
  return typeof onClick !== "function" ? undefined : element;
}

function App() {
  const sayHello = () => console.log("안뇽")
  const title = useClick(sayHello);
  return (
    <>
      <h1 ref={title}>Hi</h1>
    </>
  )
}


export default App

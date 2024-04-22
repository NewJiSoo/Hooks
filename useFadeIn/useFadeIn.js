// useFadeIn
// 특정 요소에 애니메이션 효과를 줄 수 있다.

import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") { return }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1;
        }
    }, [])
    return { ref: element, style: { opacity: 0 } }
}

function App() {
    const fadeInH1 = useFadeIn(2, 2);
    const fadeInP = useFadeIn(5, 10);
    return (
        <>
            {/* 리턴되는 속성이 여러가지 일 경우 spread 연산자를 사용해야 한다 */}
            {/* 아래는 fadeInH1을 props로 넘겨주고 있다 */}
            <h1 {...fadeInH1}>hello</h1>
            <p {...fadeInP}>lalalala</p>
        </>
    )
}


export default App

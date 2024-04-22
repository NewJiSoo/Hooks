//useBeforeLeave
//마우스가 정해진 위치에 벗어나면 특정 함수를 실행시킬 수 있다.

import { useEffect } from "react";


const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") { return; }

    const handle = (event) => {
        const { clientY } = event;
        // Y축이 0보다 작을 때 -> 화면 상단에 도달했을 때
        // onBefore 함수를 실행시킨다.
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle)
        return () => document.removeEventListener("mouseleave", handle)
    }, []);
}

function App() {
    const beForLife = () => console.log("leave?")
    useBeforeLeave(beForLife);
    return (
        <>
            <h1>hello</h1>
        </>
    )
}


export default App

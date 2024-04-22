//useScroll
//지정한 화면 위치에서 원하는 스타일을 입힐 수 있다.

import { useEffect, useState } from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX })
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return state
}

function App() {
    const { y } = useScroll();
    return (
        <div style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>hi</h1>
        </div>
    )
}


export default App

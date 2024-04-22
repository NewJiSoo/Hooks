// useFullscreen
// 전체화면, 원본화면으로 전환이 가능하다.

import { useRef } from "react";

const useFullscreen = (callback) => {
    const element = useRef()
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen()
            if (callback && typeof callback === "function") {
                callback(true)
            }
        }
    }
    const exitFull = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            if (element.current) {
                element.current.requestFullscreen()
                if (callback && typeof callback === "function") {
                    callback(false)
                }
            }
        }
    }
    return { element, triggerFull, exitFull }
}

function App() {
    const onFullS = (isFull) => {
        console.log(isFull ? "full" : "not full")
    }
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div>
            <div ref={element}>
                <img src="https://i.namu.wiki/i/zDwW3R7ptuHcWt5fo88HUk59BlwS-Q5Z4Wij8OMmZ6zi7S7VexTACXdDK26M3V5m575nzzzOFI2auMr4ivzQjfVBZf9e-2HxyYl3yLrDWGMJqjvf8SuFvVv-QBl9v-FoHtNN7sp8CL7W34qKJeEGOA.svg" />
                <button onClick={exitFull}>exitFull</button>
            </div>
            <button onClick={triggerFull}>Fullscreen</button>
        </div>
    )
}


export default App

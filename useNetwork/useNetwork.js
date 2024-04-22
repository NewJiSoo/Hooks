// useNetwork
// 현재 네트워크가 온라인인지 혹은 오프라인인지
// -> 현재 네트워크 상태를 알려준다

import { useEffect, useState } from "react";

const useNetwork = onChange => {
    //navigator.onLine : 웹 브라우저의 JavaScript API
    // 현재 웹페이지가 온라인 혹은 오프라인에 따라 true, false를 반환한다.
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        // 클린업 함수
        () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;
}

function App() {
    const handleNetworkChange = (online) => {
        console.log(online ? "online" : "offline")
    }
    const onLine = useNetwork(handleNetworkChange);
    return (
        <>
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </>
    )
}


export default App

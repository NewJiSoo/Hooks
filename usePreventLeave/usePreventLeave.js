// usePreventLeave
// 창을 닫거나 새로고침 시 내용 저장과 관련된 알람이 실행된다.

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    //beforeunload는 window가 닫히기 전에 function이 실행되는것을 허락한다.
    //아래 코드에서는 listener함수가 실행된다.
    const enablePreve = () => window.addEventListener("beforeunload", listener)
    const disablePreve = () => window.removeEventListener("beforeunload", listener)
    return { enablePreve, disablePreve }
}

function App() {
    const { enablePreve, disablePreve } = usePreventLeave();

    return (
        <>
            <button onClick={enablePreve}>Protect</button>
            <button onClick={disablePreve}>Unprotect</button>
        </>
    )
}


export default App

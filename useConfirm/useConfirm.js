// useConfirm
// confirm창의 "예" "아니오"를 클릭 시 특정 함수가 실행되도록 만드는 함수

const useConfirm = (message = '', onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (!onCancel || typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

// 사용방법
function App() {
    const deleteWorld = () => console.log("삭제") // 예
    const abort = () => console.log("취소") // 아니오
    // 삭제하시겠습니까?
    const confirmDelete = useConfirm("진짜?", deleteWorld, abort)
    return (
        <>
            <button onClick={confirmDelete}>Delete the world</button>
        </>
    )
}


export default App

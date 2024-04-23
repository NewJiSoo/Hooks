//useNotification
//윈도우 알람을 만들 수 있다.

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options)
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, options)
        }
    }
    return fireNotif;
}

function App() {
    const triggerNotif = useNotification("Can I steal your kimchi?", { body: "좋아" });
    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    )
}

export default App

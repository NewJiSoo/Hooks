// useTitle
// 기본값(<title>loading...</title>)에서
// <title>원하는 타이틀</title>로 변경할 수 있다

import { useEffect, useState } from "react"

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

// 사용 예시
function App() {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <>

    </>
  )
}


export default App

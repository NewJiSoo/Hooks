// useTab : 클릭한 항목을 보여준다.
// contents[0] 버튼 클릭 시 해당 content를 보여준다.

const contents = [
    {
        tab: "Section 1",
        content: "ㅋㅋ"
    },
    {
        tab: "Section 2",
        content: "???"
    },
]


const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab)

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

// 사용하는 방법
function App() {
    const { currentItem, changeItem } = useTabs(0, contents)
    return (
        <>
            {contents.map((section, index) =>
                <button onClick={() => changeItem(index)} key={section.tab}>{section.tab}</button>
            )}
            {currentItem.contents}
        </>
    )
}
// useInput : input을 업데이트
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const { target: { value } } = e
        let willUpdate = true
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    }


    return { value, onChange }
}
// 사용 예시
// 특정 문자나 숫자를 검증할 수 있다...!
const maxLen = (value) => !value.includes("@")
const name = useInput("JJ", maxLen)
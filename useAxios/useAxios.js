// useAxios
//
// npm install axios
import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// axios는 instance를 만드는 것을 허용하고 configuration을 할 수 있다.

// 만약 instance를 가지고 있지 않을 때 기본값defaultAxios으로 설정이 가능하다
const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    })
    const [trigger, setTrigger] = useState(0);
    if (!options.url) {
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    useEffect(() => {
        axiosInstance(options)
            .then(data => {
                setState({
                    //이전 상태를 복사하고 일부 속성만 변경하기 위해
                    // 기존 state + 바뀐 loading + 바뀐 data
                    ...state,
                    loading: false,
                    data
                })
            })
            .catch(error => {
                setState({ ...state, loading: false, error })
            });
    }, [trigger]);
    return { ...state, refetch };
}

export default useAxios

// 사용방법
import useAxios from "./useAxios";

function App() {
    const { loading, data, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
    });
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && "로딩"}</h2>
            <button onClick={refetch}>refetch</button>
        </div>
    )
}
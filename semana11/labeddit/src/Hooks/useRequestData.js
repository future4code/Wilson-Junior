import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (iniitalData, url) => {
    const [data, setData] = useState(iniitalData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
            alert('Ocorreu um erro, tente novamente')
        })
    }, [url])

    return(data)
}

export default useRequestData

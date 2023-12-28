import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`).then(res => {
            setData(res.data)
        })
    })
    return (
        <div>
            <img src={`${data.image}`} alt="" />
        </div>
    )
}

export default Detail
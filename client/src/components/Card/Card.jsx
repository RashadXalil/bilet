import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import MainContext from '../../context/Context'
const Card = ({ item }) => {
    const { deleteHandler, addToWishlist } = useContext(MainContext)
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={`${item.image}`} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description} date:{item.date}</p>
                <Link to={`/${item._id}`}>Detail</Link>
                <button className='btn btn-danger' onClick={() => {
                    deleteHandler(item._id)
                }}>delete</button>
                <button onClick={() => {
                    addToWishlist(item)
                }}>Add to wishlist</button>
            </div>
        </div>
    )
}

export default Card
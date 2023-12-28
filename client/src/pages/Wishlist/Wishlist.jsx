import React, { useContext } from 'react'
import MainContext from '../../context/Context'

const Wishlist = () => {
    const { wishListItems, removeFromWishlist } = useContext(MainContext)
    return (
        <div> <ul style={{ paddingTop: "100px" }}>
            {
                wishListItems?.map((item, index) => {
                    return <li key={index}>{item.title}<button onClick={() => {
                        removeFromWishlist(item._id)
                    }}>delete</button></li>
                })
            }
        </ul></div>
    )
}

export default Wishlist
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Add from "./pages/Add/Add";
import Header from "./layout/Header/Header";
import './App.css'
import Footer from "./layout/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios"
import MainContext from "./context/Context";
import Wishlist from "./pages/Wishlist/Wishlist";
function App() {
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [filteredData, setFilteredData] = useState([])
    const [wishListItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [])
    const handleFilter = () => {
        setFilteredData([...blogs.sort((a, b) => b.likes - a.likes)])
    }
    const addToWishlist = (item) => {
        const target = wishListItems.find(wishlistItem => wishlistItem._id == item._id)
        console.log(target)
        if (target) {
            console.error("item wishlistde var")
        } else {
            setWishlistItems([...wishListItems, item])
            localStorage.setItem("wishlistItems", JSON.stringify([...wishListItems, item]))
        }
    }
    const removeFromWishlist = (id) => {
        const item = wishListItems.find(item => item._id == id)
        wishListItems.splice(wishListItems.indexOf(item), 1)
        setWishlistItems([...wishListItems])
        localStorage.setItem("wishlistItems", JSON.stringify([...wishListItems]))
    }
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/blogs/${id}`).then(res => {
            setBlogs([...res.data])
            setFilteredData([...res.data])
        })
    }
    const searchHandler = (searchValue) => {
        if (searchValue) {
            setFilteredData([...blogs.filter(item => item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
        }
        else {
            setFilteredData([...blogs])
        }
    }
    const data = {
        blogs, setBlogs,
        error, setError,
        loading, setLoading,
        filteredData, setFilteredData,
        wishListItems, setWishlistItems,
        searchHandler, handleFilter, deleteHandler, addToWishlist, removeFromWishlist
    }
    useEffect(() => {
        axios.get("http://localhost:8000/blogs").then(res => {
            setBlogs(res.data)
            setLoading(false)
            setFilteredData(res.data)
        }).catch(error => {
            setLoading(false)
            setError(error)
        })
    }, [])
    return (
        <MainContext.Provider value={data}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/:id" element={<Detail />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </MainContext.Provider>
    );
}

export default App;

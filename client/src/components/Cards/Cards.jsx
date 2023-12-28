import React, { useContext, useState } from 'react'
import MainContext from '../../context/Context'
import Card from '../Card/Card'
import "./Cards.scss"

const Cards = () => {
    const { filteredData, blogs } = useContext(MainContext)
    return (
        <div className='container cards'>
            <div className="row">
                {
                    filteredData.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <Card item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards
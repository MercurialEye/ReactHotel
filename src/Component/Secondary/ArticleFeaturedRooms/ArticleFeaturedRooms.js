import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import filterFunc from "./auxiliaryThings";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const ArticleFeaturedRooms = (props) => {
    const {imgSrc, price, id, description} = filterFunc(props.articleList, props.id)

    return (
        <article className="room">
            <div className="img-container">
                <img src={imgSrc} alt="single room"/>

                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/Room/${id}`} className="btn-primary room-link">
                    Features
                </Link>
                <p className="room-info">{description}</p>
            </div>
        </article>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    return (state.main)
}


export default connect(mapStateToProps, null)(ArticleFeaturedRooms)
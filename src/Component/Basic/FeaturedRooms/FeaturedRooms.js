import React, {Component} from 'react'
import renderArticles from "./auxiliaryThings";
import {connect} from "react-redux";

//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


class FeaturedRooms extends Component {
    render() {

        const stateArticles = [
            Object.values(this.props.articleList)[0],
            Object.values(this.props.articleList)[1],
            Object.values(this.props.articleList)[2],
        ]

        return (
            <section className="featured-rooms">
                <div className="section-title">
                    <h4>featured rooms</h4>
                    <div/>
                </div>
                <div className="featured-rooms-center">
                    {renderArticles(stateArticles)}
                </div>
            </section>
        )
    }
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    return (state.main)
}


export default connect(mapStateToProps, null)(FeaturedRooms)
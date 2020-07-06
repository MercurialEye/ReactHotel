import ArticleFeaturedRooms from "../../Secondary/ArticleFeaturedRooms";
import React from "react";

const renderArticles = (state) => (
    state.map((room, index) => (
        <ArticleFeaturedRooms
            id={room.id}
            key={index + room.price}
        />
    ))
)

export default renderArticles
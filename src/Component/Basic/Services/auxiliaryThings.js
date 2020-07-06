import ArticleServices from "../../Secondary/ArticleServices";
import React from "react";

const renderArticles = (state) => (
    state.articleList.map((article, index) => {
        return (
            <ArticleServices
                key={index + article.type}
                article={article}
            />
        )
    })
)

export default renderArticles
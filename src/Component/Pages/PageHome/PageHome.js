import React from 'react'
import Services from "../../Basic/Services";
import FeaturedRooms from "../../Basic/FeaturedRooms";
import Header from "../../Main/Header";

const PageHome = () => {
    return (
        <React.Fragment>
            <Header number={0} Header/>
            <Services/>
            <FeaturedRooms/>
        </React.Fragment>
    )
}

export default PageHome
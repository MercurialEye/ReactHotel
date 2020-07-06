import React from 'react'
import {Link} from "react-router-dom";
import listMenuImg from '../../../img/defaulBgcList.jpeg'
import headerMenuImg from '../../../img/defaultBcgMain.jpeg'

//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const Header = (props) => {
    console.log()
    const state = [
        {header: 'Luxurious rooms', label: 'OUR ROOMS', link: '/RoomList', switch: true},
        {header: 'Our Rooms', label: 'RETURN HOME', link: '/', switch: false},
        {header: props.title, label: 'BACK TO ROOMS', link: '/RoomList', switch: false},
    ]

    const getBackground = ({Room, imgSrc, RoomList, Header}) => {
        if (Room) {
            return imgSrc
        } else if (RoomList) {
            return listMenuImg
        } else if (Header) {
            return headerMenuImg
        }
    }


    return (
        <header className="defaultHero"
                style={{backgroundImage: `url(${getBackground(props)})`}}>
            <div className="banner">
                <h1>{state[props.number].header}</h1>
                <div/>
                {state[props.number].switch ? <p>Deluxe rooms starting at $299</p> : null}
                <Link className="btn-primary" to={state[props.number].link}>
                    {state[props.number].label}
                </Link>
            </div>
        </header>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export default Header
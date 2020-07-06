import React from 'react'
import details1 from "../../../img/room/details-1.jpeg";
import details2 from "../../../img/room/details-2.jpeg";
import details3 from "../../../img/room/details-3.jpeg";
import Header from "../../Main/Header";
import {connect} from "react-redux";

const PageRoom = (props) => {
    const name = 'Family deluxe'
    const bigText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consectetur, consequuntur cumque debitis dolorem eius et fugiat hic, labore maiores molestiae non quae quas rem repellat sapiente sunt! Ab aperiam at autem commodi, ea eaque eligendi et hic illo magnam maiores quae, quisquam quo ratione, repudiandae saepe tempora ullam vero! Culpa, cum doloribus et ipsa laborum minus nostrum voluptatem. Asperiores at aut consequatur debitis dignissimos error est eum exercitationem hic ipsam minima minus optio perferendis quos, similique suscipit voluptas!'
    const itemId = props.match.params.id

    const filterFunc = () => {
        const list = Object.values(props.articleList)
        const newList = []
        for (const item of list) {
            if (+item.id === +itemId) {
                newList.push(item)
            }
        }
        return (newList[0])
    }

    const {imgSrc, description, breakfast, persons, pets, price, size,} = filterFunc()


    return (
        <React.Fragment>
            <Header number={2} title={description} imgSrc={imgSrc} Room/>
            <div>
                <section className="single-room">
                    <div className="single-room-images">
                        <img src={details1} alt={name}/>
                        <img src={details2} alt={name}/>
                        <img src={details3} alt={name}/>
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{bigText}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : {size} SQFT</h6>
                            <h6>Max capacity : {persons} people</h6>
                            <h6>{pets ? 'No Pets Allowed' : 'Pets Allowed'}</h6>
                            <h6>{breakfast ? 'Free breakfast included' : null}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        <li>- Plush pillows and breathable bed linens</li>
                        <li>- Soft, oversized bath towels</li>
                        <li>- Full-sized, pH-balanced toiletries</li>
                        <li>- Complimentary refreshments</li>
                        <li>- Adequate safety/security</li>
                        <li>- Internet</li>
                        <li>- Comfortable beds</li>
                    </ul>
                </section>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return (state.main)
}

export default connect(mapStateToProps, null)(PageRoom)
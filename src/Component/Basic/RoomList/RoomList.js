import React, {Component} from 'react'
import funcRender from "./auxiliaryThings";
import {connect} from "react-redux";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


class RoomList extends Component {

    render() {
        return (
            <section className="roomslist">
                <div className="roomslist-center">
                    {funcRender(this.props.roomList, this.props.stateForm)}
                </div>
            </section>
        );
    }
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    return {
        roomList: state.main
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         : () => dispatch(()),
//     }
// }

export default connect(mapStateToProps, null)(RoomList)
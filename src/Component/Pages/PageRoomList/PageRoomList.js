import React, {Component} from 'react'
import SettingsRooms from "../../Basic/SettingsRooms";
import RoomList from "../../Basic/RoomList";
import stateSettings from "./stateSettings";
import Header from "../../Main/Header";

class PageRoomList extends Component {
    state = stateSettings

    onChangeFormGroupSelect = (event, isGuest) => {
        const value = event.target.value
        if (isGuest) {
            this.setState({
                valueGuest: +value,
            })
        } else {
            this.setState({
                valueRoomType: value,
            })
        }
    }

    onChangeFormExtraInput = (name) => {
        if (name === 'Pets') {
            this.setState(state => ({
                formPetsValue: !state.formPetsValue,
            }))
        } else {
            this.setState(state => ({
                formBreakfastValue: !state.formBreakfastValue,
            }))
        }
    }

    onChangeRoomSizeInput = (event, name) => {
        const value = event.target.value
        if (name === 'min') {
            this.setState({
                sizeFormMin: +value,
            })
        } else {
            this.setState({
                sizeFormMax: +value,
            })
        }
    }

    onChangeRangeInput = (event) => {
        const value = event.target.value
        this.setState({
            rangeFormValue: +value
        })
    }


    render() {
        return (
            <React.Fragment>
                <Header number={1} RoomList/>
                <SettingsRooms
                    stateForm={this.state}
                    onChangeFormGroupSelect={this.onChangeFormGroupSelect}
                    onChangeFormExtraInput={this.onChangeFormExtraInput}
                    onChangeRoomSizeInput={this.onChangeRoomSizeInput}
                    onChangeRangeInput={this.onChangeRangeInput}
                />
                <RoomList
                    stateForm={this.state}
                />
            </React.Fragment>
        )
    }
}

export default PageRoomList
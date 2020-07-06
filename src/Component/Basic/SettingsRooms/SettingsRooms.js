import React from "react";
import {
    renderFormGroupSelect,
    renderRangeInput,
    renderRoomSizeInput,
    renderExtraInput,
} from "./auxiliaryThings";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const SettingsRooms = (props) => {
    return (
        <section className="filter-container">
            <div className="section-title">
                <h4>search rooms</h4>
                <div></div>
            </div>

            <form className="filter-form">
                {renderFormGroupSelect(props.stateForm, props.onChangeFormGroupSelect)}
                {renderRangeInput(props.stateForm, props.onChangeRangeInput)}
                {renderRoomSizeInput(props.stateForm, props.onChangeRoomSizeInput)}
                {renderExtraInput(props.stateForm, props.onChangeFormExtraInput)}
            </form>
        </section>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export default SettingsRooms
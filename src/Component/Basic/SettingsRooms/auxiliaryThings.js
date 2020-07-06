import React from "react";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export const renderSelect = (array) => {
    return (
        array.map((item, index) => (
            <option value={item} key={item + index + item}>{item}</option>
        ))
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export const renderFormGroupSelect = ({forms, valueRoomType, valueGuest}, onChangeFormGroupSelect) => {
    return (
        forms.map((item, index) => (
            <div className="form-group" key={item.label + index}>
                <label htmlFor="type">{item.label}</label>
                <select
                    name="type"
                    id="type"
                    className="form-control"
                    value={item.isGuest ? +valueGuest : valueRoomType}
                    onChange={event => onChangeFormGroupSelect(event, item.isGuest)}
                >
                    {renderSelect(item.array)}
                </select>
            </div>
        ))
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export const renderRangeInput = ({rangeFormValue}, onChangeRangeInput) => {
    return (
        <div className="form-group">
            <label htmlFor='price'>Room price ${rangeFormValue}</label>
            <input
                type="range" min="0" max="600" className="form-control"
                name='price' id='price' value={rangeFormValue}
                onChange={event => onChangeRangeInput(event)}
            />
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export const renderRoomSizeInput = ({sizeFormMin, sizeFormMax}, onChangeRoomSizeInput) => {
    return (
        <div className="form-group">
            <label htmlFor="size">Room size</label>
            <div className="size-inputs">
                <input
                    type="number" name="minSize" id="size"
                    className="size-input" value={sizeFormMin}
                    onChange={event => onChangeRoomSizeInput(event, 'min')}
                />

                <input
                    type="number" name="maxSize" id="size"
                    className="size-input" value={sizeFormMax}
                    onChange={event => onChangeRoomSizeInput(event, 'max')}
                />
            </div>
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const renderExtraInputSupport = (name, value, onChangeFormExtraInput) => {
    return (
        <div className="single-extra">
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={value}
                onChange={() => onChangeFormExtraInput(name)}
            />
            <label htmlFor={name}>{name}</label>
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export const renderExtraInput = ({formPetsValue, formBreakfastValue}, onChangeFormExtraInput) => {

    return (
        <div className="form-group">
            {renderExtraInputSupport('Pets', formPetsValue, onChangeFormExtraInput)}
            {renderExtraInputSupport('Breakfast', formBreakfastValue, onChangeFormExtraInput)}
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


import ArticleFeaturedRooms from "../../Secondary/ArticleFeaturedRooms";
import React from "react";

const filterFunctionType1 = (formValue, value) => {
    if (formValue === 'all') {
        return true
    }

    const conf = formValue === value
    return conf

}

const filterFunctionType2 = (valueGuest, persons) => {
    return persons === valueGuest
}

const filterFunctionType3 = (rangeFormValue, price) => {
    const conf = price <= rangeFormValue
    return conf
}

const filterFunctionType4 = (sizeFormMax, sizeFormMin, size) => {
    const conf1 = sizeFormMax >= size
    const conf2 = sizeFormMin <= size
    const conf = conf1 && conf2
    return conf
}

const filterFunctionType5 = (formValue, value) => {
    return !formValue || value
}


const listFilteringFunction = (room, stateForm) => {
    const {formBreakfastValue, formPetsValue, rangeFormValue, sizeFormMax, sizeFormMin, valueGuest, valueRoomType} = stateForm

    const {breakfast, pets, price, size, persons, type} = room

    const confirm1 = filterFunctionType1(valueRoomType, type)
    const confirm2 = filterFunctionType2(valueGuest, persons)
    const confirm3 = filterFunctionType3(rangeFormValue, price)
    const confirm4 = filterFunctionType4(sizeFormMax, sizeFormMin, size)
    const confirm5 = filterFunctionType5(formBreakfastValue, breakfast)
    const confirm6 = filterFunctionType5(formPetsValue, pets)

    return (confirm1 && confirm2 && confirm3 && confirm4 && confirm5 && confirm6)
}

const funcRender = (roomList, stateForm) => (
    Object.keys(roomList.articleList).map((roomName, index) => {
        const room = roomList.articleList[roomName]
        if (listFilteringFunction(room, stateForm)) {
            return (
                <ArticleFeaturedRooms
                    id={room.id}
                    key={index + room.price}
                />
            )
        }
    })
)

export default funcRender
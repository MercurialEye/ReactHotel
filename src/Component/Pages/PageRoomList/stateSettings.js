const stateForm = {
    formBreakfastValue: false,
    formPetsValue: false,
    forms: [
        {
            label: 'Room Type',
            isGuest: false,
            array: ['all', 'triple', 'family', 'double', 'single',]
        },
        {
            label: 'Guests',
            isGuest: true,
            array: [1, 2, 3, 4, 5, 6,]
        },
    ],
    rangeFormValue: 600,
    sizeFormMax: 3000,
    sizeFormMin: 0,
    valueRoomType: 'all',
    valueGuest: 1,
}

export default stateForm
import room1 from "../../../img/rooms/room-1.jpeg";
import room2 from "../../../img/rooms/room-2.jpeg";
import room3 from "../../../img/rooms/room-3.jpeg";
import room4 from "../../../img/rooms/room-4.jpeg";
import room5 from "../../../img/rooms/room-5.jpeg";
import room6 from "../../../img/rooms/room-6.jpeg";
import room7 from "../../../img/rooms/room-7.jpeg";
import room8 from "../../../img/rooms/room-8.jpeg";
import room9 from "../../../img/rooms/room-9.jpeg";
import room10 from "../../../img/rooms/room-10.jpeg";
import room11 from "../../../img/rooms/room-11.jpeg";
import room12 from "../../../img/rooms/room-12.jpeg";
import room13 from "../../../img/rooms/room-13.jpeg";
import room14 from "../../../img/rooms/room-14.jpeg";
import room15 from "../../../img/rooms/room-15.jpeg";

const mainState = {
    articleList: {
        article1: {
            imgSrc: room1,
            price: 100,
            type: 'single',
            description: 'Single economy',
            size: 200,
            persons: 1,
            pets: false,
            breakfast: false,
            id: 1
        },
        article2: {
            imgSrc: room2,
            price: 150,
            type: 'single',
            description: 'Single basic',
            size: 250,
            persons: 1,
            pets: false,
            breakfast: false,
            id: 2
        },
        article3: {
            imgSrc: room3,
            price: 250,
            type: 'single',
            description: 'Single standard',
            size: 300,
            persons: 1,
            pets: true,
            breakfast: false,
            id: 3
        },
        article4: {
            imgSrc: room4,
            price: 300,
            type: 'single',
            description: 'Single deluxe',
            size: 400,
            persons: 1,
            pets: true,
            breakfast: true,
            id: 4
        },
        article5: {
            imgSrc: room5,
            price: 200,
            type: 'double',
            description: 'Double economy',
            size: 300,
            persons: 2,
            pets: false,
            breakfast: false,
            id: 5
        },
        article6: {
            imgSrc: room6,
            price: 250,
            type: 'double',
            description: 'Double basic',
            size: 350,
            persons: 2,
            pets: false,
            breakfast: false,
            id: 6
        },
        article7: {
            imgSrc: room7,
            price: 300,
            type: 'double',
            description: 'Double standard',
            size: 400,
            persons: 2,
            pets: true,
            breakfast: false,
            id: 7
        },
        article8: {
            imgSrc: room8,
            price: 400,
            type: 'double',
            description: 'Double deluxe',
            size: 500,
            persons: 2,
            pets: true,
            breakfast: true,
            id: 8
        },
        article9: {
            imgSrc: room9,
            price: 300,
            type: 'family',
            description: 'Family economy',
            size: 500,
            persons: 3,
            pets: false,
            breakfast: false,
            id: 9
        },
        article10: {
            imgSrc: room10,
            price: 350,
            type: 'family',
            description: 'Family basic',
            size: 550,
            persons: 4,
            pets: false,
            breakfast: false,
            id: 10
        },
        article11: {
            imgSrc: room11,
            price: 400,
            type: 'family',
            description: 'Family standard',
            size: 600,
            persons: 5,
            pets: true,
            breakfast: false,
            id: 11
        },
        article12: {
            imgSrc: room12,
            price: 500,
            type: 'family',
            description: 'Family deluxe',
            size: 700,
            persons: 6,
            pets: true,
            breakfast: true,
            id: 12
        },
        article13: {
            imgSrc: room13,
            price: 500,
            type: 'triple',
            description: 'Triple economy',
            size: 1200,
            persons: 3,
            pets: false,
            breakfast: false,
            id: 13
        },
        article14: {
            imgSrc: room14,
            price: 600,
            type: 'triple',
            description: 'Triple basic',
            size: 3000,
            persons: 3,
            pets: false,
            breakfast: true,
            id: 14
        },
        article15: {
            imgSrc: room15,
            price: 200,
            type: 'triple',
            description: 'Triple standard',
            size: 400,
            persons: 3,
            pets: true,
            breakfast: true,
            id: 15
        },
    }
}

export default mainState
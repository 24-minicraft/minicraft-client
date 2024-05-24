import { IDataResponse } from "@/apis/characters"

export const CharacterListResponse: IDataResponse = {
    data: {
        character_list: [
            {
                id: 1,
                name: "테스트1",
                health: 100,
                defense: 20,
                lucky: 30,
                work: {
                    type: "COLLECTION", // type:null
                    start_time: "2024-05-22T14:40:05", // start_time:null
                    duration: 10000, //초(int) // duration:null
                    region: "초원",
                },
                equipment_list: [{ category: "ACCESSORY", type: "가나다" }],
                lastDamageTime: "2024-05-22T10:05:05", // null 가능
            },
            {
                id: 2,
                name: "테스트2",
                health: 99,
                defense: 0,
                lucky: 0,
                work: {
                    type: "WAR", // type:null
                    start_time: "2024-05-16T12:00:05", // start_time:null
                    duration: 99, //초(int) // duration:null
                    region: "초원",
                },
                equipment_list: [{ category: "ACCESSORY", type: "가나다" }],
                lastDamageTime: "2024-05-16T12:10:05", // null 가능
            },
            {
                id: 3,
                name: "테스트3",
                health: 100,
                defense: 0,
                lucky: 0,
                work: {
                    type: null, // type:null
                    start_time: null, // start_time:null
                    duration: null, //초(int) // duration:null
                    region: null,
                },
                equipment_list: [],
                lastDamageTime: null, // null 가능
            },
        ],
    },
    isLoading: false,
}

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
                    start_time: "2024-05-16T12:00:05", // start_time:null
                    duration: 180, //초(int) // duration:null
                    region: "초원",
                },
                equipment_list: [{ category: "ACCESSORY", type: "가나다" }],
                lastDamageTime: "2024-05-16T12:10:05", // null 가능
            },
            {
                id: 2,
                name: "테스트2",
                health: 99,
                defense: 0,
                lucky: 0,
                work: {
                    type: "COLLECTION", // type:null
                    start_time: "yyyy-MM-dd HH:mm:ss", // start_time:null
                    duration: 180, //초(int) // duration:null
                    region: "sdf",
                },
                equipment_list: [{ category: "ACCESSORY", type: "" }],
                lastDamageTime: "yyyy-MM-dd HH:mm:ss", // null 가능
            },
            {
                id: 3,
                name: "테스트3",
                health: 100,
                defense: 0,
                lucky: 0,
                work: {
                    type: "COLLECTION", // type:null
                    start_time: "yyyy-MM-dd HH:mm:ss", // start_time:null
                    duration: 180, //초(int) // duration:null
                    region: "sdf",
                },
                equipment_list: [{ category: "ACCESSORY", type: "" }],
                lastDamageTime: "yyyy-MM-dd HH:mm:ss", // null 가능
            },
        ],
    },
}

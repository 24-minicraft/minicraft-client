import { IDataResponse } from "@/apis/characters/type"

export const CharacterListResponse: IDataResponse = {
    data: {
        character_list: [
            {
                id: 1,
                name: "테스트1",
                health: 100,
                defense: 20,
                lucky: 30,
                work: null,
                equipment_list: [{ category: "ACCESSORY", type: "가나다" }],
                last_damage_time: "2024-05-22T10:05:05", // null 가능
            },
            {
                id: 2,
                name: "테스트2",
                health: 99,
                defense: 0,
                lucky: 0,
                work: null,
                equipment_list: [{ category: "ACCESSORY", type: "가나다" }],
                last_damage_time: "2024-05-16T12:10:05", // null 가능
            },
            {
                id: 3,
                name: "테스트3",
                health: 100,
                defense: 0,
                lucky: 0,
                work: null,
                equipment_list: [],
                last_damage_time: null, // null 가능
            },
        ],
    },
    isLoading: false,
}

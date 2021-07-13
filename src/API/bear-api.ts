import {instance} from "./api";
import {BearItemType} from "../types/types";
import {itemByPage} from "../constants/constants";

export const bearAPI = {
    // массив общей информации по всем персонажам
    async getBearItems(currentPage: number, abvMin: number, abvMax: number) {
        const response = await instance.get<Array<BearItemType>>(`beers?page=${currentPage}&per_page=${itemByPage}&abv_gt=${abvMin}&abv_lt=${abvMax}`);
        return response.data;
    },
};
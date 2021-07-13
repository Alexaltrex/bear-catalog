import {BaseThunkType, GetActionsType} from "../store";
import {BearItemType, FilterByAbvType} from "../../types/types";
import {bearAPI} from "../../API/bear-api";


//=============== INITIAL =============
const initialState = {
    isLoading: false,
    bearItems: [] as Array<BearItemType>,
    filterByAbv: 'none' as FilterByAbvType,
    searchName: '',
    totalPageCount: 10,
    currentPage: 1,
};

//============== REDUCER ================
const bearReducer = (state = initialState, action: BearActionsType): InitialStateType => {
    switch (action.type) {
        case 'BEAR_CATALOG/SET_IS_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        case 'BEAR_CATALOG/SET_BEAR_ITEMS': {
            return {...state, bearItems: action.bearItems}
        }
        case 'BEAR_CATALOG/SET_FILTER_BY_ABV': {
            return {...state, filterByAbv: action.filterByAbv}
        }
        case 'BEAR_CATALOG/SET_SEARCH_NAME': {
            return {...state, searchName: action.searchName}
        }
        case 'BEAR_CATALOG/SET_TOTAL_PAGE_COUNT': {
            return {...state, totalPageCount: action.totalPageCount}
        }
        case 'BEAR_CATALOG/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }
};

//============== ACTIONS =================
export const bearAC = {
    setIsLoading: (isLoading: boolean) => ({type: 'BEAR_CATALOG/SET_IS_LOADING', isLoading} as const),
    setBearItems: (bearItems: Array<BearItemType>) => ({type: 'BEAR_CATALOG/SET_BEAR_ITEMS', bearItems} as const),
    setFilterByAbv: (filterByAbv: FilterByAbvType) => ({type: 'BEAR_CATALOG/SET_FILTER_BY_ABV', filterByAbv} as const),
    setSearchName: (searchName: string) => ({type: 'BEAR_CATALOG/SET_SEARCH_NAME', searchName} as const),
    setTotalPageCount: (totalPageCount: number) => ({type: 'BEAR_CATALOG/SET_TOTAL_PAGE_COUNT', totalPageCount} as const),
    setCurrentPage: (currentPage: number) => ({type: 'BEAR_CATALOG/SET_CURRENT_PAGE', currentPage} as const),
};

//================ THUNK CREATOR ==================
export const getBearItems = (currentPage: number): ThunkType => async (dispatch) => {
    try {
        dispatch(bearAC.setIsLoading(true));
        const response = await bearAPI.getBearItems(currentPage);
        dispatch(bearAC.setBearItems(response));
    } catch (e) {
        console.error(e.message);
        console.error(e.stack);
    } finally {
        dispatch(bearAC.setIsLoading(false));
    }
};




//=============== TYPES ==================
export type InitialStateType = typeof initialState;
export type BearActionsType = GetActionsType<typeof bearAC>;
type ThunkType = BaseThunkType<BearActionsType>
export default bearReducer;
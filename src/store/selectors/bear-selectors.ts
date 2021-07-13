import {StateType} from "../store";


export const getIsLoading  = (state: StateType) => state.bear.isLoading;
export const getBearItemsSelector  = (state: StateType) => state.bear.bearItems;
export const getFilterByAbv  = (state: StateType) => state.bear.filterByAbv;
export const getSearchName  = (state: StateType) => state.bear.searchName;
export const getTotalPageCount  = (state: StateType) => state.bear.totalPageCount;
export const getCurrentPage  = (state: StateType) => state.bear.currentPage;


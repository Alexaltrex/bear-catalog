import {Action, applyMiddleware, combineReducers, createStore, Middleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import bearReducer from "./reducers/bear-reducer";

let rootReducer = combineReducers({
    bear: bearReducer,
});

const middleware: Array<Middleware> = [thunkMiddleware];
export const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(...middleware))
        : applyMiddleware(...middleware)
);

//======================== TYPE ==========================
export type StateType = ReturnType<typeof rootReducer>
export type GetActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, StateType, unknown, A>
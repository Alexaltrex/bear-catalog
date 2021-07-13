import React, {ReactElement, useEffect} from 'react';
import {createStyles, makeStyles} from "@material-ui/styles";
import { Theme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {getBearItemsSelector, getCurrentPage, getIsLoading} from "../../store/selectors/bear-selectors";
import CircularPreloader from "../common/CircularPreloader";
import { BearItem } from './BearItem/BearItem';
import {getBearItems} from "../../store/reducers/bear-reducer";
import {PaginationCustom} from "./PaginationCustom/PaginationCustom";

//============= CUSTOM HOOK =============
const useMain = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bearItems = useSelector(getBearItemsSelector);
    const isLoading = useSelector(getIsLoading);
    const currentPage = useSelector(getCurrentPage);

    const bearItemsJSX = bearItems?.map(el => <BearItem key={el.id} {...el}/>)

    useEffect(() => {
        dispatch(getBearItems(currentPage))
    }, [dispatch, currentPage])

    return {
        classes, bearItemsJSX, isLoading
    }
};

//============== COMPONENT ==================
export const Main: React.FC<{}> = (): ReactElement => {
    const {
        classes, bearItemsJSX, isLoading
    } = useMain();

    if (isLoading) {
        return <CircularPreloader size={100} styleType='absolute'/>
    }

    return (
        <main className={classes.main}>
            <PaginationCustom />
            <div className={classes.items}>
                {bearItemsJSX}
            </div>

        </main>
    );
};

export default Main;

//============================= STYLE ==========================
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            position: 'relative',
            backgroundColor: theme.palette.info.light,
            height: '100%',
            boxSizing: 'border-box',
            padding: 10,
            overflow: 'auto'
        },
        items: {
            marginTop: 10,
        },
    }));
import React, {ReactElement, useEffect} from 'react';
import {createStyles, makeStyles} from "@material-ui/styles";
import { Theme } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {
    getAbvMax,
    getAbvMin,
    getBearItemsSelector,
    getCurrentPage,
    getIsLoading
} from "../../store/selectors/bear-selectors";
import CircularPreloader from "../common/CircularPreloader";
import { BearItem } from './BearItem/BearItem';
import {bearAC, getBearItems} from "../../store/reducers/bear-reducer";
import {PaginationCustom} from "./PaginationCustom/PaginationCustom";
import {Filter} from "./Filter/Filter";
import {NumberParam, useQueryParam} from "use-query-params";

//============= CUSTOM HOOK =============
const useMain = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bearItems = useSelector(getBearItemsSelector);
    const isLoading = useSelector(getIsLoading);
    const currentPage = useSelector(getCurrentPage);
    const abvMin = useSelector(getAbvMin);
    const abvMax = useSelector(getAbvMax);

    //=============================== useQueryParam ==========================
    const [currentPageQuery, setCurrentPageQuery] = useQueryParam('page', NumberParam);
    const [abvMinQuery, setAbvMinQuery] = useQueryParam('abv_min', NumberParam);
    const [abvMaxQuery, setAbvMaxQuery] = useQueryParam('abv_max', NumberParam);
    // URL => STATE
    useEffect(() => {
        dispatch(bearAC.setCurrentPage(currentPageQuery ? currentPageQuery : currentPage));
        dispatch(bearAC.setAbvMin(abvMinQuery ? abvMinQuery : abvMin));
        dispatch(bearAC.setAbvMax(abvMaxQuery ? abvMaxQuery : abvMax));
    }, []);
    // STATE => URL
    useEffect(() => {
        setCurrentPageQuery(currentPage !== 1 ? currentPage : undefined);
        setAbvMinQuery(abvMin !== 0 ? abvMin : undefined);
        setAbvMaxQuery(abvMax !== 10 ? abvMax : undefined);
    }, [
        currentPage,
        abvMin,
        abvMax
    ]);

    const bearItemsJSX = bearItems?.map(el => <BearItem key={el.id} {...el}/>)

    useEffect(() => {
        dispatch(getBearItems(currentPage, abvMin, abvMax))
    }, [dispatch, currentPage, abvMin, abvMax])

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
            <Filter/>
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
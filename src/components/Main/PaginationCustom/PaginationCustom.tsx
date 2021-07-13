import Pagination from "@material-ui/lab/Pagination"
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getTotalPageCount} from "../../../store/selectors/bear-selectors";
import {bearAC} from "../../../store/reducers/bear-reducer";

export const PaginationCustom: FC<{}> = () => {
    const currentPage = useSelector(getCurrentPage);
    const totalPageCount = useSelector(getTotalPageCount);
    const dispatch = useDispatch()
    const onChangeHandler = (e: object, page: number) => {
        dispatch(bearAC.setCurrentPage(page));
    }
    return (
        <Pagination count={totalPageCount}
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={onChangeHandler}
        />
    )
}
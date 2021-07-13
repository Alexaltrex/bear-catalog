import Slider from "@material-ui/core/Slider";
import {FC, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {getAbvMax, getAbvMin} from "../../../store/selectors/bear-selectors";
import {bearAC} from "../../../store/reducers/bear-reducer";

export const Filter: FC<{}> = () => {
    const abvMin = useSelector(getAbvMin);
    const abvMax = useSelector(getAbvMax);
    const dispatch = useDispatch();
    const [value, setValue] = useState<number[]>([abvMin, abvMax]);
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const classes = useStyles();

    function valuetext(value: number) {
        return `${value}`;
    }

    const onFilterHandler = () => {
        dispatch(bearAC.setAbvMin(value[0]));
        dispatch(bearAC.setAbvMax(value[1]));
    }

    return (
        <div className={classes.filterWrapper}>
            <Slider
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="on"
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />

            <Button
                variant='outlined'
                onClick={onFilterHandler}
            >
                Apply filter ABV
            </Button>
        </div>
    )
}

//============================= STYLE ==========================
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filterWrapper: {
            marginTop: 50,
            paddingLeft: 15,
            paddingRight: 15,
        },
    }));
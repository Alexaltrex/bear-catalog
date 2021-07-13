import {FC} from "react";
import {BearItemType} from "../../../types/types";
import {Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";

export const BearItem: FC<BearItemType> = ({
                                               name,
                                               description,
                                               abv,
                                               image_url,
                                           }) => {
    const classes = useStyles();
    return (
        <div className={classes.bearItem}>
            <div>
                <img src={image_url} alt="" className={classes.image}/>
            </div>
            <div>
                <Typography variant='h6'>{name}</Typography>
                <Typography variant='subtitle2'>{description}</Typography>
                <Typography variant='subtitle2'>{`abv = ${abv}`}</Typography>
            </div>
        </div>
    )
}

//============================= STYLE ==========================
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bearItem: {
            border: '1px solid black',
            padding: 10,
            marginBottom: 10,
            display: 'flex'
        },
        wrapper: {

        },
        image: {
            height: 100,
            marginRight: 20
        }
    }));


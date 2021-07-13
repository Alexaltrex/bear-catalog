import React, {ReactElement} from 'react';
import {createStyles, makeStyles} from "@material-ui/styles";
import {Theme, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";

//============= CUSTOM HOOK =============
const useHeader = () => {
    const classes = useStyles();
    return {
        classes
    }
};

//============== COMPONENT ==================
export const Header: React.FC<{}> = (): ReactElement => {
    const {
        classes
    } = useHeader();


    return (
        <header className={classes.header}>
            <Link className={classes.link}
                  href='/'
                  underline='none'
            >
                <Typography variant='h5' color="secondary" style={{marginRight: 10}}>
                    Bear
                </Typography>
                <Typography variant='h5'
                            color="secondary"
                >
                    Catalog
                </Typography>

            </Link>
        </header>
    );
};

//============================= STYLE ==========================
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            height: 60,
            backgroundColor: theme.palette.primary.main,
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'white',
            boxSizing: 'border-box'
        },
        link: {
            display: 'flex',
            '& h5': {
                transition: '0.5s',
            },
            '&:hover h5': {
                textShadow: '0px 0px 20px #FFF'
            },
        }
    }));
import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../../context/context';
import InfoCard from '../Snackbar/InfoCard';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense tracker" subheader="Powered by speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total balance ${balance}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: '20px' }}>
                <InfoCard />
                </Typography>
                <Divider className={classes.divider}/>
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
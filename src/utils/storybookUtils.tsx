import {PropsWithChildren} from "react";
import Grid from "@mui/material/Grid2";
import {Typography} from "@mui/material";

export const delay = async (milliseconds:number) => {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

export const SitePage: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return <Grid container width='100%'>
        <Grid container alignItems='center' justifyContent='center'
              style={{
                  width: "100%",
                  height: "90px",
                  border: "1px solid #333333",
                  backgroundColor: "#DDDDDD"
              }}>
            <Typography variant='h6'>The header goes here</Typography>
        </Grid>
        <Grid container size={{xs: 12}}>
            {children}
        </Grid>
        <Grid container alignItems='center' justifyContent='center'
              style={{
                  width: "100%",
                  height: "120px",
                  border: "1px solid #333333",
                  backgroundColor: "#DDDDDD"
              }}>
            <Typography variant='h6'>The footer goes here</Typography>
        </Grid>
    </Grid>
}




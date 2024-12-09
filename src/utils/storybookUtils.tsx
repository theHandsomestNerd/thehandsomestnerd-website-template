import {PropsWithChildren} from "react";
import Grid from "@mui/material/Grid2";
import {Typography, useTheme} from "@mui/material";

export const storybookDelay = async (milliseconds:number) => {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

export const SitePage: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    const theme = useTheme()
    return <Grid container width='100%' position='relative'>
        <Grid container alignItems='center' justifyContent='center'
              style={{
                  width: "100%",
                  position: "fixed",
                  zIndex: 9999,
                  height: theme.mixins.toolbar.height,
                  border: "1px solid #333333",
                  backgroundColor: "#DDDDDD"
              }}>
            <Typography variant='h6'>The header goes here</Typography>
        </Grid>
        <Grid container size={{xs: 12}} paddingTop={theme.mixins.toolbar.height} overflow='scroll' height={'100vh'}>
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




import React, {FunctionComponent} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import { Theme} from "@mui/material/styles";
import {Button, Grid, Typography, useTheme} from "@mui/material";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import dateUtils from "../../../../utils/dateUtils";
import {ResumePortfolioItem} from "../../../BlockContentTypes";
import PortfolioItemModal from "./PortfolioItemModal";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    portfolioItem?: ResumePortfolioItem
}

const ResumePortfolioEntry: FunctionComponent<IProps> = (props:IProps) => {
    const classes = useStyles()
    const theme = useTheme()

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    return (<Grid
                  role='portfoliobutton'
                  // style={{backgroundColor: index2 % 2 === 1 ? "whitesmoke" : "white"}}
                  container item xs={12} sm={6} lg={4} xl={4} alignContent='flex-start'
                  justifyContent='center'>
        <Button fullWidth onClick={(e) => {
            setCurrentItem(props.portfolioItem)
            setIsOpen(true)
        }}>
            <Grid item container>
                <Grid container item spacing={2} justifyContent='center'>
                    <Grid item xs={11} sm={11} container justifyContent='center'
                          style={{
                              backgroundImage: `url(${urlFor(props.portfolioItem?.coverImage ?? "").url() ?? ""})`,
                              backgroundSize: "cover",
                              backgroundPosition: "top center",
                              backgroundRepeat: "no-repeat",
                              width: "100%",
                              minHeight: "200px"
                          }}
                    >
                    </Grid>
                </Grid>
                <Grid container item justifyContent='center'
                      style={{marginTop: theme.spacing(2)}}>
                    <Typography display='inline'
                                variant='body1'
                    >{dateUtils.MonthYear(props.portfolioItem?.inceptionDate)}</Typography>
                </Grid>
                <Grid container item justifyContent='center' alignContent={'center'}>
                    <Typography style={{minHeight: "60px"}}
                                variant='body2'>{props.portfolioItem?.title}</Typography>
                </Grid>
            </Grid>
        </Button>
        <PortfolioItemModal currentItem={currentItem} isOpen={isOpen} setIsOpen={(val)=>{setIsOpen(val)}}/>
</Grid>)
}

export default ResumePortfolioEntry
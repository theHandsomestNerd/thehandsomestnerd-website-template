import React, {FunctionComponent, useContext} from 'react'
import {Button, Card, Grid, Typography, useTheme} from "@mui/material";
import dateUtils from "../../../../utils/dateUtils";
import {ResumePortfolioItem} from "../../../BlockContentTypes";
import PortfolioItemModal from "./PortfolioItemModal";
import {COLORS} from "../../../../theme/common/ColorPalette";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    portfolioItem?: ResumePortfolioItem
}

const ResumePortfolioEntry: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    return (<Grid
        role='portfoliobutton'
        // style={{backgroundColor: index2 % 2 === 1 ? "whitesmoke" : "white"}}
        container item alignContent='flex-start'
        justifyContent='center'>
        <Card elevation={0} sx={{width: "100%", border: `1px solid ${COLORS.GRAY}`}}>
            <Button fullWidth sx={{padding: 0}} onClick={() => {
                setCurrentItem(props.portfolioItem)
                setIsOpen(true)
            }}>
                <Grid item container justifyContent='center' alignContent={'space-between'} direction='column'>
                    <Grid container item justifyContent='center' xs={2}>
                        <Grid item xs={12}
                              style={{
                                  backgroundImage: `url(${sanityContext.urlFor(props.portfolioItem?.coverImage ?? "")?.url() ?? ""})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "top center",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                                  minHeight: "200px",

                              }}
                        >
                        </Grid>
                    </Grid>
                    <Grid container item alignContent='center' alignItems='center' xs={10}>
                        <Grid container item justifyContent='center'
                              style={{marginTop: theme.spacing(2)}}>
                            <Typography display='inline'
                                        variant='body1'
                                        color={'textPrimary'}
                            >{dateUtils.MonthYear(props.portfolioItem?.inceptionDate)}</Typography>
                        </Grid>
                        <Grid container item justifyContent='center' alignContent={'center'}>
                            <Typography style={{minHeight: "60px"}}
                                        variant='body2'>{props.portfolioItem?.title}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Button>
            <PortfolioItemModal currentItem={currentItem} isOpen={isOpen} setIsOpen={(val) => {
                setIsOpen(val)
            }}/>
        </Card></Grid>)
}

export default ResumePortfolioEntry
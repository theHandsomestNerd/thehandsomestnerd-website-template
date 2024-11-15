import {FunctionComponent, useContext, useState} from 'react'
import {Box, Button, Card, Grid, Typography, useTheme} from "@mui/material";
import dateUtils from "../../../../utils/dateUtils";
import {ResumePortfolioItemType} from "../../../BlockContentTypes";
import PortfolioItemModal from "./PortfolioItemModal";
import {COLORS} from "../../../../theme/common/ColorPalette";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import slugify from "slugify";

interface ResumePortfolioEntryProps {
    portfolioItem?: ResumePortfolioItemType
}

const ResumePortfolioEntry: FunctionComponent<ResumePortfolioEntryProps> = (props: ResumePortfolioEntryProps) => {
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [currentItem, setCurrentItem] = useState<ResumePortfolioItemType>()

    return (<Grid
            role='portfoliobutton'
            container item alignContent='flex-start'
            justifyContent='center'>
            <Card elevation={0} sx={{width: "100%", border: `1px solid ${COLORS.GRAY}`}}>
                <Button
                    aria-label={slugify(props.portfolioItem?.title ?? "") + "-button"}
                    fullWidth
                    sx={{padding: 0}}
                    onClick={() => {
                        setCurrentItem(props.portfolioItem)
                        setIsOpen(true)
                    }}
                >
                    <Grid item container justifyContent='center' alignContent={'space-between'} direction='column'>
                        <Grid container item justifyContent='center' xs={2}>
                            <Grid item xs={12}
                                  style={{
                                      backgroundImage: `url(${sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.portfolioItem?.coverImage, 200, 200)})`,
                                      backgroundSize: "cover",
                                      backgroundPosition: "top center",
                                      backgroundRepeat: "no-repeat",
                                      width: "100%",
                                      minHeight: "200px",

                                  }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        opacity: .2,
                                        backgroundColor: "rgba(0,0,0, .5)",
                                        zIndex: 9999
                                    }}
                                >

                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container item alignContent='center' alignItems='center' xs={10}>
                            <Grid container item justifyContent='center'
                                  style={{marginTop: theme.spacing(2)}}>
                                <Typography display='inline'
                                            variant='body1'
                                            color={'textPrimary'}
                                >{dateUtils.monthYear(props.portfolioItem?.inceptionDate)}</Typography>
                            </Grid>
                            <Grid container item justifyContent='center' alignContent={'center'}>
                                <Typography
                                    style={{minHeight: "60px"}}
                                    variant='body2'
                                >{props.portfolioItem?.title}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Button>
                {
                    currentItem &&
                    <PortfolioItemModal
                        currentItem={currentItem}
                        isOpen={isOpen}
                        setIsOpen={
                            (val) => setIsOpen(val)
                        }
                    />
                }
            </Card>
        </Grid>
    )
}

export default ResumePortfolioEntry
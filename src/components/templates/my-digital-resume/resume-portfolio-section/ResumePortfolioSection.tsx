import React, {FunctionComponent} from 'react'
import {Button, ButtonGroup, Chip, Grid, IconButton, Modal, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumePortfolioItem, ResumePortfolioSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import {Close} from "@mui/icons-material";
import dateUtils from "../../../../utils/dateUtils";
import ResumePortfolioEntry from "./ResumePortfolioEntry";
import PortfolioItemModal from "./PortfolioItemModal";

interface IProps {
    sectionData: ResumePortfolioSectionType
}

const ResumePortfolioSection: FunctionComponent<IProps> = (props: IProps) => {
    const globalClasses = useThwCommonStyles()
    const theme = useTheme()

    // const [isOpen, setIsOpen] = React.useState<boolean>(false)
    // const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    // const sendToModal = (portfolioItem?: ResumePortfolioItem) => {
    //     console.log("The current Item", portfolioItem)
    //     setCurrentItem(portfolioItem)
    //
    //     setIsOpen(true)
    // }
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <Grid container item style={{padding: theme.spacing(4,smDown?1:4)}}
              className={globalClasses.resumeSection} justifyContent={'center'}>
            <Grid
                container item spacing={3} justifyContent='center'>
                <Grid item container alignContent='flex-start' spacing={1}>
                    <Grid item container>
                        <Typography
                            variant='h6'
                        >{props.sectionData.title}</Typography>
                        <Typography
                            variant='h6'
                            color='primary'
                            display='inline'
                        >.
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container justifyContent={'center'} xs={11} justifySelf={'center'}>
                    {
                        props.sectionData.portfolioEntries?.map((portfolioItem: ResumePortfolioItem, index2: number) => {
                            return <ResumePortfolioEntry portfolioItem={portfolioItem} />
                        })
                    }
                </Grid>
            </Grid>
            {/*<PortfolioItemModal currentItem={currentItem} isOpen={isOpen} setIsOpen={(value)=>{setIsOpen(value)}}/>*/}
        </Grid>
    );
}

export default ResumePortfolioSection
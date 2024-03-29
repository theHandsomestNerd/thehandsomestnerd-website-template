import{FunctionComponent} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumePortfolioItem, ResumePortfolioSectionType} from "../../../BlockContentTypes";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import ResumePortfolioEntry from "./ResumePortfolioEntry";

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
                <Grid item container justifyContent={'center'} xs={11} justifySelf={'center'} spacing={1}>
                    {
                        props.sectionData.portfolioEntries?.map((portfolioItem: ResumePortfolioItem, index2: number) => {
                            return <Grid key={index2} item xs={12} sm={6} lg={4} xl={4}><ResumePortfolioEntry portfolioItem={portfolioItem} /></Grid>
                        })
                    }
                </Grid>
            </Grid>
            {/*<PortfolioItemModal currentItem={currentItem} isOpen={isOpen} setIsOpen={(value)=>{setIsOpen(value)}}/>*/}
        </Grid>
    );
}

export default ResumePortfolioSection
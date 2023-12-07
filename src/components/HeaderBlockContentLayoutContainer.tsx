import React, {FunctionComponent, useContext} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link, ThemeProvider} from '@mui/material';
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {DevelopmentHeaderSectionType, HeaderSectionType,} from "./BlockContentTypes";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import DevelopmentHeader from "./templates/mackenzies-mind/header/DevelopmentHeader";
import Header from "./templates/mackenzies-mind/header/Header";
import WebDevSiteTheme from "../theme/WebDevSiteTheme";
import EnhancedHeader from "./templates/mackenzies-mind/header/EnhancedHeader";
import CustomizedThemeContext from "./customized-theme-provider/CustomizedThemeContext";
import {convertToHexCode} from "../theme/common/ColorPalette";

export type HeaderBlockContentLayoutContainerProps = {
    content?: any,
}

const HeaderBlockContentLayoutContainer: FunctionComponent<HeaderBlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()
    // const mdDown = widthUtils.useIsWidthDown('md')
    const customizedTheme = useContext(CustomizedThemeContext)

    const [showBasicHeader, setShowBasicHeader] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handResize = () => {
            if (window.innerWidth < customizedTheme.customizedTheme.breakpoints.values['md']) {
                setShowBasicHeader(true)
            } else {
                setShowBasicHeader(false)
            }
        }
        window.addEventListener('resize', handResize)
        handResize()

        return () => {
            window.removeEventListener('resize', handResize)
        }

        // eslint-disable-next-line
    }, [])


    return (
        <Grid container item>
            {props?.content?.map((columnLayoutContainer: any, index: number) => {
                switch (columnLayoutContainer._type) {
                    case 'column1BlockContent':
                        return <Grid key={'column1BlockContent_header'} container justifyContent='center'
                                     alignItems='stretch'>
                            <Grid item>
                                <Card className={classes.root} style={{paddingTop: '80px'}}>
                                    <Grid container item xs={12} className={classes.layoutContainer}>
                                        <Grid item xs={12}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.content}
                                                serializers={blockSerializers}
                                                projectId={sanityClient.config().projectId}
                                                dataset={sanityClient.config().dataset}
                                            />
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    case 'column2BlockContent':
                        return <Grid key={'column2BlockContent_header'} container justifyContent='center'
                                     alignItems='stretch'>
                            <Grid item>
                                <Card className={classes.root} style={{paddingTop: '80px'}}>
                                    <Grid container item xs={12} className={classes.layoutContainer}>
                                        <Grid item xs={6}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.column1.content}
                                                serializers={blockSerializers}
                                                projectId={sanityClient.config().projectId}
                                                dataset={sanityClient.config().dataset}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.column2.content}
                                                serializers={blockSerializers}
                                                projectId={sanityClient.config().projectId}
                                                dataset={sanityClient.config().dataset}
                                            />
                                        </Grid>
                                    </Grid>
                                </Card></Grid>
                        </Grid>
                    case 'HeaderSection':
                        const header: HeaderSectionType = columnLayoutContainer

                        return (
                            <Grid container item xs={12} key={'TOP_OF_PAGE'}>
                                <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                                </Link>
                                {
                                    showBasicHeader || !header.isEnhanced ?
                                        <Header backgroundColor={header.backgroundColor}  isSearch={header.isSearch} isAppBar={true}
                                                pageHeader={header.headerMenuRef}/>
                                        : <EnhancedHeader pageHeader={header}/>
                                }
                            </Grid>
                        );
                    default:
                        return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
                }
            }) ?? <></>
            }

        </Grid>
    );
}

export default HeaderBlockContentLayoutContainer

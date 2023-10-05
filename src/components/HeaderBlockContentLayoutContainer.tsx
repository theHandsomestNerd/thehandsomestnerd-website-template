import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { Card, Grid, Link, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {DevelopmentHeaderSectionType, HeaderSectionType,} from "./BlockContentTypes";
import DigitalResumeTheme from "../theme/DigitalResumeTheme";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import DevelopmentHeader from "./mackenzies-mind/header/DevelopmentHeader";
import Header from "./mackenzies-mind/header/Header";
import WebDevSiteTheme from "../theme/WebDevSiteTheme";
import TransformHWTheme from "../theme/TransformHWTheme";



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export type HeaderBlockContentLayoutContainerProps = {
    content?: any,
}

const HeaderBlockContentLayoutContainer: FunctionComponent<HeaderBlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()

    return (
        <Grid container item>
            {props?.content?.map((columnLayoutContainer: any, index: number) => {
                switch (columnLayoutContainer._type) {
                    case 'column1BlockContent':
                        return <Grid key={'column1BlockContent_header'} container justifyContent='center' alignItems='stretch'>
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
                        return <Grid key={'column2BlockContent_header'} container justifyContent='center' alignItems='stretch'>
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
                    case 'DevelopmentHeaderSection':
                        const developmentHeader: DevelopmentHeaderSectionType = columnLayoutContainer

                        return (
                                <ThemeProvider theme={WebDevSiteTheme}><Grid key={'TOP_OF_PAGE_DEV'} container item xs={12} style={{height: WebDevSiteTheme.mixins.toolbar.height}} alignContent='center' alignItems='center'>
                                    <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                                    </Link>
                                    <DevelopmentHeader
                                        pageHeader={developmentHeader.headerMenuRef}
                                    />
                                </Grid></ThemeProvider>
                        );
                    case 'HeaderSection':
                        const header: HeaderSectionType = columnLayoutContainer

                        return (
                                <ThemeProvider theme={DigitalResumeTheme}><Grid key={'TOP_OF_PAGE'} container item xs={12} style={{height: DigitalResumeTheme.mixins.toolbar.height}}>
                                    <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                                    </Link>
                                    <Header
                                        pageHeader={header.headerMenuRef}
                                    />
                                </Grid></ThemeProvider>
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

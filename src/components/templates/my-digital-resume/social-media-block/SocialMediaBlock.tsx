import {FunctionComponent} from 'react'
import {Grid, PropTypes, useTheme} from '@mui/material';
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import {GridSpacing} from "@mui/material/Grid/Grid";
import SocialMediaBlockButton from "./SocialMediaBlockButton";


export interface SocialMediaBlockIProps {
    // homePage?: SanityTransformHwHomePage
    facebook?: string
    twitter?: string
    instagram?: string
    linkedIn?: string
    github?: string
    isCentered?: boolean
    color?: PropTypes.Color
    bgColor?: boolean
    theBackgroundColor?: string
    iconColor?: string
    spacing?: GridSpacing
    size?: any
    isHoverColor?: boolean
}

const SocialMediaBlock: FunctionComponent<SocialMediaBlockIProps> = (props: SocialMediaBlockIProps) => {
    const theme = useTheme()

    return (
        <Grid data-testid='social-media-block' item xs={12} container alignItems='center'
              justifyContent={props.isCentered ? 'center' : 'flex-end'}
              spacing={props.spacing ? props.spacing : 0} wrap={'nowrap'}>
            {props.facebook && <SocialMediaBlockButton
                isHoverColor={props.isHoverColor}
                iconColor={props.iconColor}
                bgColor={props.bgColor}
                theBackgroundColor={theme.palette.primary.main}
                socialMediaName={props.facebook}
                socialMediaLink={`https://facebook.com/${props.facebook}`}
                iconButtonIcon={<Facebook color='inherit' />}
            />}
            {props.linkedIn && <SocialMediaBlockButton
                isHoverColor={props.isHoverColor}
                iconColor={props.iconColor}
                bgColor={props.bgColor}
                theBackgroundColor={theme.palette.primary.main}
                socialMediaName={props.linkedIn}
                socialMediaLink={`https://linkedIn.com/in/${props.linkedIn}`}
                iconButtonIcon={<LinkedIn color='inherit' />}
            />}
            {props.github && <SocialMediaBlockButton
                isHoverColor={props.isHoverColor}
                iconColor={props.iconColor}
                bgColor={props.bgColor}
                theBackgroundColor={theme.palette.primary.main}
                socialMediaName={props.github}
                iconButtonIcon={<GitHub color='inherit' />}
                socialMediaLink={`https://github.com/${props.github}`}
            />}
            {props.twitter && <SocialMediaBlockButton
                isHoverColor={props.isHoverColor}
                iconColor={props.iconColor}
                bgColor={props.bgColor}
                theBackgroundColor={theme.palette.primary.main}
                socialMediaName={props.twitter}
                iconButtonIcon={<Twitter color='inherit' />}
                socialMediaLink={`https://twitter.com/${props.twitter}`}
            />}
            {props.instagram && <SocialMediaBlockButton
                isHoverColor={props.isHoverColor}
                iconColor={props.iconColor}
                bgColor={props.bgColor}
                theBackgroundColor={theme.palette.primary.main}
                socialMediaName={props.instagram}
                iconButtonIcon={<Instagram color='inherit' />}
                socialMediaLink={`https://instagram.com/${props.instagram}`}
            />}
            </Grid>
    );
}

export default SocialMediaBlock
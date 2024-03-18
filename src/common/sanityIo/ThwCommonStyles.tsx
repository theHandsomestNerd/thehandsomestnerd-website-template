// block renderers can return JSX Elements that are block or inline elements since they will be the top level element
import makeStyles from '@mui/styles/makeStyles';
import {COLORS} from "../../theme/common/ColorPalette";
import TransformHWTheme from "../../theme/TransformHWTheme";

export const useThwCommonStyles = makeStyles(() => ({
    layoutContainer: {
        marginBottom: '32px',
    },
    primaryTextColor: {
        color: TransformHWTheme.palette.primary.main,
    },
    secondaryTextColor: {
        color: TransformHWTheme.palette.secondary.main,
    },
    bold: {
        fontWeight: 700,
    },
    bodyText: {
        // fontFamily: 'DTL Documenta',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '28px',
        letterSpacing: '0.5px',
        color: '#333333',
        padding: TransformHWTheme.spacing(1, 0),
    },
    callToAction: {
        borderTop: '1px solid rgba(0,0,0,.12)',
        borderBottom: '1px solid rgba(0,0,0,.12)',
        width: '100%',
        padding: TransformHWTheme.spacing(3, 0),
    },
    root: {
        width: '1050px',
        padding: '40px',
        overflow: 'visible'
    },
    homePageH3: {
        fontWeight: 300,
    },
    lightWeightFont: {
        fontWeight: 300,
        letterSpacing: '-1.5px',
    },
    boldWeightFont: {
        fontWeight: 700,
    },
    dropCapLetter: {
        float: 'left',
        padding: TransformHWTheme.spacing(1),
        fontSize: '59px',
        fontWeight: 400,
        lineHeight: '30px',
        letterSpacing: '0.5px',
        textTransform: 'capitalize',
    },
    keystroke: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #6D6D6D',
        backgroundColor: '#3D3D3D',
        color: 'whitesmoke',
        borderRadius: '8px',
        // display: "inline-block",
        width: '50px !important',
        height: '50px !important',
        ...TransformHWTheme.typography.h4,
    },
    hr: {
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        width: '100%',
        height: '1px',
    },
    bulletIcon: {
        fontSize: '10px',
    },
    bulletIconContainer: {
        marginTop: TransformHWTheme.spacing(1.5),
        minWidth: '20px',
    },
    orderedListIndex: {
        marginTop: TransformHWTheme.spacing(-1.25),
        // fontFamily: 'DTL Documenta ST Regular',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '28px',
        letterSpacing: '0.5px',
    },
    listItemRoot: {
        paddingLeft: '8px',
    },
    resumeSection: {
        borderBottom: `1px solid ${COLORS.LIGHTGRAY}`
    },
}))

export default useThwCommonStyles

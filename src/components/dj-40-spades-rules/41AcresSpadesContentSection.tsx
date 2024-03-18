import React, {FunctionComponent} from 'react'
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";
import cardsBg from '../../assets/cardsbg.png'


export const useStyles = makeStyles((theme: Theme) => ({
    contentSection: {
        // height: '500px',
        // marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

const DJSpadesRulesContentSection: FunctionComponent = () => {
    const theRules = [
        "Largest Diamond Starts the Game.",
        "Joker(Large/Color), Joker (Guaranteed), Deuce of Diamonds, Deuce of Spades",
        "First hand Bids Itself",
        "First Hand set, game continues(must play, 10s do not double, doesn't count as a set)",
        "Board is 4",
        "Double your bid, you go back 100",
        "3 Books for a renig, one chance to call",
        "1 Blind, must be down 100/ 6 is the minimum(if set, it doesnt count. Its a welfare.",
        "2 sets = Game",
        "Collective bid of 10 or less is books made; Bid increase only by 1 (9 is a number)",
        "Straight cut. (2 chops max). Straight deal.",
        "Spades lead anytime.",
        "2 min dog(must set timer, then call)",
        "No spades(hands 2-13) option to toss",
        "No talking across the board",
        "RESPECT OUR HOME",
        "Any and all debates are settled by 41 Acres",
    ]
    return (
        <Grid container item
              style={{overflow: 'hidden', height: "100vh", width: "100vw", backgroundColor: "#19468D", color: "white", position: "relative", zIndex: 2, border:"3px solid white", padding: "16px", overflowX:"scroll"}}>
            <Grid container item
                  style={{height: "100%", width: "100%", backgroundSize: "cover", backgroundImage: `url('${cardsBg}')`, opacity: .1, position: "absolute", zIndex: 1}}>

            </Grid>
            <Grid container item style={{zIndex: 2}} justifyContent='center'>

                <Grid item container justifyContent='center' alignContent='center'>
                    <Typography variant='h3'>Spades Rules - DJ's 40th edition</Typography>
                </Grid>
                <Grid container item spacing={1} justifyContent='center' sx={{maxWidth:"550px"}}>
                    <ol>

                        {
                            theRules.map((aRule, index) => {
                                return <li style={{marginBottom: "8px"}} key={index}><Typography
                                    variant='body1'>{aRule}</Typography>
                                </li>
                            })
                        }
                    </ol>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default DJSpadesRulesContentSection
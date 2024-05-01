import {FunctionComponent, useContext, useState} from 'react'
import {withStyles} from '@mui/styles'
import {
    Button,
    Chip,
    Grid,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuProps,
    Select,
    Typography,
    useTheme
} from '@mui/material'
import BallSearchContext from '../ball-search-context/BallSearchContext'
import {CalendarToday, FilterList, LocationOn, Web} from '@mui/icons-material'
import StyledTextField from "../styled-text-field/StyledTextField";
import {RegionEnum, RegionTitleEnum} from "../enums/Region.enum";
import dateUtils from "../../../../utils/dateUtils";
import {BallTypeEnum, renderBallType} from "../enums/BallType.enum";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        maxWidth: '850px',
        width: '422px',
        backgroundColor: "white !important"
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        // getContentAnchorEl={undefined}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))

const SearchFilterDropDown: FunctionComponent = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const searchContext = useContext(BallSearchContext)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const theme = useTheme()
    const style = {
        fieldset: {
            borderColor: "black"
        },
        "&:hover fieldset": {
            //borderColor: "green!important" // works
            borderColor: "black!important" // doesnt work
        }
    };

    const getRegionFilterLabel = (regionToConvert: RegionEnum) => {
        switch (regionToConvert) {
            case RegionEnum.ABROAD:
                return "Abroad"
            case RegionEnum.CANADA:
                return "Canada"
            case RegionEnum.EAST_COAST:
                return "East Coast"
            case RegionEnum.THE_MIDWEST:
                return "The Midwest"
            case RegionEnum.THE_SOUTH:
                return "The South"
            case RegionEnum.WEST_COAST:
                return "West Coast"
            case RegionEnum.NONE:
            default:
                return ""
        }
    }

    return (
        <Grid container item>
            <Grid item container>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color='secondary'
                    sx={{padding: theme.spacing(1, 2)}}
                >
                    <Typography variant='h6' fontWeight={800}>Filters:</Typography> <FilterList fontSize='medium'/>
                </Button>
            </Grid>
            <Grid container item alignItems='center' alignContent='center' justifyContent='flex-start'
                  paddingLeft="16px" paddingBottom="8px">
                {
                    searchContext.searchParams?.ballType && <Grid item>
                        <Chip onDelete={() => {
                            if (searchContext.updateSearchParams) {

                                searchContext.updateSearchParams({target: {name: "ballType", value: undefined}})

                            }
                        }
                        } color="primary"
                              label={`ball type: ${renderBallType(searchContext.searchParams.ballType as BallTypeEnum)}`}></Chip>
                    </Grid>
                }
                {
                    searchContext.searchParams?.region && <Grid item>
                        <Chip onDelete={() => {
                            if (searchContext.updateSearchParams) {

                                searchContext.updateSearchParams({target: {name: "region", value: undefined}})

                            }
                        }
                        } color="primary"
                              label={`region: ${getRegionFilterLabel(searchContext.searchParams.region as RegionEnum)}`}></Chip>
                    </Grid>
                }
                {
                    searchContext.searchParams?.startDate && <Grid item>
                        <Chip onDelete={() => {
                            if (searchContext.updateSearchParams) {
                                searchContext.updateSearchParams({target: {name: "endDate", value: undefined}})
                                searchContext.updateSearchParams({target: {name: "startDate", value: undefined}})
                            }
                        }
                        } color="primary"
                              label={`dates: ${dateUtils.MonthDateYear(searchContext.searchParams?.startDate)}${searchContext.searchParams?.endDate ? " to " + dateUtils.MonthDateYear(searchContext.searchParams?.endDate) : ""}`}></Chip>
                    </Grid>
                }
            </Grid>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Grid container direction="column">
                    <MenuItem>
                        <Grid
                            container
                            alignItems="center"
                            style={{
                                borderBottom: "1px solid #ece7e7",
                                paddingBottom: theme.spacing(2)
                            }}
                        >
                            <Grid item xs={1}>
                                <ListItemIcon>
                                    <Web fontSize="small"/>
                                </ListItemIcon>
                            </Grid>
                            <Grid item xs={4}>
                                <ListItemText primary={<Typography color='textSecondary'>Ball Type</Typography>}/>
                            </Grid>
                            <Grid item container xs={7} justifyContent='flex-end'>
                                <Grid item xs={12}>
                                    <Select
                                        sx={style}
                                        fullWidth
                                        value={searchContext.searchParams?.ballType ?? BallTypeEnum.NONE}
                                        onChange={(e) => {
                                            if (searchContext.updateSearchParams) {
                                                setAnchorEl(null)
                                                searchContext.updateSearchParams(e)
                                            }
                                        }}
                                        name="ballType"
                                        displayEmpty
                                        inputProps={{'aria-label': 'Without label',}}
                                    >
                                        <MenuItem value={BallTypeEnum.NONE}>
                                            <Typography color='textSecondary'><em>None</em></Typography>
                                        </MenuItem>

                                        <MenuItem value={
                                            BallTypeEnum.BALL}>
                                            <Typography color='textSecondary'>{renderBallType(BallTypeEnum.BALL)}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            BallTypeEnum.MINI_BALL}>
                                            <Typography color='textSecondary'>{renderBallType(BallTypeEnum.MINI_BALL)}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            BallTypeEnum.MINI_BALL_DELUXE}>
                                            <Typography color='textSecondary'>{renderBallType(BallTypeEnum.MINI_BALL_DELUXE)}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            BallTypeEnum.KIKI_BALL}>
                                            <Typography color='textSecondary'>{renderBallType(BallTypeEnum.KIKI_BALL)}</Typography>
                                        </MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem>
                        <Grid
                            container
                            alignItems="center"
                            style={{
                                borderBottom: "1px solid #ece7e7",
                                paddingBottom: theme.spacing(2)
                            }}
                        >
                            <Grid item xs={1}>
                                <ListItemIcon>
                                    <LocationOn fontSize="small"/>
                                </ListItemIcon>
                            </Grid>
                            <Grid item xs={4}>
                                <ListItemText primary={<Typography color='textSecondary'>Region</Typography>}/>
                            </Grid>
                            <Grid item container xs={7} justifyContent='flex-end'>
                                <Grid item xs={12}>
                                    <Select
                                        sx={style}
                                        fullWidth
                                        value={searchContext.searchParams?.region ?? RegionEnum.NONE}
                                        onChange={(e) => {
                                            if (searchContext.updateSearchParams) {
                                                setAnchorEl(null)
                                                searchContext.updateSearchParams(e)
                                            }
                                        }}
                                        name="region"
                                        displayEmpty
                                        inputProps={{'aria-label': 'Without label',}}
                                    >
                                        <MenuItem value="">
                                            <Typography color='textSecondary'><em>None</em></Typography>
                                        </MenuItem>

                                        <MenuItem value={
                                            RegionEnum.EAST_COAST}>
                                            <Typography color='textSecondary'>{RegionTitleEnum.EAST_COAST}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            RegionEnum.WEST_COAST}>
                                            <Typography color='textSecondary'>{RegionTitleEnum.WEST_COAST}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            RegionEnum.CANADA}>
                                            <Typography color='textSecondary'>{RegionTitleEnum.CANADA}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            RegionEnum.THE_MIDWEST}>
                                            <Typography color='textSecondary'>{RegionTitleEnum.THE_MIDWEST}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            RegionEnum.THE_SOUTH}>
                                            <Typography color='textSecondary'>{RegionTitleEnum.THE_SOUTH}</Typography>
                                        </MenuItem>
                                        <MenuItem value={
                                            RegionEnum.ABROAD}>
                                            <Typography color='textSecondary'>{RegionTitleEnum.ABROAD}</Typography>
                                        </MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MenuItem>
                    <MenuItem>

                        <Grid container wrap="nowrap" alignItems="flex-start">
                            <Grid item xs={1}>
                                <ListItemIcon>
                                    <CalendarToday fontSize="small"/>
                                </ListItemIcon>
                            </Grid>
                            <Grid item xs={4}>
                                <ListItemText primary={<Typography color='textSecondary'>Date</Typography>}/>
                            </Grid>
                            <Grid item container xs={7} direction="column" spacing={2}>
                                <Grid item>
                                    <StyledTextField
                                        fullWidth
                                        sx={{input: {color: 'black', paddingRight: "0px"}}}
                                        label="Start Date"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={
                                            (e) => {
                                                if (searchContext.updateSearchParams) {
                                                    searchContext.updateSearchParams(e)
                                                }
                                            }
                                        }
                                        name="startDate"
                                        value={searchContext.searchParams?.startDate ?? ''}
                                    />
                                </Grid>
                                <Grid item>
                                    <StyledTextField
                                        fullWidth
                                        sx={{input: {color: 'black', paddingRight: "0px"}}}
                                        label="End Date"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={
                                            (e) => {
                                                if (searchContext.updateSearchParams) {
                                                    setAnchorEl(null)

                                                    searchContext.updateSearchParams(e)
                                                }
                                            }
                                        }
                                        name="endDate"
                                        value={searchContext.searchParams?.endDate ?? ''}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </MenuItem>
                </Grid>


            </StyledMenu>
        </Grid>
    )
}

export default SearchFilterDropDown

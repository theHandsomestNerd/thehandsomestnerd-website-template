import {FunctionComponent, useContext, useState} from 'react'
import { withStyles } from '@mui/styles'
import {
  Button,
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
import {CalendarToday, FilterList, LocationOn } from '@mui/icons-material'
import RegionEnum, { RegionTitleEnum } from '../enums/Region.enum'
import StyledTextField from "../styled-text-field/StyledTextField";

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

// const StyledMenuItem = withStyles(() => ({
//   root: {
//   },
// }))(MenuItem)

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

  return (
    <Grid container item>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color='secondary'
        sx={{padding: theme.spacing(1,2)}}
      >
        <Typography  variant='body2' fontWeight={800}>Filters:</Typography> <FilterList fontSize='medium' />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Grid container direction="column">
            <MenuItem>
              <Grid container  alignItems="center" style={{borderBottom: "1px solid #ece7e7", paddingBottom: theme.spacing(2)}}>
                <Grid item xs={1}>
                  <ListItemIcon>
                    <LocationOn fontSize="small" />
                  </ListItemIcon>
                </Grid>
                <Grid item xs={4}>
                  <ListItemText primary={<Typography color='textSecondary' >Region</Typography>}/>
                </Grid>
                <Grid item container xs={7} justifyContent='flex-end'  >
                  <Grid item xs={12} >
                    <Select
                        sx={style}
                      // MenuProps={{MenuListProps:{sx: {backgroundColor:'white'}}}}
                    fullWidth
                    // style={{backgroundColor:  "whitesmoke"}}
                    value={searchContext.searchParams?.region}
                    onChange={searchContext.updateSearchParams}
                    name="region"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label', }}
                  >
                    <MenuItem value="">
                      <Typography color='textSecondary'><em>None</em></Typography>
                    </MenuItem>

                    <MenuItem value={//@ts-ignore
                      RegionEnum.EAST_COAST}><Typography color='textSecondary'>{RegionTitleEnum.EAST_COAST}</Typography></MenuItem>
                    <MenuItem value={//@ts-ignore
                      RegionEnum.WEST_COAST}><Typography color='textSecondary'>{RegionTitleEnum.WEST_COAST}</Typography></MenuItem>
                    <MenuItem value={//@ts-ignore
                      RegionEnum.CANADA}><Typography color='textSecondary'>{RegionTitleEnum.CANADA}</Typography></MenuItem>
                    <MenuItem value={//@ts-ignore
                      RegionEnum.THE_MIDWEST}><Typography color='textSecondary'>{RegionTitleEnum.THE_MIDWEST}</Typography></MenuItem>
                    <MenuItem value={//@ts-ignore
                      RegionEnum.THE_SOUTH}><Typography color='textSecondary'>{RegionTitleEnum.THE_SOUTH}</Typography></MenuItem>
                    <MenuItem value={//@ts-ignore
                      RegionEnum.ABROAD}><Typography color='textSecondary'>{RegionTitleEnum.ABROAD}</Typography></MenuItem>
                  </Select>
                  </Grid>
                </Grid>
              </Grid>
            </MenuItem>
            <MenuItem>

              <Grid container wrap="nowrap" alignItems="flex-start" >
                <Grid item xs={1}>
                  <ListItemIcon>
                    <CalendarToday fontSize="small" />
                  </ListItemIcon>
                </Grid>
                <Grid item xs={4}>
                  <ListItemText primary={<Typography color='textSecondary' >Date</Typography>}/>
                </Grid>
                <Grid item container xs={7} direction="column" spacing={2}>
                  <Grid item>
                    <StyledTextField
                      fullWidth
                      sx={{ input: { color: 'black' , paddingRight: "0px"} }}
                      label="Start Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={searchContext.updateSearchParams}
                      name="startDate"
                      value={searchContext.searchParams?.startDate ?? ''}
                    />
                  </Grid>
                  <Grid item>
                    <StyledTextField
                      fullWidth
                      sx={{ input: { color: 'black' , paddingRight: "0px"} }}
                      label="End Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={searchContext.updateSearchParams}
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

import {Button, Typography, useTheme} from '@mui/material'
import React, { FunctionComponent, useContext } from 'react'
import BallSearchContext from '../ball-search-context/BallSearchContext'
import { TableChart, ViewModule } from '@mui/icons-material'


export type ViewChangeProps = {

}

const ViewChange: FunctionComponent<ViewChangeProps> = () => {
  const searchContext = useContext(BallSearchContext)

    const theme = useTheme()
  return (
    <Button
        color='secondary'
        sx={{padding: theme.spacing(1,2)}}
        onClick={() => {
          if(searchContext.setViewType)
            searchContext.setViewType(!searchContext.viewType)
      }}
    >
        <Typography  variant='body2'  fontWeight={800}>View:</Typography>{searchContext.viewType ? <TableChart></TableChart>
      : <ViewModule></ViewModule>}
    </Button>
  )
}

export default ViewChange

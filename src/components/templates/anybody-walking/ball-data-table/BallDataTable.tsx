import{FunctionComponent, useContext} from 'react'
import {Tooltip, Typography, useMediaQuery, useTheme} from '@mui/material'
import {LocationOn} from '@mui/icons-material'
import BallSearchContext from '../ball-search-context/BallSearchContext';
import {DataTableColumnType, SanityBallType} from "../ballroomTypes";
import {getPrettyDateStr, trailOffAfter} from "../HTMLUtils";
import DataTable from '../data-table/DataTable';

/** NOTE: Templated Components have to be extended. DataTable is no good on it's own.
 *
 * https://www.mojotech.com/blog/typescript-generic-react-components/
 */

type BallDataTableProps = {}

const BallDataTable: FunctionComponent<BallDataTableProps> = (props: BallDataTableProps) => {
    const searchContext: any = useContext(BallSearchContext)
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsOnly = useMediaQuery(theme.breakpoints.only('xs'))

    const ballTableColumns: DataTableColumnType<SanityBallType>[] = [
        {
            id: 'date',
            label: 'DATE',
            minWidth: smDown ? 20 : 50,
            // eslint-disable-next-line no-unused-vars
            renderer: (row: any) => {
                let dateString = ''

                if (row.functionStartDate) {
                    if (smDown) {
                        dateString = getPrettyDateStr(row.functionStartDate, false, true)
                        const tokenizedDate = dateString.split('/')
                        dateString = [tokenizedDate[0], tokenizedDate[1]].join('/')
                    } else {
                        dateString = getPrettyDateStr(row.functionStartDate)
                    }
                }
                return dateString
            },
        },
        {
            id: 'ballTitle',
            label: 'BALL TITLE',
            minWidth: smDown ? 450 : 300,
            // eslint-disable-next-line no-unused-vars
            renderer: (row: any) => {
                let ballTitle

                if (smDown) {
                    ballTitle = trailOffAfter(row.ballTitle, 20).shortString
                } else {
                    // eslint-disable-next-line prefer-destructuring
                    ballTitle = trailOffAfter(row.ballTitle, 35).shortString
                }
                return ballTitle
            },
        },
        {
            id: 'location',
            label: () => {
                if (xsOnly) {
                    return <LocationOn/>
                }
                return 'LOCATION'
            },
            minWidth: 20,
            renderer: (row: any) => {
                if (xsOnly) {
                    const locationTableValue = trailOffAfter(`${row.location ? row.location.state : ''}`, 7)
                    return <Tooltip title={locationTableValue.tooltip}><Typography
                        component='span'
                    >{locationTableValue.shortString}</Typography></Tooltip>
                }

                return `${row.location ? row.location.city : ''},
      ${row.location ? row.location.state : ''}`
            },
        },
    ]

    const sortBalls = (columnName: any, sortDir: any) => {
        const ballTitleSort = (a: any, b: any) => {
            switch (sortDir) {
                case 'asc':
                    if (a.ballTitle < b.ballTitle) return 1
                    if (a.ballTitle > b.ballTitle) return -1
                    break
                case 'desc':
                    if (a.ballTitle > b.ballTitle) return 1
                    if (a.ballTitle < b.ballTitle) return -1
                    break
                default:
                    return 0
            }
            return 0
        }

        const dateSort = (a: any, b: any) => {
            const aStartDate = new Date(a.startDate)
            const bStartDate = new Date(b.startDate)

            switch (sortDir) {
                case 'asc':
                    if (aStartDate < bStartDate) return 1
                    if (aStartDate > bStartDate) return -1
                    break
                case 'desc':
                    if (aStartDate > bStartDate) return 1
                    if (aStartDate < bStartDate) return -1
                    break
                default:
                    return 0
            }
            return 0
        }

        const locationSort = (a: any, b: any) => {
            let aLocation = a.location ? `${a.location.city} ${a.location.state}` : ''
            let bLocation = b.location ? `${b.location.city} ${b.location.state}` : ''

            if (xsOnly) {
                aLocation = a.location ? a.location.state : ''
                bLocation = b.location ? b.location.state : ''
            }

            switch (sortDir) {
                case 'asc':
                    if (aLocation < bLocation) return 1
                    if (aLocation > bLocation) return -1
                    break
                case 'desc':
                    if (aLocation > bLocation) return 1
                    if (aLocation < bLocation) return -1
                    break
                default:
                    return 0
            }
            return 0
        }

        switch (columnName) {
            case 'date':
                return dateSort
            case 'ballTitle':
                return ballTitleSort
            case 'location':
                return locationSort
            default:
                return ballTitleSort
        }
    }

    return (
        <DataTable
            rows={searchContext.displayResults}
            rowClick={
                (row: SanityBallType) => {
                    console.log('aw - rowCLick', row)
                    return searchContext.getBall(row.slug?.current)
                }
            }
            sortFunction={sortBalls}
            columns={ballTableColumns}
            {...props}
        />
    )
}

export default BallDataTable

// class BallDataTable extends DataTable<SanityBall> {
//   constructor(props) {
//
//
//     const rowClick = row => {
//       console.log('rowCLick', row)
//       return this.context.getBall(row.slug.current)
//     }
//
//     super({ ...props, rowClick, columns: ballTableColumns })
//   }
//
// }
//
// BallDataTable.contextType = BallSearchContext

// export default withWidth()(BallDataTable)

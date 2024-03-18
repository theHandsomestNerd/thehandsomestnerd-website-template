import React, {PropsWithChildren} from 'react'
import makeStyles from "@mui/styles/makeStyles";
import {DataTableColumnType, SortType} from "../ballroomTypes";
import {
    Grid,
    Hidden,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import {KeyboardArrowDown, KeyboardArrowUp, TableChart} from "@mui/icons-material";
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';


export const useStyles = makeStyles(() => ({
    tableRow: {
        // fontSize: '14px',
        // lineHeight: 2,
        color: '#5a5a5a',
        // fontFamily: 'Cantarell',
        // fontWeight: 400,
        '&:nth-of-type(odd)': {
            backgroundColor: '#f8f8f8',
        },
    },
    headerTableRow: {
        // fontSize: '14px',
        lineHeight: 2,
        // color: '#5a5a5a',
        // fontFamily: 'Cantarell',
        // fontWeight: 700,
        borderBottom: '2px solid rgba(90,90,90,.5)',
    },
    tableContainer: {
        /* min-width: 700px, */
    },
    filterIcon: {
        fontSize: 'small',
    },
    table: {
        '& .MuiTableCell-stickyHeader': {
            zIndex: 'unset',
        },
    },
}))

type DataTableProps<T> = {
    rows: any[],
    columns?: DataTableColumnType<T> [],
    rowClick: (row: T) => any,
    sortFunction: (columnName: string, sortDir: SortType) => any,
    loading?: boolean,
}

// eslint-disable-next-line func-style
function DataTable<ObjectType>(
    props: PropsWithChildren<DataTableProps<ObjectType>>,
) {
    const classes = useStyles()

    const [page, setPage] = React.useState<number>(0)
    const [columnStates, setColumnStates] = React.useState({})
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(10)

    React.useEffect(() => {
        const reducer = (accumulator: any, currentValue: any) => ({
            ...accumulator,
            [currentValue.id]: 'asc',
        })

        const initialColumnStates: { [key: string]: SortType } = props.columns?.reduce(reducer, {})
        setColumnStates(initialColumnStates)
    }, [])

    const getRows = (rows: any, thisPage: any, thisRowsPerPage: any) => {
        return rows?.slice(
            thisPage * thisRowsPerPage,
            thisPage * thisRowsPerPage + thisRowsPerPage,
        )
    }

    const getEmptyRows = () =>
        rowsPerPage -
        Math.min(
            rowsPerPage,
            props.rows.length - page * rowsPerPage,
        )

    const handleChangePage = (_event: any, newPage: any) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: any) => {
        event.persist()
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const sortRowsOn = (columnName: string, sortDir: SortType) => {
        const sortedRows = props.rows.sort(props.sortFunction(columnName, sortDir))
        console.log('sorting rows ', sortedRows)
    }

    const sortData = (columnLabel: any) => {
        // @ts-ignore
        console.log('sort State', columnLabel, columnStates[columnLabel])
        // @ts-ignore
        sortRowsOn(columnLabel, columnStates[columnLabel])

        setColumnStates((state) => ({
            ...state,
            // @ts-ignore
            [columnLabel]: columnStates[columnLabel] === 'asc' ? 'desc' : 'asc',
        }))
    }

    return (
        // eslint-disable-next-line no-nested-ternary
        (props.loading ? <TableBody>
                    <Grid
                        container
                        style={{width: 'calc(100vw - 20px)', height: 53 * 7}}
                        alignItems="center"
                        justifyContent="center"
                    >Searching for Balls...</Grid> </TableBody>
                : (!props.rows || props.rows.length === 0) ?
                    <Grid
                        container
                        style={{width: 'calc(100vw - 20px)', height: 53 * 7, border: '1px solid #9D9D9D',}}
                        alignItems="center"
                        justifyContent="center"
                        direction="column"
                    ><Grid item><TableChart/></Grid><Grid item>No
                        Balls Match your Search</Grid></Grid>
                    : (props.rows && props.rows.length > 0 ? (
                            <TableContainer style={{width: '100%'}}>
                                <Table
                                    style={{width: '100%'}}
                                    size="small"
                                    stickyHeader
                                    aria-label="a custom pagination sticky dense table"
                                    className={classes.table}
                                >
                                    <TableHead>
                                        <TableRow key={uuidv4()} className={classes.headerTableRow}>
                                            {props.columns?.map((column, index) => (
                                                <Hidden key={index} only={column.hidden}>
                                                    <TableCell
                                                        key={uuidv4()}
                                                        // align={column.align}
                                                        style={{
                                                            width: 'max-content',
                                                            height: 'max-content',
                                                        }}
                                                        // minWidth: `${column.minWidth}px`}}
                                                    >
                                                        <Grid
                                                            style={{
                                                                width: 'max-content',
                                                                height: 'max-content',
                                                            }}
                                                            container
                                                            wrap="nowrap"
                                                            alignItems="stretch"
                                                            onClick={() => sortData(column.id)}
                                                        >
                                                            <Grid item style={{whiteSpace: 'nowrap'}}>
                                                                <Typography color='textSecondary' variant='body1'>{
                                                                    column.label && (typeof column.label === 'string' ? column.label : column.label())
                                                                }</Typography>
                                                            </Grid>
                                                            <Grid container direction="column" item xs={2}
                                                                  alignItems="center" justifyContent="center">
                                                                <KeyboardArrowUp
                                                                    className={classes.filterIcon}
                                                                    //@ts-ignore
                                                                    style={{display: columnStates[column.id] === 'asc' ? 'inline-block' : 'none',}}
                                                                />
                                                                <KeyboardArrowDown
                                                                    className={classes.filterIcon}
                                                                    style={{
                                                                        //@ts-ignore
                                                                        display: columnStates[column.id] === 'desc' ? 'inline-block' : 'none',
                                                                    }}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                </Hidden>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {(rowsPerPage > 0
                                                ? getRows(
                                                    props.rows,
                                                    page,
                                                    rowsPerPage,
                                                )
                                                : props.rows || []
                                        ).map((row: any) => (
                                            <TableRow
                                                className={classes.tableRow}
                                                key={uuidv4()}
                                                onClick={() => {
                                                    props.rowClick(row)
                                                }}
                                            >
                                                {props.columns?.map((column, index) => (
                                                    <Hidden key={index} only={column.hidden}>
                                                        <TableCell
                                                            key={uuidv4()}
                                                            style={{
                                                                width: 'max-content',
                                                                height: 'max-content',
                                                                whiteSpace: 'nowrap',
                                                            }}
                                                            // style={{minWidth: `${column.minWidth}px`}}
                                                        >
                                                            <Typography color='textSecondary' variant='body1'>{column.renderer(row)}</Typography>
                                                        </TableCell>
                                                    </Hidden>
                                                ))}
                                            </TableRow>
                                        ))}

                                        {getEmptyRows() > 0 && (
                                            <TableRow
                                                key={uuidv4()}
                                                style={{height: 53 * getEmptyRows()}}
                                            >
                                                <TableCell
                                                    colSpan={6}
                                                    style={{
                                                        width: 'max-content',
                                                        height: 'max-content',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow key={uuidv4()} className={classes.tableRow}>
                                            <TablePagination
                                                color='#131313'
                                                style={{color: "#131313",}}
                                                labelRowsPerPage="per page"
                                                rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                                                colSpan={3}
                                                count={props.rows.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                slotProps={{
                                                    select: {
                                                        inputProps: {'aria-label': 'rows per page'},
                                                        native: true,
                                                    }
                                                }}
                                                onPageChange={handleChangePage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                                ActionsComponent={TablePaginationActions}
                                            />
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>) : <></>
                    )
        )

    )
}

export default DataTable

import {FunctionComponent} from 'react'
import {Category, CategoryGenderType, CategoryNameType, CategoryPrizeType, CategoryTypeType} from '../../ballroomTypes'
import {Button, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import {Delete, Edit} from '@mui/icons-material'


export type ClosedCategoryProps = {
    keyValue: number,
    category: any,
    editCategory?: (category: Category, key: number) => any,
    deleteCategory?: (category: Category, key: number) => any,
    showDescription?: boolean,
    showMenu?: boolean
}

const ClosedCategory: FunctionComponent<ClosedCategoryProps> = ({
                                                                    keyValue,
                                                                    category,
                                                                    editCategory,
                                                                    deleteCategory,
                                                                    showDescription,
                                                                    showMenu,
                                                                }: ClosedCategoryProps) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid
            container
            item
            spacing={1}
            alignItems='stretch'
            style={{
                backgroundColor: '#FAFAFA',
                border: `2px solid ${theme.palette.text.secondary}`,
                marginBottom: theme.spacing(1),
            }}
        >
            <Grid container item xs={3} alignItems='center' justifyContent='center'>
                <Grid container direction='column' alignItems='center' spacing={1}>
                    <Grid item>
                        <Typography
                            data-testid={`category-${keyValue}-closed-catGender`}
                            align='center'
                            color='textSecondary'
                            variant={category.versus ? 'h6' : 'h5'}
                            noWrap
                            style={{textTransform: 'capitalize'}}
                            display='inline'
                        >
                            {
                                //@ts-ignore
                                CategoryGenderType[category.catGender]
                            }
                        </Typography>
                    </Grid>
                    {
                        category.versus && <Grid item>
                            <Typography
                                align='center'
                                data-testid={`category-${keyValue}-closed-versus`}
                                color='textSecondary'
                                variant='subtitle2'
                                noWrap
                                style={{textTransform: 'capitalize'}}
                                display='inline'
                            >versus</Typography>
                        </Grid>
                    }
                    {
                        category.versus && <Grid item>
                            <Typography
                                align='center'
                                data-testid={`category-${keyValue}-closed-catVsGender`}
                                color='textSecondary'
                                variant='h6'
                                noWrap
                                style={{textTransform: 'capitalize'}}
                                display='inline'
                            >
                                {
                                    //@ts-ignore
                                    CategoryGenderType[category.catVsGender]}
                            </Typography>
                        </Grid>
                    }
                </Grid>

            </Grid>
            <Grid container item xs={smDown || !showMenu ? 9 : 7} style={{paddingRight: theme.spacing(3)}}>
                <Grid container direction='column' alignContent='space-between' justifyContent='space-between'>
                    <Grid container item justifyContent='space-between'>
                        <Grid item xs={6}><Typography
                            data-testid={`category-${keyValue}-closed-catType`}
                            color='textSecondary'
                            variant='h6'
                            noWrap
                            style={{textTransform: 'capitalize'}}
                            display='inline'
                        >{
                            //@ts-ignore

                            CategoryTypeType[category.catType]}</Typography></Grid>
                        <Grid container item xs={6} justifyContent='flex-end'><Typography
                            color='textSecondary'
                            variant='h6'
                            noWrap
                            data-testid={`category-${keyValue}-closed-catName`}
                            style={{textTransform: 'capitalize'}}
                            display='inline'
                        >{                                    //@ts-ignore
                            CategoryNameType[category.catName]}</Typography></Grid>
                    </Grid>
                    {
                        showDescription && <Grid container item data-testid={`category-${keyValue}-description`}>
                            <Grid
                                item
                                xs={12}
                                style={{
                                    paddingBottom: theme.spacing(1),
                                    paddingTop: theme.spacing(1),
                                }}
                            >
                                <Typography
                                    data-testid={`category-${keyValue}-closed-catDescription`}
                                    color='textSecondary'
                                    variant='body1'
                                    style={{textTransform: 'capitalize'}}
                                >{category.catDescription}</Typography>
                            </Grid>
                        </Grid>
                    }
                    <Grid container item justifyContent='space-between'>
                        <Grid item xs={6}><Typography
                            color='textSecondary'
                            variant='h6'
                            noWrap
                            style={{textTransform: 'capitalize'}}
                            data-testid={`category-${keyValue}-closed-catPrize`}
                            display='inline'
                        >{`Prize: ${
                            //@ts-ignore
                            CategoryPrizeType[category.catPrize]}`}</Typography></Grid>
                        {category.monetaryPrize > 0 && <Grid container item xs={6} justifyContent='flex-end'><Typography
                            color='textSecondary'
                            variant='h6'
                            noWrap
                            data-testid={`category-${keyValue}-closed-monetaryPrize`}
                            style={{textTransform: 'capitalize'}}
                            display='inline'
                        >{`$ ${category.monetaryPrize}`}</Typography></Grid>}
                    </Grid>
                </Grid>
            </Grid>
            {showMenu && <Grid
                data-testid='category-1-menu'
                container
                item
                xs={smDown ? 12 : 2}
                justifyContent='space-around'
                alignItems='center'
                wrap='nowrap'
                style={smDown ? {
                    borderTop: `2px solid ${theme.palette.text.secondary}`,
                    backgroundColor: '#c7c7c7',
                } : {borderLeft: `2px solid ${theme.palette.text.secondary}`, backgroundColor: '#c7c7c7'}}
            >
                <Button>
                    <Edit
                        data-testid={`category-${keyValue}-closed-editButton`}
                        fontSize='medium'
                        onClick={() => editCategory!(category, keyValue)}
                    />
                </Button>
                <Button>
                    <Delete
                        data-testid={`category-${keyValue}-closed-deleteButton`}
                        fontSize='medium'
                        onClick={() => deleteCategory!(category, keyValue)}
                    />
                </Button>

            </Grid>}
        </Grid>
    )
}

export default ClosedCategory

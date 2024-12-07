import {FunctionComponent} from 'react'
import {
    Category,
    CategoryGenderSubtitlesType,
    CategoryGenderType,
    CategoryNameType,
    CategoryPrizeType,
    CategoryTypeType
} from '../../ballroomTypes'
import {Button, Typography, useTheme} from '@mui/material'
import {Delete, Edit} from '@mui/icons-material'
import Grid from '@mui/material/Grid2'


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

    return (
        <Grid
            container
            spacing={1}
            // alignItems='stretch'
            style={{
                backgroundColor: '#FAFAFA',
                border: `2px solid ${theme.palette.text.secondary}`,
                marginBottom: theme.spacing(1),
            }}
        >
            <Grid container style={{paddingRight: theme.spacing(3)}}>
                <Grid container direction='column' alignContent='space-between' justifyContent='space-between'>
                    <Grid container size={{xs:12}}>
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
                                CategoryGenderType[category.catGender] ?? ""
                            }
                        </Typography>
                        <Typography align='center'
                                    color='textSecondary'
                                    variant={'body1'}
                                    noWrap
                                    style={{textTransform: 'capitalize'}}
                                    display='inline'>{
                            //@ts-ignore
                            "(" + (CategoryGenderSubtitlesType[category.catGender]??"") + ")"
                        }
                        </Typography>
                    </Grid>
                    {
                        category.versus && <Grid >
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
                        category.versus && <Grid >
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
                <Grid container  justifyContent='space-between' size={{xs:12}}>
                    <Grid  size={{xs:6}}><Typography
                        data-testid={`category-${keyValue}-closed-catType`}
                        color='textSecondary'
                        variant='h6'
                        noWrap
                        style={{textTransform: 'capitalize'}}
                        display='inline'
                    >{
                        //@ts-ignore

                        CategoryTypeType[category.catType]}</Typography></Grid>
                    <Grid container  size={{xs:6}} justifyContent='flex-end'><Typography
                        color='textSecondary'
                        variant='h6'
                        noWrap
                        data-testid={`category-${keyValue}-closed-catName`}
                        style={{textTransform: 'capitalize'}}
                        display='inline'
                    >{                                    //@ts-ignore
                        CategoryNameType[category.catName]}</Typography></Grid>
                </Grid>
                <Grid container  justifyContent='space-between' size={{xs:12}}>
                    <Grid  size={{xs:6}}><Typography
                        color='textSecondary'
                        variant='h6'
                        noWrap
                        style={{textTransform: 'capitalize'}}
                        data-testid={`category-${keyValue}-closed-catPrize`}
                        display='inline'
                    >{`Prize: ${
                        //@ts-ignore
                        CategoryPrizeType[category.catPrize] ?? "None"}`}</Typography></Grid>
                    {category.monetaryPrize > 0 && <Grid container  size={{xs:6}} justifyContent='flex-end'><Typography
                        color='textSecondary'
                        variant='h6'
                        noWrap
                        data-testid={`category-${keyValue}-closed-monetaryPrize`}
                        style={{textTransform: 'capitalize'}}
                        display='inline'
                    >{`$ ${category.monetaryPrize}`}</Typography></Grid>}
                </Grid>
                {
                    showDescription && <Grid container  data-testid={`category-${keyValue}-description`}>
                        <Grid
                            size={{xs:12}}
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
            </Grid>
            {showMenu && <Grid
                data-testid='category-1-menu'
                container
                size={{xs:12}}
                justifyContent='space-around'
                alignItems='center'
                style={{
                    borderTop: `2px solid ${theme.palette.text.secondary}`,
                    backgroundColor: '#c7c7c7',
                }}
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

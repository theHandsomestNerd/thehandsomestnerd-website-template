import {FunctionComponent, useEffect, useState} from 'react'
import {Button, FormControlLabel, FormGroup, Grid, InputAdornment, Switch, Typography, useTheme} from '@mui/material'
import {Category, CategoryGenderType, CategoryNameType, CategoryPrizeType, CategoryTypeType} from '../../ballroomTypes'
import {enumCreateSelectOptionsFromType} from '../../HTMLUtils'
import StyledTextField from "../../styled-text-field/StyledTextField";


export type CategoryStepComponentProps = {
    isEditMode?: boolean,
    isCategoryClosed?: boolean,
    category: Category,
    onCategoryChange(category: Category): void
}

type CategoryComponentState = {
    category: Category;
};

const CategoryStepComponent: FunctionComponent<CategoryStepComponentProps> = (props: CategoryStepComponentProps) => {
    const theme = useTheme()
    const initialState: CategoryComponentState = {
        category: {...props.category},
    }

    const [categoryState, setCategoryState] = useState(initialState)
    const [categoryStep, setCategoryStep] = useState<number>(0)
    const [canFinalize, setCanFinalize] = useState<boolean>(false)
    const [isCategoryClosed, setIsCategoryClosed] = useState<boolean>(false)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    useEffect(() => {
        setCategoryState({category: props.category})
    }, [props.category])

    useEffect(() => {
        setIsEditMode(!props.isEditMode)
    }, [props.isEditMode])

    useEffect(() => {
        setIsCategoryClosed(!props.isCategoryClosed)
    }, [props.isCategoryClosed])

    useEffect(() => {
        if (categoryState.category.catGender && categoryStep < 1) {
            setCategoryStep(1)
        }
    }, [categoryState.category.catGender])

    useEffect(() => {
        if (categoryState.category.catType && categoryStep < 2) {
            setCategoryStep(2)
        }
    }, [categoryState.category.catType])

    useEffect(() => {
        if (categoryState.category.catName && categoryStep < 3) {
            setCategoryStep(3)
        }
    }, [categoryState.category.catName])

    useEffect(() => {
        if (categoryState.category.catDescription && categoryState.category.catDescription.length > 1 && categoryStep < 4) {
            setCategoryStep(4)
        }
    }, [categoryState.category.catDescription])

    useEffect(() => {
        if (categoryState.category.catPrize && categoryStep < 5 &&
            //@ts-ignore
            (CategoryPrizeType[categoryState.category.catPrize] !== CategoryPrizeType.MONETARY)) {
            setCategoryStep(5)
            setCanFinalize(true)
            //@ts-ignore
        } else if (categoryState.category.catPrize && (CategoryPrizeType[categoryState.category.catPrize] === CategoryPrizeType.MONETARY)) {
            setCategoryStep(5)
            setCanFinalize(false)
        }
    }, [categoryState.category.catPrize])

    useEffect(() => {
        if (categoryState.category.monetaryPrize && categoryStep < 6 && categoryState.category.monetaryPrize > 0) {
            setCategoryStep(6)
            setCanFinalize(true)
            console.log("Finalizing add category", categoryState)
        }
    }, [categoryState.category.monetaryPrize])

    const closeCategory = () => {
        setIsCategoryClosed(!isCategoryClosed)
        props.onCategoryChange(categoryState.category)
        // props.finalizeCategory(categoryState.category)
    }

    const updateCategoryFormParams = (event:any) => {
        if (event.target.name.includes('.')) {
            const [objectName, propertyName] = event.target.name.split('.')

            const newValue = {
                [propertyName]: event.target.value,
            }

            setCategoryState(state => ({
                ...state,
                [objectName]: {
            // @ts-ignore
                    ...state[objectName],
                    ...newValue,
                },
            }))

            /** Calling Parent category update function */
            // props.onCategoryChange(categoryState.category)
        } else {
            setCategoryState(state => ({
                ...state,
                [event.target.name]: event.target.value,
            }))

            /** Calling Parent category update function */
            // props.onCategoryChange(categoryState.category)
        }
    }

    const updateCategoryBooleanFormParams = (event:any) => {
        event.persist()

        if (event.target.name.includes('.')) {
            const [objectName, propertyName] = event.target.name.split('.')

            setCategoryState((state:CategoryComponentState) => ({
                ...state,
                [objectName]: {
            // @ts-ignore
                    ...(state[objectName]),
                    [propertyName]: event.target.checked,
                },
            }))

            /** Calling Parent category update function */
            // props.onCategoryChange(categoryState.category)
        }
    }

    return (
        <Grid container style={{padding: theme.spacing(3), backgroundColor: '#FAFAFA', marginBottom: theme.spacing(2)}}>
            <Grid container item justifyContent='center'><Typography display='inline' variant='h5' color='textSecondary' gutterBottom align='center'>The Category is...</Typography></Grid>
            <Grid container item>
                {categoryStep >= 0 && <Grid
                    container
                    item
                    xs={12}
                    spacing={2}
                >
                    <Grid container item xs={12} md={5} justifyContent='center'>
                        <FormGroup>
                            <FormControlLabel
                                // style={{alignItems: 'start'}}
                                control={<StyledTextField
                                    margin='dense'
                                    required
                                    fullWidth
                                    variant='outlined'
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChange={updateCategoryFormParams}
                                    name='category.catGender'
                                    value={categoryState.category.catGender || ''}
                                    data-testid='category-gender-select-input-group'
                                    inputProps={{'data-testid': 'category-gender-select-input'}}
                                >
                                    {enumCreateSelectOptionsFromType(
                                        CategoryGenderType,
                                        true,
                                    ).map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value || ''}
                                            data-testid={`categoryGender-${option.value}`}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </StyledTextField>}
                                label={<Typography display='inline' color='textSecondary' variant='h6' noWrap>
                                    Category Gender</Typography>}
                                labelPlacement='top'
                            />
                        </FormGroup>
                    </Grid>
                    <Grid container item xs={12} md={2} justifyContent='center'>
                        <FormGroup>
                            <FormControlLabel
                                style={{alignItems: 'start'}}
                                control={<Switch
                                    checked={categoryState.category.versus || false}
                                    onChange={updateCategoryBooleanFormParams}
                                    name='category.versus'
                                    color='primary'
                                    inputProps={{'aria-label': 'categoryVs'}}
                                    data-testid='category-vs-switch-input'
                                />}
                                label={
                                    <Typography
                                        color='textSecondary'
                                        variant='h6'
                                        display='inline'
                                        noWrap
                                    >Versus</Typography>
                                }
                                labelPlacement='top'
                            />
                        </FormGroup>
                    </Grid>
                    <Grid container item xs={12} md={5} justifyContent='center'>
                        {categoryState.category.versus && <FormGroup>
                            <FormControlLabel
                                style={{alignItems: 'start'}}
                                control={<StyledTextField
                                    margin='dense'
                                    required
                                    fullWidth

                                    variant='outlined'
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChange={updateCategoryFormParams}
                                    name='category.catVsGender'
                                    value={categoryState.category.catVsGender || ''}
                                    data-testid='category-vs-gender-select-input-group'
                                    inputProps={{'data-testid': 'category-vs-gender-select-input'}}
                                >
                                    {enumCreateSelectOptionsFromType(
                                        CategoryGenderType,
                                        true,
                                    ).map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value || ''}
                                            data-testid={`categoryVsGender-${option.value}`}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </StyledTextField>}
                                label={<Typography display='inline' color='textSecondary'  variant='h6' noWrap>Category
                                    Gender</Typography>}
                                labelPlacement='top'
                            />

                        </FormGroup>
                        }
                    </Grid>
                </Grid>}
                {categoryStep >= 1 &&
                    <>

                        <Grid
                            style={{overflow:"scroll"}}
                            item
                            xs={12}
                        >
                            <FormGroup>
                                <FormControlLabel
                                    style={{alignItems: 'start'}}
                                    control={
                                        <StyledTextField
                                            margin='dense'
                                            required
                                            fullWidth

                                            variant='outlined'
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}
                                            onChange={updateCategoryFormParams}
                                            name='category.catType'
                                            value={categoryState.category.catType || ''}
                                            data-testid='category-type-select-input-group'
                                            inputProps={{'data-testid': 'category-type-select-input'}}
                                        >
                                            {enumCreateSelectOptionsFromType(
                                                CategoryTypeType, true,
                                            ).map(option => (
                                                <option
                                                    key={option.value}
                                                    value={option.value || ''}
                                                    data-testid={`categoryType-${option.value}`}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </StyledTextField>}
                                    label={<Typography display='inline' color='textSecondary'  variant='h6' noWrap >Category
                                        Type</Typography>}
                                    labelPlacement='top'
                                />
                            </FormGroup>
                        </Grid></>
                }
                {categoryStep >= 2 && <Grid
                    item
                    xs={12}
                >
                    <FormGroup>
                        <FormControlLabel
                            style={{alignItems: 'start'}}
                            control={<StyledTextField
                                margin='dense'
                                required
                                fullWidth

                                variant='outlined'
                                select
                                SelectProps={{
                                    native: true,
                                }}
                                onChange={updateCategoryFormParams}
                                name='category.catName'
                                value={categoryState.category.catName || ''}
                                data-testid='category-name-select-input-group'
                                inputProps={{'data-testid': 'category-name-select-input'}}
                            >
                                {enumCreateSelectOptionsFromType(
                                    CategoryNameType,
                                    true,
                                ).map(option => (
                                    <option key={option.value} value={option.value || ''}
                                            data-testid={`categoryName-${option.value}`}>
                                        {option.label}
                                    </option>
                                ))}
                            </StyledTextField>}
                            label={<Typography display='inline' color='textSecondary' variant='h6' noWrap >Category
                                Name</Typography>}
                            labelPlacement='top'
                        />

                    </FormGroup>

                </Grid>}
                {categoryStep >= 3 && <Grid
                    item
                    xs={12}
                >

                    <FormGroup>
                        <FormControlLabel
                            style={{alignItems: 'start'}}
                            control={<StyledTextField
                                margin='dense'
                                fullWidth

                                variant='outlined'
                                multiline
                                rows='4'
                                value={categoryState.category.catDescription || ''}
                                onChange={updateCategoryFormParams}
                                name='category.catDescription'
                                inputProps={{'data-testid': 'category-description-input'}}
                            />}
                            label={<Typography display='inline' variant='h6' color='textSecondary' noWrap >Category
                                Description</Typography>}
                            labelPlacement='top'
                        />

                    </FormGroup>
                </Grid>}
                {categoryStep >= 4 && <Grid
                    item
                    xs={12}
                >

                    <FormGroup>
                        <FormControlLabel
                            style={{alignItems: 'start'}}
                            control={<StyledTextField
                                margin='dense'
                                required
                                fullWidth

                                variant='outlined'
                                select
                                SelectProps={{
                                    native: true,
                                }}
                                onChange={updateCategoryFormParams}
                                name='category.catPrize'
                                value={categoryState.category.catPrize || ''}
                                data-testid='category-prize-select-input-group'
                                inputProps={{'data-testid': 'category-prize-select-input'}}
                            >
                                {enumCreateSelectOptionsFromType(
                                    CategoryPrizeType,
                                    true,
                                ).map(option => (
                                    <option key={option.value} value={option.value}
                                            data-testid={`categoryPrize-${option.value}`}>
                                        {option.label}
                                    </option>
                                ))}
                            </StyledTextField>}
                            label={<Typography display='inline' color='textSecondary' variant='h6' noWrap >Category
                                Prize</Typography>}
                            labelPlacement='top'
                        />

                    </FormGroup>
                </Grid>
                }
                {
                    //@ts-ignore
                    categoryState.category.catPrize && CategoryPrizeType[categoryState.category.catPrize] === CategoryPrizeType.MONETARY &&
                    <Grid
                        item
                        xs={12}
                        style={{paddingLeft: theme.spacing(5)}}
                    >
                        <FormGroup>
                            <FormControlLabel
                                style={{alignItems: 'start'}}
                                control={
                                <StyledTextField
                                    margin='dense'
                                    variant='outlined'
                                    type='number'
                                    fullWidth
                                    onChange={updateCategoryFormParams}
                                    name='category.monetaryPrize'
                                    value={categoryState.category.monetaryPrize || ''}
                                    inputProps={{'data-testid': 'monetary-prize-input'}}
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position='start'>$</InputAdornment>,
                                    }}
                                />}
                                label=''
                                labelPlacement='top'
                            />

                        </FormGroup>

                    </Grid>
                }
            </Grid>
            {canFinalize &&
                <Grid container item justifyContent='center'>
                    <Button
                        onClick={closeCategory}
                        variant={!isEditMode ? 'outlined' : 'contained'}

                        data-testid='close-category-button'
                    >{!isEditMode ? 'Add Next Category...' : 'Save'}</Button>
                </Grid>}
        </Grid>
    )
}

export default CategoryStepComponent

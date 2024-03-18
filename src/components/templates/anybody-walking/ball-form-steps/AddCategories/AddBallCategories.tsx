import React, { FunctionComponent } from 'react'
import { Button, Grid, Modal, Typography } from '@mui/material'
import { Add, Close } from '@mui/icons-material'
import CategoryStepComponent from './CategoryStepComponent'
import ClosedCategory from './ClosedCategory'
import {AddBallCategoriesState, AddBallState, Category} from '../../ballroomTypes'

export type AddBallCategoriesProps = {
  stepComplete(stepState: AddBallCategoriesState): void,
  newBallToAdd: AddBallState
}

const AddBallCategories: FunctionComponent<AddBallCategoriesProps> = (props: AddBallCategoriesProps) => {
  const [addBallCategoriesState, setAddBallCategoriesState] = React.useState<AddBallCategoriesState>({})
  const [isAddCategoryOpen, setIsAddCategoryOpen] = React.useState<boolean>(false)

  const [currentCategoryIndex, setCurrentCategoryIndex] = React.useState<number>(-1)


  React.useEffect(() => {
    if (addBallCategoriesState.categories && addBallCategoriesState.categories.length > 0) {

      props.stepComplete(addBallCategoriesState)
    }

  }, [addBallCategoriesState.categories])

  React.useEffect(() => {
    if (props.newBallToAdd?.categories) {
      setAddBallCategoriesState((state) => ({
        ...state,
        categories: props.newBallToAdd.categories
      }))

    }
  }, [props.newBallToAdd?.categories])

  const updateCategory = (update:any, index:any) => {
    let newCategories = [...addBallCategoriesState.categories ?? []]
    if (index === -1) {
      newCategories = [...newCategories, update]
    } else {
      newCategories[index] = update
    }

    setAddBallCategoriesState((state) => ({
      ...state,
      categories: newCategories
    }))
    setIsAddCategoryOpen(false)

  }

  const addCategory = () => {
    setCurrentCategoryIndex(-1)
    setIsAddCategoryOpen(true)
  }

  const editCategory = (_categoryToEdit: Category, index: number) => {
    setCurrentCategoryIndex(index)
    setIsAddCategoryOpen(true)
  }

  const deleteCategory = (_categoryToEdit: Category, index: number) => {
    const allCategories = [...addBallCategoriesState.categories ?? []]

    allCategories.splice(index, 1)

    setAddBallCategoriesState((state) => ({
      ...state,
      categories: allCategories
    }))

    setCurrentCategoryIndex(-1)
  }

  return (
    <Grid container data-testid='add-ball-categories-step' direction='column' spacing={1}>
      <Grid container item><Typography
        variant='h5' color='textSecondary'
        gutterBottom>{!addBallCategoriesState.categories || (addBallCategoriesState.categories && addBallCategoriesState.categories.length < 1) ? 'Add a category below...' : 'The Categories are...'}</Typography></Grid>
      <Grid container item direction='column' spacing={3}>
        <Grid item>
          {addBallCategoriesState.categories &&
          addBallCategoriesState.categories?.length > 0 &&
          addBallCategoriesState.categories.map((category, index) => (
            <Grid
              key={index}
              data-testid={`category-${index}-closed-container`}
              container
            >
              <ClosedCategory
                showMenu deleteCategory={deleteCategory} editCategory={editCategory} category={category}
                keyValue={index}/>
            </Grid>
          ))}
        </Grid>
        <Grid container item justifyContent='center'>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={addCategory}
              variant='outlined'
              color='primary'
              data-testid='add-category-button'
            ><Add/>Add a Category</Button>
          </Grid>

        </Grid>
      </Grid>
      <Modal
        // open={!!props.open}
        open={isAddCategoryOpen}
        data-testid='add-ball-modal'
        aria-labelledby='add-ball-modal-title'
        aria-describedby='add-ball-modal-desc'
        style={{height: 'max-content', maxWidth: '800px', minWidth: '300px', margin: 'auto'}}
      >
        <Grid container key='categoryName-edit' style={{display: 'relative'}}>
          <Grid item style={{display: 'absolute', right: 32, top: 32}}>
            <Button>
              <Close onClick={()=>setIsAddCategoryOpen(false)} fontSize='large' style={{color: "#FAFAFA"}}/>
            </Button>
          </Grid>
          <CategoryStepComponent
            key='edit'
            isEditMode={currentCategoryIndex !== -1}
            category={currentCategoryIndex === -1 ? {
              catName: undefined,
              catDescription: '',
              catType: undefined,
              catPrize: undefined,
              catGender: undefined,
              versus: false,
              catVsGender: undefined,
              monetaryPrize: undefined
            } : (addBallCategoriesState.categories ?? [])[currentCategoryIndex]}
            onCategoryChange={update =>
              updateCategory(update, currentCategoryIndex)}
          />
        </Grid>
      </Modal>
    </Grid>
  )
}

export default AddBallCategories

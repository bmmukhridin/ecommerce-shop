import { createAction } from '../../components/utils/firebase/reducer.utils';
import {CATEGORIES_ACTION_TYPES} from './category.types'

export const setCategoriesMap=(categoriesMap)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
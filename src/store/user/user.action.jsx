import { USER_ACTION_TYPES } from './user.type';

import { createAction } from '../../components/utils/firebase/reducer.utils';
  
export const setCurrentUser = (user) => {
    return createAction( USER_ACTION_TYPES.SET_CURENT_USER, user );
  };


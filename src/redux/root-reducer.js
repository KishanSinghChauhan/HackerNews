import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import commentReducer from './comment/comment-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['comment']
};

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
 
});

export default persistReducer(persistConfig, rootReducer);

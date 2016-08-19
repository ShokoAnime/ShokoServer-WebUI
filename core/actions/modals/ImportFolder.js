import { createAction } from 'redux-actions';
import { createAsyncPostAction } from '../../actions';

export const SET_STATUS = 'MODALS_IMPORT_FOLDER_SET_STATUS';
export const setStatus = createAction(SET_STATUS);

export const API_ADD_FOLDER = 'MODALS_IMPORT_FOLDER_API_ADD_FOLDER';
export const addFolderAsync = createAsyncPostAction(API_ADD_FOLDER, 'addFolder', '/folder/add');
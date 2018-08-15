// @flow
/**
 * Events are actions that are used to invoke sagas but don't get processed in the reducer usually
 */

export default {
  GLOBAL_ALERT: 'EVENT_GLOBAL_ALERT',
  DASHBOARD_LOAD: 'EVENT_DASHBOARD_LOAD',
  DASHBOARD_QUEUE_STATUS: 'EVENT_DASHBOARD_QUEUE_STATUS',
  DASHBOARD_RECENT_FILES: 'EVENT_DASHBOARD_RECENT_FILES',
  PAGE_IMPORT_FOLDERS_LOAD: 'EVENT_PAGE_IMPORT_FOLDERS_LOAD',
  PAGE_LOGS_LOAD: 'EVENT_PAGE_LOGS_LOAD',
  PAGE_SETTINGS_LOAD: 'EVENT_PAGE_SETTINGS_LOAD',
  SETTINGS_EXPORT: 'EVENT_SETTINGS_EXPORT',
  SETTINGS_IMPORT: 'EVENT_SETTINGS_IMPORT',
  SETTINGS_POST_LOG_ROTATE: 'EVENT_SETTINGS_POST_LOG_ROTATE',
  RUN_QUICK_ACTION: 'EVENT_RUN_QUICK_ACTION',
  IMPORT_FOLDERS: 'EVENT_IMPORT_FOLDERS',
  ADD_FOLDER: 'EVENT_ADD_FOLDER',
  EDIT_FOLDER: 'EVENT_EDIT_FOLDER',
  SETTINGS_POST_WEBUI: 'EVENT_SETTINGS_POST_WEBUI',
  INIT_STATUS: 'EVENT_INIT_STATUS',
  START_FETCHING: 'EVENT_START_FETCHING',
  STOP_FETCHING: 'EVENT_STOP_FETCHING',
  START_API_POLLING: 'EVENT_START_API_POLLING',
  STOP_API_POLLING: 'EVENT_STOP_API_POLLING',
  FIRSTRUN_GET_DATABASE: 'EVENT_FIRSTRUN_GET_DATABASE',
  FIRSTRUN_INIT_DATABASE: 'EVENT_FIRSTRUN_INIT_DATABASE',
  FIRSTRUN_TEST_DATABASE: 'EVENT_FIRSTRUN_TEST_DATABASE',
  FIRSTRUN_GET_DATABASE_SQL_INSTANCES: 'EVENT_FIRSTRUN_GET_DATABASE_SQL_INSTANCES',
  FIRSTRUN_GET_ANIDB: 'EVENT_FIRSTRUN_GET_ANIDB',
  FIRSTRUN_SET_ANIDB: 'EVENT_FIRSTRUN_SET_ANIDB',
  FIRSTRUN_TEST_ANIDB: 'EVENT_FIRSTRUN_TEST_ANIDB',
  FIRSTRUN_GET_USER: 'EVENT_FIRSTRUN_GET_USER',
  FIRSTRUN_SET_USER: 'EVENT_FIRSTRUN_SET_USER',
  LOGOUT: 'EVENT_LOGOUT',
  CHECK_UPDATES: 'EVENT_CHECK_UPDATES',
  SERVER_VERSION: 'EVENT_SERVER_VERSION',
  WEBUI_UPDATE: 'EVENT_WEBUI_UPDATE',
  FETCH_IMPORT_FOLDER_SERIES: 'EVENT_FETCH_IMPORT_FOLDER_SERIES',
  SETTINGS_GET_SERVER: 'EVENT_SETTINGS_GET_SERVER',
  SETTINGS_SAVE_SERVER: 'EVENT_SETTINGS_SAVE_SERVER',
  SETTINGS_GET_TRAKT_CODE: 'EVENT_SETTINGS_GET_TRAKT_CODE',
  SETTINGS_PLEX_LOGIN_URL: 'EVENT_SETTINGS_PLEX_LOGIN_URL',
  LOGIN: 'EVENT_LOGIN',
};

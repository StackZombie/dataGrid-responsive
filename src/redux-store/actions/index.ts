import axios from 'axios';
import {
  SET_DATA,
  FAILED_FETCHING,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  MOVE_PAGE,
} from '../types';
import { store } from '../index';
export const fetchData = () => async (dispatch: typeof store.dispatch) => {
  try {
    const response = await axios(
      'https://us-central1-fir-apps-services.cloudfunctions.net/transactions'
    );
    dispatch({
      type: SET_DATA,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: FAILED_FETCHING, payload: err });
  }
};

export const nextPageData = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const previousPageData = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

export const moveToSpecificPage = (page: number) => {
  return {
    type: MOVE_PAGE,
    payload: {
      page: page,
    },
  };
};

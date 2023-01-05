import { Data } from '../../global/Interfaces';
import { NEXT_PAGE, PREVIOUS_PAGE, SET_DATA, MOVE_PAGE } from '../types';

export interface DGState {
  data: Data[];
  totalCount: number;
  currentData: Data[];
  offset: number;
  start: number;
  page: number;
}

export interface DGAction {
  type?: string;
  payload?: any;
}

const InitialState: DGState = {
  data: [],
  totalCount: 0,
  currentData: [],
  offset: 10,
  start: 1,
  page: 1,
};

export default (state = InitialState, action: any): DGState => {
  switch (action.type) {
    case SET_DATA:
      console.log('Set data is called', state.start);
      return {
        ...state,
        data: action.payload.data,
        totalCount: action.payload.data.length,
        currentData: [
          ...state.data.slice(state.start - 1, state.start - 1 + state.offset),
        ],
        start: state.start + state.offset,
      };
    case NEXT_PAGE:
      console.log('next page is called', state.start);
      return {
        ...state,
        currentData: [
          ...state.data.slice(state.start - 1, state.start - 1 + state.offset),
        ],
        start: state.start + state.offset,
      };
    case PREVIOUS_PAGE:
      console.log('previous page is called', state.start);
      return {
        ...state,
        currentData: [
          ...state.data.slice(
            state.start - 1 - state.offset - state.offset,
            state.start - state.offset - 1
          ),
        ],
        start: state.start - state.offset,
      };
    case MOVE_PAGE:
      console.log(
        'Move page is called start',
        state.start,
        'page',
        action.payload.page
      );
      return {
        ...state,
        page: action.payload.page,
        currentData: [
          ...state.data.slice(
            action.payload.page * state.offset - 1,
            action.payload.page * state.offset - 1 + state.offset
          ),
        ],
      };
  }

  return InitialState;
};

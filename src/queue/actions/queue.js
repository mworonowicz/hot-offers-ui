import { smth } from '../api/queue/';
import {
  QUEUE_LOAD_PENDING,
  QUEUE_LOAD_SUCCESS,
  QUEUE_LOAD_ERROR,
} from '../constants';

export function loadQueue() {
  return (dispatch, getState) => {

    const queueId = getState().queueId;

    return dispatch({
      types: [
        QUEUE_LOAD_PENDING,
        QUEUE_LOAD_SUCCESS,
        QUEUE_LOAD_ERROR,
      ],
      payload: {
        promise: smth(queueId)
          .then((res) => {

            dispatch({
              type: 'ANOTHER_ACTION'
            })

            return res;
          })
      }
    });


  };
}

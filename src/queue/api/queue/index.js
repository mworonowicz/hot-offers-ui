import {get} from '../server';

const GET_QUEUE_ERROR = 'Error retrieving queue';

export function getQueue(queueId) {
  return new Promise((resolve, reject) => {
    return get('/queue/' + queueId)
    .then(json => resolve(json.field))
    .then(null, (err) => reject(new Error(GET_QUEUE_ERROR)));
  });
}

import { API, SET_TRIP, DELETE_TRIP, CLEAR_TRIPS } from '../constants/constants';

export const getTrips = userId => {
  return {
    type: API,
    payload: {
      method: 'GET',
      endpoint: `/users/${userId}/trips`,
      actionConst: SET_TRIP
    }
  };
};

export const getTrip = tripId => ({
  type: API,
  payload: {
    method: 'GET',
    endpoint: `/trips/${tripId}`,
    actionConst: SET_TRIP
  }
});

export const postTrip = (trip, userId) => {
  console.log('POST TRIP: ', trip)
  return {
    type: API,
    payload: {
      method: 'POST',
      endpoint: `/users/${userId}/trips`,
      body: JSON.stringify(trip),
      actionConst: SET_TRIP
    }
  };
};

export const putTrip = (trip, tripId) => ({
  type: API,
  payload: {
    method: 'PUT',
    endpoint: `/trips/${tripId}`,
    body: JSON.stringify(trip),
    actionConst: SET_TRIP
  }
});

export const deleteTrip = tripId => ({
  type: API,
  payload: {
    method: 'DELETE',
    endpoint: `/trips/${tripId}`,
    actionConst: DELETE_TRIP
  }
});

export const clearTrips = () => ({ type: CLEAR_TRIPS })
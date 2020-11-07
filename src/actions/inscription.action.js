import {Alert} from 'react-native';

import {fetchWithToken} from '../helpers/request.helper';
import {types} from '../fixtures/types';

export const startAveragesLoaded = () => {
  return async (dispatch, getState) => {
    try {
      const {id_token} = getState().authenticationReducer;

      const res = await fetchWithToken('average', {}, 'GET', id_token);
      const averages = await res.json();

      dispatch(averagesLoaded(averages));
    } catch (error) {
      console.log(error);
    }
  };
};

const averagesLoaded = (averages) => ({
  type: types.inscriptionAveragesLoaded,
  payload: averages,
});

export const startSisbensLoaded = () => {
  return async (dispatch, getState) => {
    try {
      const {id_token} = getState().authenticationReducer;

      const res = await fetchWithToken('sisben', {}, 'GET', id_token);
      const sisbens = await res.json();

      dispatch(sisbensLoaded(sisbens));
    } catch (error) {
      console.log(error);
    }
  };
};

const sisbensLoaded = (sisbens) => ({
  type: types.inscriptionSisbensLoaded,
  payload: sisbens,
});

export const startPopulationsLoaded = () => {
  return async (dispatch, getState) => {
    try {
      const {id_token} = getState().authenticationReducer;

      const res = await fetchWithToken('population', {}, 'GET', id_token);
      const populations = await res.json();

      dispatch(populationLoaded(populations));
    } catch (error) {
      console.log(error);
    }
  };
};

const populationLoaded = (populations) => ({
  type: types.inscriptionPopulationsLoaded,
  payload: populations,
});

export const startInscriptionCreate = (data) => {
  return async (dispatch, getState) => {
    try {
      const {
        user: {id},
        id_token,
      } = getState().authenticationReducer;
      data.userId = id;

      const res = await fetchWithToken('inscription', data, 'POST', id_token);
      const inscription = await res.json();

      if (inscription.status) {
        Alert.alert('Error', inscription.message);
      } else {
        Alert.alert('Correctamente', 'Inscripción realizada');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startInscriptionsRead = () => {
  return async (dispatch, getState) => {
    try {
      const {id_token} = getState().authenticationReducer;

      const res = await fetchWithToken('inscription', {}, 'GET', id_token);
      const inscriptions = await res.json();

      if (inscriptions.status) {
        Alert.alert('Error', inscriptions.message);
      } else {
        dispatch(inscriptionsReaded(inscriptions));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const inscriptionsReaded = (inscriptions) => ({
  type: types.inscriptionsReaded,
  payload: inscriptions,
});

export const startInscriptionsReadMe = () => {
  return async (dispatch, getState) => {
    try {
      const {
        user: {id},
        id_token,
      } = getState().authenticationReducer;

      const res = await fetchWithToken(
        `inscription/${id}`,
        {},
        'GET',
        id_token,
      );
      const inscriptions = await res.json();

      if (inscriptions.status) {
        Alert.alert('Error', inscriptions.message);
      } else {
        dispatch(inscriptionsReaded(inscriptions));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startInscriptionAdmit = (inscriptionId) => {
  return async (dispatch, getState) => {
    try {
      const {id_token} = getState().authenticationReducer;

      const res = await fetchWithToken(
        `inscription/admit/${inscriptionId}`,
        {state: 1},
        'PATCH',
        id_token,
      );
      const inscription = await res.json();

      if (inscription.status) {
        Alert.alert('Error', inscription.message);
      } else {
        dispatch(inscriptionAdmitted(inscriptionId));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const inscriptionAdmitted = (inscriptionId) => ({
  type: types.inscriptionAdmitted,
  payload: inscriptionId,
});

export const startInscriptionDelete = (inscriptionId) => {
  return async (dispatch, getState) => {
    try {
      const {id_token} = getState().authenticationReducer;

      const res = await fetchWithToken(
        `inscription/${inscriptionId}`,
        {},
        'DELETE',
        id_token,
      );
      const inscription = await res.json();

      if (inscription.status) {
        Alert.alert('Error', inscription.message);
      } else {
        dispatch(inscriptionDeleted(inscriptionId));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const inscriptionDeleted = (inscriptionId) => ({
  type: types.inscriptionDeleted,
  payload: inscriptionId,
});

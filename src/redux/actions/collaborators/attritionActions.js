import qs from "qs";
import { PARAMS_SERIALIZER_OPTIONS } from "common/constants";
import configAxios from "../../configAxios";
import errorHandler from "../../errorHandler";
import {
  RESET_STATE,
  GET_LIST,
  GET_LIST_LOADING,
  GET_LIST_ERROR,
} from "../../actionTypes/collaborator/attrition";

const URL = {
  main: "/attrition_charts",
};

export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_STATE,
  });
};

export const getList = (collaboratorId, query) => async (dispatch, getState) => {
  const { list, collaboratorSelected } = getState().collaboratorAttritionReducer;

  query.q.employee_id_eq = collaboratorId;

  if (!list || collaboratorSelected !== collaboratorId) {
    dispatch({
      type: GET_LIST_LOADING,
    });
    try {
      const response = await configAxios.get(URL.main, {
        params: query,
        paramsSerializer: (params) => qs.stringify(params, PARAMS_SERIALIZER_OPTIONS),
      });
      dispatch({
        type: GET_LIST,
        payload: { responseList: response.data.attrition_charts, averages: response.data.meta.averages },
        collaboratorSelected: collaboratorId,
      });
    } catch (error) {
      errorHandler(error, dispatch, GET_LIST_ERROR);
    }
  }
};

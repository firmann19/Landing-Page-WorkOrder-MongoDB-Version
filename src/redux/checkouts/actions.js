import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";
import {
  ERROR_FETCHING_CHECKOUTS,
  START_FETCHING_CHECKOUTS,
  SUCCESS_FETCHING_CHECKOUTS,
  ERROR_FETCHING_LIST_CHECKOUTS,
  START_FETCHING_LIST_CHECKOUTS,
  SUCCESS_FETCHING_LIST_CHECKOUTS,
} from "./constants";
import moment from "moment";

let debouncedFetchCheckouts = debounce(getData, 1000);
let debouncedFetchListCheckouts = debounce(getData, 1000);

export const startFetchingCheckouts = () => {
  return {
    type: START_FETCHING_CHECKOUTS,
  };
};

export const successFetchingCheckouts = ({ checkouts }) => {
  return {
    type: SUCCESS_FETCHING_CHECKOUTS,
    checkouts,
  };
};

export const errorFetchingCheckouts = () => {
  return {
    type: ERROR_FETCHING_CHECKOUTS,
  };
};

export const fetchCheckouts = () => {
  return async (dispatch) => {
    dispatch(startFetchingCheckouts());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 3000);

      let res = await debouncedFetchCheckouts("/checkoutbyiduser");

      res.data.data.forEach((res) => {
        res.UserRequestName = res.UserRequest.nama;
        res.DepartementName = res.Departement.namaDepartement;
        res.NamaPeralatan = res.NamaBarang;
        res.KodePeralatan = res.KodeBarang;
        res.Status = res.StatusPengerjaan;
        res.DateRequestWO = moment(res.Date_RequestWO).format(
          "DD-MM-YYYY, h:mm:ss a"
        );
      });

      dispatch(
        successFetchingCheckouts({
          checkouts: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingCheckouts());
    }
  };
};

export const startFetchingListCheckouts = () => {
  return {
    type: START_FETCHING_LIST_CHECKOUTS,
  };
};

export const successFetchingListCheckouts = ({ checkouts }) => {
  return {
    type: SUCCESS_FETCHING_LIST_CHECKOUTS,
    checkouts,
  };
};

export const errorFetchingListCheckouts = () => {
  return {
    type: ERROR_FETCHING_LIST_CHECKOUTS,
  };
};

export const fetchListCheckouts = () => {
  return async (dispatch) => {
    dispatch(startFetchingCheckouts());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 3000);

      let res = await debouncedFetchListCheckouts("/checkout");

      res.data.data.forEach((res) => {
        res.UserRequestName = res.UserRequest.nama;
        res.DepartementName = res.Departement.namaDepartement;
        res.NamaPeralatan = res.NamaBarang;
        res.KodePeralatan = res.KodeBarang;
        res.Status = res.StatusWO;
        res.DateRequestWO = moment(res.Date_RequestWO).format(
          "DD-MM-YYYY, h:mm:ss a"
        );
      });

      dispatch(
        successFetchingCheckouts({
          checkouts: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingCheckouts());
    }
  };
};

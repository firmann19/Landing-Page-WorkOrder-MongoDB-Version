import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";
import {
  ERROR_FETCHING_CHECKOUTS,
  START_FETCHING_CHECKOUTS,
  SUCCESS_FETCHING_CHECKOUTS,
} from "./constants";

let debouncedFetchCheckouts = debounce(getData, 1000);

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

      let res = await debouncedFetchCheckouts("/checkout");
      console.log("test", res)

      res.data.data.forEach((res) => {
        res.UserRequestName = res.UserRequest.nama;
        res.DepartementName = res.Departement.namaDepartement;
        res.NamaPeralatan = res.NamaBarang;  
        res.KodePeralatan = res.KodeBarang;
        res.Status = res.StatusPengerjaan;   
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
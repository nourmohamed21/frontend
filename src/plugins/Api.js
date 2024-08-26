import app from "@/config/app";
import { useLoaderStore } from "@/stores/loaderStore";
import axios from "axios";
import { Error } from "./Alert";
import apiStanderdResponse from "@/config/apiStanderdResponse";
import auth from "@/models/auth";


class Api {
  static apiHost = app.apiHost;
  static  #getErrorState(res) {
    Error(apiStanderdResponse[res.status]??'Unknown');
  }

  static getApiHeader() {
    const header = {
      Accept: "application/json",
    };
    const token = auth.getToken();
    if (token !== null) {
      header.Authorization = `Bearer ${token}`;
    }
    return header;
  }

  static async get(url, prameters, callback) {
    useLoaderStore().add('get-'+url);
    await axios
      .get(Api.apiHost + url, {
        headers: Api.getApiHeader(),
        params: prameters,
      })
      .then((result) => {
        if (typeof callback === "function") {
          callback(result.data);
        }
      })
      .catch((err) => {
        Api.#getErrorState(err.response);
        console.log("error:" + err.response);
      });
    useLoaderStore().remove('get-'+url);
  }
  static async post(url, parameters, callback) {
    useLoaderStore().add('post-'+url);
    await axios
      .post(Api.apiHost + url, parameters, {
        headers: Api.getApiHeader(),
      })
      .then((result) => {
        if (typeof callback === "function") {
          callback(result.data);
        }
      })
      .catch((err) => {
        Api.#getErrorState(err.response);
        console.error("Error:", err.response); // Improved error logging
      });
      useLoaderStore().remove('post-'+url);
  }
}

export default Api;
import app from "@/config/app";
import { useLoaderStore } from "@/stores/loaderStore";
import axios from "axios";
import { Success } from "./Alert";
import apiStanderdResponse from "@/config/apiStanderdResponse";
import auth from "@/models/auth";
import Swal from "sweetalert2";

class Api {
  static apiHost = app.apiHost;

  // Private method to handle errors
  static #handleError(error) {
    const errorMessage = apiStanderdResponse[error?.status] ?? "Server Error";
    // Error(errorMessage);
        Swal.fire({
            icon: "error",
            title: "",
            text: errorMessage,
            background: "transparent",
            timer: 0, // Auto-close after 3 seconds
            timerProgressBar: false,
            showConfirmButton: true,
        });
    console.error("API Error:", error);
  }

  // Get headers for API requests
  static getHeaders() {
    var headers = {
      Accept: "application/json",
    };
    var token = auth.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }

  // Generalized request handler
  static async request(method, url, parameters = {}, callback = null) {
    const loaderKey = `${method}-${url}`;
    const loaderStore = useLoaderStore();
    loaderStore.add(loaderKey);

    let response = {};
    try {
      const config = {
        method,
        url: Api.apiHost + url,
        headers: Api.getHeaders(),
      };

      if (["get", "delete"].includes(method)) {
        config.params = parameters;
      } else {
        config.data = parameters;
      }

      const result = await axios(config);
      response = result.data;

      if (typeof callback === "function") {
        callback(response);
      }

       // Show success message for non-GET methods
        if (method !== "get") {
          Success(1);
        }
    } catch (err) {
      Api.#handleError(err.response);
    } finally {
      loaderStore.remove(loaderKey);
    }

    return response;
  }

  // Specific HTTP methods
  static async get(url, parameters = {}, callback = null) {
    return await Api.request("get", url, parameters, callback);
  }

  static async post(url, parameters = {}, callback = null) {
    return await Api.request("post", url, parameters, callback);
  }

  static async put(url, parameters = {}, callback = null) {
    return await Api.request("put", url, parameters, callback);
  }

  static async patch(url, parameters = {}, callback = null) {
    return await Api.request("patch", url, parameters, callback);
  }

  static async delete(url, parameters = {}, callback = null) {
    return await Api.request("delete", url, parameters, callback);
  }

}

export default Api;

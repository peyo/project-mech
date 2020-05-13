import config from "../config";
import TokenService from "../services/token-service";

const MechApiService = {
  getDtcCommentList() {
    return fetch(`${config.API_ENDPOINT}/dtc`, {
      headers: {
      },
    })
      .then((res) =>
      !res.ok
        ? res.json().then((e) => Promise.reject(e))
        : res.json()
    );
  },
  
  postCar(car) {
    return fetch(`${config.API_ENDPOINT}/cars`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
      body: JSON.stringify(car),
    })
      .then((res) =>
      !res.ok
        ? res.json().then((e) => Promise.reject(e))
        : res.json()
    );
  },
};

export default MechApiService;

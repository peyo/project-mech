import config from '../config'

const MechApiService = {
  getDTC(dtcId) {
    
  }
  
  postCar(userId, userFirstMake, model) {
    return fetch(`${config.API_ENDPOINT}/cars`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        make: userFirstMake,
        model,
        //How do I add "vinmake_id" that matches "make" to "vinmake.make"?
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default MechApiService

handleSubmit(e) {
  e.preventDefault();
  const { DTC } = e.target;
  const DTCAdd = {
    dtc: DTC.value,
  };
  fetch(config.API_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(DTCAdd),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((error) => {
          throw error;
        });
      }
      return res.json();
    })
    .then((data) => {
      this.context.addDTC(data);
      this.props.history.push("/DisplayVINDTC");
    })
    .catch((error) => {
      this.setState({ error });
    });
}
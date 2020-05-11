import config from '../config'

const MechApiService = {
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

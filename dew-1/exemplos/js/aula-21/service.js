class NasaService {
  constructor() {
    this.apiUrl = `${environment.nasaApiUrl}?api_key=${environment.nasaApiKey}`;
  }

  /*
  // 1 Requisição usando XMLHttpRequest (ES5)
  getPhotoOfTheDay(successCallback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.apiUrl);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status === 200) {
        successCallback(xhr.response);
      } else {
        errorCallback();
      }
    };

    xhr.onerror = function () {
      errorCallback();
    };

    xhr.send();
  }
  */

  /*
 // 2 Requisição usando Promise (ES6)
  getPhotoOfTheDay() {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      resolve(xhr.response);
      reject(error);
  });
}
*/

  /*
  // 3 Requisição usando Fetch API (ES6)
  async getPhotoOfTheDay() {
    console.log("This em uma instância de classe: ", this); // this em um objeto se refere ao próprio objeto (no caso, a instância desta classe)
    const response = await fetch(this.apiUrl);

    if (!response.ok) {
      throw new Error("Erro ao consultar API");
    }

    return await response.json();
  }
}
*/

  /*
// 1 Chamada usando XMLHttpRequest (ES5)
nasaService.getPhotoOfTheDay(
  function (photo) {
    render(photo);
  },
  function () {
    console.log("Erro");
  }
);
*/

  /*
// 2 Chamada usando Promise (ES6)
nasaService
    .getPhotoOfTheDay()
    .then(function(photo){
        render(photo);
    })
    .catch(function(){
        console.log("Erro");
    });
*/
}

// Interface que representa a estrutura da resposta da API NASA APOD.
// Ela serve para tipar os dados recebidos e deixar o código mais seguro e fácil de entender.
export interface ApodResponse {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}


const BASE_URL = "https://81e2aa776c33.ngrok.io"

export async function makeRequest() {
  const response = await fetch(BASE_URL);
  const json = await response.json();
  return json;
}

export async function makeProgressRequest() {
<<<<<<< HEAD
  const response = await fetch("https://29f57a9e09fa.ngrok.io/progress"); //link serving progress data
=======
  const response = await fetch(BASE_URL+"/progress/");
>>>>>>> 3f75c84185d50c0b6e4f0bf0e2cc41aa9c3609ec
  const json = await response.json();
  return json
}

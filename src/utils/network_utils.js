const BASE_URL = "https://81e2aa776c33.ngrok.io";

export async function makeRequest() {
  const response = await fetch(BASE_URL);
  const json = await response.json();
  return json;
}

export async function makeProgressRequest() {
  const response = await fetch(BASE_URL + "/progress/");
  const json = await response.json();
  return json;
}

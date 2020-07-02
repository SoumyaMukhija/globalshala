
const BASE_URL = "https://0dd9f5a28184.ngrok.io"

export async function makeRequest() {
  const response = await fetch(BASE_URL);
  const json = await response.json();
  return json;
}

export async function makeProgressRequest() {
  const response = await fetch(BASE_URL+"/progress/");
  const json = await response.json();
  return json
}

export async function makeFeedRequest() {
  const response = await fetch(BASE_URL+"/feed_data/");
  const json = await response.json();
  return json
}

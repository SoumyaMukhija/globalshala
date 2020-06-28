export async function makeRequest() {
    const response = await fetch("https://be13791ac9e7.ngrok.io");
    const json = await response.json();
    return json;
  }
export async function makeRequest() {
  const response = await fetch("https://0c345507a599.ngrok.io");
  const json = await response.json();
  return json;
}

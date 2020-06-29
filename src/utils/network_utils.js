export async function makeRequest() {
  const response = await fetch("https://6582ac07de36.ngrok.io");
  const json = await response.json();
  return json;
}

export async function makeRequest() {
  const response = await fetch("https://29f57a9e09fa.ngrok.io");
  const json = await response.json();
  return json;
}

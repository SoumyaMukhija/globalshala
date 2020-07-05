import { Linking } from "react-native";

const BASE_URL = "https://2ae005c112eb.ngrok.io";

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

export async function makeFeedRequest() {
  const response = await fetch(BASE_URL + "/feed_data/");
  const json = await response.json();
  return json;
}

export async function makeRankingRequest() {
  const response = await fetch(BASE_URL + "/univ_ranking/");
  const json = await response.json();
  return json;
}

export async function makePredictionRequest() {
  const response = await fetch(BASE_URL + "/univ_prediction/");
  const json = await response.json();
  return json;
}

export function openInBrowser(url) {
  Linking.openURL(url).catch((err) => alert("Can not open url!"));
}

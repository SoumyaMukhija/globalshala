import { Linking } from "react-native";

const BASE_URL = "https://163607c9ffa6.ngrok.io";

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
  const names = json['university ranking data'].map(el => Object.keys(el)[0])
  return names;
}

// export async function getFeedData() {
//   fetch("http://www.ngrok.hshsha.co.uk/login", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       gre: 325,
//       toefl: 111,
//       cgpa: 8.2,
//       research: 0,
//     }),
//   });
// }

export async function makePredictionRequest() {
  const response = await fetch(BASE_URL + "/univ_prediction/");
  const json = await response.json();
  return json;
}

export function openInBrowser(url) {
  Linking.openURL(url).catch((err) => alert("Can not open url!"));
}

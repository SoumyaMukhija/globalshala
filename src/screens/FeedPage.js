import React, { useEffect, useState } from "react";
import ScreenStyles, { TextStyle } from "./CommonStyles";
import { View, Text, ScrollView } from "react-native";
import BlogCard from "../components/Cards/BlogCard";
import ContestCard from "../components/Cards/ContestCard";
import InternshipCard from "../components/Cards/InternshipCard";
import TwitterCard from "../components/Cards/TwitterCard";
import { makeFeedRequest } from "../utils/network_utils";
import LoadingPage from "./LoadingPage";

const generateCardForItem = (data) => {
  let feed = data["feed data"].map((feedItem) => {
    let contentType = feedItem["type of content"];
    switch (contentType) {
      case 0:
        return <BlogCard {...feedItem} />;
      case 1:
        return <InternshipCard {...feedItem} />;
      case 2:
        return <ContestCard {...feedItem} />;
      case 3:
        return <TwitterCard {...feedItem} />;
    }
  });
  return feed;
};

const FeedPage = (props) => {
  const [data, setData] = useState([]);

  async function getData() {
    let json = await makeFeedRequest();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  if (data && data["feed data"]) {
    return (
      <View style={ScreenStyles.screen_basic}>
        <Text style={TextStyle.heading}>Updates</Text>
        <Text style={TextStyle.subtitle}>
          Stay updated with your news feed.
        </Text>
        <ScrollView
          style={{ marginTop: 30, width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          {generateCardForItem(data)}
        </ScrollView>
      </View>
    );
  } else {
    return <LoadingPage message="Feeding your feed" />;
  }
};

export default FeedPage;

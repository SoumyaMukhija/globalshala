import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, Channel, MessageList, MessageInput } from "stream-chat-expo";

const chatClient = new StreamChat("f8wwud5et5jd");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3BhcmtsaW5nLWJ1dHRlcmZseS0wIn0.Wlyoisim1o8tjc7dagscptRk4cJRhFCvoiWKKaC_p1U";

const user = {
  id: "soumyamukhija",
  name: "Soumya",
  image:
    "https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg",
};

chatClient.setUser(user, userToken);

function ChannelScreen() {
  const channel = chatClient.channel("messaging", "sparkling-butterfly-0");
  channel.watch();

  return (
    <SafeAreaView>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <View style={{ display: "flex", height: "100%" }}>
            <MessageList />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    </SafeAreaView>
  );
}

export default function App() {
  return <ChannelScreen />;
}

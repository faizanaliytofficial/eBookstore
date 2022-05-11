import React from "react";
import { View, Text, ScrollView, Image, Button } from "react-native";

function Homescroll({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <>
        <View>
          <Image
            style={{
              height: 300,
              width: "100%",
              backgroundColor: "white",
              resizeMode: "contain",
            }}
            source={{
              uri: "https://cdn.pixabay.com/photo/2022/03/04/20/53/city-7048002_960_720.jpg",
            }}
          />
          <Button
            title={"Move"}
            onPress={() => {
              navigation.navigate("Profile", { baseCount: 15, Name: "FAIZAN" });
            }}
          />
        </View>

        <View
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "blue",
          }}
        />

        <View
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "yellow",
          }}
        />

        <View
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "orange",
          }}
        />
      </>
    </ScrollView>
  );
}

export { Homescroll };

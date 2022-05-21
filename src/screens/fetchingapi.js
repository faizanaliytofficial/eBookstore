import axios from "axios";
import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { textShadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const FetchApi = ({ navigation }) => {
  const [users, setusers] = useState([]);

  axios.get("https://api.github.com/users").then((response) => {
    // if the api call returned some data check and save it
    if (response.data) {
      setusers(response.data);
    }
  });

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemcontainer}
            onPress={() => {
              navigation.navigate("Profile", { userDetails: item });
            }}
          >
            <Image
              source={{ uri: item.avatar_url }}
              style={{ width: 80, height: 80, borderRadius: 20 }}
            />
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 20,
                textAlign: "justify",
              }}
            >
              {item.login}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export { FetchApi };

const styles = StyleSheet.create({
  itemcontainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "gray",
    margin: 1,
  },
});

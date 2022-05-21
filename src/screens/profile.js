import { useState } from "react";
import { View, Text, Image } from "react-native";

const Profile = ({ route }) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const { userDetails } = route.params;

  return (
    //Practice Code
    <View>
      <Image
        source={{ uri: userDetails.avatar_url }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          alignSelf: "center",
          margin: 10,
        }}
      />
      <Text
        style={{
          textTransform: "uppercase",
          fontSize: 20,
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {userDetails.login}
      </Text>

      {/* {/* {/* <Button
        onPress={() => {
          // const inc = count + 1
          // setCount(inc)

          if (count === 10) {
            setShow(true);
          } else {
            setShow(false);
          }

          setCount(count + 1);

          // setCount(count++)
        }}
        title={"increase"}
      />

      {show === true ? (
        <Button
          onPress={() => {
            // const dec = count - 1
            // setCount(dec)

            setCount(count - 1);
          }}
          title={"Decrease"}
        />
      ) : (
        <View /> 
      )} */}
    </View>
  );
};

export { Profile };

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";
import { circle } from "react-native/Libraries/Animated/Easing";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import React from "react";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/ebook.png")}
        />
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.allabel}>Email:</Text>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
          onSubmitEditing={(inputData) => {
            alert(inputData.nativeEvent.text);
          }}
          keyboardType="email-address"
        />

        <Text style={styles.allabel}>Password:</Text>
        <TextInput
          placeholder="Enter Secure Password"
          style={styles.inputt}
          secureTextEntry={true}
        />

        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.replace("ApiFetcher");
          }}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <View style={styles.linkView}>
          <Text>Don't have account?</Text>

          <Pressable
            onPress={() => {
              navigation.navigate("Signup", {
                username: "Faizan Ali",
                Age: 20,
                FatherN: "Amir Haider",
              });
            }}
          >
            <Text style={styles.linkscreen}>SignUp</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        {/* <Text style={styles.text} >&copy; eBooks 2022</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },

  upperContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  midContainer: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },

  inputt: {
    borderWidth: 1,
    height: 50,
    alignContent: "center",
    borderRadius: 15,
    paddingLeft: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    height: 50,
    alignContent: "center",
    borderRadius: 15,
    paddingLeft: 20,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    marginBottom: 10,
  },

  text: {
    color: "#fff",
    alignItems: "center",
  },

  allabel: {
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  tinyLogo: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 45,
  },

  button: {
    backgroundColor: "green",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 12,
  },

  linkscreen: {
    color: "green",
  },

  linkView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Login;

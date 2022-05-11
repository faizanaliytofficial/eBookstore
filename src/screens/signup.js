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
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Calendar } from "react-native-calendars";

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/ebook.png")}
        />
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.allabel}>Full Name:</Text>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
          onSubmitEditing={(inputData) => {
            alert(inputData.nativeEvent.text);
          }}
        />
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
          style={styles.input}
          secureTextEntry={true}
        />

        <Text style={styles.allabel}>Confirm Password:</Text>
        <TextInput
          placeholder="Enter Secure Password"
          style={styles.inputt}
          secureTextEntry={true}
        />

        <Pressable style={styles.button}>
          <Text style={styles.text}>SignUp</Text>
        </Pressable>
        <View style={styles.linkView}>
          <Text> Have Account ? </Text>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.linkscreen}>Login</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>&copy; eBooks 2022</Text>
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
    marginTop: 30,
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  midContainer: {
    flex: 6,
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
    marginBottom: 20,
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
  },

  text: {
    color: "#fff",
    alignContent: "center",
  },
  button: {
    backgroundColor: "green",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 12,
  },

  allabel: {
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 45,
  },
  linkView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  linkscreen: {
    color: "green",
  },
});

export default SignUp;

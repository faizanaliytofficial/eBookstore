import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/login";
import SignUp from "../../screens/signup";
import { Homescroll } from "../../screens/homescroll";
import { ListScreen } from "../../screens/lists";
import { Profile } from "../../screens/profile";
import { FetchApi } from "../../screens/fetchingapi";

const NavContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ApiFetcher" component={FetchApi} />
        <Stack.Screen name="HomeS" component={Homescroll} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { NavContainer };

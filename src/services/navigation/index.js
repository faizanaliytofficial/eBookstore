import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/login';
import SignUp from '../../screens/signup';



const NavContainer = ()=> {
     const  Stack = createNativeStackNavigator();
    return(

      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen  name='Login'  component={Login}/>
              <Stack.Screen name='Signup'  component={SignUp} />
          </Stack.Navigator>
      </NavigationContainer>

    )
}

export {NavContainer};
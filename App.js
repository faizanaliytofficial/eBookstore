import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import SignUp from './src/screens/signup';
import MyCalendar from './src/screens/Calendar';
import {NavContainer} from './src/services/navigation/index'


export default function App() {
  return (
    <NavContainer/>
  ); 
}






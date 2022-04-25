import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text , View , TextInput ,Button, Image} from "react-native";
import { circle } from 'react-native/Libraries/Animated/Easing';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function Login () {
return(
     <View style={styles.container} >

     <View style={styles.upperContainer}>
     
      <Image
         style={styles.tinyLogo}
        source={require('../../assets/ebook.png')}

       />
        
     
         
     </View>

     <View style={styles.midContainer}>
         <Text style={styles.allabel} >Email:</Text>
         <TextInput
          placeholder="Enter Your Email"
          style= {styles.input}
          onSubmitEditing={(inputData)=>
            {
                alert(inputData.nativeEvent.text)
            }
        
        }
        keyboardType='email-address'

         />

         <Text style={styles.allabel}  >Password:</Text>
         <TextInput 
         placeholder="Enter Secure Password"
         style={styles.inputt}
         secureTextEntry={true}
         />

           <Button
            color="green" //button color
            borderRadius="40"
            title="Login"
          />
     </View>

     <View style={styles.bottomContainer}>

         <Text style={styles.text} >&copy; eBooks 2022</Text>



     </View>
     </View>

);

}


const styles = StyleSheet.create({
container : {
    flex:1,
    backgroundColor: 'green',
    marginTop:50
},

upperContainer : {
    flex:1,
    justifyContent : 'flex-end',
    alignItems:'center',
    marginTop:10
    
    
},

title:{
    color: '#fff',
    fontWeight:'bold',
    fontSize:30
},
midContainer : {
    flex:2,
    backgroundColor:"#fff",
    padding : 20,
    borderRadius:20,
    marginTop:10
},

inputt:{
    borderWidth:1,
    height: 50,
    alignContent:'center',
    borderRadius:15,
    paddingLeft:20,
    marginBottom:30
},
input:{
    borderWidth:1,
    height: 50,
    alignContent:'center',
    borderRadius:15,
    paddingLeft:20,
},
bottomContainer :{
    flex:1,
    backgroundColor:"green",
    alignItems:'center',
    marginBottom:10
    
},

text:{
    color:'#fff',
    alignContent:'center',
    
},

allabel:{
    paddingLeft:10,
    marginTop:10,
    marginBottom:10
},

tinyLogo: {
    width: 120,
    height: 120,
    borderWidth:2,
    borderColor:"#fff",
  },



});

export default Login;
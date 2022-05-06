import  React from "react";
import { View,Text , ScrollView,Image} from "react-native";
import { ImageBackground } from "react-native-web";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function Homescroll(){
   
   return(
        <ScrollView style={{backgroundColor:"white" }}>
        <>
        <View 
            style={{
                height: 300,
                width :"100%",
                backgroundColor:"green"
            
                
            }
            }
            >
         <Image
         
         source={uri:"https://cdn.pixabay.com/photo/2022/03/04/20/53/city-7048002_960_720.jpg"}

            </View>

        
        
        
        
            
        
        

        
            
        />

        <View 
            style={{
                height: 300,
                width :"100%",
                backgroundColor:"blue"
            }
        }
            
        />

        <View 
            style={{
                height: 300,
                width :"100%",
                backgroundColor:"yellow"
            }
        }
            
        />

        <View 
            style={{
                height: 300,
                width :"100%",
                backgroundColor:"orange"
            }
        }
            
        />

        </>
        </ScrollView>



   )
    
    
}




       
     

    





export {Homescroll}
import React from 'react'
import { FlatList,Image,View,Text ,StyleSheet} from 'react-native'
import { back } from 'react-native/Libraries/Animated/Easing'



 function  ListScreen (){

    const numbers =[1,2,3,4,5,6]

    const booksObjArray = [
       {
         1:"Book1",
         2: 190,
       },
       {
         1:"Book2",
         2: 270,
       },
       {
         1: "Book3",
         2: 300
       }


    ]
     return(
        <View>
          {/* <View>
            <Text>Stories Books</Text>
        <FlatList
       
        horizontal={true}
        data= {numbers}
        renderItem={({item})=>(
          <Image 
          style={{
              width: 150,
              height:150,
              borderRadius:50,
              marginHorizontal:8,
              resizeMode:"contain",
          
        
        }}
          source ={{ uri : 'https://en.ac-illust.com/_next/image?url=https%3A%2F%2Fthumb.ac-illust.com%2F32%2F32b653bd881f81d4a68dba03fcbecd2a_w.jpeg&w=1920&q=75',}}
          />
            
        )}
        
        >


        </FlatList>
          </View> */}

          <View>
          <Text>Books About Games</Text>
        <FlatList
        
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data= {booksObjArray}
        renderItem={({item})=>(
          <View>
          <Image 
          style={{
              width: 150,
              height:200,
              borderRadius:50,
              marginHorizontal:8,
              resizeMode:"contain"
          
          
        
        }}
          source ={{ uri : 'https://en.ac-illust.com/_next/image?url=https%3A%2F%2Fthumb.ac-illust.com%2F4a%2F4ae866d3970aed50c66cf19ed4f3e455_w.jpeg&w=1920&q=75',}}
          />

          <Text style={styles.eng}>Name: {item[1]}</Text>
          <Text style={styles.eng}>Pages: {item[2]}</Text>

          </View>
            
        )}
        
        >
        


        </FlatList>
          </View>
        </View>
     )
 }


 const styles=StyleSheet.create({
      eng:{
        marginHorizontal:10,
      }
    
 })

 export {ListScreen}
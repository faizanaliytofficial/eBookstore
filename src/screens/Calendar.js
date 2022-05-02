import {Calendar} from 'react-native-calendars';
import { View, StyleSheet } from 'react-native';

const MyCalendar= ()=> {

    return(

          <View style={styles.normal}>
              <Calendar
                current={'2012-03-01'} 
              
            />
          </View>
            
        
    );

}

const styles = StyleSheet.create({

    normal :{
        marginTop:150,
    }

})

export  default MyCalendar;
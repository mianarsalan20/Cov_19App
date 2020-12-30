import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  Button, 
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
  TextComponent} from 'react-native';



 export default function  StartScreen ({navigation}) {
 
  return (
    <View style={styles.container}>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText} >COUNTRIES</Text>
        <Text style={styles.subtitleText} >SELECT TO SEE STATISTIC</Text>
      </View>
    

      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('countriesList')}>
           
          <Text style={styles.appButtonText} >Countries List</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  titleContainer: {
    backgroundColor: 'black',
    width: '100%',
    padding: 3,
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subtitleText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },

  appButtonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  
});

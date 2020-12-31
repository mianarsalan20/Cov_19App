import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  ActivityIndicator,
  FlatList,
  Button, 
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
  TextComponent} from 'react-native';



 export default function  StartScreen ({navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [dataSource, setDataSource] = React.useState([]);
    const obj = dataSource;
  
    React.useEffect(() => {
      getData();
    });
  
    const getData = () => {

        fetch("https://covid-19-data.p.rapidapi.com/totals", {
	      "method": "GET",
	      "headers": {
		    "x-rapidapi-key": "ef89bbe142mshb4ec81a1088e2b2p1e8415jsn1f6002e82c0e",
		    "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      	}
        })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          return setDataSource(json);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    };
  
    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="blue" />
          <Text>Loading Data from JSON Placeholder API ...</Text>
        </View>
      );
    }
  
 
  return (
    <View style={styles.container}>


      <View style={styles.titleContainer}>
        <Text style={styles.titleText} >WORLD</Text>
        <Text style={styles.subtitleText} >STATISTICS</Text>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.tableContainer}>
          <Text style={styles.tableText} >CONFIRMED CASES:</Text>
          <Text style={styles.subtableText} >{obj.confirmed}</Text>
        </View>
        <View style={styles.tableContainer1}>
          <Text style={styles.tableText} >RECOVERED:</Text>
          <Text style={styles.subtableText} >{obj.recovred}</Text>
        </View>
        <View style={styles.tableContainer}>
          <Text style={styles.tableText} >DEAD:</Text>
          <Text style={styles.subtableText} >{obj.deaths}</Text>
        </View>
        <View style={styles.tableContainer1}>
          <Text style={styles.tableText} >LAST UPDATED:</Text>
          <Text style={styles.subtableText} >{lastUpdate}</Text>
        </View>
      </View>

      <View style={{paddingBottom:60}}>
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
  subcontainer: {
    flex: 1,
    paddingTop:70,
    alignItems: 'center',
    width: '90%',
  },
  tableContainer: {
    backgroundColor: 'lightgray',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    padding: 3,
  },
  tableContainer1: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    padding: 3,
  },
  tableText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    width:'45%',
  },
  subtableText: {
    fontSize: 18,
    alignSelf: 'center',
    width:'45%',
    paddingLeft:60,
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
    fontSize: 20,
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

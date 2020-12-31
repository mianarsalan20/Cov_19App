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
  const localObj = dataSource;

  React.useEffect(() => {
    getData();
  });

  const getData = () => {

      fetch("https://world-population.p.rapidapi.com/allcountriesname", {
	    "method": "GET",
	    "headers": {
		  "x-rapidapi-key": "ef89bbe142mshb4ec81a1088e2b2p1e8415jsn1f6002e82c0e",
		  "x-rapidapi-host": "world-population.p.rapidapi.com"
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
        <Text style={styles.titleText} >COUNTRIES</Text>
        <Text style={styles.subtitleText} >SELECT TO SEE STATISTIC</Text>
      </View>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.5}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomWidth: 1,
                borderColor: 'grey',
              }}>
              <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                <Text>
                  {item.country}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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
  },
  tableContainer: {
    backgroundColor: 'lightgray',
    width: '90%',
    flexDirection: 'row',
    paddingVertical: 10,
    padding: 3,
  },
  tableContainer1: {
    backgroundColor: 'white',
    width: '90%',
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

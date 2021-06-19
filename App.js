import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import User from './components/User';

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];
      setData(details);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <User details={data} />
        <View>
          <Button
            rounded
            success
            style={styles.button}
            onPress={() => fetchData()}>
            <Text style={styles.text}>New User</Text>
          </Button>
        </View>
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  text: {
    color: '#eeeeee',
    fontSize: 22,
  },
});

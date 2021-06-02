import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {

  state = {data:[]};

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async()=>{
      const response = await fetch(' https://randomuser.me/api/?results=100&inc=name')
      const jsonObj = await response.json();
      this.setState({data:jsonObj.results});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              {`${item.name.title} ${item.name.first} ${item.name.last}`}
            </Text>}
        />
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

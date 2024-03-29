import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=100&inc=name");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View style={styles.container }>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
            <Text>
              {`${item.name.title} ${item.name.first} ${item.name.last}`}
            </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
    
  }
});
import React, { Component } from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import Button from "./src/components/Button";
export default class HelloWorldApp extends Component {
  constructor() {
    super();
    this.state = {
      uri: require(`./src/Images/dice1.png`)
    };
  }
//Method to get random value from 1 to 6
  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
//Method will call on button press
  playButtonPressed = () => {
    let ranNumber = this.getRandomValue();
    switch (ranNumber) {
      case 1:
        this.setState({ uri: require(`./src/Images/dice1.png`) });
        break;
      case 2:
        this.setState({ uri: require(`./src/Images/dice2.png`) });
        break;
      case 3:
        this.setState({ uri: require(`./src/Images/dice3.png`) });
        break;
      case 4:
        this.setState({ uri: require(`./src/Images/dice4.png`) });
        break;
      case 5:
        this.setState({ uri: require(`./src/Images/dice5.png`) });
        break;
      case 6:
        this.setState({ uri: require(`./src/Images/dice6.png`) });
        break;
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E74292"
        }}
      >
        <Image source={this.state.uri} />
        <Button text="Roll It!" onPress={this.playButtonPressed} />
      </View>
    );
  }
}

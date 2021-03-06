/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Animated, Easing} from 'react-native';
import AnimatedModal from './AnimatedModal';
import AnimatedModal2 from './AnimatedModal2';
import Backplane from './Backplane';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      hello:false,
      isModalVisible:false,
      isModalVisible2:false,
    }
  }


  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.setState({isModalVisible:true})}>
      <Text>Modal1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.setState({isModalVisible2:true})}>
      <Text>Modal2</Text>
      </TouchableOpacity>

      <AnimatedModal
                title={"View Pokemon"}
                visible={this.state.isModalVisible}
                onClose={() => {
                  this.setState({
                    isModalVisible: false
                  });
                }}
              >
              <Text style={{color:'black'}}>amd tjis is the content of the modal</Text>
              </AnimatedModal>
              <AnimatedModal2
                        title={"View Pokemon"}
                        visible={this.state.isModalVisible2}
                        onClose={() => {
                          this.setState({
                            isModalVisible2: false
                          });
                        }}
                      >
                      <Text style={{color:'black'}}>amd tjis is the content of the modal</Text>
                      </AnimatedModal2>
                <Backplane
                  title={"wiefowinef"}
                  visible={this.state.isModalVisible2}
                  onClose={() => {
                    this.setState({
                      isModalVisible2: false
                    });
                  }}
                  >
                  </Backplane>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

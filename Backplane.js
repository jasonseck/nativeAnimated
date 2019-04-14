import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get("window");

type Props = {};
export default class Backplane extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      moveAnim : new Animated.Value(0),
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('props updated');
    if (this.props.visible) {
      this.state.fadeAnim.setValue(0);
      this.state.moveAnim.setValue(0);
      Animated.sequence([
        Animated.timing(this.state.moveAnim, {
          toValue:1,
          duration:0
        }),
        Animated.timing(this.state.fadeAnim, {
          toValue: .8,
          duration:250,
        })
      ]).start();
          } else {
            Animated.sequence([
              Animated.timing(this.state.moveAnim, {
                toValue:0,
                duration:0
              }),
              Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration:250,
              })
            ]).start();
    }
  }

  render() {
    console.log(this.state);
    const { title, children, onClose } = this.props;

    return (
      <Animated.View style={[styles.container, {opacity:this.state.fadeAnim,
        transform:[{
          translateY: this.state.moveAnim.interpolate({
            inputRange:[0,1],
            outputRange:[height,0]
          })
        }]
      }]}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>

        <Text style={{color:'white'}}>backplane of the modal.</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    position: "absolute",
    height: height,
    width: width,
    bottom:0,
    backgroundColor: "#000",
    zIndex:9999
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        paddingTop: 30
  },
  closeText: {
    fontSize: 17,
    color: "#fff"
  }
};

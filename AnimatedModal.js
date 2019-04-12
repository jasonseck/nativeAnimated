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
export default class AnimatedModal extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('props updated');
    if (this.props.visible) {
      this.state.fadeAnim.setValue(0);
      Animated.timing(this.state.fadeAnim, {
        toValue: 1
      }).start();
    } else {
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear
      }).start();
    }
  }

  render() {
    console.log(this.state);
    const { title, children, onClose } = this.props;

    return (
      <Animated.View style={[styles.container, {opacity:this.state.fadeAnim,
        transform:[{
          translateY: this.state.fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[height,0]
          })
        }]
      }]}>
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>

        <Text>LOTS OF STUFF HERE</Text>
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
    backgroundColor: "#f00"
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        paddingTop: 30
  },
  closeText: {
    fontSize: 17,
    color: "#000"
  }
};

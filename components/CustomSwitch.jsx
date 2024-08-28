import React, { useRef, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";

const CustomSwitch = ({ value, onValueChange, trackColor, thumbColor }) => {
  const position = useRef(new Animated.Value(value ? 20 : 0)).current;

  useEffect(() => {
    Animated.spring(position, {
      toValue: value ? 20 : 0,
      useNativeDriver: true,
      friction: 8, // Adjust friction for smoothness
      tension: 50, // Adjust tension for speed
    }).start();
  }, [value]);

  const toggleSwitch = () => {
    onValueChange(!value);
  };

  return (
    <TouchableOpacity
      style={[
        styles.switch,
        { backgroundColor: value ? trackColor.true : trackColor.false },
      ]}
      onPress={toggleSwitch}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[
          styles.thumb,
          { backgroundColor: thumbColor },
          { transform: [{ translateX: position }] },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 2,
    justifyContent: "center",
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});

export default CustomSwitch;

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors'; // Adjust the import path as needed

const ColorPicker = ({ tintColor, setTintColor }) => {
  // Define all the colors to display
  const colorOptions = [
    Colors.blue,
    Colors.pink,
    Colors.purple,
    Colors.red,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Theme Color</Text>
      <View style={styles.colorGrid}>
        {colorOptions.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorOption, { backgroundColor: color.primary }]}
            onPress={() => setTintColor(color)} // Update the tintColor on press
          >
            {tintColor === color && <View style={styles.selectedIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
});

export default ColorPicker;

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import CustomSwitch from "../components/CustomSwitch"; // Import your custom switch
import ColorPicker from "../components/ColorPicker";

const Settings = ({ isDarkMode, setIsDarkMode, tintColor, setTintColor }) => {
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: "100%",
        height: "100%",
        backgroundColor: isDarkMode ? "#151718" : "white",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: tintColor.primary,
          paddingBottom: 2,
          borderBottomWidth: 0.3,
          borderColor: tintColor.primary,
        }}
      >
        Major Settings
      </Text>

      <View
        style={[
          styles.colorPickerButton,
          {
            borderTopWidth: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Text style={{ fontSize: 16, color: tintColor.primary }}>
          Dark Mode
        </Text>
        <CustomSwitch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ true: tintColor.primary, false: "#ccc" }}
          thumbColor={"white"}
        />
      </View>

      <TouchableOpacity
        style={[styles.colorPickerButton, { backgroundColor: "transparent" }]}
        onPress={() => setIsColorPickerVisible(true)}
      >
        <Text style={{ color: tintColor.primary, fontSize: 20 }}>
          Choose Theme Color
        </Text>
        <View
          style={{
            backgroundColor: tintColor.primary,
            width: 50,
            height: 50,
            borderRadius: 100,
          }}
        ></View>
      </TouchableOpacity>

      {/* Modal to display the ColorPicker */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isColorPickerVisible}
        onRequestClose={() => setIsColorPickerVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Color</Text>
            <ColorPicker tintColor={tintColor} setTintColor={setTintColor} />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsColorPickerVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  colorPickerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingRight: 30,
    alignItems: "center",
    marginHorizontal: -20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default Settings;

import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const AboutDev = ({ isDarkMode, tintColor }) => {
  const openGitHubLink = () => {
    const url = "https://github.com/DaniyalIAhmed";
    Linking.openURL(url).catch((err) => console.error("Failed to open URL", err));
  };
  const openRepLink = () => {
    const url = "https://github.com/DaniyalIAhmed";
    Linking.openURL(url).catch((err) => console.error("Failed to open URL", err));
  };

  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: "100%",
        height: "100%",
        backgroundColor: isDarkMode ? "#151718" : "white",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          source={require("../assets/images/about.jpg")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            color: tintColor.primary,
            fontSize: 30,
          }}
        >
          Daniyal Ahmed
        </Text>
        <Text
          style={{
            color: tintColor.primary,
            fontSize: 20,
            textAlign: "center",
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          I am a Full Stack Developer with a passion for creating beautiful and
          functional user interfaces. I have experience working with JavaScript,
          React, React Native, Node.js, Express, MongoDB, and Firebase. I am
          always eager to learn new technologies and improve my skills. I am
          currently looking for new opportunities to work on exciting projects.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 15,
          backgroundColor: tintColor.secondary,
          width: 150,
          borderRadius: 5,
          marginVertical: 30,
          alignSelf: "center",
        }}
        onPress={openGitHubLink}
      >
        <AntDesign name="github" size={30} color={tintColor.primary} />
        <Text
          style={{
            color: tintColor.primary,
            fontSize: 24,
          }}
        >
          GitHub
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        padding: 10,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap: 10,
        backgroundColor: tintColor.secondary,
        width: 150,
        borderRadius: 5,
        marginHorizontal: 'auto',
      }}
      onPress={openRepLink}>
        <AntDesign name="codesquare" size={30} color={tintColor.primary} />
        <Text
          style={{
            color: tintColor.primary,
            fontSize: 24,
          }}
        >
          Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutDev;

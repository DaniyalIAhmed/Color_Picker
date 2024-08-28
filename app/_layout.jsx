import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "../components/Settings";
import AboutDev from "../components/AboutDev";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Colors } from "../constants/Colors";

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [tintColor, setTintColor] = useState(Colors.blue);
  const currentColors = isDarkMode ? Colors.dark : Colors.light;

  useEffect(() => {
    console.log("RootLayout: isDarkMode updated to", isDarkMode);
  }, [isDarkMode]);

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: currentColors.background,
            width: 250,
          },
          headerStyle: {
            backgroundColor: currentColors.background,
            height: 75,
          },
          headerTitleStyle: {
            color: tintColor.primary,
            marginLeft: 20,
            fontSize: 24,
            fontFamily: "Roboto-Bold",
          },
          drawerActiveBackgroundColor: tintColor.secondary,
          drawerInactiveBackgroundColor: currentColors.background,
          drawerActiveTintColor: tintColor.primary,
          drawerInactiveTintColor: tintColor.primary,
          drawerLabelStyle: {
            fontSize: 18,
            fontFamily: "Roboto-Bold",
            marginVertical: 2,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu"
                size={30}
                color={tintColor.primary}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen 
          name="Settings" 
          component={(props) => (
            <Settings 
              {...props} 
              isDarkMode={isDarkMode} 
              setIsDarkMode={setIsDarkMode} 
              tintColor={tintColor} 
              setTintColor={setTintColor} 
            />
          )}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="About Developer" 
          component={(props) => (
            <AboutDev 
              {...props} 
              isDarkMode={isDarkMode} 
              tintColor={tintColor} 
            />
          )}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

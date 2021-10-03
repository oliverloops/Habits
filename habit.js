import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Habit = () => {
  return (
    <View style={styles.main}>
      <Text>I'm the habit page</Text>
    </View>
  );
};

const HabitScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Habit" component={Habit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HabitScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: "12%",
    marginLeft: "5%",
    marginRigth: "5%",
  },
});

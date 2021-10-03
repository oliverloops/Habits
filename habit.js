import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HabitScreen = ({ route, navigation }) => {
  const { pageTitle } = route.params;
  navigation.setOptions({ title: pageTitle });

  return (
    <View style={styles.main}>
      <View style={styles.pageContent}>
        <Text>I'm the habit: {pageTitle} page</Text>
      </View>
    </View>
  );
};

export default HabitScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageContent: {
    marginTop: "12%",
    marginLeft: "5%",
    marginRight: "5%",
  },
});

import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
//Context
import { habitContext } from "./App";

const Form = ({ navigation }) => {
  const consumer = useContext(habitContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const updateTitle = (value) => {
    setTitle(value);
  };

  const updateDesc = (value) => {
    setDesc(value);
  };

  const storeHabit = () => {
    let data = {
      title: title,
      desc: desc,
      days: 0,
      icon: "💻",
      color: "hsl(36, 95%, 76%)",
    };
    consumer.push(data);
    setTitle("");
    setDesc("");
    navigation.navigate("Home");
  };

  return (
    <>
      <View style={styles.main}>
        <Text style={{ fontSize: 14, color: "gray" }}>TITULO</Text>
        <View style={{ marginTop: 15 }}>
          <TextInput
            onChangeText={(text) => {
              updateTitle(text);
            }}
            style={styles.input}
          />
        </View>
        <Text style={{ marginTop: 20, fontSize: 14, color: "gray" }}>
          DESCRIPCIÓN
        </Text>
        <View style={{ marginTop: 15 }}>
          <TextInput
            onChangeText={(text) => {
              updateDesc(text);
            }}
            style={styles.input}
          />
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <Button title="Guardar" onPress={storeHabit} />
      </View>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: "8%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  input: {
    height: 38,
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 10,
  },
});

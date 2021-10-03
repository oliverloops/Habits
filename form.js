import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Form = () => {
  return (
    <>
      <View style={styles.main}>
        <Text style={{ fontSize: 14, color: "gray" }}>TITULO</Text>
        <View style={{ marginTop: 15 }}>
          <TextInput style={styles.input} />
        </View>
        <Text style={{ marginTop: 20, fontSize: 14, color: "gray" }}>
          DESCRIPCIÓN
        </Text>
        <View style={{ marginTop: 15 }}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <Button title="Guardar" />
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

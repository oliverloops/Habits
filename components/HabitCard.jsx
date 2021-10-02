import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HabitCard = () => {
  return (
    <>
      <View style={styles.emojiBox}>
        <Text
          style={{
            fontSize: 26,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          ⛰️
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.titleBox}>Escalada</Text>
        <Text style={styles.subtitleBox}>
          <Text style={{ fontSize: 16, fontWeight: "800" }}>3</Text> dias
        </Text>
      </View>
      <View style={styles.shadowBox}></View>
    </>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    backgroundColor: "hsl(359, 100%, 100%)",
    borderColor: "hsl(0, 0%, 0%)",
    borderWidth: 3,
    borderRadius: 14,
    height: 160,
    width: 120,
    zIndex: 2,
    position: "absolute",
  },
  shadowBox: {
    backgroundColor: "hsl(97, 96%, 84%)",
    marginTop: 7,
    marginLeft: 7,
    borderWidth: 3,
    borderRadius: 14,
    height: 160,
    width: 120,
    zIndex: 0,
  },
  emojiBox: {
    backgroundColor: "hsl(97, 96%, 84%)",
    marginTop: -10,
    marginLeft: -8,
    borderWidth: 3,
    borderRadius: 12,
    height: 44,
    width: 44,
    zIndex: 3,
    position: "absolute",
  },
  titleBox: {
    fontSize: 21,
    fontWeight: "800",
    marginTop: 45,
    marginLeft: 10,
    marginRight: 10,
  },
  subtitleBox: {
    fontSize: 14,
    marginTop: 50,
    marginRight: 15,
    textAlign: "right",
  },
});
export default HabitCard;
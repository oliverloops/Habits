import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HabitCard = ({ title, days, icon, color, navigation }) => {
  const navigate = () => {
    navigation.navigate("Habit", { pageTitle: title });
  };

  return (
    <View style={{ marginLeft: 25 }}>
      <TouchableOpacity onPress={navigate}>
        <View style={[styles.emojiBox, { backgroundColor: color }]}>
          <Text
            style={{
              fontSize: 26,
              marginTop: 2,
              textAlign: "center",
              textAlignVertical: "center",
            }}
          >
            {icon}
          </Text>
        </View>
        <View style={styles.contentBox}>
          <View style={{ height: 120, width: 120 }}>
            <Text style={styles.titleBox}>{title}</Text>
          </View>
          <Text style={styles.subtitleBox}>
            <Text style={{ fontSize: 16, fontWeight: "800" }}>{days}</Text> dias
          </Text>
        </View>
        <View style={[styles.shadowBox, { backgroundColor: color }]}></View>
      </TouchableOpacity>
    </View>
  );
};

export default HabitCard;

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
    marginTop: 7,
    marginLeft: 7,
    borderWidth: 3,
    borderRadius: 14,
    height: 160,
    width: 120,
    zIndex: 0,
  },
  emojiBox: {
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
    fontSize: 20,
    fontWeight: "800",
    marginTop: 45,
    marginLeft: 10,
    marginRight: 21,
    marginBottom: 20,
    maxHeight: 60,
    textAlign: "justify",
  },
  subtitleBox: {
    fontSize: 14,
    marginRight: 15,
    textAlign: "right",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HabitScreen = ({ route, navigation }) => {
  const { pageTitle, time, icon, color } = route.params;
  navigation.setOptions({ title: pageTitle });

  return (
    <View style={styles.main}>
      <View style={styles.pageContent}>
        <HabitContainer
          title={pageTitle}
          time={time}
          icon={icon}
          color={color}
        />
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>Periodos</Text>
      </View>
    </View>
  );
};

const HabitContainer = ({ title, time, icon, color }) => {
  return (
    <>
      <View style={[styles.emojiBox, { backgroundColor: color }]}>
        <Text
          style={{
            fontSize: 32,
            marginTop: 4,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          {icon}
        </Text>
      </View>
      <View style={styles.habitBox}>
        <View style={{ height: 120, width: 200, padding: 20 }}>
          <Text
            style={{
              color: color,
              fontWeight: "800",
              fontSize: 24,
              marginTop: 15,
            }}
          >
            {title}
          </Text>
        </View>
        <Text style={styles.subtitleBox}>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>{time}</Text> dias
        </Text>
      </View>
    </>
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
  habitBox: {
    borderWidth: 3,
    borderRadius: 16,
    width: "100%",
    zIndex: 2,
    position: "absolute",
  },
  emojiBox: {
    marginTop: -25,
    marginLeft: -12,
    borderWidth: 3,
    borderRadius: 14,
    height: 58,
    width: 58,
    zIndex: 3,
    position: "absolute",
  },
  subtitleBox: {
    fontSize: 16,
    marginRight: 15,
    marginBottom: 10,
    textAlign: "right",
  },
  subTextContainer: {
    flex: 3,
    marginLeft: "2%",
    marginRight: "5%",
    marginTop: 160,
  },
  subText: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 12,
    marginLeft: "5%",
    marginRight: "5%",
  },
});

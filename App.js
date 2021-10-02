import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
//UI components
import HabitCard from "./components/HabitCard";
import image from "./images/placeful_place.png";

const App = () => {
  return (
    <>
      <View style={styles.main}>
        <HabitButton />
        <Text style={styles.mainText}>Hábitos</Text>
        <CardsContainer />
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>Recientes</Text>
          <View>
            <Image style={styles.placeHolderImage} source={image} />
            <Text style={{ textAlign: "center", fontWeight: "600" }}>
              Comienza un hábito
            </Text>
            <Text style={{ textAlign: "center", fontWeight: "600" }}>
              seleccionando uno de los que has creado
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const HabitButton = () => {
  return (
    <View style={styles.habitButtonTop}>
      <Button title={"Nuevo Hábito +"} />
    </View>
  );
};

const CardsContainer = () => {
  return (
    <View style={styles.habitCardsContainer}>
      <View>
        <HabitCard />
      </View>
      <View style={{ marginLeft: 20 }}>
        <HabitCard />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: "12%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  mainText: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 10,
  },
  habitButtonTop: {
    flexDirection: "row-reverse",
  },
  habitCardsContainer: {
    flex: 1.1,
    flexDirection: "row",
    marginTop: 23,
  },
  subTextContainer: {
    flex: 3,
  },
  subText: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 5,
  },
  placeHolderImage: {
    width: 300,
    height: 220,
    marginTop: 50,
    marginLeft: "5%",
    marginBottom: 10,
    borderRadius: 100,
  },
});

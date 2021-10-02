import React from "react";
import { View, Text, StyleSheet, Button, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//UI components
import HabitCard from "./components/HabitCard";
import image from "./images/placeful_place.png";

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
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
  let habits = [
    {
      title: "Escalada",
      days: 5,
      icon: "⛰️",
      color: "hsl(97, 96%, 84%)",
    },
    {
      title: "Lectura",
      days: 9,
      icon: "📖",
      color: "hsl(264, 85%, 85%)",
    },
    {
      title: "Pilates",
      days: 12,
      icon: "💪",
      color: "hsl(201, 90%, 77%)",
    },
    {
      title: "Fránces",
      days: 4,
      icon: "🇫🇷",
      color: "hsl(56, 85%, 75%)",
    },
  ];

  return (
    <View style={styles.habitCardsContainer}>
      <FlatList
        horizontal={true}
        data={habits}
        renderItem={({ item, id }) => (
          <View style={{ marginTop: 10 }} key={id}>
            <HabitCard
              title={item.title}
              days={item.days}
              icon={item.icon}
              color={item.color}
            />
          </View>
        )}
      />
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
    marginTop: 7,
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

import React from "react";
import { View, Text, StyleSheet, Button, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//UI components
import HabitCard from "./components/HabitCard";
import image from "./images/placeful_place.png";
//View components
import HabitScreen from "./habit";
import Form from "./form";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        style={{ backgroundColor: "transparent" }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Actividades",
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTintColor: "transparent",
          }}
        />
        <Stack.Screen
          name="Habit"
          component={HabitScreen}
          options={{
            title: "Actividad",
            headerStyle: {
              backgroundColor: "hsl(357, 5%, 97%)",
            },
          }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            title: "Añadir Hábito",
            headerStyle: {
              backgroundColor: "hsl(357, 5%, 97%)",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <HabitButton navigation={navigation} />
      <Text style={styles.mainText}>Hábitos</Text>
      <CardsContainer navigation={navigation} />
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
  );
};

const HabitButton = ({ navigation }) => {
  return (
    <View style={styles.habitButtonTop}>
      <Button
        title={"Nuevo Hábito +"}
        onPress={() => navigation.navigate("Form")}
      />
    </View>
  );
};

const CardsContainer = ({ navigation }) => {
  let habits = [
    {
      title: "Escalada",
      days: 5,
      icon: "⛰️",
      color: "hsl(97, 96%, 84%)",
    },
    {
      title: "Lectura Diaria",
      days: 9,
      icon: "📖",
      color: "hsl(264, 85%, 85%)",
    },
    {
      title: "Realizar Pilates",
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
    {
      title: "Cocinar",
      days: 7,
      icon: "🥗",
      color: "hsl(299, 69%, 84%)",
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
              navigation={navigation}
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
    backgroundColor: "#fff",
  },
  mainText: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%",
  },
  habitButtonTop: {
    flexDirection: "row-reverse",
    marginLeft: "5%",
    marginRight: "5%",
  },
  habitCardsContainer: {
    flex: 1.15,
    flexDirection: "row",
    marginTop: 23,
  },
  subTextContainer: {
    flex: 3,
    marginLeft: "2%",
    marginRight: "5%",
  },
  subText: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 12,
    marginLeft: "5%",
    marginRight: "5%",
  },
  placeHolderImage: {
    width: 300,
    height: 220,
    marginTop: 50,
    marginLeft: "10%",
    marginBottom: 10,
    borderRadius: 100,
  },
});

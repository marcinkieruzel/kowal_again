import { View, Button, StyleSheet, Image } from "react-native";
import React from "react";

const Intro = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Image style={styles.img} source={require("../assets/kowal.jpg")} />
      <View style={styles.buttons}>
        <Button
          title="Przejdź do Quizz'u"
          onPress={() => {
            // @ts-ignore
            navigation.navigate("Home", {
              itemId: 87,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    marginBottom: 60,
  },
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    maxWidth: 300,
  },
});

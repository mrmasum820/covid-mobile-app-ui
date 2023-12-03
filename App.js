import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "./src/components/Button";
import IllustrationComp from "./src/components/IllustrationComp";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.header}>
          <View style={{ margin: 24, marginTop: 48 }}>
            <View style={styles.menu}>
              <Image source={require("./assets/menu.png")} />
              <Image source={require("./assets/bell.png")} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.countryButtonText}>Covid-19</Text>
              <TouchableOpacity style={styles.countryButton}>
                <View style={styles.countryButtonWrapper}>
                  <Image
                    style={{ marginRight: 10 }}
                    source={require("./assets/usa-new.png")}
                  />
                  <Text style={{ marginLeft: 5, fontWeight: "bold" }}>USA</Text>
                  <Image
                    source={require("./assets/dropdown.png")}
                    style={{ marginLeft: 10 }}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.headerContent}>
              <Text style={styles.feelingSickTitle}>Are you feeling sick?</Text>

              <Text style={styles.feelingSickText}>
                If you feel sick with any of covid-19 symptoms please call or
                SMS us immediately for help.
              </Text>

              <View style={styles.btnWrapper}>
                <Button
                  icon={require("./assets/phone.png")}
                  title="Call Now"
                  backgroundColor="#FF4D58"
                />
                <Button
                  icon={require("./assets/message-circle.png")}
                  title="Send SMS"
                  backgroundColor="#4D79FF"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.prevention}>Prevention</Text>
          </View>

          <View style={styles.illustrationContainer}>
            <IllustrationComp
              image={require("./assets/illustration1.png")}
              text="Avoid close contact"
            />
            <IllustrationComp
              image={require("./assets/illustration2.png")}
              text="Clean your hands often"
            />
            <IllustrationComp
              image={require("./assets/illustration3.png")}
              text={`Wear a\nfacemask `}
            />
          </View>

          <View style={{ paddingBottom: 36 }}>
            <Image
              source={require("./assets/guide.png")}
              style={{ alignSelf: "center", marginTop: 32, width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#473F97",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 20,
  },

  content: {
    flex: 1,
    marginHorizontal: 24,
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  countryButton: {
    height: 40,
    width: 116,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
  },

  countryButtonText: {
    fontSize: 24,
    color: "white",
  },

  countryButtonWrapper: {
    flexDirection: "row",
    marginLeft: 8,
    alignItems: "center",
  },

  headerContent: {
    marginTop: 25,
  },

  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  feelingSickTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  feelingSickText: {
    fontSize: 14,
    color: "white",
    marginTop: 10,
    lineHeight: 22,
  },

  prevention: {
    fontSize: 20,
    fontWeight: "bold",
  },

  illustrationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
});

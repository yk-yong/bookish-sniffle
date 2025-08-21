import { StyleSheet } from "react-native";
import { Text } from "../text";
import { View } from "../view";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

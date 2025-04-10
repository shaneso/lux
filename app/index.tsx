import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";

const data = [
  { id: '1', title: 'Welcome to Page 1' },
  { id: '2', title: 'This is Page 2' },
];

const { height } = Dimensions.get("window");

export default function Index() {
  return (
    <FlatList
      data={data}
      keyExtractor={( item ) => item.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.boldText}>Welcome to Lux</Text>
        </View>
      )}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    color: "#000000",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#000000",
    fontWeight: "500",
    fontSize: 20,
  },
});

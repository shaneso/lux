import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import Home from "../components/home";
import About from "../components/about";
import NotFound from "../+not-found";

const { height } = Dimensions.get("window");

const data = [
  { id: "1", title: "Home", type: "home" },
  { id: "2", title: "About", type: "about" },
];

const pageMap: Record<string, React.FC> = {
  home: Home,
  about: About,
};

export default function Index() {
  return (
    <FlatList
      data={data}
      style={styles.index}
      keyExtractor={( item ) => item.id}
      renderItem={({ item }) => {
        const PageComponent = pageMap[item.type];
        return (
          <View style={styles.container}>
            { PageComponent ? <PageComponent /> : <NotFound /> }
          </View>
        );
      }}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      snapToInterval={ height }
      decelerationRate="fast"
      contentContainerStyle={{ paddingBottom: 0 }}
    />
  );
}

const styles = StyleSheet.create({
  index: {
    backgroundColor: "#ffffff",
  },
  container: {
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

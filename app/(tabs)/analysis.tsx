import { View, StyleSheet, FlatList, Dimensions } from "react-native";

import Compute from "../components/features";
import Graph from "../components/flow";
import NotFound from "../+not-found";

const { height } = Dimensions.get("window");

const data = [
  { id: "1", title: "Compute", type: "compute" },
  { id: "2", title: "Graph", type: "graph" },
];

const pageMap: Record<string, React.FC> = {
  compute: Compute,
  graph: Graph,
};

export default function Analysis() {
  return (
    <FlatList
      data={data}
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

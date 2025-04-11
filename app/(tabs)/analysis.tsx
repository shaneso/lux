// Import statements

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React, {useRef, useState} from "react";

// Import page components

import Features from "../components/features";
import Flow from "../components/flow";
import NotFound from "../+not-found";

// Variables storing device dimensions

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

// Key id mapping for each page

const data = [
  { id: "1", title: "", type: "features" },
  { id: "2", title: "", type: "flow" },
];

// Page mapping

const pageMap: Record<string, React.FC> = {
  features: Features,
  flow: Flow,
};

export default function Analysis() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0 });
    setActiveIndex(index);
  };

  const scrollHandler = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.tabItem,
              index === activeIndex && styles.activeTab,
            ]}
            onPress={() => scrollToIndex(index)}
          >
            <Text style={styles.tabText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ref={flatListRef}

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
        horizontal={true}
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={ width }
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  boldText: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "500",
    fontSize: 20,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#000000",
    // position: "absolute",
    // bottom: 0,
    marginTop: 200,
  },
  tabItem: {
    flex: 1,
    // paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#000000",
  },
  tabText: {
    fontSize: 15,
    color: "#727285",
  },
});

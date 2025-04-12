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
  { id: "1", title: "Features", type: "features" },
  { id: "2", title: "Flow", type: "flow" },
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
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
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
    flex: 1,
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
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    flexDirection: "row",
    zIndex: 1,
    backgroundColor: "#ffffff",
    marginTop: 200,
    paddingVertical: 30,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    color: "#727285",
    borderBottomColor: "transparent",
  },
  activeTab: {
    color: "#000000",
    borderBottomColor: "transparent",
  },
  tabText: {
    fontSize: 15,
    color: "#727285",
  },
});

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
import * as Haptics from "expo-haptics";

// Import page components

import Features from "../components/features";
import Flow from "../components/flow";
import Regression from "../components/regression";
import NotFound from "../+not-found";

// Variables storing device dimensions

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

// Key id mapping for each page

const data = [
  { id: "1", title: "Features", type: "features" },
  { id: "2", title: "Regression", type: "regression" },
  { id: "3", title: "Flow", type: "flow" },
];

// Page mapping

const pageMap: Record<string, React.FC> = {
  features: Features,
  regression: Regression,
  flow: Flow,
};

// Analysis page component function

export default function Analysis() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

// Handles index scroll settings

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0 });
    setActiveIndex(index);
  };

// Handle scroll and offset

  const scrollHandler = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setActiveIndex(currentIndex);
  };

// Return components

  return (
    <View style={styles.container}>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.headerTitle}>
          {data[activeIndex]?.title}
        </Text>
      </View>
      {/* <View style={styles.tabBar}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.tabItem,
              index === activeIndex && styles.activeTab,
            ]}
            onPress={() => {
              Haptics.selectionAsync();
              scrollToIndex(index);
            }}
          >
            <Text style={styles.tabText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

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

// Styling

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  pageTitleContainer: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width,
    backgroundColor: "#ffffff",
    zIndex: 1,
    marginBottom: 120,
  },  
  headerTitle: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 15,
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
    width,
    height: 70,
    flexDirection: "row",
    zIndex: 1,
    backgroundColor: "#ffffff",
  },
  activeTab: {},
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 15,
    color: "#727285",
  },
});

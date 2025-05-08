// Import statements

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React, {useRef, useState} from "react";

// Import page components

import CAR_T_TEST from "../components/therapy/car_t_test";
import CTL_TEST from "../components/therapy/ctl_test";
import CTL_CD4 from "../components/therapy/ctl_cd4";
import NotFound from "../+not-found";

// Variables storing device dimensions

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

// Key id mapping for each page

const data = [
  { id: "1", title: "CAR-T Therapy", type: "car_t_test" },   // CAR-T therapy response efficacy
  { id: "2", title: "CTL Therapy", type: "ctl_test" },       // CTL therapy response efficacy
  { id: "3", title: "CTL-CD4⁺ Response", type: "ctl_cd4" },  // CTL/CD8⁺ T and CD4⁺ helper T cell interaction
];

// Page mapping

const pageMap: Record<string, React.FC> = {
  car_t_test: CAR_T_TEST,
  ctl_test: CTL_TEST,
  ctl_cd4: CTL_CD4,
};

// Analysis page component function

export default function Therapy() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

// Handle scroll and offset

const scrollHandler = (event: any) => {
  const offsetX = event.nativeEvent.contentOffset.x;
  const currentIndex = Math.round(offsetX / width);
  setActiveIndex(currentIndex);
};

// Return components

  return (
    <View style={styles.container}>

      {/* Current page title view */}

      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>
          {data[activeIndex]?.title}
        </Text>
      </View>

      {/* FlatList component */}

      <FlatList
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ref={flatListRef}

        data={data}
        keyExtractor={( item ) => item.id}
        renderItem={({ item }) => {
          const PageComponent = pageMap[item.type];
          return (
            <View style={styles.pageContainer}>
              { PageComponent ? <PageComponent /> : <NotFound /> }
            </View>
          );
        }}
        // Additional settings
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
    flex: 1,
    height,
    width,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  pageContainer: {
    flex: 1,
    height,
    width,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  pageTitleContainer: {
    width,
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  pageTitle: {
    marginBottom: 120,
    color: "#727285",
    fontWeight: 300,
    fontSize: 15,
  },
});

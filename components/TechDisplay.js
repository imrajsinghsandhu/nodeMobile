import { View, Text, FlatList } from "react-native";
import React from "react";

/**
 * Displays the techstacks, but in a horizontal flatlist component.
 * @param {*} param
 * @returns
 */
const TechDisplay = ({ data }) => {
  /**
   * Rendering the items in the
   */
  const renderItems = ({ item }) => {
    return (
      <View
        style={{
          padding: 5,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            backgroundColor: "lightblue",
            padding: 5,
            borderRadius: 15,
            paddingHorizontal: 8,
            fontWeight: "600",
            color: "blue",
          }}
        >
          {item.tech}
        </Text>
      </View>
    );
  };

  /**
   * Render a horizontal flatlist.
   */
  const renderDisplay = () => {
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={(item) => renderItems(item)}
        horizontal
      />
    );
  };

  return renderDisplay(data);
};

export default TechDisplay;

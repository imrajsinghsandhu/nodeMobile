import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TechDisplay from "./components/TechDisplay";
import { sampleData } from "./assets";

/**
 * Will use a flatlist component with dummy data to create the mobile
 * view of NodeFlair.
 * @returns
 */
export default function App() {
  /**
   * Function to render each element in the flatlist.
   * @param {*} element
   */
  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#f1f1f1",
          marginBottom: 15,
        }}
      >
        {/* first view, for job, name, and title */}
        <View
          style={{
            flexDirection: "row",
            // alignItems: "center",
            alignContent: "center",
          }}
        >
          <Image
            source={item.logo}
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              borderRadius: 4,
            }}
          />
          <View
            style={{
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 13,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                paddingTop: 3,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>
          </View>
        </View>
        {/* second view for listed, and category */}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "italic",
            }}
          >
            {item.listed}
          </Text>
          <View
            backgroundColor="lightgreen"
            style={{
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "green",
                fontWeight: "bold",
              }}
            >
              {item.category}
            </Text>
          </View>
        </View>
        {/* third view for the techStacks*/}
        <View
          style={{
            padding: 0.3,
            backgroundColor: "gray",
          }}
        />
        <View
          style={{
            borderRadius: 5,
            paddingTop: 8,
          }}
        >
          {/* {console.log(item.techStacks)} */}
          <TechDisplay data={item.techStacks} />
        </View>
      </TouchableOpacity>
    );
  };

  /**
   * Simple flatlist to display data.
   */
  const renderFlatList = () => {
    return (
      <FlatList
        data={sampleData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={(item) => renderItems(item)}
        style={{
          margin: 18,
        }}
      />
    );
  };

  return (
    <SafeAreaView styles={styles.container}>{renderFlatList()}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

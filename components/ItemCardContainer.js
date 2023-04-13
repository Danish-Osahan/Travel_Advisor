import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ imgSrc, title, location,data }) => {
  const styles = StyleSheet.create({
    serachView: {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.19,
      shadowRadius: 5.62,
      elevation: 6,
    },
  });
 const navigation = useNavigation ();
  return (
    <TouchableOpacity
    onPress={()=>{
       navigation.navigate("Card",{data:data})
    }}
      className=" rounded-md w-[175px] border-gray-950  space-y-2 px-2 py-2 bg-white my-2 "
      style={styles.serachView}
    >
      <Image
        source={{ uri: imgSrc }}
        className="rounded-md w-full h-40 object-cover"
      />
      {title ? (
        <>
          <Text className="text-[18px] text-[#428288] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
          </Text>

          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={24} color="#8597A2" />
            <Text>
              {location?.length > 18 ? `${location.slice(0, 18)}...` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;

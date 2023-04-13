import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animate from "react-native-animatable";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  serachView: {
    shadowColor: "#b4b4b4",
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 9.86,
    elevation: 18,
  },
});
const CardDetails = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.data;
  const ur = data?.web_url;
  const handlePress = () => {
    if (data?.web_url) {
      Linking.openURL(data?.web_url).catch(err => console.error('An error occurred', err));
    }
    // console.log(ur)
  };
  //   console.log(data);
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <ScrollView className="flex-1 px-6 py-4">
        {/* Image Section */}
        <Animate.View
        animation="fadeIn"
        duration={3000}
          className="relative bg-white shadow-2xl p-1 rounded-2xl "
          style={styles.serachView}
        >
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_960_720.jpg",
            }}
            className="w-full h-72 rounded-2xl object-cover"
          />

          <View className="absolute inset-x-5  flex-row top-5 justify-between ">
            <TouchableOpacity
              className="w-10 h-10 rounded-md justify-center items-center bg-white"
              onPress={() => {
                navigation.navigate("Discover");
              }}
            >
              <FontAwesome name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            {/* <TouchableOpacity className="w-10 h-10 rounded-md justify-center items-center bg-[#06B2BE]">
              <FontAwesome name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity> */}
          </View>

          <View className="absolute inset-x-4  flex-row bottom-5 justify-between ">
            <View className="flex-row items-center space-x-2 ">
              <Text className="text-[12px] text-gray-100  font-bold">
                {data?.price_level}
              </Text>
              <Text className="text-[22px] text-gray-100  font-bold">
                {data?.price}
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </Animate.View>
        {/* /////////////////////////////////////////////////////////// */}
        {/* Name Section */}
        <Animate.View className="mt-6" animation="slideInLeft" duration={2000}>
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={24} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </Animate.View>
        {/* ///////////////////////////////////////////////////////////// */}
        {/* Rating Section */}
        <Animate.View animation="fadeIn" duration={2000} className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="justify-center items-center w-12 h-12 rounded-md shadow-lg bg-red-100">
                <FontAwesome name="star" size={24} color="#DB8574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="justify-center items-center w-12 h-12 rounded-md shadow-lg bg-red-100">
                <MaterialIcons name="attach-money" size={24} color="#DB8574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="justify-center items-center w-12 h-12 rounded-md shadow-lg bg-red-100">
                <FontAwesome5 name="map-signs" size={24} color="#DB8574" />
              </View>
              <View>
                <Text className="text-[#515151] capitalize">
                  {data?.bearing}
                </Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </Animate.View>
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* Description Section */}
        {data?.description && (
          <Animate.Text animation="slideInLeft" duration={2000} className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data.description}
          </Animate.Text>
        )}
        {/* ////////////////////////////////////////////////////////////////////// */}
        {/* Cuisine section */}
        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => {
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>;
            })}
          </View>
        )}
        {/* ////////////////////////////////////////////////////////////////////// */}
        {/* Contact Section */}
        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2 mb-8">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}
          {/* Button section */}
          <TouchableOpacity onPress={handlePress} className=" mt-8 px-4 py-4 rounded-lg bg-[#06B2BE]  items-center justify-center mb-2">
            <Text className="text-3xl  font-semibold uppercase tracking-wide text-gray-100">
              Visit Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardDetails;

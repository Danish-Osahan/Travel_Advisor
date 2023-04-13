import { View, Text,  TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import { HeroImage } from "../assets";
import * as Animate from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation =useNavigation();
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-4xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-4xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="flex  px-6 mt-8 space-y-2">
        <Text className="text-[#3C6072] text-[42px] ">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut deserunt
          explicabo ducimus necessitatibus
        </Text>
      </View>

      {/* Circle Section */}
      <Animate.View animation="slideInRight" easing="ease-in-out"  className="w-[380px] h-[380px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36 "></Animate.View>
      <Animate.View animation="slideInLeft" easing="ease-in-out"  className="w-[380px] h-[380px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36 "></Animate.View>

      {/* Image section */}
      <View className="flex-1 relative justify-center items-center  ">
        <Animate.Image
          animation="fadeIn"
          easing="ease-in-out"
          duration={2000}
          className="w-full h-full object-cover mt-15"
          source={HeroImage}
        />

        {/*Button Section*/}
        <View className="absolute bottom-20 w-24 h-24 rounded-full justify-center items-center border-l-2 border-r-2 border-t-4 border-[#00BCC9]">
          <TouchableOpacity onPress={()=>{navigation.navigate("Discover")}}>
            <Animate.View animation="pulse" easing="ease-in-out" iterationCount={Infinity} className=" w-20 h-20 rounded-full bg-[#00BCC9] justify-center items-center">
              <Text className="text-[36px] font-bold text-gray-50">Go</Text>
            </Animate.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

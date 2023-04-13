import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotFound, attraction2, hotel2, restaurant2, profile } from "../assets";
import * as Animate from "react-native-animatable";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getData } from "../api";

const Discover = () => {
  const styles = StyleSheet.create({
    serachView: {
      shadowColor: "#b4b4b4",
      shadowOffset: {
        width: 0,
        height: 13,
      },
      shadowOpacity: 0.24,
      shadowRadius: 14.86,
      elevation: 18,
    },
  });
  const [type, setType] = useState("attractions");
  const [loading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat,setBl_lat]=useState(null);
  const [bl_lng,setBl_lng]=useState(null);
  const [tr_lat,setTr_lat]=useState(null);
  const [tr_lng,setTr_lng]=useState(null);

  useEffect(() => {
    setLoading(true);
    getData(bl_lat,bl_lng,tr_lat,tr_lng,type).then((data) => {
      setMainData(data);
      // setInterval(() => {
      //   setLoading(false);
      // }, 2000);
      setLoading(false);
    });
  }, [bl_lat,bl_lng,tr_lat,tr_lng,type]);
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View className="flex-row items-center justify-between  px-6 mt-8 ">
        <Animate.View
          className="bg-white"
          animation="slideInLeft"
          duration={1000}
          easing="ease-in-out"
        >
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">The beauty today</Text>
        </Animate.View>
        {/* <Animate.View
          animation="slideInRight"
          duration={1000}
          easing="ease-in-out"
          className="w-12 h-12 rounded-full justify-center items-center "
        >
          <Image
            source={profile}
            className="object-cover w-full h-full rounded-full "
          />
        </Animate.View> */}
      </View>

      <Animate.View
        animation="fadeIn"
        easing="ease-in-out"
        duration={2000}
        className="flex-row items-center justify-center mx-4   rounded-md  mt-4 px-2 mb-2"
        style={styles.serachView}
      >
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          styles={{
            textInput: {
              height: 38,
              color: "#5d5d5d",
              fontSize: 16,
            },
            poweredContainer: {
              display: "none",
            },
            loader: {
              flexDirection: "row",
              justifyContent: "flex-end",
              height: 20,
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat)
            setBl_lng(details?.geometry?.viewport?.southwest?.lng)
            setTr_lat(details?.geometry?.viewport?.northeast?.lat)
            setTr_lng(details?.geometry?.viewport?.northeast?.lng)
          }}
          query={{
            key: "AIzaSyC0mdULqo4D0gAo98xrBapdBjTEloI_bSY",
            language: "en",
          }}
        />
      </Animate.View>

      {/* Menu section */}
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row mt-4 px-8 items-center justify-evenly">
            <MenuContainer
              key={"hotel"}
              imgSrc={hotel2}
              // imgSrc={Hotels}
              title={"Hotels"}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurant"}
              imgSrc={restaurant2}
              // imgSrc={Restaurants}
              title={"Restaurants"}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              imgSrc={attraction2}
              // imgSrc={Attractions}
              title={"Attractions"}
              type={type}
              setType={setType}
            />
          </View>

          {/* <View>
            <View className=" flex-row justify-between items-center px-6 mt-4">
              <Text className="text-[24px] font-bold text-[#2C7379]">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row space-x-2  items-center">
                <Text className="text-[20px] font-bold text-[#A0C4C7]">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={34}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
          </View> */}

          {/* Items Section */}
          <View className="flex-row justify-between flex-wrap items-center px-4 mt-2 mb-4 ">
            {mainData?.length > 0 ? (
              <>
                {mainData?.map((data, i) => (
                  <ItemCardContainer
                    key={i}
                    imgSrc={
                      data?.photo?.images?.medium?.url
                        ? data?.photo?.images?.medium?.url
                        : "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_960_720.jpg"
                    }
                    title={data?.name}
                    location={data?.location_string}
                    data={data}
                  />
                ))}
              </>
            ) : (
              <>
                <View className="w-full h-[400px]   justify-center items-center space-y-8 mt-4">
                  <Image
                    source={NotFound}
                    className=" w-32 h-32 object-cover"
                  />
                  <Text className="text-[36px] text-[#527283] font-bold">
                    Ooops...No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;

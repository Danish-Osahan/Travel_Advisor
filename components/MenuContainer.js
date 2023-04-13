import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import * as Animate from "react-native-animatable";

const MenuContainer = ({title,imgSrc,type,setType}) => {
  const hadnlePress=()=>{
    setType(title.toLowerCase());
  }
  return (
    <TouchableOpacity className="justify-center items-center space-y-1" onPress={hadnlePress}>
      <Animate.View animation="pulse" easing="ease-in-out" iterationCount={Infinity}  className={`items-center justify-center w-28 h-28 p-2 rounded-full ${type===title.toLowerCase()?'bg-gray-100':''}`}>
       <Image
       source={imgSrc}
       className="w-full h-full object-contain"
       />
      </Animate.View>
      <Text className="font-semibold text-xl text-[#00BCC9]">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer
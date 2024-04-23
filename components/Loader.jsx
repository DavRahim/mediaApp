import { View, Text, ActivityIndicator, Platform, Dimensions } from "react-native";
import React from "react";

const Loader = ({ isLoading }) => {
    const osName = Platform.OS;
    const screenHeight = Dimensions.get("screen").height;

    if (!isLoading) return null;

  return (
      <View
          className="absolute flex justify-center items-center w-full h-full bg-primary/60 z-10"
          style={{
              height: screenHeight,
          }}
      >
          <ActivityIndicator
              animating={isLoading}
              color="#fff"
              size={osName === "ios" ? "large" : 50}
          />
      </View>
  );
};

export default Loader;

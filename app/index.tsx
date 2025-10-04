import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [loadedFonts] = useFonts({
    LatoRegular: Lato_400Regular,
    LatoBold: Lato_700Bold,
  });

  useEffect(() => {
    if (!loadedFonts) return;

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [loadedFonts]);

  if (!loadedFonts) {
    return null;
  }

  const handleGetStarted = () => {
    router.navigate("/(loggedOut)/login");
  };

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Animated.Text
          style={{
            opacity: fadeAnim,
            fontSize: 48,
            fontFamily: "LatoBold",
            color: "#4A154B",
          }}
        >
          PillPrompt
        </Animated.Text>
        <Animated.Text
          style={{
            opacity: fadeAnim,
            fontFamily: "LatoBold",
          }}
        >
          Never miss a dose 💊
        </Animated.Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#4A154B" barStyle="light-content" />
      <View className="flex-1 bg-primary pt-10 px-8">
        <Text className="font-latoBold text-[40px] text-white leading-snug">
          Never Miss a Dose,{" "}
          <Text className="text-accent">Stay in Control.</Text>
        </Text>

        <View className="flex-1 items-center justify-center">
          <Image
            source={require("../assets/IndexIllus.png")}
            className="w-96 h-96"
            resizeMode="contain"
          />
        </View>

        <View className="mb-10">
          <TouchableOpacity
            className="bg-white rounded-2xl py-4"
            onPress={handleGetStarted}
          >
            <Text className="text-center text-lg font-latoBold text-primary ">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

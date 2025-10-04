import { router } from "expo-router";
import { Lock, Mail } from "lucide-react-native";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  const handleSignUp = () => {
    router.navigate("/(loggedOut)/signup");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <View className="p-8">
        <View className="mt-4 flex flex-col gap-y-1">
          <Text className="text-primary font-latoBold text-4xl w-4/6">
            Please Sign In To Continue
          </Text>
          <Text className="text-sm font-latoBold">
            Hi Welcome back, Log In to Continue
          </Text>
        </View>

        <View className="flex flex-col gap-y-6 mt-10">
          <View className="flex flex-col gap-y-1">
            <Text className="text-primary font-latoBold">Email</Text>
            <View className="flex flex-row items-center gap-x-2 bg-light rounded-2xl px-3 h-[64px]">
              <Mail size={22} color="#4A154B" className="" />
              <TextInput
                className="max-w-[80%] w-[82%] text-[16px] text-primary "
                placeholder="eg. example@gmail.com"
                placeholderTextColor="#999"
              />
            </View>
          </View>
          <View className="flex flex-col gap-y-1">
            <Text className="text-primary font-latoBold">Password</Text>
            <View className="flex flex-row items-center gap-x-2 bg-light rounded-2xl px-3 h-[64px]">
              <Lock size={22} color="#4A154B" className="" />
              <TextInput
                className="max-w-[80%] w-[82%] text-[16px] text-primary"
                placeholder="******"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <Pressable>
          <Text className="text-primary font-latoBold text-md flex flex-row self-end my-2">
            Forgot Password?
          </Text>
        </Pressable>

        <TouchableOpacity className="bg-primary rounded-2xl py-5 my-3">
          <Text className="text-center text-lg font-latoBold text-white ">
            Sign In
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-center gap-x-3 w-full my-3">
          <View className="h-[1px] bg-gray-300 w-1/3" />
          <Text className="font-latoBold">Or</Text>
          <View className="h-[1px] bg-gray-300 w-1/3" />
        </View>

        <TouchableOpacity className="bg-light rounded-2xl py-6 my-3 flex flex-row items-center justify-center gap-x-3">
          <Image
            source={require("../../assets/google.png")}
            resizeMode="contain"
            className="size-5"
          />
          <Text className="text-center text-md font-latoBold text-black ">
            Continue with Google
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-center mt-6">
          <Text className="font-latoBold">Don't have an account? </Text>
          <Pressable onPress={handleSignUp}>
            <Text className="font-latoBold text-primary">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

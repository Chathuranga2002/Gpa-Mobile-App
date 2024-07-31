import {View, Text, TouchableOpacity} from 'react-native'
import {Link, router, Slot} from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Footer from "@/layouts/footer";
import DrawerProvider from "@/context/drawer";

const RootLayout = () => {
    return(
        <DrawerProvider>
        <View className="relative w-full flex-1">
            <Slot/>
            <Footer/>
        </View>
        </DrawerProvider>
    );
}

export default RootLayout

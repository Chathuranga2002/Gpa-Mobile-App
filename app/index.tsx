import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import Header from "@/layouts/header";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import useDrawer from "@/context/context-hooks/useDrawer";
import MyCourses from "@/app/myCourses";


const index = () => {
  const {drawer} =  useDrawer();

  return (
      <View>
        <Header
          Left={
            <TouchableOpacity onPress={()=>drawer?.current?.openDrawer()}>
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          }
          Center={<Text className={"text-2xl font-semibold"}>GPA TRACKER</Text>}
          Right={
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-grid"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          }
        />
        <MyCourses/>
      </View>

  );
};

export default index;

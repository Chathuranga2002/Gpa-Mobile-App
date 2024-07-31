import { View, Text, TouchableOpacity } from "react-native";
import Header from "@/layouts/header";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {Link} from "expo-router";
import useDrawer from "@/context/context-hooks/useDrawer";

const Catagory = () => {

    const {drawer} =  useDrawer();

  return (
    <View>
      <Header
          Left={
              <TouchableOpacity onPress={()=>drawer?.current?.openDrawer()}>
                  <Entypo name="menu" size={30} color="black" />
              </TouchableOpacity>
          }
        CenterText="Category"
        Right={
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-grid" size={30} color="black" />
          </TouchableOpacity>
        }
      />
      <Text>catagory</Text>
    </View>
  );
};

export default Catagory;

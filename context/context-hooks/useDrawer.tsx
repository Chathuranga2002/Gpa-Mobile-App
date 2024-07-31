import { View, Text } from 'react-native'
import {useContext} from "react";
import {DrawerContext} from "@/context/drawer";


const UseDrawer = () => {
  return  useContext(DrawerContext);
}

export default UseDrawer

import {View, Text, TouchableOpacity} from 'react-native'
import Header from "@/layouts/header";
import useDrawer from "@/context/context-hooks/useDrawer";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import SemestersDetails from '@/components/semesters/semestersDetails';


const Semesters = () => {
    const {drawer} =  useDrawer();
  return (
    <View>
      <Header
          Left={
            <TouchableOpacity onPress={()=>drawer?.current?.openDrawer()}>
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          }
          Center={<Text className={"text-2xl font-semibold"}>SEMESTERS</Text>}
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
        <SemestersDetails/>
    </View>
  )
}

export default Semesters

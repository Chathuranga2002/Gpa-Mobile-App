import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import Header from "@/layouts/header";
import useDrawer from "@/context/context-hooks/useDrawer";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import SemestersDetails from '@/components/semesters/semestersDetails';
import {useLocalSearchParams} from "expo-router";
import SemesterInfo from "@/components/semesters/semesterInfo";
import ButtomSpace from "@/components/buttomSpace";
import SemButton from "@/components/semesters/semButton";


const Semesters = () => {
    const {drawer} =  useDrawer();
    const params =useLocalSearchParams()
    console.log(params)

  // @ts-ignore
    return (
    <View>
      <Header
          Left={
            <TouchableOpacity onPress={()=>drawer?.current?.openDrawer()}>
              <Entypo name="menu" size={30} color="black" />
            </TouchableOpacity>
          }
          Center={<Text className={"text-2xl font-semibold"}>SEMESTERS</Text>}
          // Right={
          //   <TouchableOpacity>
          //     <MaterialCommunityIcons
          //       name="dots-grid"
          //       size={30}
          //       color="black"
          //     />
          //   </TouchableOpacity>
          // }
        />
      <ScrollView>
          <SemestersDetails
              name={params.name}
              id={params.id}
          />
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemesterInfo/>
          <SemButton name={"Add Semester"}/>
          <ButtomSpace/>
      </ScrollView>
    </View>
  )
}

export default Semesters

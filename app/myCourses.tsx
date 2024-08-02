import WelcomeNote from '@/components/welcomeNote'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import AddButton from "@/components/addButton";
import ButtomSpace from '@/components/buttomSpace';
import CourseView from "@/components/course/course";


const MyCourses = () => {
  return (
    <ScrollView>
        <Text className="text-2xl font-bold text-center mt-6 text-black">

        </Text>
        <WelcomeNote/>

        <CourseView name={"gdse"} credit={7} gpa={2.333}/>
        <CourseView name={"ijse"} credit={7} gpa={2.333}/>
        <CourseView name={"ab"} credit={7} gpa={2.333}/>
        <CourseView name={"abc"} credit={7} gpa={2.333}/>
        <AddButton buttonText={"add"}/>
        <ButtomSpace/>

    </ScrollView>
  )
}

export default MyCourses

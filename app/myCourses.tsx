import WelcomeNote from '@/components/welcomeNote'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import AddButton from "@/components/addButton";
import ButtomSpace from '@/components/buttomSpace';
import CourseView from "@/components/course/course";


const MyCourses = () => {
  return (
    <ScrollView>
        <Text className="text-2xl font-bold text-center mt-6 text-black">
            MY COURSES
        </Text>
        <WelcomeNote/>
        <CourseView/>
        <CourseView/>
        <CourseView/>
        <CourseView/>
        <CourseView/>
        <CourseView/>
        <AddButton buttonText={"add"}/>
        <ButtomSpace/>

    </ScrollView>
  )
}

export default MyCourses

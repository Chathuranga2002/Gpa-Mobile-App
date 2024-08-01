import {View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import Header from "@/layouts/header";
import useDrawer from "@/context/context-hooks/useDrawer";
import ResaltTable from "@/components/semesters/resaltTable";
import {useState} from "react";
import ButtomSpace from "@/components/buttomSpace";

const semMarks = () => {
    const {drawer} =  useDrawer();
    const title="test";
    const cgpa=2.33;
    const credits=6;



    const [subjects, setSubjects] = useState([
        { name: 'Ab', grade: 'C+', credit: 12 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
        { name: 'be', grade: 'B', credit: 3 },
    ]);

    const handleEdit = (index: number) => {
        // Handle edit action
        console.log('Edit', index);
    };

    const handleDelete = (index: number) => {
        // Handle delete action
        console.log('Delete', index);
    };

  return (


    <View>
        <Header
            Left={
                <TouchableOpacity onPress={()=>drawer?.current?.openDrawer()}>
                    <Entypo name="menu" size={30} color="black" />
                </TouchableOpacity>
            }
            Center={<Text className={"text-2xl font-semibold"}>RESULTS</Text>}
        />

        <ScrollView>
            {/*resalt display*/}
            <View className="p-4 bg-white rounded-md shadow-md">
                <Text className="text-purple-600 text-xl font-bold text-center mb-2">
                    {title}
                </Text>
                <View className="flex-row justify-between">
                    <Text className="text-black text-base">CGPA</Text>
                    <Text className="text-black text-base">: {cgpa.toFixed(2)}</Text>
                </View>
                <View className="flex-row justify-between mt-1">
                    <Text className="text-black text-base">Total Credits</Text>
                    <Text className="text-black text-base">: {credits}</Text>
                </View>
            </View>


            {/*  table*/}


            <ResaltTable subjects={subjects}
                         onEdit={handleEdit}
                         onDelete={handleDelete}
            />
            <ButtomSpace/>
        </ScrollView>


    </View>
  )
}

export default semMarks

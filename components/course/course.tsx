import { View, Text, TouchableOpacity } from "react-native";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {useState} from "react";
import EditCourseModal from "@/components/modal/editCourseModal";
import DeleteConfirmationModal from "@/components/modal/deleteConfirmationModal";
import {Link, router} from "expo-router";

const CourseView = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);



    return (
    <View className="m-3 ml-5 mr-5 z-0 bg-white rounded-lg shadow-lg border-purple-600 border-2 ">
      <View className=" p-2 pl-4 pr-4 flex-row bg-purple-500 border-b-2 border-purple-600 justify-between">
        <Text className="text-white text-lg font-bold">ljse</Text>
        <TouchableOpacity onPress={() => setEditModalVisible(true)}>
          <FontAwesome name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="mt-2 items-center">
        <Text className="text-black text-base">Current GPA : 0.0000</Text>
        <Text className="text-black text-base">Total Credits : 0</Text>
      </View>
      <View className="flex-row p-2 pl-4 pr-4  justify-between mt-4 border-t-2 border-gray-200">
        <TouchableOpacity className="bg-purple-700 py-2 pl-6 pr-6 px-4 rounded-lg "  onPress={() => setDeleteModalVisible(true)}>
          <MaterialCommunityIcons name="delete-sweep" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-purple-700 py-2 px-4 rounded-lg" onPress={()=>router.navigate('/semesters')}>
          <Text className="text-white text-center">Semesters</Text>
        </TouchableOpacity>
      </View>

      <EditCourseModal
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
      />
        <DeleteConfirmationModal
            visible={deleteModalVisible}
            onClose={() => setDeleteModalVisible(false)}
        />

    </View>
  );
};

export default CourseView;

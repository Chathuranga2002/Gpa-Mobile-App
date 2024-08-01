import { View, Text, TouchableOpacity } from 'react-native'
import {useState} from "react";
import AddCourseModal from "@/components/modal/addCourseModal";
import AddSemModal from "@/components/modal/sem/addSemModal";
import DeleteConfirmationModal from "@/components/modal/deleteConfirmationModal";
import DeleteConfirmationSemModal from "@/components/modal/sem/deleteConfirmationSemModal";


const SemButton = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  return (
    <View className='flex-row justify-around p-4 ml-7 mr-7'>
      <TouchableOpacity className="bg-purple-600 py-4 pl-6 pr-6 px-8 rounded-md"  onPress={() => setDeleteModalVisible(true)}>
        <Text className='text-white text-center font-bold'>Delete All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-purple-600 py-4 px-8 rounded-md' onPress={() => setModalVisible(true)} >
        <Text className='text-white text-center font-bold'>Add Semester</Text>
      </TouchableOpacity>

        <AddSemModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
        />

        <DeleteConfirmationSemModal
            visible={deleteModalVisible}
            onClose={() => setDeleteModalVisible(false)}
        />

    </View>
  )
}

export default SemButton

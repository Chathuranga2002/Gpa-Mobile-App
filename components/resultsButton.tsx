import { View, Text, TouchableOpacity } from 'react-native'
import {useState} from "react";
import AddCourseModal from "@/components/modal/addCourseModal";
import AddSemModal from "@/components/modal/sem/addSemModal";
import DeleteConfirmationModal from "@/components/modal/deleteConfirmationModal";
import DeleteConfirmationSemModal from "@/components/modal/sem/deleteConfirmationSemModal";
import DeleteConfirmationResultsModal from "@/components/modal/deleteConfirmationResultsModal";
import AddSubjectModal from "@/components/modal/addSubjectModal";
interface IName{
    name:string;
}

const SemButton = ({name}:IName) => {
    const [subjects, setSubjects] = useState([
        { name: 'Ab', grade: 'C+', credit: 12 },
        { name: 'be', grade: 'B', credit: 3 },
    ]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleAddSubject = (subject: { name: string; grade: string; credit: string }) => {
        // @ts-ignore
        setSubjects([...subjects, subject]);
    };

    const handleDeleteAll = () => {
        setSubjects([]);
    };



  return (
    <View className='flex-row justify-around p-4 ml-7 mr-7'>
      <TouchableOpacity className="bg-purple-600 py-4 pl-6 pr-6 px-8 rounded-md"  onPress={() => setDeleteModalVisible(true)}>
        <Text className='text-white text-center font-bold'>Delete All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-purple-600 py-4 px-8 rounded-md' onPress={() => setModalVisible(true)} >
        <Text className='text-white text-center font-bold'>{name}</Text>
      </TouchableOpacity>

        <AddSubjectModal
            visible={isModalVisible}
            onClose={toggleModal}
            onAddSubject={handleAddSubject}
        />
        <DeleteConfirmationResultsModal
            visible={deleteModalVisible}
            onClose={() => setDeleteModalVisible(false)}
        />

    </View>
  )
}

export default SemButton

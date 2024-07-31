import {View, Text, TouchableOpacity} from 'react-native'
import {useState} from "react";
import AddCourseModal from "@/components/modal/addCourseModal";
interface IText{
    buttonText?:string;
}

const AddButton = ({buttonText}:IText) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <TouchableOpacity className="bg-purple-600 py-4 px-8 mt-6 rounded-md ml-8 mr-8 mb-[30px]"
                          onPress={() => setModalVisible(true)}>
            <Text className="text-white text-center font-bold">
                {buttonText}
            </Text>
        </TouchableOpacity>

        <AddCourseModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
        />
    </View>
  )
}

export default AddButton

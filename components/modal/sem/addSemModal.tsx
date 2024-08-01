import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native'
import {useState} from "react";
interface ICourseModal {
    visible: boolean;
    onClose: () => void;
}

const AddSemModal = ({ visible, onClose }:ICourseModal) => {
    const [semYear, setSemYear] = useState('');
    const [semId, setSemId] = useState('');

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View className={"flex-1 justify-center items-center backdrop-opacity-10 backdrop-invert bg-black/70"}>
          <View className={"w-4/5 bg-white rounded-lg p-5 shadow-lg"}>
            <View className={"flex-row justify-between items-center"}>
              <Text className={"text-xl font-bold"}>Add Semester</Text>
              <TouchableOpacity onPress={onClose}>
                <Text className={"text-xl text-purple-600"}>✕</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              className={"w-full border-b border-gray-300 mt-4 pb-2"}
              placeholder="Year"
              value={semYear}
              onChangeText={setSemYear}
            />
              <TextInput
                  className={"w-full border-b border-gray-300 mt-4 pb-2"}
                  placeholder="Semester"
                  value={semId}
                  onChangeText={setSemId}
              />
            <TouchableOpacity
              className={"bg-purple-600 py-3 px-5 mt-5 rounded-md"}
              onPress={() => {
                console.log("sem year:", semYear);
                console.log("sem Name:", semId);
                setSemYear('');
                setSemId('');
                onClose();
              }}
            >
              <Text className={"text-white text-center font-bold"}>Add Semester</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

export default AddSemModal

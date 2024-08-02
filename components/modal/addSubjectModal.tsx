import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native'
import {Picker} from "@react-native-picker/picker";
import {useState} from "react";

interface ISubjectModal {
    visible: boolean;
    onClose: () => void;
    onAddSubject: (subject: { name: string; grade: string; credit: string }) => void;
}

const AddSubjectModal = ({ visible, onClose, onAddSubject }: ISubjectModal) => {

    const [subjectName, setSubjectName] = useState('');
    const [grade, setGrade] = useState('');
    const [credit, setCredit] = useState('');

    const handleAddSubject = () => {
        onAddSubject({ name: subjectName, grade, credit });
        console.log(`subject: ${subjectName}, grade: ${grade} ,credit :${credit}`)
        setSubjectName('');
        setGrade('');
        setCredit('');
        onClose();
    };


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
                      <Text className={"text-xl font-bold"}>Add Subject</Text>
                      <TouchableOpacity onPress={onClose}>
                          <Text className={"text-xl text-purple-600"}>✕</Text>
                      </TouchableOpacity>
                  </View>
                  <TextInput
                      className={"w-full border-b border-gray-300 mt-4 pb-2"}
                      placeholder="Subject Name"
                      value={subjectName}
                      onChangeText={setSubjectName}
                  />
                  <View className={"w-full border-b border-gray-300 mt-4 pb-2"}>
                      <Picker
                          selectedValue={grade}
                          onValueChange={(itemValue) => setGrade(itemValue)}
                      >
                          <Picker.Item label="Select Grade" value="" />
                          <Picker.Item label="A" value="A" />
                          <Picker.Item label="B" value="B" />
                          <Picker.Item label="C" value="C" />
                          <Picker.Item label="D" value="D" />
                          <Picker.Item label="F" value="F" />
                      </Picker>
                  </View>
                  <TextInput
                      className={"w-full border-b border-gray-300 mt-4 pb-2"}
                      placeholder="Credit"
                      value={credit}
                      onChangeText={setCredit}
                  />
                  <TouchableOpacity
                      className={"bg-purple-600 py-3 px-5 mt-5 rounded-md"}
                      onPress={handleAddSubject}
                  >
                      <Text className={"text-white text-center font-bold"}>Add Subject</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </Modal>
  )
}

export default AddSubjectModal

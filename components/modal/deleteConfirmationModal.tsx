import {View, Text, Modal, TouchableOpacity} from 'react-native'
import {useState} from "react";
interface Idelette{
  visible: boolean;
  onClose: () => void;
}
const DeleteConfirmationModal = ({ visible, onClose }:Idelette) => {

  function onConfirm() {
    console.log("delete");
    onClose();
  }

  return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View className='pl-4 pr-4 flex-1 justify-center items-center  backdrop-opacity-10 backdrop-invert bg-black/75'>
            <View className='w-11/12 bg-white p-6 rounded-lg shadow-lg'>
              <Text className='text-lg font-semibold text-black mb-2'>Are you sure..?</Text>
              <Text className='text-base text-gray-700 mb-6'>
                Do you want to delete  data? It will delete all the semesters and exam results, and weights as well...
              </Text>
              <View className='flex-row justify-end'>
                <TouchableOpacity onPress={onClose} className='mr-4'>
                  <Text className='text-purple-700 text-base'>No</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onConfirm}>
                  <Text className='text-purple-700 text-base'>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
}

export default DeleteConfirmationModal

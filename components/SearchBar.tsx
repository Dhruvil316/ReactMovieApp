import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'


type SearchBarProps = {
    onPress: () => void;
    placeholder?: string;
  }

  
const SearchBar = ({onPress , placeholder} : SearchBarProps) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-2'>

      <Image source={icons.search} className='size-5' resizeMode="contain" tintColor={"#ab8bff"}/>
      <TextInput onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={()=>{}}
        placeholderTextColor={'#a8b5db'}
        className='ml-1'
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addition, subtraction} from '../store/action';
export default function Counter() {

    const data = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <View style={{marginTop:250}}>
      <Button icon="star" mode="contained" onPress={()=>dispatch(addition())} style={{marginLeft: 100, marginRight:100, marginBottom:100}}>
      1
      </Button>
      <Text style={{marginLeft: 200}}>{data}</Text>
      <Button icon="star" mode="contained" onPress={()=>dispatch(subtraction())} style={{marginLeft: 100, marginRight:100, marginTop:100}}>
      1
      </Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

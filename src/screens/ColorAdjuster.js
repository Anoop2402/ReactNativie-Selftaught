import React,{useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const ColorAdjusters=()=>{

    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
       console.log(red);
       console.log(blue);
       console.log(green);

    return(
        <View >

<View style={{height:200, width:200,marginLeft:80,backgroundColor:`rgb(${red},${green},${blue})`}}/>


<Button title="More Red" onPress={()=>{
    setRed(red+35);
}} />
<Button title="Less Red" onPress={()=>{
    setRed(red-6);
}}/>
<Button title="More Green" onPress={()=>{
    setGreen(green+35);
}} />
<Button title="Less Green" onPress={()=>{
    setGreen(green-6);
}} />
<Button title="More Blue" onPress={()=>{
    setBlue(blue+35);
}} />
<Button title="Less Blue" onPress={()=>{
    setBlue(blue-6);
}} />



        </View>
    )

};

const styles=StyleSheet.create({


});

export default ColorAdjusters;
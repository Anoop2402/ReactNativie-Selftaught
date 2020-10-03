import React,{useState} from 'react';
import { FlatList } from 'react-native';
import {View, Button, StyleSheet, Text} from 'react-native';

const ColorScreens =()=>{
    const [color,setColor]=useState([]);
    return (
        <View  > 
           <Button title="Add a Color"  onPress={()=>{

               setColor([...color,RandomColor()]);

           }} />



{/* Using FlatList */}

<FlatList
keyExtractor={(item)=>item}
data={color}
renderItem={({item})=>{
    return(
<View style={{height:200, width:200,backgroundColor:RandomColor()}}/>

    );
}}
 />
           
           </View>

           

    );

};

const RandomColor=()=>{

    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;

};

const styles=StyleSheet.create({

});

export default ColorScreens;
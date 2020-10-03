import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import { FlatList } from 'react-native';

const CounterScreens=()=>{
    const [counter,setCounter]=useState(0);
return(
<View>

<Text style={styles.Countd}>Current Count: {counter}</Text>

<Button title="Increase" onPress={()=>setCounter(counter+1)} />
<Button title="Decrease" onPress={()=>setCounter(counter-1)} />

</View>
);
};

const styles=StyleSheet.create({
    Countd:{
        marginTop:25,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25


    }
});

export default CounterScreens;
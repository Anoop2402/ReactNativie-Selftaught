import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FlatList } from 'react-native';

const ListScreens = () =>{
    const cousins =[
        {name:'Shiva' },
        {name:'Mithun'},
        {name:'Renju'},
        {name:'Anju'},
        {name:'Aneesh'},
        {name:'Monish'},
        {name:'Raji'},
        {name:'Aji'},
        {name: 'Pazham Penn'}
    ];
    return <FlatList 
    keyExtractor={cousin=>cousin.name} 
    data={cousins} renderItem={({item}) =>{
    return <Text style={styles.cuz}>{item.name}</Text>;
    }} />
    /* FlatList has a property named 
        1) Horizontal to display data in flatlist horizontally
        2) */
};
const styles=StyleSheet.create({
    cuz:{
        fontSize: 25,
        backgroundColor: 'magenta',
        color:'yellow',
        marginVertical: 45        
    }
});

export default ListScreens;

import React from 'react';
import { FlatList } from 'react-native';
import { Text,StyleSheet } from 'react-native';

const FLScreens = () => {
    const cousins =[
        {name:'Shiva', age:21 },
        {name:'Mithun', age:33},
        {name:'Renju', age:20},
        {name:'Anju', age:21},
        {name:'Aneesh', age:28},
        {name:'Monish', age:31},
        {name:'Raji', age:35},
        {name:'Aji', age:34},
        {name: 'Pazham Penn', age:19}
    ];

    return <FlatList keyExtractor={(cuzz)=>cuzz.name} data={cousins} renderItem={({item})=>{
    return <Text style={styles.cuz}>{item.name} - {item.age}</Text>;
    }} />
};

const styles=StyleSheet.create({
    cuz:{
        fontSize: 25,
        backgroundColor: 'magenta',
        color:'yellow',
        marginVertical: 45        
    }
});

export default FLScreens;
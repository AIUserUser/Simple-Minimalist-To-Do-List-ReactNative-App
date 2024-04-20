import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


function Task(props) {
    return (
        <View style ={styles.taskitem}>
            <View style ={styles.item}>
                <TouchableOpacity style ={styles.squareIcon}></TouchableOpacity>
                <Text style={styles.itemText}> { props.text}</Text>
            </View>
            <View style={styles.circularIcon}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskitem:{
        backgroundColor: "#F8F8F8",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    item:{
        flexDirection:"row" ,
        alignItems: "center",
        flexWrap: "wrap",
    },
    squareIcon:{
        width:24,
        height:24,
        backgroundColor:"#55bcf6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: "80%",

    },
    circularIcon:{
        width:12,
        height:12,
        borderColor:"#55bcf6",
        borderWidth: 2,
        borderRadius:5
    },
});

export default Task;

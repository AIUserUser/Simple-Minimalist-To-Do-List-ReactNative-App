import React,{useState} from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import Task from './app/components/Task';

export default function App() {
  
  const [task, setTask] = useState();
  const  [tasks,setTasks]=useState([]); //store all task the use inputs

  //Adding a task to the list of tasks

  const handleAddTask = () =>{
    Keyboard.dismiss(); //after  adding a new task close the keyboard
    setTasks([...tasks, task]) //whatever already in + new task
    setTask(null); //so that the  input field is empty for next entry
  }

  //deleting a task
  const handleCompleteTask= (index) =>{
     let newList=[...tasks];//create a new array so as not to mutate original one
     newList.splice(index ,1); //delete the selected 1 item from the array at the index given
     setTasks(newList); //update the state with the new array
  };

  return (
  <ImageBackground 
      style = {styles.image}
      source={require("./app/assets/white-grey.jpg")}>
    <View style={styles.container}>
      {/*Todays Tasks*/}
      <View style ={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's Tasks
        </Text>
        <ScrollView style={styles.items} overScrollMode="never">
          {/* This is where the tasks will go */}
          {/* iterate over tasks array ao that  each item can be displayed as a component*/}
          {
            tasks.map( (item, index) => {
              // return <Task key={index} text={item}/> //insted of returning a task we return a touchable one
              //key was on Task component, now given to parent component
              return(
                <TouchableOpacity key ={index} onPress={() => handleCompleteTask(index)} > 
                  <Task text = {item} />
                </TouchableOpacity>
                )
              }
            )
          }
          {/* <Task text={"Task 1"}/>
          <Task text={"Task 2"}/>
          <Task text={"Task 3"}/>
          <Task text={"Task 4"}/> */}
        </ScrollView>
      </View>
      {/* Write a task section */}
      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior="padding" 
        style={styles.writeTaskWrapper}>
          <TextInput
            style = {styles.input} 
            placeholder='Write a Task'
            value={task}
            onChangeText={text =>setTask(text)}/>
            
          <TouchableOpacity onPress={() => handleAddTask()}>    
            <View style = {styles.addTaskWrapper}>
              <Text style = {styles.addTaskText}>+</Text> 
            </View> 
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e8eaed',
    
  },
  image:{
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items:{
    marginTop: 30,
    marginBottom:130,
    paddingBottom: 20,
    endFillColor: "#B9E1CE",
    
  },
  writeTaskWrapper:{
    // backgroundColor: '#E8EAED',
    position: "absolute",
    bottom:40,
    left: 5,
    width:"100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: "#fff",
    width:250,
    borderRadius: 60,
    elevation: 2,
    width:250
  },
  addTaskWrapper:{
    width:60,
    height:60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent:"center",
    alignItems:"center",
  },
  addTaskText:{},
});

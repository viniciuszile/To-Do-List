import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function Cadastrar_Task ({navigation}){

const [Data,SetData] = useState([]);
const State = useSelector((state)=>state);
const IdUser = State.GetId.value

function RegisterTask(){
    axios.post(`http://localhost:3000/addTask/${IdUser}`,Data)
    .then((response)=>{
        alert(response.data)
        navigation.navigate("Ver_Tasks")
    })
    .catch((err)=>{console.log(err)})
}
    return(
        <View>
            <View style={styles.header}>

            </View>

            <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
            Voltar
            </Text>

            <View style={styles.container}>
                <Text style={styles.titulo}> Seja Bem Vindo !!! </Text>

                <Text style={styles.texto_input}> Cadastre a sua tarefa</Text>
                <Text style={styles.texto_input}>Nome da tarefa</Text>
                <TextInput style={styles.input} placeholder='Nome da tarefa' onChange={(value)=>{SetData({...Data,name:value.target.value})}} />
                <Text style={styles.texto_input}>Descrição</Text>
                <TextInput style={styles.input} placeholder='Descricao' onChange={(value)=>{SetData({...Data,description:value.target.value})}}  />
                <TouchableOpacity style={styles.botao} className="button" type="submit" onPress={RegisterTask}>
                    <Text style={styles.texto_botao}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    header:{
        width: "100%",
        height: 40,
        backgroundColor: "#407BFF" ,
      },  
      voltar: {
        width: 62,
        height: 30,
        padding: 1,
        marginBottom: 5,
        marginRight: 330,
        fontSize: 22,
        textAlign: "left",
        color: "#407BFF",
        backgroundColor: "",
      },
    input:{
        width: 275,
        height: 35,
        marginTop: 15,
        color: "#000",
        borderWidth: 2  ,
        fontSize: 20,
        borderColor: "black",
        fontSize: 17,
        borderRadius: 10,
      },
      texto_input:{
        color: '#000',
        justifyContent: "center", 
        fontWeight: 500, 
        fontSize: 25,
        marginTop: 100,
      },
    titulo:{
        color: '#407BFF',
        marginTop: 100,
        fontSize: 40,
    },
    texto_botao:{
        color: '#FFF',
        justifyContent: "center",  
        fontSize:   20,
      },
    botao:{
        width: 140,
        height: 40,
        justifyContent: "center",
        backgroundColor: "#407BFF",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 50,
    },
    info:{
        color: '#000',
        marginTop: 50,
        fontSize: 20,
    },
});

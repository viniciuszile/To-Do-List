import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Receitas({ navigation }) {
  const State = useSelector((state)=>state)
  const IdUser = State.GetId.value
  const [Data, SetData] = useState([]); // state que guarda as urls das imagens vindas do servidor
  async function GetData(){
    await axios.get(`http://localhost:3000/tasks/${IdUser}`)
    .then((response)=>{
      SetData(response.data[0]?.tasks)})
    .catch((err)=>{console.log(err)})
  }

  // Método get para listar as imagens vindas do servidor
  useEffect(() => {
    GetData();

  }, []);

  function back(id_params) {
    navigation.navigate("VerReceitas", {
        id:id_params
    })
  }

  return (
        
    <View style={{ alignItems: "center" ,backgroundColor:"#fff",margin: 0,}}>

    <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
        Voltar
      </Text>

      <Text style={styles.titulo}>Tarefas</Text>
      {Data.map(({name,description})=>{
        return(
          <View>
            <Text style={styles.nome}>Nome Da tarefa: {name}</Text>
            <Text style={styles.descricao}>Descrição: {description}</Text>
          </View>
        )
      })
      }
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: ""
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
  titulo:{
    fontSize: 30
  },
  nome:{
    fontSize: 20,
    width: 300,
    height: 35,
    backgroundColor: "white",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "black"
  },
  descricao:{
    fontSize: 20,
    width: 300,
    height: 35,
    backgroundColor: "grey",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "black",
    marginBottom: 10,
  }
  
});
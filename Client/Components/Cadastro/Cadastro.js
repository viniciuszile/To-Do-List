import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

import { useState } from 'react';
import axios from 'axios';


export default function Cadastro ({navigation}){

  const Adm = () => {
    navigation.navigate("Login")
  }


  const [Data,SetData] = useState([])

  const handleRegister = (values) => {
    axios.post("http://localhost:3000/register",Data)
    .then((response)=>{console.log(response.data)})
    .catch((err)=>{console.log(err)})
    navigation.navigate("Login")
  };
      
  const validationsRegister = yup.object().shape({
    email: yup
    .string()
    .email("email inválido")
    .required("O email é obrigatório"),
    password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
    confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas são diferentes")
    .required("A confirmação da senha é obrigatória"),
  });
    


  return(
    <View>
      
      {/* Botao de voltar a home  */}
      <View style={styles.header}>

      </View>

      <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
          Voltar
      </Text>

      {/* Container geral  */}
       <View style={styles.container} >

      {/* Titulo  */}
        <h1 style={styles.titulo}>Faça Seu Cadastro !!!</h1>
        
        <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}>

        {/* Container Cadastro */}
        <Form style={styles.cadastro_form}>

        {/* Input Email */}
        <View style={styles.cadastro_form_group} >

        <Text style={styles.texto_input1}> Informe Seu Email</Text>
        <TextInput style={styles.form_field_email} placeholder="Email"  onChange={(value)=>{SetData({...Data,email:value.target.value})}}/>
  
        <ErrorMessage
        component="span"
        name="email"
        style={styles.form_error}/>
  
        </View>
  
        {/* Input Senha */}
        <View style={styles.cadastro_form_group} >

        <Text style={styles.texto_input2}> Informe Sua Senha</Text>
        <TextInput style={styles.form_field_senha}  placeholder="Senha" onChange={(value)=>{SetData({...Data,password:value.target.value})}} />
  
        <ErrorMessage
        component="span"
        name="password"
        style={styles.form_error}/>
        
        </View>
    
        {/* Input Confrimar Senha */}
  
        {/* Botao Cadastro */}
        <button style={styles.botao} type="submit" onClick={()=>{handleRegister()}}>
          <Text  style={styles.texto_botao} >cadastro</Text>
        </button>
        
        </Form>
        </Formik>             
        
         </View>
  
      </View>
    )}


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
    },
    titulo:{
      color: '#407BFF',
      marginTop: 50,
    },
    form_field_email:{
      width: 250,
      height: 30,
      color: "#000",
      fontSize: 17,
      borderRadius: 10,
    },
    form_field_senha:{
      width: 250,
      height: 30,
      // marginTop: 20,
      color: "#000",
      fontSize: 17,
      borderRadius: 10,
    },
    botao:{
      width: 160,
      height: 45,
      justifyContent: "center",
      backgroundColor: "#407BFF",
      textAlign: "center",
      borderRadius: 10,
      marginTop: 40,
    },
    texto_botao:{
      color: '#FFF',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
    },
    texto_input1:{
      color: '#000',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
      marginTop: 60,
    },
    texto_input2:{
      color: '#000',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
      marginTop: 25,
    },
    texto_input3:{
      color: '#000',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
      marginTop: 25,
    },
    form_error:{
      color: "red",
      fontSize : 17,
    },
});
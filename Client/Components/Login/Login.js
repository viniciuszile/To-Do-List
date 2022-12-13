import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Cadastro from '../Cadastro/Cadastro';

export default function Login({ navigation }) {

  const Adm = () => {
    navigation.navigate("Cadastro")
  }

  const [Data, SetData] = useState([])

  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    await axios.post("http://localhost:3000/login", Data)
      .then((Response) => {
        console.log(Response.data.status)
        if (Response.data.status == "sucess") {
          dispatch({ type: "ADD_VALUE", data: Response.data.Id })
          alert(Response.data.msg)
          navigation.navigate("Cadastrar_Task")
        }
        if(Response.data.status ==="failed"){
          console.log(Response.data.msg)
          alert(Response.data.msg)
        }
      })
  }



  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <View>

      {/*botao voltar pra home*/}
      <View style={styles.header}>

      </View>

      <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
        Voltar
      </Text>

      {/*Container Principal*/}
      <View style={styles.container} >

        {/*titulo*/}
        <h1 style={styles.titulo}>
          Faça Seu Login</h1>

        <Formik
          initialValues={{ teste: "", teste2: "" }}
          onSubmit={() => handleLogin()}
          validationSchema={validationsLogin}>

          {/*Container Login*/}
          <Form style={styles.login_form}>

            {/*Input Email*/}
            <View style={styles.login_form_group} >

              <Text style={styles.texto_input1}> Informe Seu Email</Text>
              <TextInput placeholder="Insira seu email" onChange={(value) => { SetData({ ...Data, email: value.target.value }) }} style={styles.form_field_senha}></TextInput>

              <ErrorMessage
                component="span"
                name="email"
                style={styles.form_error} />

            </View>

            {/*Input Senha*/}
            <View style={styles.login_form_group} >

              <Text style={styles.texto_input1}> Informe Sua Senha</Text>
              <TextInput style={styles.form_field_senha} placeholder="Insira sua senha" onChange={(value) => { SetData({ ...Data, password: value.target.value }) }}></TextInput>

              <ErrorMessage
                component="span"
                name="password"
                style={styles.form_error} />

            </View>

            {/*Botao Login*/}
            <button style={styles.botao} className="button" onClick={() => handleLogin()}>
              <Text style={styles.texto_botao}>Logar</Text>
            </button>

          </Form>
        </Formik>

        {/*Acesso Cadastro*/}
        <Text onPress={Adm} style={styles.admin}> Cadastre-se </Text>
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
  header: {
    width: "100%",
    height: 40,
    backgroundColor: "#407BFF",
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
  titulo: {
    color: '#407BFF',
    marginTop: 50,
  },
  form_field_email: {
    width: 250,
    height: 30,
    color: "#000",
    fontSize: 17,
    marginTop: 5,
    borderRadius: 10,
  },
  form_field_senha: {
    width: 250,
    height: 30,
    marginTop: 5,
    color: "#000",
    fontSize: 17,
    borderRadius: 10,
  },
  botao: {
    width: 160,
    height: 45,
    justifyContent: "center",
    backgroundColor: "#407BFF",
    textAlign: "center",
    borderRadius: 10,
    marginTop: 50,
  },
  texto_botao: {
    color: '#fff',
    justifyContent: "center",
    fontWeight: 500,
    fontSize: 20,
  },
  texto_input1: {
    color: '#000',
    justifyContent: "center",
    fontWeight: 500,
    fontSize: 20,
    marginTop: 60,
  },
  texto_input2: {
    color: '#000',
    justifyContent: "center",
    fontWeight: 500,
    fontSize: 20,
    marginTop: 25,
  },
  admin: {
    color: "#000",
    fontSize: 20,
    marginTop: 10,
  },
  form_error: {
    color: "red",
    fontSize: 17,
  },
});


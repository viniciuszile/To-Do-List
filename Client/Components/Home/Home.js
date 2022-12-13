import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import imagem from "../../assets/Livro.png"

export default function Home ({ navigation }){
    return (
       

             <View style={styles.container}>
                    
                <Text style={styles.texto}>
                    Seja bem Vindo !!!</Text>

                <Image 
                style={styles.Logo}
                source = {imagem}
                />

                <TouchableOpacity style={styles.botao}>
                    <Text  
                    style={styles.texto_botao}
                    title='Receitas'
                    onPress={ () => navigation.navigate("Ver_Tasks")}>
                    Ver Tafefas 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao2}>
                    <Text  
                    style={styles.texto_botao}
                    title='Login'
                    onPress={ () => navigation.navigate("Login")}>
                    Cadastar Tafefas   
                    </Text>
                </TouchableOpacity>
            </View>

        );}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    Logo: {
        width: 300,
        height: 300,
        marginTop: 70
      },
    texto: {
        marginTop: 50,
        color: '#407BFF',
        fontSize: 40,
        fontFamily: "arial" 
    },
    botao: {
        width: 160,
        height: 35,
        backgroundColor: "#407BFF",
        padding: 6,
        borderRadius: 15,
        marginTop: 70
    },
    botao2: {
        width: 160,
        height: 35,
        backgroundColor: "#407BFF",
        padding: 6,
        borderRadius: 15,
        marginTop: 30
    },
    texto_botao:{
        color: 'white',
        fontSize: 15,
        fontFamily: "arial" 
    }

})
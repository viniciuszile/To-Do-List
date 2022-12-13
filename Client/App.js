import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";

import Cadastrar_Task from "./Components/Pages/Cadastrar_Task/Cadastrar_Task";
import Ver_Tasks from "./Components/Pages/Ver_Task/Ver_Tasks";


import { Provider } from "react-redux";
import { store } from "./store/CreateStore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <View>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Ver_Tasks' component={Ver_Tasks} />
            <Stack.Screen name='Cadastrar_Task' component={Cadastrar_Task} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

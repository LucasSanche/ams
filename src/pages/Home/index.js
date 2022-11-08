

import React, { useState } from 'react';
import { 
 View, 
 Text,
 StyleSheet,
 TextInput,
 TouchableOpacity,
 Image,
 Alert
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import logo from '../../../src/assets/logo.png'




export default function Home() {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   
   <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} >

    <Animatable.Image
     animation="flipInY"
     source={logo}
     style={styles.logo}
     resizeMode="contain"
    />

    <View style={styles.infos}>
     <Text style={styles.telaHome}>Bem vindo(a)</Text>
     <Text style={styles.telaHome}>Teste Nome funcionário</Text>
    </View>

   </Animatable.View>

   

   <View style={styles.posButton}>
   <Text style={styles.telaHome}>Escolha uma opção</Text>
   <TouchableOpacity
     style={styles.button}
     onPress={ () => navigation.navigate('Scanner') }
    >
     <Text style={styles.buttonText}>Scanner</Text>
    </TouchableOpacity>

    <TouchableOpacity
     style={styles.button}
     onPress={ () => navigation.navigate('Scanner') }
    >
     <Text style={styles.buttonText}>Relatórios</Text>
    </TouchableOpacity>

    <TouchableOpacity
     style={styles.button}
     onPress={ () => navigation.navigate('Scanner') }
    >
     <Text style={styles.buttonText}>Alertas</Text>
    </TouchableOpacity>
    </View>
  </View>
 );
}


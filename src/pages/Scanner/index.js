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

import { Picker } from '@react-native-picker/picker';

import logo from '../../../src/assets/logo.png'



export default function Scanner() {
    const navigation = useNavigation();
    const [salas] = useState(['Sala 1', 'Sala 2', 'Sala 3'])
    const [salaSelecionada, setSalaSelecionada] = useState([])

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
            <Picker
                selectedValue={salaSelecionada}
                onValueChange={(itemValue, itemIndex) =>
                    setSalaSelecionada(itemValue)
                }>

                {
                    salas.map(cr => {
                        return <Picker.Item label={cr} value={cr} />
                    })
                }
            </Picker>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AssetList')}
            >
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>

        </View>
    );
}
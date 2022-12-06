import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    

} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import logo from '../../../src/assets/logo.png';

import {Table} from 'react-bootstrap'





export default function AssetList() {
    const navigation = useNavigation();


    return (
        <View>

            <Table>
                <thead>
                    <tr>

                        <th>Ativo</th>
                        <th>ID</th>
                        <th>Botao</th>
                    </tr>
                </thead>

                <tbody>



                    <tr>
                        <td>Teste</td>
                        <td>Teste</td>
                        <td></td>
                    </tr>


                    {/* {
                        this.state.assets.map((asset) =>
                        <tr>
                            <td>{asset.nome}</td>
                            <td>Teste</td>
                            <td></td>
                        </tr>
                        )
                    } */}
                </tbody>
            </Table>

        </View>

    );
}
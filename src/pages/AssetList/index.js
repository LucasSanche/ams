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



import { useNavigation } from '@react-navigation/native';


import {Table} from 'react-bootstrap';

import styles from './styles';

export default function AssetList() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Table>
                <thead style={styles.containerHeader}>
                    <tr>

                        <th>Ativo</th>
                        <th>ID</th>
                        <th>Botao</th>
                    </tr>


                    
                </thead>

                <tbody style={styles.tr}>



                    <tr>
                        <td>Teste</td>
                        <td>Teste</td>
                        <td>Teste</td>
                        
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
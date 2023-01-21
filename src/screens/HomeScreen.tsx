import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from '../components/Body/Body';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Header />
            <Card points={100000} />
            <Body />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <PrimaryButton text={'Ganados'} width={60} />
                <PrimaryButton text={'Canjeados'} width={60} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    }
})

export default HomeScreen
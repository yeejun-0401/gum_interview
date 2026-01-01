import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { PrimaryBottomSheet } from '../components/PrimaryBottomSheet';
import { SpecialistList } from '../components/SpecialistList';
import BackGroundImage from '../../assets/bg.png';
import BackButton from '../../assets/back-button.png';


const { width, height } = Dimensions.get('window');
const BOTTOM_SPACER_HEIGHT = (height * 0.10) + 50;

export const HomeScreen = () => {
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <Image 
                source={BackGroundImage}
                style={styles.backgroundImage} 
                resizeMode="cover"
            />

            <View style={styles.contentContainer}>
                <SpecialistList />
            </View>

            <View style={{ height: BOTTOM_SPACER_HEIGHT, width: '100%' }} />

        </ScrollView>

        <Image 
            style={styles.backButton}
            source={BackButton}
        />
        <PrimaryBottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    zIndex: -1,
  },
  contentContainer: {
    paddingTop: 500,
    paddingBottom: 150,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    width: 20,
    height: 20,
    zIndex: 999,
  },
});
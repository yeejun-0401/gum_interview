import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, Linking } from 'react-native';
import { SpecialistList } from '../components/SpecialistList';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next';
import { useSpecialistActions } from '../hooks/useSpecialistActions';
import { PrimaryButton } from '../components/PrimaryButton';
import BackGroundImage from '../../assets/bg.png';
import BackButton from '../../assets/back-button.png';

const { width, height } = Dimensions.get('window');
const BOTTOM_SPACER_HEIGHT = (height * 0.10) + 50;


export const HomeScreen = () => {
  const { t } = useTranslation();
  const isMember = false;
  const { handlePrimaryAction, primaryButtonLabelKey } = useSpecialistActions(isMember);
  
  const bottomSheetRef = useRef<BottomSheet>(null);

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
        {/* BottomSheet */}
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={['30%']}
            enablePanDownToClose={false}
          >
            <BottomSheetView style={styles.bottomContainer}>
              
              {/* === service hours === */}
              <View style={styles.sectionCentered}>
                <Text style={styles.serviceTitle}>{t('service_hours.title')}</Text>
                <Text style={styles.serviceText}>{t('service_hours.weekdays')}</Text>
                <Text style={styles.serviceText}>{t('service_hours.holidays')}</Text>
              </View>
              
              {/* === bottom button === */}
              <View style={styles.buttonContainer}>
                  <PrimaryButton
                    title={t(primaryButtonLabelKey)}
                    onPress={handlePrimaryAction}
                  />

                  <PrimaryButton
                    title={t('buttons.whatsapp')}
                    onPress={() =>
                      Linking.openURL(
                        `https://wa.me/85260300900?text=${t('prefill.url_encode')}`
                      )
                    }
                  />
              </View>

            </BottomSheetView>
        </BottomSheet>
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
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  header: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(85, 85, 85, 1)',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor:'rgba(245, 245, 245, 1)',
    paddingBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'rgba(85, 85, 85, 1)',
    lineHeight: 20,
    borderWidth: 1, 
    borderColor: 'transparent',
  },
  listContainer: {
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: 'rgba(167, 167, 167, 1)',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(85, 85, 85, 1)',
  },
  section: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionCentered: {
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
  },
  linkText: {
    color: 'rgba(0, 122, 255, 1)',
    fontWeight: '500',
  },
  serviceTitle: {
    fontSize: 14,
    color: 'rgba(85, 85, 85, 1)',
    marginBottom: 4,
  },
  serviceText: {
    fontSize: 14,
    color: 'rgba(85, 85, 85, 1)',
    fontWeight: '500',
    marginBottom: 2,
  },
  buttonContainer: {
    gap: 12,
    paddingBottom: 40,
    width: '90%',
    margin: 'auto',
  },
});
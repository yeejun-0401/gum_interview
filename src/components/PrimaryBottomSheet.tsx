import React, { useRef } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next';
import { useSpecialistActions } from '../hooks/useSpecialistActions';

export const PrimaryBottomSheet = () => {

  const { t } = useTranslation();
  const isMember = false;
  const { handlePrimaryAction, primaryButtonLabelKey } = useSpecialistActions(isMember);

  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={['30%']}
      enablePanDownToClose={false}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        
        {/* === service hours === */}
        <View style={styles.sectionCentered}>
          <Text style={styles.serviceTitle}>{t('service_hours.title')}</Text>
          <Text style={styles.serviceText}>{t('service_hours.weekdays')}</Text>
          <Text style={styles.serviceText}>{t('service_hours.holidays')}</Text>
        </View>
        
        {/* === bottom button === */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.primaryButton}
                onPress={handlePrimaryAction}
            >
                <Text style={styles.buttonText}>
                    {t(primaryButtonLabelKey)}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.primaryButton}
                onPress={() => Linking.openURL(`https://wa.me/85260300900?text=${t('prefill.url_encode')}`)}
            >
                <Text style={styles.buttonText}>
                    {t('buttons.whatsapp')}
                </Text>
            </TouchableOpacity>
        </View>

      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
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
  primaryButton: {
    backgroundColor: 'black',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
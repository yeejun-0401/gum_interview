import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Linking } from 'react-native';
import { useTranslation, Trans } from 'react-i18next';
import { useSpecialist } from '../hooks/useSpecialist';
import { ErrorView } from './ErrorView';
import DisclaimerIcon from '../../assets/disclaimer-icon.png';

export const SpecialistList = () => {

  const { t } = useTranslation();

  const { 
    data: specialists, 
    isLoading, 
    isError,
    refetch
  } = useSpecialist();

  return (
      <View style={styles.homeContainer}>
          {/* === page title === */}
          <View style={styles.header}>
              <Text style={styles.subtitle}>{t('header.subtitle')}</Text>
              <Text style={styles.title}>{t('header.title')}</Text>
              <Text style={styles.description}>{t('header.description')}</Text>
          </View>
  
          {/* === specialist list === */}
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : isError ? (
            <ErrorView onRetry={refetch} />
          ) : (
            <View style={styles.listContainer}>
              {specialists?.map((specialist) => (
                <View key={specialist.id} style={styles.card}>
                  {specialist.photo ? (
                  <Image
                    style={styles.photo}
                    source={specialist.photo} 
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.photo} />
                )}
                  <Text style={styles.name}>
                    {specialist.firstName} {specialist.lastName}
                  </Text>
                </View>
              ))}
            </View>
          )}
  
          {/* === contact info === */}
          <View style={styles.section}>
            <Text style={styles.text}>
              {t('contact.general_enquiry')}
            </Text>
            
            <View style={styles.textContainer}>
              <Trans
                i18nKey="contact.hotline"
                values={{ phone: '+852 2893 4402' }}
                components={[
                  <Text style={styles.text} />,
                  <Text style={styles.linkText} />
                ]}
              />
            </View>
            <View style={styles.textContainer}>
              <Trans
                i18nKey="contact.email"
                values={{ email: 'memberservice@gumhk.com' }}
                components={[
                  <Text style={styles.text} />,
                  <Text style={styles.linkText} />
                ]}
              />
            </View>
          </View>
  
          {/* === disclaimer box === */}
          <View style={styles.disclaimerBox}>
            <Image 
            style = {styles.disclaimerImg}
            source={DisclaimerIcon} />
            <Text style={styles.disclaimerText}>
              {t('disclaimer')}
            </Text>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 50,
    borderRadius: 20,
    width: '100%',
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
  textContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(85, 85, 85, 1)',
    marginBottom: 4,
    lineHeight: 20,
    marginRight: 4,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 122, 255, 1)',
    marginBottom: 4,
  },
  disclaimerBox: {
    backgroundColor: 'rgba(255, 250, 229, 1)',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(245, 230, 167, 1)',
    marginTop: 16,
    flexDirection: 'row',
  },
  disclaimerImg:{
    width: 16,
    height: 16,
    marginRight: 8,
  },
  disclaimerText: {
    fontSize: 12,
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 18,
    flex: 1,
  },
});
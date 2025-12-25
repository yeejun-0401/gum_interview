import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Linking } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchSpecialists } from './src/services/api'; 
import './src/i18n';
import { useTranslation } from 'react-i18next';
import { SpecialistBottomSheet } from './src/components/SpecialistBottomSheet';

const queryClient = new QueryClient();

// const TempDataCheck = () => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['specialists'],
//     queryFn: fetchSpecialists,
//   });

//   if (isLoading) {
//     console.log('Status: loading...');
//     return <Text style={styles.text}>Loading data...</Text>;
//   }

//   if (error) {
//     console.error('error:', error);
//     return <Text style={styles.text}>Error!</Text>;
//   }

//   if (data) {
//     console.log('=====================================');
//     console.log('success：');
//     console.log(JSON.stringify(data, null, 2));
//     console.log('=====================================');
//   }

//   return (
//     <View>
//       <Text style={styles.text}>Data loaded! Check your terminal.</Text>
//       <Text style={styles.text}>First User: {data?.[0]?.firstName}</Text>
//     </View>
//   );
// };


export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ImageBackground 
          source={require('./assets/bg.png')} // <--- 關鍵：讀取本地圖片要用 require
          style={styles.container}
          resizeMode="cover" // 讓圖片充滿整個螢幕，不會變形
        >
          <Text style={styles.backBottom}>&lt;</Text>
          <StatusBar style="auto" />

          <SpecialistBottomSheet />
          
        </ImageBackground>

        {/* === service hours === */}
        <View style={styles.sectionCentered}>
          <Text style={styles.serviceTitle}>{t('service_hours.title')}</Text>
          <Text style={styles.serviceText}>{t('service_hours.weekdays')}</Text>
          <Text style={styles.serviceText}>{t('service_hours.holidays')}</Text>
        </View>
        
        {/* === bottom button === */}
        <View style={styles.buttonContainer}>
            <View style={styles.blackButton}>
                <Text 
                style={styles.buttonText}
                onPress={() => Linking.openURL('https://gainmiles.simplybook.asia/v2/')}
                >{t('buttons.book_appointment')}</Text>
            </View>
            <View style={styles.blackButton}>
                <Text 
                style={styles.buttonText}
                onPress={() => Linking.openURL('https://wa.me/85260300900?text=Hi%20GUM%20Specialist!%20I%20am%20contacting%20via%20the%20app.')}
                >{t('buttons.whatsapp')}</Text>
            </View>
        </View>

      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backBottom: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 24,
    // color: '#333',
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
  blackButton: {
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
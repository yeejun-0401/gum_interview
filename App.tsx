import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchSpecialists } from './src/services/api'; 
import './src/i18n';
import { useTranslation } from 'react-i18next';
import { PrimaryBottomSheet } from './src/components/PrimaryBottomSheet';
import { SpecialistList } from './src/components/SpecialistList';
import BackGroundImage from './assets/bg.png';
import BackButton from './assets/back-button.png';

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
          source={BackGroundImage}
          style={styles.container}
          resizeMode="cover"
        >
          <Image 
            style={styles.backButton}
            source={BackButton}
          />
          <StatusBar style="auto" />

          <SpecialistList />
          <PrimaryBottomSheet />
          
        </ImageBackground>

        

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
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    width: 20,
    height: 20,
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
  }
});
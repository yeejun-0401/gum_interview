import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchSpecialists } from './src/services/api'; 

const queryClient = new QueryClient();

const TempDataCheck = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['specialists'],
    queryFn: fetchSpecialists,
  });

  if (isLoading) {
    console.log('Status: loading...');
    return <Text style={styles.text}>Loading data...</Text>;
  }

  if (error) {
    console.error('error:', error);
    return <Text style={styles.text}>Error!</Text>;
  }

  if (data) {
    console.log('=====================================');
    console.log('success：');
    console.log(JSON.stringify(data, null, 2)); 
    console.log('=====================================');
  }

  return (
    <View>
      <Text style={styles.text}>Data loaded! Check your terminal.</Text>
      <Text style={styles.text}>First User: {data?.[0]?.firstName}</Text>
    </View>
  );
};


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        
        <View style={styles.container}>
          <Text style={styles.title}>Data Layer Test</Text>
          
          <TempDataCheck />
          
          <StatusBar style="auto" />
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
  text: {
    fontSize: 16,
    marginBottom: 10,
  }
});
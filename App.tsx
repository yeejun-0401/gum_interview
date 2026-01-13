import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  { HomeScreen }  from './src/screens/HomeScreen';
import './src/i18n';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
      <QueryClientProvider client={queryClient}>
        
        <NavigationContainer>
          <Stack.Navigator id="MainStack">
            
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ headerShown: false }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>

      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
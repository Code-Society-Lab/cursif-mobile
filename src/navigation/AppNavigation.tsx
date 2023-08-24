import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import DefaultNavigation from './Default';
import HomeNavigation from './Home';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const isLoggedIn = false; // Temporary logic

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeNavigation} />
        ) : (
          <Stack.Screen name="Default" component={DefaultNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
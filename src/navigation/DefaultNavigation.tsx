import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, RegisterScreen } from "../screens";

const Stack = createNativeStackNavigator<DefaultStackParamList>();

const DefaultNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen}/>
  </Stack.Navigator>
);

export default DefaultNavigation;
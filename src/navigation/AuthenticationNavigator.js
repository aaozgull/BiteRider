import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RiderWelcome1 from '../screens/Authentication/RiderWelcome1';
import RiderWelcome2 from '../screens/Authentication/RiderWelcome2';
import Signup from '../screens/Authentication/Signup';
import PhoneNumber from '../screens/Authentication/PhoneNumber';
import Password from '../screens/Authentication/Password';
import NewPasswordViaSMS from '../screens/Authentication/NewPasswordViaSMS';
import ForgetPassword from '../screens/Authentication/ForgetPassword';
import AccountComplete from '../screens/Authentication/AccountComplete';
import RiderRegistration from '../screens/Authentication/RiderRegistration';
import RiderNames from '../screens/Authentication/RiderNames';
import RiderBirthday from '../screens/Authentication/RiderBirthday';
import RiderLogo from '../screens/Authentication/RiderLogo';
import RiderCNIC from '../screens/Authentication/RiderCNIC';

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RiderWelcome2" component={RiderWelcome2} />
    <Stack.Screen name="RiderWelcome1" component={RiderWelcome1} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
    <Stack.Screen name="Password" component={Password} />
    <Stack.Screen name="NewPasswordViaSMS" component={NewPasswordViaSMS} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    <Stack.Screen name="AccountComplete" component={AccountComplete} />
    <Stack.Screen name="RiderRegistration" component={RiderRegistration} />
    <Stack.Screen name="RiderNames" component={RiderNames} />
    <Stack.Screen name="RiderBirthday" component={RiderBirthday} />
    <Stack.Screen name="RiderLogo" component={RiderLogo} />
    <Stack.Screen name="RiderCNIC" component={RiderCNIC} />
  </Stack.Navigator>
);

export default AuthenticationNavigator;

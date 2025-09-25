import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppInput from '../../components/AppInput';
import HeaderComponent from '../../components/HeaderComponent';
import AppButton from '../../components/AppButton';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';
import { isIOS } from '../../utils/layout';

const ForgetPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIOS ? 'padding' : 'height'}
      >
        <HeaderComponent leftIcon="chevron" />

        {/* Scrollable content so inputs don’t get hidden */}
        <ScrollView
          contentContainerStyle={styles.subContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Please, enter your email or phone below. Your password will be reset
            and a new one will be sent to you via SMS.
          </Text>
          <AppInput
            //placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </ScrollView>

        {/* Footer stays fixed */}
        <View style={styles.bottomSection}>
          <AppButton
            title="Request new password"
            onPress={() => navigation.navigate('NewPasswordViaSMS')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  subContainer: {
    paddingTop: 70,
    paddingBottom: 20, // leaves space above footer
  },
  bottomSection: {
    paddingBottom: 10,
  },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxxlarge,
    fontWeight: '700',
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
    color: COLORS.grayText1,
  },
});

export default ForgetPassword;

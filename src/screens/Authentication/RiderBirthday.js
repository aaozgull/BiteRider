import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/HeaderComponent';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';
import { isIOS } from '../../utils/layout';

const RiderBirthday = ({ navigation }) => {
  const [birthday, setBirthday] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        //leftIcon="chevron"
        title="Become a rider"
        bottomBorder={true}
        leftIcon="chevron"
        rightIcon={require('../../assets/images/Authentication/cross.png')}
        onRightPress={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIOS ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.subContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>When is your birthday?</Text>
          <AppInput
            placeholder="DD/MM/YYYY"
            value={birthday}
            onChangeText={setBirthday}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer stays fixed */}
      <View style={styles.bottomSection}>
        <AppButton
          title="Next"
          onPress={() => navigation.navigate('RiderLogo')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
  },
  subContainer: {
    paddingVertical: 40,
  },
  bottomSection: {
    paddingBottom: 10,
  },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxlarge,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 50,
  },

  footer: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
  },
});

export default RiderBirthday;

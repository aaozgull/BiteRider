import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { COLORS, FONTS } from '../../constants';
import DropdownSelector from '../../components/DropdownSelector';
import { FONT_SIZE } from '../../utils/spacing';
import HeaderComponent from '../../components/HeaderComponent';

const PhoneNumber = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent leftIcon="chevron" />
      <View style={styles.subContainer}>
        <Text style={styles.title}>
          Hum apko <Text style={{ color: COLORS.primary }}>Bite</Text> k sath
          shamil krne per purjosh hain!
        </Text>
        <Text style={styles.subtitle}>
          Account banane k liye apna phone number daale
        </Text>
        <View style={styles.row}>
          <View style={{ marginRight: 8 }}>
            <DropdownSelector value="+92" isLeftImageShow={false} />
          </View>
          <AppInput
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            type="phone"
          />
        </View>
      </View>

      <AppButton title="Next" onPress={() => navigation.navigate('Password')} />

      <Text style={styles.footer}>
        Kya aap pehle se rider hain?{' '}
        <Text style={{ color: COLORS.primary }}>Signup</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  subContainer: { flex: 1, paddingTop: 70 },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xlarge,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    marginBottom: 20,
    color: COLORS.grayText1,
  },
  footer: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.normal,
    marginTop: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PhoneNumber;

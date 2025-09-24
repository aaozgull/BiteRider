import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Signup</Text>
        <AppInput placeholder="Email" value={email} onChangeText={setEmail} />
        <AppInput
          placeholder="Password"
          value={pass}
          onChangeText={setPass}
          secure
        />
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/Authentication/tick.png')}
              style={styles.image}
            />
            <Text style={styles.lable}> Must be 18 years or older</Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/Authentication/tick.png')}
              style={styles.image}
            />
            <Text style={styles.lable}>
              Provide accurate information during sign-up
            </Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/Authentication/tick.png')}
              style={styles.image}
            />
            <Text style={styles.lable}>
              Responsible for all activity on your account
            </Text>
          </View>
        </View>
      </View>

      <AppButton
        title="Continue"
        onPress={() => navigation.navigate('PhoneNumber')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
    paddingTop: 80,
  },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xxxlarge,
    fontWeight: '700',
    marginBottom: 20,
  },
  link: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xSmall,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  image: { marginRight: 7 },
  lable: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    fontWeight: '600',
  },
});

export default Signup;

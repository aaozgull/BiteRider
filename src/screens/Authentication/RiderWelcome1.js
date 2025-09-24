import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeaderText from '../../components/AppHeaderText';
import AppInput from '../../components/AppInput';
import { COLORS } from '../../constants';

const RiderWelcome1 = () => {
  const [search, setSearch] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <AppHeaderText
        title="Welcome!"
        subtitle="Select the country or region you are at the moment"
      />
      <AppInput placeholder="Search" value={search} onChangeText={setSearch} />

      <View style={[styles.row, styles.search]}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/images/Welcome/flag.png')}
            style={{ marginRight: 10 }}
          />
          <Text>Pakistan</Text>
        </View>
        <Text>Bite</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: COLORS.background,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  search: {
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGrayMedium,
    paddingBottom: 8,
    marginTop: 32,
  },
});

export default RiderWelcome1;

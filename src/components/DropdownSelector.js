import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import { BORDER_RADIUS } from '../utils/spacing';

const DropdownSelector = ({
  value = 'Pakistan',
  onPress,
  isLeftImageShow = true,
}) => {
  return (
    <TouchableOpacity style={styles.dropdown} onPress={onPress}>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View style={styles.row}>
          {isLeftImageShow && (
            <Image source={require('../assets/images/Welcome/flag.png')} />
          )}

          <Text>{value}</Text>
        </View>
        <Image source={require('../assets/images/Welcome/down-chevron.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 34,
    borderWidth: 1,
    borderColor: COLORS.borderGrayMedium,
    borderRadius: BORDER_RADIUS.xtiny,
    padding: 8,
    marginVertical: 8,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
});

export default DropdownSelector;

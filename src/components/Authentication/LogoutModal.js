import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS, FONTS } from '../../constants';
import { FONT_SIZE } from '../../utils/spacing';

const LogoutModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.5}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Logout</Text>
        <Text style={styles.subtitle}>Are you sure you want to log out?</Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.leftButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.rightButton]}
            onPress={onConfirm}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0, // important for full screen modal background
  },
  modalContainer: {
    backgroundColor: COLORS.background,
    width: '80%',
    borderRadius: 10,
    paddingTop: 20,
    //paddingHorizontal: 20,
    paddingBottom: 0,
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.large,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: FONTS.semiBold600,
    fontSize: FONT_SIZE.normal,
    color: COLORS.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGrayMedium,
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  leftButton: {
    borderRightWidth: 1,
    borderRightColor: COLORS.borderGrayMedium,
  },
  rightButton: {},
  buttonText: {
    fontFamily: FONTS.bold700,
    fontSize: FONT_SIZE.xlarge,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

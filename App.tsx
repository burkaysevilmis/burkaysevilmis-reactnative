/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from 'src/Router';
import LoadingGlobal from 'src/components/Loading';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { color, FONTS } from 'src/constants';
import { setSnackBarText } from 'src/store/slice/manageSlice';
const App = () => {
  const {loading,snackBarText} = useAppSelector(state=>state.manage);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => {
    setVisible(!visible);
    dispatch(setSnackBarText(''));
  };
  useEffect(() => {
    if (snackBarText !== '') {
      setVisible(true);
    }
  }, [snackBarText]);
  return (
    <View style={styles.flex}>
     
        <NavigationContainer theme={{colors:{background:'#F2F2F2',primary:'#F2F2F2'}}}>
       
        <Router />
       {loading && <LoadingGlobal />}
      </NavigationContainer>
      <Snackbar
        style={styles.snackStyle}
        visible={visible}
        wrapperStyle={styles.snackWrapperStyle}
        duration={3000}
        theme={{colors: {accent: 'white'}}}
        onDismiss={onDismissSnackBar}
        action={{
          label:'Close',
          onPress: () => {
            setVisible(false);
          },
        }}>
        <Text style={{...FONTS.f4,color:'white'}}>{snackBarText}</Text>
      </Snackbar>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  snackStyle: {
    zIndex: 99999999999999999,
    backgroundColor: color.black,
    ...FONTS.f3,
  },
  snackWrapperStyle: {
    zIndex: 99999999999999999,
    top: 0,
    ...FONTS.f3,
    color:'white'
  },
});

import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { styles } from './style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useAppSelector } from '../../redux/hooks';

interface DefaultPageProps {
  children?: React.ReactNode;
  style?: any;
}
export const DefaultPage: React.FC<DefaultPageProps> = ({ children, style }) => {
  const { isLoading, } = useAppSelector(state => state.appState);

  return (
    <View style={[style, styles.container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      {isLoading && <ActivityIndicator size="large" color="#008080" />}
      {children}
    </View>
  );
};

import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    padding-top: ${Constants.statusBarHeight}px;
    margin: 10px;
`;

export const HeaderBar = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PolarPart = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: ${(props) => (props.minor ? '20%' : '30%')};
`;

export const DirectContact = styled.View`
    margin: 10px 0;
    flex-direction: column;
`;

export const ContactInformation = styled.View`
    flex-direction: column;
`;

export const ContactView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`;

export const SearchPart = styled.View`
    flex-direction: row;
    align-items: center;
    border: 1px black solid;
    border-radius: 7px;
    height: 40px;
`;

export const Icon = styled(Feather)`
    /* transform: translate(4px, -37px); */
`;

export const IconTest = styled(Feather)``;

export const ContactClick = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;

export const OpacityClick = styled.TouchableOpacity``;

export const H1 = styled.Text`
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
`;

export const P = styled.Text`
    font-size: 14px;
`;

export const Opacity = styled.View`
    opacity: 0.5;
`;

export const Search = styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: transparent;
    margin-top: 25px;
    padding: 2px 10px;
    margin: 0;
`;

export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    padding-top: ${Constants.statusBarHeight}px;
`;

export const Content = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 15px;
    height: ${height * 0.9}px;
`;

export const HeaderBar = styled.View`
    width: 100%;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const MessagePart = styled.View`
    width: 100%;
    padding: 5px;
    border: 1px black solid;
    border-radius: 100px;
    flex-direction: row;
    align-items: center;
`;

export const PolarPart = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
        props.leftPart ? 'flex-start' : 'space-between'};
`;

export const Icon = styled(Feather)`
    margin: 5px;
`;

export const MessageIcons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
        props.leftPart ? 'flex-start' : 'space-between'};
    width: ${(props) => (props.leftPart ? '70%' : '30%')};
`;

export const H1 = styled.Text`
    font-size: 28px;
    font-weight: bold;
`;

export const P = styled.Text`
    font-size: 16px;
`;

export const ChatMessage = styled.TextInput`
    width: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-120px);
`;

export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const OpacityButton = styled.TouchableOpacity``;

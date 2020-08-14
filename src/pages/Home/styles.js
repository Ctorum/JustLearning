import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    padding: ${Constants.statusBarHeight}px ${width * 0.02}px 0
        ${width * 0.02}px;
    background-color: white;
`;

export const HeaderBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
`;

export const Scroll = styled.ScrollView``;

export const StoriesScroll = styled.ScrollView``;

export const NHEadDiv = styled.View`
    display: flex;
    background-color: white;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

export const NButtonsDiv = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90px;
`;

export const NFooterDiv = styled.View`
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LikedDiv = styled.View`
    width: 380px;
    padding-bottom: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const StoriesDiv = styled.View`
    flex-direction: column;
`;

export const NText = styled.Text`
    font-size: 14px;
    font-weight: 300;
    margin: 0 auto 0 10px;
`;

export const NBoldText = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const NormalText = styled.Text`
    font-size: 14px;
    text-align: left;
`;

export const StoriesText = styled.Text`
    font-size: 12px;
    transform: translate(10px, -10px);
`;

export const HeaderImage = styled.Image`
    width: ${width * 0.2}px;
    height: ${height * 0.03}px;
    transform: translateY(3.5px);
`;

export const StoriesImage = styled.Image`
    width: 50px;
    height: 50px;
    margin: 0 15px 10px 0;
    border-radius: 25px;
`;

export const NImagem = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
`;

export const FeedImagem = styled.Image`
    margin-top: 10px;
    width: ${width}px;
    height: ${width}px;
`;

export const NButton = styled.TouchableOpacity``;

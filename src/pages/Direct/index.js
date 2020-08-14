import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import {
    Container,
    H1,
    P,
    HeaderBar,
    Search,
    DirectContact,
    UserImage,
    ContactView,
    ContactClick,
    ContactInformation,
    Opacity,
    OpacityClick,
    PolarPart,
    Icon,
    SearchPart,
    IconTest,
} from './styles';
import User from '../../assets/user.jpg';
import Square from '../../assets/square.png';

const Direct = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <HeaderBar>
                <PolarPart>
                    <OpacityClick onPress={() => navigation.navigate('Home')}>
                        <Feather name="chevron-left" size={32} />
                    </OpacityClick>
                    <H1>Direct</H1>
                </PolarPart>
                <PolarPart minor>
                    <Feather name="video" size={32} />
                    <Feather name="edit" size={32} />
                </PolarPart>
            </HeaderBar>
            <SearchPart>
                <Icon name="search" size={24} />
                <Search placeholder="Pesquisar" />
            </SearchPart>
            <ContactView>
                <P>Messages</P>
                <P>Contato</P>
            </ContactView>
            <DirectContact>
                <ContactView>
                    <UserImage source={User} />
                    <ContactClick onPress={() => navigation.navigate('Chat')}>
                        <ContactInformation>
                            <P>ctorum</P>
                            <Opacity>
                                <P>Ver mensagem</P>
                            </Opacity>
                        </ContactInformation>
                        <Feather name="camera" size={24} />
                    </ContactClick>
                </ContactView>
                <ContactView>
                    <UserImage source={Square} />
                    <ContactClick onPress={() => navigation.navigate('Chat')}>
                        <ContactInformation>
                            <P>square</P>
                            <Opacity>
                                <P>Ver mensagem</P>
                            </Opacity>
                        </ContactInformation>
                        <Feather name="camera" size={24} />
                    </ContactClick>
                </ContactView>
            </DirectContact>
        </Container>
    );
};

export default Direct;

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    H1,
    P,
    HeaderBar,
    PolarPart,
    UserImage,
    OpacityButton,
    Content,
    ChatMessage,
    MessageIcons,
    MessagePart,
    Icon,
} from './styles';
import User from '../../assets/user.jpg';

const Chat = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <HeaderBar>
                <PolarPart lucas>
                    <OpacityButton
                        onPress={() => navigation.navigate('Direct')}
                    >
                        <Icon name="chevron-left" size={28} />
                    </OpacityButton>
                    <UserImage source={User} />
                </PolarPart>
                <PolarPart>
                    <Icon name="video" size={28} />
                    <Icon name="flag" size={28} />
                    <Icon name="info" size={28} />
                </PolarPart>
            </HeaderBar>
            <Content>
                <MessagePart>
                    <MessageIcons leftPart>
                        <Icon name="camera" size={28} />
                    </MessageIcons>
                    <MessageIcons>
                        <Icon name="mic" size={28} />
                        <Icon name="image" size={28} />
                        <Icon name="square" size={28} />
                    </MessageIcons>
                    <ChatMessage placeholder="Mensagem..." />
                </MessagePart>
            </Content>
        </Container>
    );
};

export default Chat;

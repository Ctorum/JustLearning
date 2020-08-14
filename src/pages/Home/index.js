import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    HeaderBar,
    Scroll,
    NText,
    StoriesDiv,
    StoriesText,
    NImagem,
    StoriesScroll,
    StoriesImage,
    NHEadDiv,
    NFooterDiv,
    NButtonsDiv,
    LikedDiv,
    NButton,
    NBoldText,
    NormalText,
    FeedImagem,
    HeaderImage,
} from './styles';
import user from '../../assets/user.jpg';
import feedImage from '../../assets/feedImage.jpg';
import logo from '../../assets/instagram-logo.png';

const Home = () => {
    const navigation = useNavigation();

    const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    const [liked, setLiked] = useState(false);
    const [numberLiked, setNumberLiked] = useState(0);

    function getLiked() {
        setLiked(true);
        setNumberLiked(numberLiked + 1);
    }

    return (
        <Container>
            <HeaderBar>
                <Feather name="camera" size={24} />
                <HeaderImage source={logo} />
                <NButton onPress={() => navigation.navigate('Direct')}>
                    <Feather name="send" size={24} />
                </NButton>
            </HeaderBar>
            <Scroll>
                <StoriesScroll horizontal>
                    <NHEadDiv>
                        {list.map((v) => (
                            <StoriesDiv>
                                <StoriesImage source={user} key={v} />
                                <StoriesText>Vito</StoriesText>
                            </StoriesDiv>
                        ))}
                    </NHEadDiv>
                </StoriesScroll>
                <NHEadDiv>
                    <NImagem source={user} />
                    <NText>ctorum</NText>
                    <Feather
                        name="more-horizontal"
                        sizexie={20}
                        color="black"
                    />
                </NHEadDiv>
                <FeedImagem source={feedImage} />
                <NFooterDiv>
                    <NButtonsDiv>
                        <NButton onPressOut={getLiked}>
                            <Feather
                                name="heart"
                                size={24}
                                color={liked ? 'red' : 'black'}
                            />
                        </NButton>
                        <Feather
                            name="message-circle"
                            size={24}
                            color="black"
                        />
                        <NButton onPress={() => navigation.navigate('Chat')}>
                            <Feather name="send" size={24} color="black" />
                        </NButton>
                    </NButtonsDiv>
                    <Feather name="bookmark" size={24} color="black" />
                </NFooterDiv>
                <LikedDiv>
                    <NormalText>
                        {liked ? (
                            <>
                                <NormalText>Curtido por </NormalText>
                                <NBoldText>ctorum</NBoldText>
                                {numberLiked >= 2 ? (
                                    <>
                                        <NormalText> e </NormalText>
                                        <NBoldText>mais ainda</NBoldText>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    </NormalText>
                </LikedDiv>
                <NHEadDiv>
                    <NImagem source={user} />
                    <NText>ctorum</NText>
                    <Feather name="more-horizontal" size={20} color="black" />
                </NHEadDiv>
                <FeedImagem source={feedImage} />
                <NFooterDiv>
                    <NButtonsDiv>
                        <NButton onPressOut={getLiked}>
                            <Feather
                                name="heart"
                                size={24}
                                color={liked ? 'red' : 'black'}
                            />
                        </NButton>
                        <Feather
                            name="message-circle"
                            size={24}
                            color="black"
                        />
                        <Feather name="send" size={24} color="black" />
                    </NButtonsDiv>
                    <Feather name="bookmark" size={24} color="black" />
                </NFooterDiv>
                <LikedDiv>
                    <NormalText>
                        {liked ? (
                            <>
                                <NormalText>Curtido por </NormalText>
                                <NBoldText>ctorum</NBoldText>
                                {numberLiked >= 2 ? (
                                    <>
                                        <NormalText> e </NormalText>
                                        <NBoldText>mais ainda</NBoldText>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    </NormalText>
                </LikedDiv>
            </Scroll>
        </Container>
    );
};

export default Home;

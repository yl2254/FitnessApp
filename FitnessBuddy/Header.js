//import React from 'react-native';
import React, {Component} from 'react';
import { Container, Content, ListItem, Text, CheckBox,Header, Left,Button,Icon, Body,Title,Right } from 'native-base';

export default class HeaderIconText extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>New Workout</Title>
                </Body>
                <Right>
                    <Text>Cancel</Text>
                </Right>
            </Header>
        );
    }
}
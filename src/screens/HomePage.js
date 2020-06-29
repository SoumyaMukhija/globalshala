import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree'; 
​
export default class ThemeTabsExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Tabs>
                        <TabOne tabLabel='colleges' />
                        <TabTwo tabLabel='process' />
                        <TabThree tabLabel='predictor'/>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}
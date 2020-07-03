import React from 'react';
import { Container, Header, Content, List, ListItem, Text } from "native-base"

const ListPage = (props) => {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }

export default ListPage;

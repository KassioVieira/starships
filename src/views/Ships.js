import React, { Component } from "react";

import { FlatList, ActivityIndicator, View, Text } from "react-native";

import Toolbar, { ActionButton } from "../components/Toolbar";
import Container from "../components/Container";
import ShipItem from "../components/ShipItem";

import { getStarShips } from "../services/api";
import colors from "../values/colors";

export default class Ships extends Component {
  state = {
    page: 1,
    ships: [],
    loading: false
  };

  async componentDidMount() {
    this.loadShips();
  }

  loadShips = async () => {
    const { page, loading } = this.state;
    if (page < 5) {
      if (loading) return;
      this.setState({ loading: true });

      getStarShips(page).then(res => {
        this.setState({
          ships: [...this.state.ships, ...res.results],
          page: page + 1,
          loading: false
        });
      });
    }
  };

  renderFooter = () => {
    const { loading } = this.state;
    if (!loading) return null;
    return (
      <View>
        <ActivityIndicator size={50} color={colors.text} />
      </View>
    );
  };

  render() {
    const distance = this.props.navigation.getParam("distance", "");
    const { navigation } = this.props;
    return (
      <Container>
        <Toolbar
          title="Ships"
          LeftComponent={
            <ActionButton
              icon="arrow-left"
              onPress={() => navigation.goBack()}
            />
          }
        />
        <FlatList
          extraData={this.state.ships}
          data={this.state.ships}
          renderItem={({ item }) => <ShipItem {...item} distance={distance} />}
          keyExtractor={item => item.name}
          ListEmptyComponent={() => (
            <Text
              style={{
                marginTop: 20,
                color: colors.text,
                fontSize: 30,
                textAlign: "center"
              }}
            >
              Carregando...
            </Text>
          )}
          onEndReached={this.loadShips}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
        />
      </Container>
    );
  }
}

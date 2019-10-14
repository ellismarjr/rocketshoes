import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

export default class Home extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProduts();
  }

  getProduts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
    }));
    console.tron.log(data);

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    // const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{item.amount || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

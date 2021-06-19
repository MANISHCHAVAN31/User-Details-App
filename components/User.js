import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import {Card, CardItem, Text, H1} from 'native-base';

const User = ({details}) => {
  return (
    <View>
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <Image
            style={styles.image}
            source={{uri: details.picture?.large, width: 150, height: 150}}
          />
        </CardItem>
        <CardItem style={styles.cardItem} bordered>
          <H1 style={styles.text}>
            {details.name?.title}. {details.name?.first} {details.name?.last}
          </H1>
        </CardItem>
        <CardItem style={styles.cardItem} bordered>
          <Text style={styles.text}>{details.email}</Text>
        </CardItem>
        <CardItem style={styles.cardItem}>
          <Text style={styles.text}>
            {details.location.street.number}, {details.location.street.name}
          </Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>
            {details.location.city} {details.location.state}{' '}
            {details.location.country} {details.location.postcode}
          </Text>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>{details.cell}</Text>
        </CardItem>
        <CardItem footer style={styles.cardItem}>
          <Text style={styles.text}>
            Registered at:{'  '}
            {moment(details.registered.text).format('DD-MM-YYYY')}
          </Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  card: {
    minWidth: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});

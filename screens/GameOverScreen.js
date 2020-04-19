import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game is Over!</TitleText>
			<View style={styles.imageContainer}>
				<Image
					// source={require('../assets/success.png')}
					source={{
						uri:
							'https://i.pinimg.com/originals/14/fa/ee/14faee721d75b3bb8d3d09912b774f0f.png',
					}}
					style={styles.image}
					resizeMode='cover'
				/>
			</View>
			<View style={styles.textContainer}>
				<BodyText style={styles.resultText}>
					Your phone needed{' '}
					<Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
					rounds to guess the number{' '}
					<Text style={styles.highlight}>{props.userNumber}</Text>
				</BodyText>
			</View>
			<Button title='NEW GAME' onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: '80%',
		height: 300,
		borderRadius: 200,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	textContainer: {
		marginHorizontal: 30,
		marginVertical: 15
	},
	resultText: {
		textAlign: 'center',
		fontSize: 20
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold',
	},
});

export default GameOverScreen;

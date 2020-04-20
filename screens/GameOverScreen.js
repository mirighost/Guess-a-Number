import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	ScrollView,
} from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<TitleText>The Game is Over!</TitleText>

				<View style={styles.imageContainer}>
					<Image
						// source={require('../assets/success.png')}
						source={{
							uri:
								// 'https://i.pinimg.com/originals/14/fa/ee/14faee721d75b3bb8d3d09912b774f0f.png',
								'https://images8.alphacoders.com/962/thumb-1920-962048.jpg',
						}}
						style={styles.image}
						resizeMode='cover'
					/>
				</View>

				<View style={styles.resultContainer}>
					<BodyText style={styles.resultText}>
						Your phone needed{' '}
						<Text style={styles.highlight}>
							{props.roundsNumber}
						</Text>{' '}
						rounds to guess the number{' '}
						<Text style={styles.highlight}>{props.userNumber}</Text>
					</BodyText>
				</View>

				<MainButton onPress={props.onRestart}>NEW GAME</MainButton>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	imageContainer: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		borderRadius: 200,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: Dimensions.get('window').height / 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultContainer: {
		marginHorizontal: 30,
		marginVertical: Dimensions.get('window').height / 60,
	},
	resultText: {
		textAlign: 'center',
		fontSize: Dimensions.get('window').height < 40 ? 16 : 20,
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold',
	},
});

export default GameOverScreen;

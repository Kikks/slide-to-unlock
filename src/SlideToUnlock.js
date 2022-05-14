import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import React, { useRef, useEffect, useState } from "react";

// Assets
import PadlockBody from "../assets/icons/padlock-body";
import PadlockHook from "../assets/icons/padlock-hook";

const { width } = Dimensions.get("screen");
const SLIDE_WIDTH = width * 0.9;
const SLIDE_HEIGHT = 70;
const ACCENT_COLOR = "purple";

const SlideToUnlock = ({ locked, setLocked }) => {
	const [scrollViewRef, setScrollViewRef] = useState(null);
	const scrollX = useRef(new Animated.Value(0)).current;
	const inputRange = [0, SLIDE_WIDTH];

	const left = scrollX.interpolate({
		inputRange,
		outputRange: [SLIDE_WIDTH * 0.8, SLIDE_WIDTH * 1.02]
	});

	const top = scrollX.interpolate({
		inputRange,
		outputRange: ["27%", "15%"]
	});

	useEffect(() => {
		if (scrollViewRef) {
			if (locked) {
				scrollViewRef.scrollTo({
					x: 0,
					y: 0,
					animated: false
				});
			} else {
				scrollViewRef.scrollTo({
					x: SLIDE_WIDTH,
					y: 0,
					animated: false
				});
			}
		}
	}, [scrollViewRef]);

	return (
		<View style={styles.wrapper}>
			<Animated.ScrollView
				ref={ref => setScrollViewRef(ref)}
				decelerationRate='fast'
				bounces={false}
				snapToInterval={SLIDE_WIDTH}
				horizontal
				showsHorizontalScrollIndicator={false}
				removeClippedSubviews
				style={styles.container}
				onScroll={({ nativeEvent }) => {
					scrollX.setValue(nativeEvent.contentOffset.x);

					if (nativeEvent.contentOffset.x === 0) {
						setLocked(true);
					} else if (nativeEvent.contentOffset.x > SLIDE_WIDTH - 10) {
						setLocked(false);
					}
				}}
			>
				<View style={[styles.slide, styles.lockedSlide]}>
					<Text style={[styles.text, styles.lockedText]}>
						Slide padlock to switch mode
					</Text>
				</View>

				<View style={[styles.slide, styles.unlockedSlide]}>
					<Text style={[styles.text, styles.unlockedText]}>
						Slide padlock to switch mode
					</Text>
				</View>

				<Animated.View style={[styles.padlock, { left }]}>
					<Animated.View style={[styles.padlockHook, { top }]}>
						<PadlockHook />
					</Animated.View>
					<PadlockBody style={styles.padlockBody} />
				</Animated.View>
			</Animated.ScrollView>
		</View>
	);
};

export default SlideToUnlock;

const styles = StyleSheet.create({
	wrapper: {
		height: SLIDE_HEIGHT,
		width: SLIDE_WIDTH,
		borderRadius: 10,
		overflow: "hidden",
		borderColor: ACCENT_COLOR,
		borderWidth: 1
	},
	container: {
		flexDirection: "row",
		width: SLIDE_WIDTH,
		height: SLIDE_HEIGHT,
		borderRadius: 10,
		position: "relative"
	},
	slide: {
		padding: 20,
		justifyContent: "center",
		width: SLIDE_WIDTH,
		height: SLIDE_HEIGHT
	},
	unlockedSlide: {
		backgroundColor: "#fff"
	},
	unlockedText: {
		color: ACCENT_COLOR,
		textAlign: "right"
	},
	lockedSlide: {
		backgroundColor: ACCENT_COLOR
	},
	lockedText: {
		color: "#fff",
		textAlign: "left"
	},
	padlock: {
		position: "absolute",
		top: "7%",
		height: SLIDE_HEIGHT * 0.8,
		width: SLIDE_HEIGHT * 0.8,
		borderRadius: 50
	},
	padlockHook: {
		position: "absolute",
		zIndex: 10,
		left: "38%"
	},
	padlockBody: {
		position: "absolute",
		zIndex: 20,
		top: "50%",
		left: "30%"
	}
});

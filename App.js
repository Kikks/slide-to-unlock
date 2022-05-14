import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SlideToUnlock from "./src/SlideToUnlock";

export default function App() {
	const [locked, setLocked] = useState(true);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text>Slide To Unlock</Text>
				<SlideToUnlock {...{ locked, setLocked }} />
				<StatusBar style='auto' />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	safeArea: {
		flex: 1
	}
});

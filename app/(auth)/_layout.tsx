import {Stack} from "expo-router";
import {SafeAreaView} from "react-native";

const AuthLayout = () => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack>
                    <Stack.Screen
                        name="sign-in"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="sign-up"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </SafeAreaView>

           {/* <StatusBar backgroundColor="#161622" style="light" />*/}
        </>
    );
};

export default AuthLayout;

import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements';
import { auth } from "../firebase";


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login ",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL:
                    imageUrl || 
                    "https://cencup.con/wp-contnet/upload/2019/07/avatar-placeholder.png",

                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.conatiner}>
            <Text h3 style={{ marginBottom: 50 }}>
                Create signal account</Text>
            <View style={styles.inputConatiner}>
                <Input placeholder="Full Name"
                    autofocus type='text'
                    value={name}
                    onChangeText={(text) => setName(text)} />
                <Input placeholder="Email"
                    autofocus type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Input placeholder="password"
                    autofocus type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)} />
                <Input placeholder="Profile picture url (optional)"
                    autofocus type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button containerStyle={styles.button}
                raised onPress={register} title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};


export default RegisterScreen

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,

    },
    inputConatiner: {
        width: 300,
    }
});

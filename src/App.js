import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from "react-native";

const colorGithub= '#010409';
const colorFontGithub = '#C9D1D9';
const colorFontDarkGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/100864157?v=4';
const urlToMyGitHub = "https://github.com/Gabijesumary";

const App = () => {
    const handlePressGotoGithub = async () => {
        console.log('Verificando Link');
       const res = await Linking.canOpenURL(urlToMyGitHub);    
       if (res){
            console.log('Link aprovado');
            console.log('Abrindo link...'); 
          await Linking.openURL(urlToMyGitHub);
       }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle = 'light-content' />
        <View style={style.content}>
            <Image
            accessibilityLabel="Gabriela vestida de preto em um fundo grafitado colorido."
            style={style.avatar}
            source= {{uri: imageProfileGithub }}
            />
            <Text
            accessibilityLabel="Nome Gabriela Jesumary"
            style={[style.defaultText, style.name]}>
                Gabriela Jesumary
            </Text>
            <Text
            accessibilityLabel="nickname gabi jesumary"
            style={[style.defaultText, style.nickname]}>
                gabijesumary
            </Text>
            <Text
            accessibilityLabel="decrição: UX/UI Designer, FrontEnd Dev de Recife - PE"
            style={[style.defaultText, style.description]}>
                UX/UI Designer | FrontEnd Dev 
                Recife - PE
            </Text>
    
            <Pressable onPress={handlePressGotoGithub}>
                <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>
                        Open in Github
                    </Text>
                 </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { //Column - significa que qualquer elemento novo ficará embaixo.
        backgroundColor: '#010409',
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: "center",
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar:{ //para colocar as propriedades da imagem
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20, 
        fontSize: 20,
        fontWeight: "bold",
    },
    nickname: {
        fontSize: 18,
        color: colorFontDarkGithub,   
    },
    description: {
        fontSize: 12,
        fontWeight: 'bold',
        padding: 3,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorFontDarkGithub,
        borderRadius: 10,
        padding: 20, 
    },
    textButton:{
        fontSize: 16,
        fontWeight: 'bold',
        padding: 3,
    },   
}); 
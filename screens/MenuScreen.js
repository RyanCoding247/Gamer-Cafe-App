import { ImageBackground, StyleSheet } from "react-native";
import MenuDisplay from "../features/menu/RenderMenu";
import { baseImageUrl } from "../shared/baseUrl";




const MenuScreen = () => {

    return (
        <ImageBackground source={{ uri: baseImageUrl + 'backgrounds/menu-background.jpg' }} resizeMode="cover" style={styles.image}>
            <MenuDisplay />
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    image: {
        height: '100%'
    }
})

export default MenuScreen;
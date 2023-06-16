import { Button, Text, View } from "react-native";
import { DefaultPage } from "../DefaultPage";
import { styles } from "./style";
import { useState, } from "react";
import { ILanguage } from "../../interfaces/global";
import i18next from "i18next";
import { useTranslation } from "react-i18next";



const SettingsPage = () => {
    const [lang, setLang] = useState<string>('en');
    const { t } = useTranslation();

    const handleOpenLangMenu = (lan: string) => {
        setLang(lan);
        i18next.changeLanguage(lan);
    };
    return (
        <DefaultPage>
            <View style={styles.body}>
                <Text style={styles.title}>{t('select_lang', 'Select Language')}</Text>
                <View style={styles.langsBox}>
                    <Button
                        title="Russian"
                        disabled={lang === 'ru'}
                        onPress={() => handleOpenLangMenu(ILanguage.russian)}
                    />
                    <Button
                        title="English"
                        disabled={lang === 'en'}
                        onPress={() => handleOpenLangMenu(ILanguage.english)}
                    />
                </View>
            </View>
        </DefaultPage>
    );
};


export default SettingsPage;
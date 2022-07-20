import { sizeEnum } from "@/enums/configEnum";
import { Language } from "element-plus/es/locale";
import { themeConfig,ThemeConfig } from "@/config";

interface SettingState extends ThemeConfig{
    elLocale: Language | undefined; //elment语言包
}
export default defineStore({
    id: 'setting',
    state: (): SettingState => (Object.assign({elLocale: undefined,},themeConfig))
});
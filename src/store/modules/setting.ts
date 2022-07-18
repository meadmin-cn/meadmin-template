import { sizeEnum } from "@/enums/configEnum";
import { Language } from "element-plus/es/locale";
import { themeConfig } from "@/config";

interface SettingState {
    elLocale: Language | undefined; //elment语言包
    size: sizeEnum; //全局size
    isDark: boolean;//开启暗黑模式
}
export default defineStore({
    id: 'setting',
    state: (): SettingState => ({
        elLocale: undefined,
        size: themeConfig.size,
        isDark: themeConfig.isDark
    })
});
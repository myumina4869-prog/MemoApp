import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from "expo-font"
import { JSX } from "react"

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'IcoMoon',
    'icomoon.ttf'
)

interface Props{
    name: string
    size: number
    color: string
}

// 返り値にJSXもしくはnullが入ることを定義
const Icon = (props: Props): JSX.Element | null => {
    const {name, size, color} = props
    const [fontLoaded] = useFonts({
        IcoMoon: fontData
    })
    // 「！fontLoaded」はフォントが読み込まれていない場合の処理を示す≒false
    if (!fontLoaded) {
        return null
    }
    return (
        <CustomIcon name={name} size={size} color={color} />
    )
}

export default Icon
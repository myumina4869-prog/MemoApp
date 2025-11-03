import { JSX } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={style.container}>
            {/* ヘッダー */}
            <View>
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>

            {/* メモリストアイテム */}
            <View>

                {/* メモアイテム */}
                <View>
                    {/* 左 */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View>
                    {/* 左 */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View>
                    {/* 左 */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View>
                    {/* 左 */}
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>

            {/* プラスボタン */}
            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Index

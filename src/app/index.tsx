import { JSX } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* ヘッダー */}
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>

            {/* メモリストアイテム */}
            <View>

                {/* メモアイテム */}
                <View style={styles.memoListItem}>
                    {/* 左 */}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    {/* 左 */}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    {/* 左 */}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    {/* 左 */}
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年11月3日 19:59</Text>
                    </View>
                    {/* 右 */}
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>

            {/* プラスボタン */}
            <View style={styles.CircleButton}>
                <Text style={styles.CircleButtonLabel}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center'
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.7)'
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    memoListItem: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    },
    CircleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8
    },
    CircleButtonLabel: {
        color: '#FFFFFF',
        fontSize: 40,
        lineHeight: 40
    }
})

export default Index

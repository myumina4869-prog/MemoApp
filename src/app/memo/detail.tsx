import { JSX } from "react"
import { View, Text, StyleSheet, ScrollView} from "react-native"

import Header from '../../components/Header'
import CircleButton from "../../components/CircleButton"


const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            {/* メモの詳細-タイトル */}
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年11月3日 19:59</Text>
            </View>
            {/* メモの詳細-コンテンツ */}
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>
            {/* 編集ボタン */}
            <CircleButton>+</CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 32,
        color: '#FFFFFF'
    },
    memoDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF'
    },
    memoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodtText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})
export default Detail

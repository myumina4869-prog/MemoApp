import {
    View, TextInput, StyleSheet,
    Alert
} from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react"
import {doc, getDoc, setDoc, Timestamp, collection} from 'firebase/firestore'

import KeyboardAvoidingView from "../../components/KeyboadAvoidingView"
import { JSX } from "react"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import {auth, db} from '../../config'

// /memo/edit.tsx の handlePress 関数全体
const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser == null) { return }

    // ★ 修正: IDが有効かチェックし、有効でなければ新しいドキュメント参照を生成
    const docId = id && id !== 'undefined' ? id : null

    // IDがない場合は collection().doc() を実行して新しい ID を取得
    const ref = docId
        ? doc(db, `users/${auth.currentUser.uid}/memos`, docId)
        : doc(collection(db, `users/${auth.currentUser.uid}/memos`))

    setDoc(ref, {
        bodyText,
        // (キー名は既に直っているとして)
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then(() => {
        router.back() // これで遷移するようになります
    })
    .catch((error) => {
        console.log(error)
        Alert.alert('更新に失敗しました')
    })
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText,setBodyText]=useState('')
    useEffect(()=>{
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
            .then((docRef) => {
                const RemoteBodyText = docRef?.data()?.bodyText
                setBodyText(RemoteBodyText)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])
    console.log('edit',id)
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => { setBodyText(text) }}
                    autoFocus
                />
            </View>
            <CircleButton onPress={()=>{ handlePress(id,bodyText)}}>
                <Icon name='check' size={40} color='#FFFFFF' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    inputContainer: {
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27
    }
})

export default Edit

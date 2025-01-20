import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';


export default function CategoriesLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='[slug]'
                options={({ navigation }) => (
                        {
                            headerShown: true,
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.goBack()}
                                >
                                    <Ionicons name='arrow-back' color='black' />
                                </TouchableOpacity>
                        )
                        }
                    )
                } />
        </Stack>
    )
}

const styles = StyleSheet.create({})
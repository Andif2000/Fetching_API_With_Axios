import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons'

const { width, heigth } = Dimensions.get('window');

const Home = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/quotes')
            setData(res.data.quotes)
            console.log(res.data.quotes);
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View
            style={{
                backgroundColor: '#1e90ff'
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: '#000080'
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity>
                        <Ionicons
                            name='menu'
                            size={35}
                            style={{ color: '#ffffff' }} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: '600',
                            color: '#ffffff',
                            paddingLeft: 10
                        }}>My Quotes</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons
                        name='search'
                        size={35}
                        style={{ color: '#ffffff' }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 100
                    }}>
                    {data &&
                        data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}
                                    style={{
                                        width: width - 50,
                                        minHeight: 150,
                                        justifyContent: 'center',
                                        marginVertical: 10,
                                        backgroundColor: '#87ceeb',
                                        borderRadius: 10,
                                        padding: 10
                                    }}>
                                    <Text
                                        style={{
                                            maxWidth: width - 60,
                                            fontSize: 18,
                                            bottom: 10,
                                            textAlign: 'center',
                                            fontWeight: '600',
                                            letterSpacing: 0.5
                                        }}>{item.quote}</Text>
                                    <Text
                                        style={{
                                            textAlign: 'left',
                                            padding: 10,
                                            fontSize: 14,
                                            top: 20,
                                            color: '#4682B4'
                                        }}>#{item.author}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Home
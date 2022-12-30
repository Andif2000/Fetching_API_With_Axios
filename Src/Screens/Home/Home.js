import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
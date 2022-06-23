import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'


const typedArray = new Uint8Array(16)
crypto.getRandomValues(typedArray)
console.log('hello polyfill!', typedArray)

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

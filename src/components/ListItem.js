import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { SCREEN_WIDTH } from '../utils/dimensions';


export default function ListItem({
  icon,
  title,
  difficulty,
  isComplete,
  reward,
}) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Image
          source={icon}
          style={{
            width: 55,
            height: 55,
            marginRight: 24,
          }}
        />
        <View style={{width: SCREEN_WIDTH - 240}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              textTransform: 'uppercase',
            }}
            numberOfLines={1}
          >{title}</Text>

          <Text style={{
            color: '#333',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
            fontStyle: 'italic'
          }}>{difficulty}</Text>
        </View>
      </View>

      { !isComplete &&
        <Text style={{
          fontFamily: 'Roboto-Light',
          fontSize: 14,
          color: 'maroon',
          marginRight: 20,
        }}>{reward}</Text>
      }

      <TouchableOpacity
        style={{
          width: 100,
          padding: 10,
          borderRadius: 10,
          backgroundColor: isComplete ? '#C6C6C6' : '#0AADA8',
        }}
        disabled={isComplete}
      >
        <Text style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          textAlign: 'center',
          color: '#FFF',
        }}>
          { isComplete ?
            reward
          :
            'Start'
          }
        </Text>
      </TouchableOpacity>
    </View>
  );
}
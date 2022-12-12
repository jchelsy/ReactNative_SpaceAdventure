import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch
}) {

  const [getSelectionMode, setSelectionMode] = React.useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={{
      width: '100%',
      height: 44,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#E4E4E4',
      borderRadius: 10,
      borderColor: '#AD40AF',
    }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#E4E4E4',
          borderRadius: 10,
        }}
      >
        <Text style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          color: getSelectionMode == 1 ? '#FFF' : '#AD40AF',
        }}>{option1}</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#E4E4E4',
          borderRadius: 10,
        }}
      >
        <Text style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          color: getSelectionMode == 2 ? '#FFF' : '#AD40AF',
        }}>{option2}</Text>
      </TouchableOpacity>
    </View>
  );
}
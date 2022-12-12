import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Feather from 'react-native-vector-icons/Feather';
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { sliderData, missionList } from '../model/data';

import * as Utils from '../utils/main';
import { main } from '../styles/main';

import Avatar from '../assets/images/avatar/blue.svg';


const avatar_size = Utils.scale(12);


const HomeScreen = ({ navigation }) => {
  const [missionsTab, setMissionsTab] = React.useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />
  };

  const onSelectSwitch = (value) => {
    setMissionsTab(value);
  };

  return (
    <View style={{
      flex: 1,
      paddingTop: Utils.StatusBarHeight,
    }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView style={{
        padding: 20,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: Utils.scale(26)}}>
            Mission Control
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Avatar
              width={avatar_size}
              height={avatar_size}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 10}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View style={{
          marginVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: Utils.scale(26)}}>
            Missions
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0AADA8'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={Utils.SCREEN_WIDTH - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Missions"
            option2="Completed"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        { missionsTab == 1 &&
          missionList.map(item => (
            !item.isComplete &&
              <ListItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                difficulty={item.difficulty}
                isComplete={item.isComplete}
                reward={item.reward}
              />
          ))
        }

        { missionsTab == 2 &&
          missionList.map(item => (
            item.isComplete &&
              <ListItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                difficulty={item.difficulty}
                isComplete={item.isComplete}
                reward={item.reward}
              />
          ))
        }

        <Text></Text>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
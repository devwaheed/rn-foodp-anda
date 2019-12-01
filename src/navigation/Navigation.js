import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import {

  Home,
  Restaurant,
  Orders,
  Profile,
  Addresses,
  Voucher,
  HelpCenter,
  InviteFriend

} from '../components';

const HomeNavigator = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  }
});
const RestaurantNavigator =  createStackNavigator({
  Restaurant: {
    screen: Restaurant,
    navigationOptions: {
      title: 'Restaurants'
    }
  }
});
const MyOrdersNavigator =  createStackNavigator({
  Orders: {
    screen: Orders,
    navigationOptions: {
      title: 'My Orders'
    }
  }
});
const ProfileNavigator =  createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'My Profile'
    }
  }
});
const AddressesNavigator =  createStackNavigator({
  Addresses: {
    screen: Addresses,
    navigationOptions: {
      title: 'My Addresses'
    }
  }
});
const VoucherNavigator =  createStackNavigator({
  Voucher: {
    screen: Voucher,
    navigationOptions: {
      title: 'My Vouchers'
    }
  }
});
const HelpCenterNavigator =  createStackNavigator({
  HelpCenter: {
    screen: HelpCenter,
    navigationOptions: {
      title: 'Help Center'
    }
  }
});
const InviteFriendNavigator =  createStackNavigator({
  InviteFriend: {
    screen: InviteFriend,
    navigationOptions: {
      title: 'Invite Friends'
    }
  }
});




const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen:  HomeNavigator,
    navigationOptions:{

    }
  },
  Restaurant: {
    screen: RestaurantNavigator,
    navigationOptions:{

    }
  },
  Orders: {
    screen: MyOrdersNavigator,
    navigationOptions:{
      drawerLabel: 'My Orders'
    }
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions:{
      drawerLabel: 'My Profile'
    }
  },
  Addresses: {
    screen: AddressesNavigator,
    navigationOptions:{
      drawerLabel: 'My Addresses'
    }
  },
  Voucher: {
    screen: VoucherNavigator,
    navigationOptions:{
      drawerLabel: 'My Vouchers'
    }
  },
  HelpCenter: {
    screen: HelpCenterNavigator,
    navigationOptions:{
      drawerLabel: 'Help Center'
    }
  },
  InviteFriend: {
    screen: InviteFriendNavigator,
    navigationOptions:{
      drawerLabel: 'Invite Friends'
    }
  },
}, {
  initialRouteName:'Home'
})

const Navigation = createAppContainer(DrawerNavigation);

export {Navigation}
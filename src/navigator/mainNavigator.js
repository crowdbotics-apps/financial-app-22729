import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile175338Navigator from '../features/UserProfile175338/navigator';
import Maps175319Navigator from '../features/Maps175319/navigator';
import Settings175297Navigator from '../features/Settings175297/navigator';
import Settings175282Navigator from '../features/Settings175282/navigator';
import NotificationList175281Navigator from '../features/NotificationList175281/navigator';
import Maps175280Navigator from '../features/Maps175280/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile175338: { screen: UserProfile175338Navigator },
Maps175319: { screen: Maps175319Navigator },
Settings175297: { screen: Settings175297Navigator },
Settings175282: { screen: Settings175282Navigator },
NotificationList175281: { screen: NotificationList175281Navigator },
Maps175280: { screen: Maps175280Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

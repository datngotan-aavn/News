import {FavoriteStackParamList} from './FavoriteNavigator';
import {NewsStackParamList} from './NewsNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends NewsStackParamList,
        FavoriteStackParamList {}
  }
}

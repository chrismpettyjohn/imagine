import {
  IMAGINE_DEFAULT_ACTIVITY_POINTS,
  IMAGINE_DEFAULT_CREDITS,
  IMAGINE_DEFAULT_HOME_ROOM,
  IMAGINE_DEFAULT_LOOK,
  IMAGINE_DEFAULT_MOTTO,
  IMAGINE_DEFAULT_RANK,
  IMAGINE_DEFAULT_VIP_POINTS,
} from '../imagine.constant';
import {UserGender, UserOnlineStatus} from '@imagine-cms/types';

export const DEFAULT_USER_VALUES = {
  gameSSO: '',
  rankID: IMAGINE_DEFAULT_RANK,
  credits: IMAGINE_DEFAULT_CREDITS,
  activityPoints: IMAGINE_DEFAULT_ACTIVITY_POINTS,
  vipPoints: IMAGINE_DEFAULT_VIP_POINTS,
  look: IMAGINE_DEFAULT_LOOK,
  gender: UserGender.Male,
  motto: IMAGINE_DEFAULT_MOTTO,
  onlineStatus: UserOnlineStatus.Offline,
  homeRoomID: IMAGINE_DEFAULT_HOME_ROOM,
};

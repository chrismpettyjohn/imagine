import React from 'react';
import { Switch, Route } from 'wouter';
import { UserGuard } from '@imagine-cms/web';
import { MeScreen } from './me-screen/MeScreen';
import { LoginScreen } from './login-screen/LoginScreen';
import { LogoutScreen } from './logout-screen/LogoutScreen';
import { ImagineScreen } from './imagine-screen/ImagineScreen';
import { ProfileScreen } from './profile-screen/ProfileScreen';
import { LandingScreen } from './landing-screen/LandingScreen';
import { SettingsScreen } from './settings-screen/SettingsScreen';
import { RegisterScreen } from './register-screen/RegisterScreen';
import { RankViewScreen } from './rank-view-screen/RankViewScreen';
import { PlayGameScreen } from './play-game-screen/PlayGameScreen';
import { RoomViewScreen } from './room-view-screen/RoomViewScreen';
import { RankListScreen } from './rank-list-screen/RankListScreen';
import { CommunityScreen } from './community-screen/CommunityScreen';
import { PhotoViewScreen } from './photo-view-screen/PhotoViewScreen';
import { PhotoListScreen } from './photo-list-screen/PhotoListScreen';
import { GroupViewScreen } from './group-view-screen/GroupViewScreen';
import { BadgeListScreen } from './badge-list-screen/BadgeListScreen';
import { BadgeViewScreen } from './badge-view-screen/BadgeViewScreen';
import { GroupListScreen } from './group-list-screen/GroupListScreen';
import { BugReportsScreen } from './bug-reports-screen/BugReportsScreen';
import { ArticleViewScreen } from './article-view-screen/ArticleViewScreen';
import { PageNotFoundScreen } from './page-not-found-screen/PageNotFoundScreen';
import { StorePurchaseScreen } from './store-purchase-screen/StorePurchaseScreen';
import { BugReportViewScreen } from './bug-report-view-screen/BugReportViewScreen';
import { ForgotPasswordScreen } from './forgot-password-screen/ForgotPasswordScreen';
import { ValuesOverviewScreen } from './values-overview-screen/ValuesOverviewScreen';
import { ValuesViewItemScreen } from './values-view-item-screen/ValuesViewItemScreen';
import { LoginWithDeviceScreen } from './login-with-device-screen/LoginWithDeviceScreen';
import { LoginWithGoogleScreen } from './login-with-google-screen/LoginWithGoogleScreen';
import { LoginWithDiscordScreen } from './login-with-discord-screen/LoginWithDiscordScreen';
import { LoginWithFacebookScreen } from './login-with-facebook-screen/LoginWithFacebookScreen';
import { CommunityHighScoresScreen } from './community-high-scores-screen/CommunityHighScoresScreen';
import { StoreConfirmPurchaseScreen } from './store-confirm-purchase-screen/StoreConfirmPurchaseScreen';
import { CommunityOnlinePlayersScreen } from './community-online-players-screen/CommunityOnlinePlayersScreen';
import { ForgotPasswordLinkSentScreen } from './forgot-password-link-sent-screen/ForgotPasswordLinkSentScreen';
import { ForgotPasswordRedeemCodeScreen } from './forgot-password-redeem-code-screen/ForgotPasswordRedeemCodeScreen';
import { CommunityStaffApplicationScreen } from './community-staff-application-screen/CommunityStaffApplicationScreen';
import { RoomListScreen } from './room-list-screen/RoomListScreen';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/',
    view: LandingScreen,
  },
  {
    path: '/about',
    view: ImagineScreen,
  },
  {
    path: '/login',
    view: LoginScreen,
  },
  {
    path: '/login/discord',
    view: LoginWithDiscordScreen,
  },
  {
    path: '/login/facebook',
    view: LoginWithFacebookScreen,
  },
  {
    path: '/login/device',
    view: LoginWithDeviceScreen,
  },
  {
    path: '/login/google',
    view: LoginWithGoogleScreen,
  },
  {
    path: '/register',
    view: RegisterScreen,
  },
  {
    path: '/forgot-password',
    view: ForgotPasswordScreen,
  },
  {
    path: '/forgot-password/confirmation',
    view: ForgotPasswordLinkSentScreen,
  },
  {
    path: '/forgot-password/redeem/:requestCode',
    view: ForgotPasswordRedeemCodeScreen,
  },
  {
    path: '/logout',
    view: LogoutScreen,
  },
  {
    path: '/me',
    view: MeScreen,
  },
  {
    path: '/settings',
    view: () => (
      <UserGuard redirect>
        <SettingsScreen />
      </UserGuard>
    ),
  },
  {
    path: '/profile/:username',
    view: ProfileScreen,
  },
  {
    path: '/photos',
    view: PhotoListScreen,
  },
  {
    path: '/photos/:photoID',
    view: PhotoViewScreen,
  },
  {
    path: '/play',
    view: PlayGameScreen,
  },
  {
    path: '/ranks',
    view: RankListScreen,
  },
  {
    path: '/ranks/:rankID',
    view: RankViewScreen,
  },
  {
    path: '/community/staff/:rankID/apply',
    view: CommunityStaffApplicationScreen,
  },
  {
    path: '/community/online-players',
    view: CommunityOnlinePlayersScreen,
  },
  {
    path: '/community',
    view: CommunityScreen,
  },
  {
    path: '/community/articles/:articleID',
    view: ArticleViewScreen,
  },
  {
    path: '/community/high-scores',
    view: CommunityHighScoresScreen,
  },
  {
    path: '/rooms',
    view: RoomListScreen,
  },
  {
    path: '/rooms/:roomID',
    view: RoomViewScreen,
  },
  {
    path: '/groups',
    view: GroupListScreen,
  },
  {
    path: '/groups/:groupID',
    view: GroupViewScreen,
  },
  {
    path: '/bug-reports',
    view: BugReportsScreen,
  },
  {
    path: '/bug-reports/:bugReportID',
    view: BugReportViewScreen,
  },
  {
    path: '/store/confirm-purchase/:itemID',
    view: StoreConfirmPurchaseScreen,
  },
  {
    path: '/store/:category?',
    view: StorePurchaseScreen,
  },
  {
    path: '/values',
    view: ValuesOverviewScreen
  },
  {
    path: '/values/:furnitureID',
    view: ValuesViewItemScreen,
  },
  {
    path: '/badges',
    view: BadgeListScreen,
  },
  {
    path: '/badges/:badgeCode',
    view: BadgeViewScreen,
  },
]

export function Router() {
  return (
    <Switch>
      <>
        {
          SITE_ROUTES.map(route => (
            <Route key={`route_${route.path}`} path={route.path} component={route.view} />
          ))
        }
      </>
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}

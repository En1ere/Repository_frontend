import type { Component } from 'vue'
import IconArchive from './IconArchive.vue'
import IconArrowLeftRight from './IconArrowLeftRight.vue'
import IconBell from './IconBell.vue'
import IconCalendar from './IconCalendar.vue'
import IconCamera from './IconCamera.vue'
import IconCameraOff from './IconCameraOff.vue'
import IconCheck from './IconCheck.vue'
import IconChevronDown from './IconChevronDown.vue'
import IconChevronRight from './IconChevronRight.vue'
import IconChrome from './IconChrome.vue'
import IconCircleCheck from './IconCircleCheck.vue'
import IconClock from './IconClock.vue'
import IconClockLarge from './IconClockLarge.vue'
import IconClose from './IconClose.vue'
import IconContainer from './IconContainer.vue'
import IconCopy from './IconCopy.vue'
import IconDragHandle from './IconDragHandle.vue'
import IconDownload from './IconDownload.vue'
import IconEmailVerification from './IconEmailVerification.vue'
import IconEllipsisVertical from './IconEllipsisVertical.vue'
import IconEye from './IconEye.vue'
import IconFile from './IconFile.vue'
import IconFileText from './IconFileText.vue'
import IconFolder from './IconFolder.vue'
import IconHash from './IconHash.vue'
import IconHistory from './IconHistory.vue'
import IconHome from './IconHome.vue'
import IconImageErrorDark from './IconImageErrorDark.vue'
import IconImageErrorLight from './IconImageErrorLight.vue'
import IconImages from './IconImages.vue'
import IconInfo from './IconInfo.vue'
import IconKeyboard from './IconKeyboard.vue'
import IconLocateFixed from './IconLocateFixed.vue'
import IconLogOut from './IconLogOut.vue'
import IconMail from './IconMail.vue'
import IconMapPin from './IconMapPin.vue'
import IconMenu from './IconMenu.vue'
import IconMinus from './IconMinus.vue'
import IconMonitor from './IconMonitor.vue'
import IconMoon from './IconMoon.vue'
import IconMoveHorizontal from './IconMoveHorizontal.vue'
import IconPencil from './IconPencil.vue'
import IconPasswordRecovery from './IconPasswordRecovery.vue'
import IconPasswordReset from './IconPasswordReset.vue'
import IconPlus from './IconPlus.vue'
import IconPlusLarge from './IconPlusLarge.vue'
import IconQrCode from './IconQrCode.vue'
import IconRecoveryCodesIllustration from './IconRecoveryCodesIllustration.vue'
import IconRecoveryExpired from './IconRecoveryExpired.vue'
import IconRegistrationBoxes from './IconRegistrationBoxes.vue'
import IconSearch from './IconSearch.vue'
import IconSearchPlus from './IconSearchPlus.vue'
import IconSettings from './IconSettings.vue'
import IconShieldCheck from './IconShieldCheck.vue'
import IconShieldInfo from './IconShieldInfo.vue'
import IconShieldX from './IconShieldX.vue'
import IconSlidersHorizontal from './IconSlidersHorizontal.vue'
import IconSmartphone from './IconSmartphone.vue'
import IconSun from './IconSun.vue'
import IconTotpSetup from './IconTotpSetup.vue'
import IconTotpVerification from './IconTotpVerification.vue'
import IconTrash from './IconTrash.vue'
import IconUser from './IconUser.vue'
import IconUserArrowRight from './IconUserArrowRight.vue'
import IconUserCrown from './IconUserCrown.vue'
import IconUserPlus from './IconUserPlus.vue'
import IconUsers from './IconUsers.vue'
import IconWrench from './IconWrench.vue'
import IconZap from './IconZap.vue'

export const iconRegistry = {
  archive: IconArchive,
  arrowLeftRight: IconArrowLeftRight,
  bell: IconBell,
  calendar: IconCalendar,
  camera: IconCamera,
  cameraOff: IconCameraOff,
  check: IconCheck,
  chevronDown: IconChevronDown,
  chevronRight: IconChevronRight,
  chrome: IconChrome,
  circleCheck: IconCircleCheck,
  clock: IconClock,
  clockLarge: IconClockLarge,
  close: IconClose,
  container: IconContainer,
  copy: IconCopy,
  dragHandle: IconDragHandle,
  download: IconDownload,
  emailVerification: IconEmailVerification,
  ellipsisVertical: IconEllipsisVertical,
  eye: IconEye,
  file: IconFile,
  fileText: IconFileText,
  folder: IconFolder,
  hash: IconHash,
  history: IconHistory,
  home: IconHome,
  imageErrorDark: IconImageErrorDark,
  imageErrorLight: IconImageErrorLight,
  images: IconImages,
  info: IconInfo,
  passwordRecovery: IconPasswordRecovery,
  passwordReset: IconPasswordReset,
  keyboard: IconKeyboard,
  locateFixed: IconLocateFixed,
  logOut: IconLogOut,
  mail: IconMail,
  mapPin: IconMapPin,
  menu: IconMenu,
  minus: IconMinus,
  monitor: IconMonitor,
  moon: IconMoon,
  moveHorizontal: IconMoveHorizontal,
  pencil: IconPencil,
  plus: IconPlus,
  plusLarge: IconPlusLarge,
  qrCode: IconQrCode,
  recoveryCodesIllustration: IconRecoveryCodesIllustration,
  recoveryExpired: IconRecoveryExpired,
  registrationBoxes: IconRegistrationBoxes,
  search: IconSearch,
  searchPlus: IconSearchPlus,
  settings: IconSettings,
  shieldCheck: IconShieldCheck,
  shieldInfo: IconShieldInfo,
  shieldX: IconShieldX,
  slidersHorizontal: IconSlidersHorizontal,
  smartphone: IconSmartphone,
  sun: IconSun,
  totpSetup: IconTotpSetup,
  totpVerification: IconTotpVerification,
  trash: IconTrash,
  user: IconUser,
  userArrowRight: IconUserArrowRight,
  userCrown: IconUserCrown,
  userPlus: IconUserPlus,
  users: IconUsers,
  wrench: IconWrench,
  zap: IconZap,
} as const satisfies Record<string, Component>

export type IconName = keyof typeof iconRegistry

import { Platform } from "../enums/platform.enum";

export const getPlatForm = (): Platform => {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return Platform.IOS;
  if (/android/.test(ua)) return Platform.ANDROID;
  return Platform.WEB;
};

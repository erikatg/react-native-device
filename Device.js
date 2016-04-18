var { NativeModules, Dimensions, Platform } = require('react-native');
var DeviceUtil = NativeModules.DeviceUtil;

class Device {
  constructor() {
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.model = DeviceUtil && DeviceUtil.model;
    this.deviceName = DeviceUtil ? DeviceUtil.name : "not implemented for android";
    this.systemName = DeviceUtil ? DeviceUtil.systemName : "not implemented for android";
    this.systemVersion = DeviceUtil ? DeviceUtil.systemVersion : "not implemented for android";
    this.deviceVersion = DeviceUtil ? DeviceUtil.deviceVersion : "not implemented for android";
  }

  isIpad() {
    return this.model.indexOf('iPad') >= 0;
  }

  isIphone() {
    return this.model.indexOf('iPhone') >= 0;
  }
}

module.exports = new Device();

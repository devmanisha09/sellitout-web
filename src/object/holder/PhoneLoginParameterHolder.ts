export default class PhoneLoginParameterHolder {

    phoneId: string = '';
    userName: string = '';
    userPhone: string = '';
    deviceToken: string = '';


    PhoneLoginParameterHolder() {
        this.phoneId = '';
        this.userName = '';
        this.userPhone = '';
        this.deviceToken = '';

    }

    toMap(): {} {
        const map = {};
        map['phone_id'] = this.phoneId;
        map['user_name'] = this.userName;
        map['user_phone'] = this.userPhone;
        map['device_token'] = this.deviceToken;


        return map;
    }
}
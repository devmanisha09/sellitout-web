export default class UserLoginParameterHolder {

    userEmail: string = '';
    userPassword: string = '';
    deviceToken: string = '';

    UserLoginParameterHolder() {
        this.userEmail = '';
        this.userPassword = '';
        this.deviceToken = '';
    }

    toMap() : {} {
        const map = {};
        map['user_email'] = this.userEmail;
        map['user_password'] = this.userPassword;
        map['device_token'] = this.deviceToken;

        return map;
    }
}
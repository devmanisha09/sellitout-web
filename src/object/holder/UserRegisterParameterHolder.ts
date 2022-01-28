export default class UserRegistesrParameterHolder {

    userId: string = '';
    userName: string = '';
    userEmail: string = '';
    userPassword: string = '';
    userPhone: string = '';
    deviceToken: string = '';


    UserRegistesrParameterHolder() {
        this.userId = '';
        this.userName = '';
        this.userEmail = '';
        this.userPassword = '';
        this.userPhone = '';
        this.deviceToken = '';


    }

    toMap(): {} {
        const map = {};
        map['user_id'] = this.userId;
        map['user_name'] = this.userName;
        map['user_email'] = this.userEmail;
        map['user_password'] = this.userPassword;
        map['user_phone'] = this.userPhone;
        map['device_token'] = this.deviceToken;



        return map;
    }
}
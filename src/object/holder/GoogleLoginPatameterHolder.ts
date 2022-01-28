export default class GoogleLoginParameterHolder {

    googleId: string = '';
    userName: string = '';
    userEmail: string = '';
    profilePhotoUrl: string = '';
    deviceToken: string = '';

    GoogleLoginParameterHolder() {
        this.googleId = '';
        this.userName = '';
        this.userEmail = '';
        this.profilePhotoUrl = '';
        this.deviceToken = '';
    }

    toMap(): {} {
        const map = {};
        map['google_id'] = this.googleId;
        map['user_name'] = this.userName;
        map['user_email'] = this.userEmail;
        map['profile_photo_url'] = this.profilePhotoUrl;
        map['device_token'] = this.deviceToken;

        return map;
    }
}
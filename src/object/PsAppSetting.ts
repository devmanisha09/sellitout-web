import { PsObject } from "./core/PsObject";

export default class PsAppSetting extends PsObject<PsAppSetting>{

    latitude : string = '';
    longitude : string = '';
    isSubLocation : string = '';
   
    init(
        latitude : string,
        longitude : string,
        isSubLocation : string,

       

    ) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.isSubLocation = isSubLocation;

        return this;

    }

    getPrimaryKey(): string {
        return this.latitude;
    }

    toMap(object: PsAppSetting): any {
        const map = {};
        map['lat'] = object.latitude;
        map['lng'] = object.longitude;
        map['is_sub_location'] = object.isSubLocation;
        
        return map;
    }

    toMapList(objectList: PsAppSetting[]) : any[] {
        const mapList : any[] = [];
        for(let i = 0; i < objectList.length; i++) {
            if(objectList[i] != null) {
                mapList.push(this.toMap(objectList[i]));
            }
        }

        return mapList;
    }

    fromMap(obj: any) {
        return new PsAppSetting().init(


            obj.lat,
            obj.lng,
            obj.is_sub_location,

       );
    }   
    fromMapList(objList : any[] ) : PsAppSetting[] {
        const psAppSettingList : PsAppSetting[] = [];
        for(const obj in objList) {
            if(obj != null) {
                psAppSettingList.push(this.fromMap(obj));
            }
        }

        return psAppSettingList;
    }
    

}
import PsConst from "../constant/ps_constants";

export default class ProductParameterHolder {

    /* URL Params & Query */
    urlParamsAndQuery = {
        'params' : {},
        'query' : {}
    };

    searchTerm: string = '';
    catId: string = '';
    catName: string= '';
    subCatId: string = '';
    subCatName: string = '';
    itemLocationTownship: string = '';
    itemLocationTownshipName: string = '';
    dealOptionId: string = '';
    dealOptionName: string = '';
    itemTypeId: string = '';
    itemTypeName: string = '';
    itemPriceTypeId: string = '';
    itemPriceTypeName: string = '';
    itemCurrencyId: string = '';
    itemLocationId: string = '';
    itemLocationName: string = '';
    conditionOfItemId: string = '';
    itemConditionName: string = '';
    maxPrice: string = '';
    minPrice: string = '';
    brand: string = '';
    public lat: string = '';
    public lng: string = '';
    engineStatusId: string = '';
    engineStatusName: string = '';
    minYear: string = '';
    maxYear: string = '';
    public mile: string = '';
    orderBy: string = '';
    orderType: string = '';
    addedUserId: string = '';
    isPaid: string = '';
    status: string = '';
    isSoldOut: string = '';
    sortingId = '0';
    sortingName = "DEFAULT ORDER";

    sortingList = [

        {
            id:"0",
            orderBy:PsConst.FILTERING__ADDED_DATE,
            orderType:PsConst.FILTERING__DESC,
            name:"Latest"
        },
        {
            id:"1",
            orderBy:PsConst.FILTERING_TRENDING,
            orderType:PsConst.FILTERING__DESC,
            name:"Popular"
        }
    ];

    constructor() {

        this.searchTerm = '';
        this.catId = '';
        this.catName = '';
        this.subCatId = '';
        this.subCatName = '';
        this.itemTypeId = '';
        this.itemTypeName = '';
        this.itemPriceTypeId = '';
        this.itemPriceTypeName = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.itemLocationName = '';
        this.conditionOfItemId = '';
        this.itemConditionName = '';
        this.dealOptionName = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.engineStatusId = '';
        this.minYear = '';
        this.maxYear = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.addedUserId = '';
        this.isPaid = '';
        this.status = '1';
        this.isSoldOut = '';

    }

    getUrlParamsAndQuery() {
        const query = {};
        const param = {};

        if(this.searchTerm != '') {
            query['searchTerm'] = this.searchTerm;
        }

        if(this.catId != '') {
            query['catId'] = this.catId;
            param['catName'] = this.catName;
        }

        if(this.subCatId != '') {
            query['subCatId'] = this.subCatId;
            query['subCatName'] = this.subCatName;
        }


        if(this.minPrice != '') {
            query['minPrice'] = this.minPrice;
        }

        if(this.maxPrice != '') {
            query['maxPrice'] = this.maxPrice;
        }

        if(this.searchTerm != '') {
            query['searchTerm'] = this.searchTerm;
        }

        if(this.catId != '') {
            query['catId'] = this.catId;
        }

        if(this.catName != '') {
            query['catName'] = this.catName;
        }

        if(this.subCatId != '') {
            query['subCatId'] = this.subCatId;
        }

        if(this.subCatName != '') {
            query['subCatName'] = this.subCatName;
        }

        if(this.itemTypeId != '') {
            query['itemTypeId'] = this.itemTypeId;
        }

        if(this.itemTypeName != '') {
            query['itemTypeName'] = this.itemTypeName;
        }

        if(this.itemPriceTypeId != '') {
            query['itemPriceTypeId'] = this.itemPriceTypeId;
        }

        if(this.itemPriceTypeName != '') {
            query['itemPriceTypeName'] = this.itemPriceTypeName;
        }

        if(this.dealOptionId != '') {
            query['dealOptionId'] = this.dealOptionId;
        }

        if(this.dealOptionName != '') {
            query['dealOptionName'] = this.dealOptionName;
        }


        if(this.itemCurrencyId != '') {
            query['itemCurrencyId'] = this.itemCurrencyId;
        }

        if(this.itemLocationId != '') {
            query['itemLocationId'] = this.itemLocationId;
        }

        if(this.itemLocationName != '') {
            query['itemLocationName'] = this.itemLocationName;
        }

        if(this.conditionOfItemId != '') {
            query['conditionOfItemId'] = this.conditionOfItemId;
        }

        if(this.itemConditionName != '') {
            query['itemConditionName'] = this.itemConditionName;
        }

        if(this.maxPrice != '') {
            query['maxPrice'] = this.maxPrice;
        }

        if(this.minPrice != '') {
            query['minPrice'] = this.minPrice;
        }

        if(this.brand != '') {
            query['brand'] = this.brand;
        }

        if(this.lat != '') {
            query['lat'] = this.lat;
        }

        if(this.lng != '') {
            query['lng'] = this.lng;
        }

        if(this.engineStatusId != '') {
            query['engineStatusId'] = this.engineStatusId;
        }

        if(this.engineStatusName != '') {
            query['engineStatusName'] = this.engineStatusName;
        }

        if(this.minYear != '') {
            query['minYear'] = this.minYear;
        }

        if(this.maxYear != '') {
            query['maxYear'] = this.maxYear;
        }

        if(this.mile != '') {
            query['mile'] = this.mile;
        }

        if(this.sortingId != '') {
            query['sortingId'] = this.sortingId;
        }

        if(this.sortingName != '') {
            query['sortingName'] = this.sortingName;
        }

        if(this.orderBy != '') {
            query['orderBy'] = this.orderBy;

            if(this.orderBy == 'touch_count') {
                query['sortingId'] = '2';
                query['sortingName'] = 'POPULAR';
            }

            //http://localhost:3000/item-list?sortingId=2&sortingName=POPULAR&orderBy=touch_count&orderType=desc&status=1
            //http://localhost:3000/item-list?sortingId=2&sortingName=POPULAR&orderBy=touch_count&orderType=asc
            //http://localhost:3000/item-list?sortingId=2&sortingName=POPULAR&orderBy=touch_count&orderType=desc&status=1
            //http://localhost:3000/item-list?sortingId=2&sortingName=POPULAR&orderBy=touch_count&orderType=asc
            // id:"2",
            // orderBy: PsConst.FILTERING_TRENDING,
            // orderType:PsConst.FILTERING__ASC, name:"POPULAR"

        }

        if(this.orderType != '') {
            query['orderType'] = this.orderType;
        }

        if(this.addedUserId != '') {
            query['addedUserId'] = this.addedUserId;
        }

        if(this.isPaid != '') {
            query['isPaid'] = this.isPaid;
        }

        if(this.status != '') {
            query['status'] = this.status;
        }

        if(this.isSoldOut != '') {
            query['is_sold_out'] = this.isSoldOut;
        }

        // this.urlParamsAndQuery['params'] = param;
        this.urlParamsAndQuery.params = param;
        this.urlParamsAndQuery.query = query;
        // this.urlParamsAndQuery['query'] = query;

        return this.urlParamsAndQuery;
    }

    getPopularParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.itemLocationTownship = '';
        this.itemLocationTownshipName = '';
        this.dealOptionId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.orderBy = 'touch_count'
        this.orderType = PsConst.FILTERING__DESC;
        this.addedUserId = '';
        this.isPaid = '';
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }
    getFeaturedParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.itemLocationTownship = '';
        this.itemLocationTownshipName = '';
        this.dealOptionId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = PsConst.PAID_ITEM_FIRST;
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }
    getLatestParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.itemLocationTownship = '';
        this.itemLocationTownshipName = '';
        this.dealOptionId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }
    getRecentParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.itemLocationTownship = '';
        this.itemLocationTownshipName = '';
        this.dealOptionId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = PsConst.PAID_ITEM_FIRST;
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }


    parseParamsAndQuery(params, query) {

        this.searchTerm = query.searchTerm?.toString() ?? '';
        this.catId = query.catId?.toString() ?? '';
        this.catName = query.catName?.toString() ?? '';
        this.dealOptionName = query.dealOptionName?.toString() ?? '';
        this.subCatId = query.subCatId?.toString() ?? '';
        this.subCatName = query.subCatName?.toString() ?? '';
        this.itemTypeId = query.itemTypeId?.toString() ?? '';
        this.itemTypeName = query.itemTypeName?.toString() ?? '';
        this.itemPriceTypeId = query.itemPriceTypeId?.toString() ?? '';
        this.itemPriceTypeName = query.itemPriceTypeName?.toString() ?? '';
        this.itemCurrencyId = query.itemCurrencyId?.toString() ?? '';
        this.itemLocationId = query.itemLocationId?.toString() ?? '';
        this.itemLocationName = query.itemLocationName?.toString() ?? '';
        this.conditionOfItemId = query.conditionOfItemId?.toString() ?? '';
        this.itemConditionName = query.itemConditionName?.toString() ?? '';
        this.maxPrice = query.maxPrice?.toString() ?? '';
        this.minPrice = query.minPrice?.toString() ?? '';
        this.brand = query.brand?.toString() ?? '';
        this.lat = query.lat?.toString() ?? '';
        this.lng = query.lng?.toString() ?? '';
        this.engineStatusId = query.engineStatusId?.toString() ?? '';
        this.engineStatusName = query.engineStatusName?.toString() ?? '';
        this.minYear = query.minYear?.toString() ?? '';
        this.maxYear = query.maxYear?.toString() ?? '';
        this.mile = query.mile?.toString() ?? '';
        this.orderBy = query.orderBy?.toString() ?? '';
        this.orderType = query.orderType?.toString() ?? '';
        this.addedUserId = query.addedUserId?.toString() ?? '';
        this.isPaid = query.isPaid?.toString() ?? '';
        this.status = query.status?.toString() ?? '';
        this.isSoldOut = query.isSoldOut?.toString() ?? '';
        this.sortingId = query.sortingId?.toString() ?? '';
        this.sortingName = query.sortingName?.toString() ?? '';

    }

    getPaidItemParameterHolder() : ProductParameterHolder {
        this.searchTerm = '';
        this.catId = '';
        this.catName = '';
        this.subCatName = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.engineStatusId = '';
        this.minYear = '';
        this.maxYear = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = PsConst.ONLY_PAID_ITEM;
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }

    getPendingItemParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '0';
        this.isSoldOut = '';

        return this;
    }

    getRejectedItemParameterHolder() : ProductParameterHolder {
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.engineStatusId = '';
        this.minYear = '';
        this.maxYear = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '3';
        this.isSoldOut = '';

        return this;
    }

    getDisabledProductParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.engineStatusId = '';
        this.minYear = '';
        this.maxYear = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '2';
        this.isSoldOut = '';

        return this;
    }

    getHideItemParameterHolder() : ProductParameterHolder {
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.engineStatusId = '';
        this.minYear = '';
        this.maxYear = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = PsConst.HIDE_ITEM;
        this.isSoldOut = '';

        return this;
    }

    getItemByManufacturerIdParameterHolder() : ProductParameterHolder {
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.engineStatusId = '';
        this.minYear = '';
        this.maxYear = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.minYear = '';
        this.maxYear = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }
    resetParameterHolder() : ProductParameterHolder{
        this.searchTerm = '';
        this.catId = '';
        this.subCatId = '';
        this.itemTypeId = '';
        this.itemPriceTypeId = '';
        this.itemCurrencyId = '';
        this.itemLocationId = '';
        this.itemLocationTownship = '';
        this.itemLocationTownshipName = '';
        this.dealOptionId = '';
        this.conditionOfItemId = '';
        this.maxPrice = '';
        this.minPrice = '';
        this.brand = '';
        this.lat = '';
        this.lng = '';
        this.mile = '';
        this.addedUserId = '';
        this.isPaid = '';
        this.orderBy = PsConst.FILTERING__ADDED_DATE;
        this.orderType = PsConst.FILTERING__DESC;
        this.status = '1';
        this.isSoldOut = '';

        return this;
    }


    toMap() : {} {
        const map = {};
        map['searchterm'] = this.searchTerm;
        map['cat_id'] = this.catId;
        map['sub_cat_id'] = this.subCatId;
        map['item_type_id'] = this.itemTypeId;
        map['item_price_type_id'] = this.itemPriceTypeId;
        map['item_currency_id'] = this.itemCurrencyId;
        map['item_location_id'] = this.itemLocationId;
        map['item_location_township_id'] = this.itemLocationTownship;
        map['deal_option_id'] = this.dealOptionId;
        map['condition_of_item_id'] = this.conditionOfItemId;
        map['max_price'] = this.maxPrice;
        map['min_price'] = this.minPrice;
        map['engine_status'] = this.engineStatusId;
        map['min_year'] = this.minYear;
        map['max_year'] = this.maxYear;
        map['lat'] = this.lat;
        map['lng'] = this.lng;
        map['miles'] = this.mile;
        map['brand'] = this.brand;
        map['added_user_id'] = this.addedUserId;
        map['is_paid'] = this.isPaid;
        map['order_by'] = this.orderBy;
        map['order_type'] = this.orderType;
        map['status'] = this.status;
        map['is_sold_out'] = this.isSoldOut;

        return map;
    }

}

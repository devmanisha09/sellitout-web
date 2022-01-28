type CategoryListParameterHolderInterface = {
    keyword: string;
    oderBy: string;
    oderType: string;
}

export default class CategoryListParameterHolder implements CategoryListParameterHolderInterface{

    keyword: string = '';
    oderBy: string = '';
    oderType: string = '';
    

    CategoryListParameterHolder() {
        this.keyword = '';
        this.oderBy = 'cat_name';
        this.oderType = 'asc';

        return this;
    }

    toMap(): {} {
        const map = {};
        map['keyword'] = this.keyword;
        map['oder_by'] = this.oderBy;
        map['oder_type'] = this.oderType;

        return map;
    }
}
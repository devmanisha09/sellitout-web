export default class PsConfig {

    static versionNo : String = '1.0';

    ///
    /// API Key to connection with Main Backend
    /// This key must equal with key from backend
    ///
    static apiKey: String = "teampsisthebest";

    ///
    /// Live Mode
    /// ------------
    /// If you want to upload to server, please enable below and comment Development below
    ///
    // static fixedDomain: String = "https://www.panacea-soft.com/flutter-buysell-demo";
    // static domain: String = "https://www.panacea-soft.com/flutter-buysell-demo";

    ///
    /// Development Mode
    /// -----------------
    /// Before upload to server, please comment this 2 lines.
    ///
    //static fixedDomain: String = "https://www.panacea-soft.com/flutter-buysell-demo";
    // static fixedDomain: String = "http://localhost/sellitout_admin/";
    // static domain: String = "http://localhost:3000";

    static fixedDomain: String = "http://localhost/sellitout_admin/";
    static domain: String = "http://localhost:3000";

    // static fixedDomain: String = "https://sellitout.cryptonixlabs.in";
    // static domain: String = "https://sellitout.cryptonixlabs.in";

    ///
    /// Firebase Config
    ///
    static firebaseConfig = {
        // apiKey: "000000000000000000000000000000000000000",
        // authDomain: "flutter-buy-and-sell.firebaseapp.com",
        // databaseURL: "https://flutter-buy-and-sell.firebaseio.com",
        // projectId: "flutter-buy-and-sell",
        // storageBucket: "flutter-buy-and-sell.appspot.com",
        // messagingSenderId: "000000000000",
        // appId: "1:000000000000:web:0000000000000000000000",
        // measurementId: "G-0000000000"


        apiKey: "AIzaSyB4dgJ6Ek6b-Lgbje_q3HCo46e8l3ubkw0",
        authDomain: "sellitoutweb.firebaseapp.com",
        databaseURL: "https://sellitoutweb-default-rtdb.firebaseio.com/",
        projectId: "sellitoutweb",
        storageBucket: "sellitoutweb.appspot.com",
        messagingSenderId: "845382598909",
        appId: "1:845382598909:web:c175bbcfb46115e1a6be94",
        measurementId: "G-0000000000"
    };


    ///
    /// Base URL * Don't update it *
    ///
    static base: String = PsConfig.domain;
    static baseUrl: String = PsConfig.domain + '/index.php';
    static fixedPath : String = PsConfig.fixedDomain;


    /// Google Map Key
    /// ----------------
    static mapKey: String = "AI0000000000000000000000000000000000000";


    ///
    /// Price Format
    /// -----------------
    /// Need to change according to your format that you need
    /// E.g.
    /// "#,##0.00"   => 2,555.00
    /// "##0.00"    => 2555.00
    /// "#.00"       => 2555.00
    /// "#,###."      => 2,555
    /// "#,##0.0"    => 2555.0
    /// "###"        => 255
    static  priceFormat : string = '#,##0.0';


    ///
    /// Profile Setting for Item Grid
    /// You can hide/show user profile at item grid
    /// true == show user profile
    /// false == hide user profile
    ///
    static showUserProfile : string = 'show';


    ///
    /// Map Filter Setting
    ///
    static  noFilterWithLocationOnMap : Boolean= false;

    ///
    /// Promotion Date Pre-define Set
    ///
    /// Type 1 == Fixed Date, Type 2 == Custom Date with user input
    static promotionDays = [
        {
            id:"1", days:7, type:1
        },
        {
            id:"2", days:14, type:1
        },
        {
            id:"3", days:30, type:1
        },
        {
            id:"4", days:60, type:1
        },
        {
            id:"5", days:1, type:2
        }
    ];

    ///
    /// Default Mile for Nearest Search
    ///
    static mile = "8";




    ///
    /// For default language change, please check
    /// LanguageFragment for language code and country code
    /// ..............................................................
    /// Language             | Language Code     | Country Code
    /// ..............................................................
    /// "English"            | "en"              | "US"
    /// "Arabic"             | "ar"              | "DZ"
    /// "India (Hindi)"      | "hi"              | "IN"
    /// "German"             | "de"              | "DE"
    /// "Spainish"           | "es"              | "ES"
    /// "French"             | "fr"              | "FR"
    /// "Indonesian"         | "id"              | "ID"
    /// "Italian"            | "it"              | "IT"
    /// "Japanese"           | "ja"              | "JP"
    /// "Korean"             | "ko"              | "KR"
    /// "Malay"              | "ms"              | "MY"
    /// "Portuguese"         | "pt"              | "PT"
    /// "Russian"            | "ru"              | "RU"
    /// "Thai"               | "th"              | "TH"
    /// "Turkish"            | "tr"              | "TR"
    /// "Chinese"            | "zh"              | "CN"
    /// ..............................................................
    ///
    static defaultLanguage = {
        languageCode : 'en',
        countryCode : 'US',
        name : 'English US',
        flag :  require('@/assets/flags/usflag.png')
    };
    static supportedLanguages = [
        { languageCode : 'en', countryCode : 'US', name : 'English US', flag: require('@/assets/flags/usflag.png')},
        { languageCode : 'ar', countryCode : 'DZ', name : 'Arabic', flag: require('@/assets/flags/dzFlag.png')},
        { languageCode : 'hi', countryCode : 'IN', name : 'Hindi', flag: require('@/assets/flags/inFlag.jpeg')},
        { languageCode : 'de', countryCode : 'DE', name : 'German', flag: require('@/assets/flags/germanFlag.jpg')},
        { languageCode : 'es', countryCode : 'ES', name : 'Spainish', flag: require('@/assets/flags/spainFlag.jpg')},
        { languageCode : 'fr', countryCode : 'FR', name : 'French', flag: require('@/assets/flags/frenchFlag.jpg')},
        { languageCode : 'id', countryCode : 'ID', name : 'Indonesian', flag: require('@/assets/flags/indonesiaFlag.jpg')},
        { languageCode : 'it', countryCode : 'IT', name : 'Italian', flag: require('@/assets/flags/italyFlag.jpg')},
        { languageCode : 'ja', countryCode : 'JP', name : 'Japanese', flag: require('@/assets/flags/japanFlag.jpg')},
        { languageCode : 'ko', countryCode : 'KR', name : 'Korean', flag: require('@/assets/flags/southkoreaFlag.jpg')},
        { languageCode : 'ms', countryCode : 'MY', name : 'Malay', flag: require('@/assets/flags/malaysiaFlag.jpg')},
        { languageCode : 'pt', countryCode : 'PT', name : 'Potuguese', flag: require('@/assets/flags/potugueseFlag.jpg')},
        { languageCode : 'ru', countryCode : 'RU', name : 'Russian', flag: require('@/assets/flags/russiaFlag.jpg')},
        { languageCode : 'th', countryCode : 'TH', name : 'Thai', flag: require('@/assets/flags/thaiFlag.jpg')},
        { languageCode : 'tr', countryCode : 'TR', name : 'Turkish', flag: require('@/assets/flags/turkishFlag.jpg')},
        { languageCode : 'zh', countryCode : 'CN', name : 'Chinese', flag: require('@/assets/flags/chinaFlag.jpg')}
    ];


    ///
    /// Debug Mode
    ///
    static isDebugMode : Boolean = false;
}

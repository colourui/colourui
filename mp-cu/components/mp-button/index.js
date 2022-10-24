Component({
    data: {
        isLoading: false,
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        theme: {
            type: String,
            value: 'light'
        },
        color: {
            type: String,
            value: 'green'
        },
        loading: {
            type: Boolean,
            value: false
        },
        loadingIcon: {
            type: String,
            value: 'mp-icon-loader-line'
        },
        isRadius: {
            type: Boolean,
            value: false
        },
        round: {
            type: Boolean,
            value: false
        },
        //尺寸大小 "sm", "df", "lg", "xl"
        size: {
            type: String,
            value: "df"
        },
        icon: {
            type: Boolean,
            value: false
        },
        //阴影大小 "sm", "df", "lg"
        shadow: {
            type: String,
            value: ""
        },
        //背景色阴影
        bgShadow: {
            type: String,
            value: ""
        },
        block: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        formType: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: ""
        },
        hoverStopPropagation: {
            type: Boolean,
            value: false
        },
        lang: {
            type: String,
            value: "zh_CN"
        },
        sessionFrom: {
            type: String,
            value: ""
        },
        sendMessageTitle: {
            type: String,
            value: ""
        },
        sendMessagePath: {
            type: String,
            value: ""
        },
        sendMessageImg: {
            type: String,
            value: ""
        },
        appParameter: {
            type: String,
            value: ""
        },
        showMessageCard: {
            type: Boolean,
            value: false
        },
    },
    lifetimes: {
        attached() {

        },
        detached() {

        },
        ready() {

        },
    },
    observers: {

    },
    methods: {
        getuserinfo(event) {
            this.triggerEvent('getuserinfo', event);
        },
        contact(event) {
            this.triggerEvent('contact', event);
        },
        getphonenumber(event) {
            this.triggerEvent('getphonenumber', event);
        },
        _error(event) {
            this.triggerEvent('error', event);
        },
        opensetting(event) {
            this.triggerEvent('opensetting', event);
        },
        launchapp(event) {
            this.triggerEvent('launchapp', event);
        },
        chooseavatar(event) {
            this.triggerEvent('chooseavatar', event);
        },
    },
})
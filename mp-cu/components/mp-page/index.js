Component({
    data: {
        isLoading: false,
        isNavbarSlots: false,
        isLoadingSlots: false,
        tabBarIndex: 0,
        isFooter: false,
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        bg: {
            type: String,
            value: 'mp-BG-1'
        },
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
        bodyUI: {
            type: String,
            value: ''
        },
        loading: {
            type: Boolean,
            value: false
        },
        loadingIcon: {
            type: String,
            value: 'mp-icon-loader-line'
        },
        loadingText: {
            type: String,
            value: '加载中...'
        },
        isLoadingSlot: {
            type: Boolean,
            value: false
        },
        navbar: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        },
        navBg: {
            type: String,
            value: 'bg-blur'
        },
        isNavbarSlot: {
            type: Boolean,
            value: false
        },
        styles: {
            type: String,
            value: ''
        },
        tabbar: {
            type: Boolean,
            value: false
        },
        footer: {
            type: Boolean,
            value: ''
        },
    },
    lifetimes: {
        attached() {
            const {loading, isNavbarSlot, isLoadingSlot} = this.data;
            //是否加载
            this.setData({
                isLoading: loading,
                isNavbarSlots: isNavbarSlot,
                isLoadingSlots: isLoadingSlot
            });
        },
        detached() {

        },
        ready() {
            //this.setTabBar();
            //this.setFooterShow();
        },
    },
    observers: {
        /*'tabbar'() {
            this.setTabBar();
        },*/
        'isNavbarSlot'(val) {
            this.setData({isNavbarSlots: val})
        },
        'isLoadingSlot'(val) {
            this.setData({isLoadingSlots: val})
        },
        'loading'(val) {
            this.setData({isLoading: val})
        },
        /*'footer'() {
            this.setFooterShow();
        },*/
    },
    methods: {
        /*setTabBar() {
            let tabBar = this.data.tabbar;
            if (tabBar) {
                wx.hideTabBar();
                this._onPage();
            }
        },
        setFooterShow() {
            let footer = this.data.footer;
            let cuFooter = this.data.$cuConfig.footer;
            let isFooter = cuFooter;
            if (footer === '') {
                isFooter = cuFooter;
            } else {
                isFooter = footer;
            }
            this.setData({isFooter: isFooter})
        },
        _onPage() {
            let page = getCurrentPages();
            if (page.length > 0) {
                let _this = this, tabBar = this.data.$cuConfig.tabBar;
                let url = page[page.length - 1].route
                tabBar.map((item,index)=>{
                    if(item.url === '/' + url) {
                        _this.setData({tabBarIndex: index})
                    }
                })
            } else {
                this.setData({tabBarIndex: 0})
            }
        },*/
        //设置是否加载
        setLoading(val) {
            this.setData({
                isLoading: val
            })
        },
        /*modalSuccess() {
           return this.data.$cuStore.$Modal
        },*/
    },
})
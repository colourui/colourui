Component({
    data: {
        icons: '',
        textSize: '',
        scaleSize: '',
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        name: {
            //内置图标名
            type: String,
            optionalTypes: [Number],
            value: ''
        },
        fill: {
            //填充
            type: Boolean,
            value: false
        },
        icon: {
            //自定义其它图标
            type: String,
            optionalTypes: [Number],
            value: ''
        },
        size: {
            //字体尺寸 xs: 20, sm: 24, df: 28, lg: 32,xl: 36, xxl: 44, sl: 80, xsl: 120
            type: String,
            optionalTypes: [Number],
            value: 'df'
        },
        sizes: {
            //缩放尺寸 xs: 0.5,sm: 0.75,df: 1,lg: 1.25,xl: 1.5,xxl: 2,sl: 6,xsl: 10
            type: String,
            value: ''
        },
    },
    lifetimes: {
        attached() {
            const {size, sizes} = this.data;
            this.setData({
                textSize: size,
                scaleSize: sizes
            });
            this.setIcons()
        },
    },
    observers: {
        'name'(val) {
            this.setIcons()
        },
        'fill'(val) {
            this.setIcons()
        },
        'icon'(val) {
            this.setIcons()
        },
        'size'(val) {
            this.setData({
                textSize: val
            })
        },
        'sizes'(val) {
            this.setData({
                scaleSize: val
            })
        },
    },
    methods: {
        setIcons() {
            const {name, fill, icon} = this.data;
            if (icon) {
                this.setData({icons: icon})
            } else if (name) {
                const fills = fill ? '-fill' : '-line';
                this.setData({icons: 'mp-icon-' + name + fills})
            } else {
                this.setData({icons: ''})
            }
        },
    }
})
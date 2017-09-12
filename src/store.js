import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logoText: "EasyDSS",
        logoMiniText: "DSS",
        menus: [
            {
                path: "/",
                icon: "mouse-pointer",
                text: "视频广场"
            }, {
                path: "/player",
                icon: "play",
                text: "HLS 播放器"
            }, {
                path: "/about",
                icon: "support",
                text: "版本信息"
            }
        ]
    }
})

export default store;
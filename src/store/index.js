import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logoText: "EasyDSS",
        logoMiniText: "DSS",
        menus: [
            {
                path: "/index.html",
                icon: "mouse-pointer",
                text: "视频广场"
            }, {
                path: "/player.html",
                icon: "play",
                text: "HLS 播放器"
            }, {
                path: "/about.html",
                icon: "support",
                text: "版本信息"
            }
        ]
    },
    getters : {

    },
    mutations: {

    },
    actions : {
        
    }
})

export default store;
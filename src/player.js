import Vue from 'vue'
import store from "./store";
import AdminLTE from './components/AdminLTE.vue'
import Player from './components/Player.vue'
import VideoDlg from './components/VideoDlg.vue'

new Vue({
  el: '#app',
  store,
  template: `
  <AdminLTE>
    <VideoDlg ref="videoDlg"></VideoDlg>
    <Player @play="play"></Player>
  </AdminLTE>`,
  components: {
    AdminLTE, Player, VideoDlg
  },
  methods: {
      play(video){
          this.$refs.videoDlg.play(video.videoUrl, video.videoTitle);
      }
  }
})
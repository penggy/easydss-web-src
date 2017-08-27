<template>
    <div class="container-fluid no-padding">
        <br>
        <div class="col-sm-8 col-sm-offset-2">
            <form role="form" class="form-horizontal" id="url-form">
                <div class="form-group">
                    <div class="input-group" id="input-url-group">
                        <input type="text" class="form-control" id="input-url" name="url" placeholder="输入播放地址" v-model.trim="url" @keydown.enter.prevent="play">
                        <span class="input-group-btn">
                            <a class="btn btn-primary" role="button" @click.prevent="play">
                                <i class="fa fa-play"></i> 播放</a>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Message } from 'element-ui'

Vue.prototype.$message = Message;

export default {
    data() {
        return {
            url: ""
        }
    },
    methods: {
        play() {
            if (!this.url) {
                this.$message({
                    type: 'error',
                    message: "播放地址不能为空"
                });
                return;
            }
            this.$emit("play", { videoUrl: this.url, videoTitle: this.url});
        }
    }
}
</script>


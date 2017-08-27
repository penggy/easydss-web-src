<template>
    <div class="player-wrapper">
        <div class="video-wrapper" style="padding-bottom:55%;position:relative;margin:0 auto;overflow:hidden;">
            <div class="video-inner" style="position:absolute;top:0;bottom:0;left:0;right:0;">
            </div>
        </div>
    </div>
</template>

<script>
videojs.options.flash.swf = '/video-js-5.19.2/video-js-fixed.swf';
videojs.options.techOrder = ['html5', 'flash'];

if (videojs.browser.IE_VERSION) { // if IE use flash first
    videojs.options.techOrder = ['flash', 'html5'];
}

export default {
    data() {
        return {
            player: null
        }
    },
    props: {
        videoUrl: {
            default: ""
        },
        autoplay: {
            default: true
        }
    },
    beforeDestroy() {
        this.destroyVideoJS();
    },
    deactivated() {
        this.destroyVideoJS();
    },
    watch: {
        videoUrl: function(val) {
            this.destroyVideoJS();
            this.initVideoJS();
        }
    },
    mounted() {
        this.initVideoJS();
    },
    computed: {
        type() {
            let _type = "application/x-mpegURL";
            if (this.rtmp) {
                _type = "rtmp/mp4";
            }
            return _type;
        },
        rtmp() {
            return (this.src || "").indexOf("rtmp") == 0;
        },
        src() {
            if (!this.videoUrl) {
                return "";
            }
            if (this.videoUrl.indexOf("/") === 0) {
                return location.protocol + "//" + location.host + this.videoUrl;
            }
            return this.videoUrl;
        },
        videoHtml() {
            return `
                <video class="video-js vjs-default-skin vjs-big-play-centered" style="width: 100%; height: 100%;" controls preload="none">
                    <source src="${this.src}" type="${this.type}"></source>
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">
                            supports HTML5 video
                        </a>
                    </p>
                </video>            
            `;
        }
    },
    methods: {
        destroyVideoJS() {
            if (this.player) {
                this.player.dispose();
                this.player = null;
            }
        },
        initVideoJS() {
            $(this.$el).find(".video-inner").empty().append(this.videoHtml);

            if (!this.src) {
                return;
            }

            if (this.rtmp) {
                this.player = videojs($(this.$el).find("video")[0], {
                    notSupportedMessage: '您的浏览器没有安装或开启Flash',
                    tech: ['flash'],
                    autoplay: this.autoplay
                });
                this.player.on("error", e => {
                    var $e = $(this.$el).find(".vjs-error .vjs-error-display .vjs-modal-dialog-content");
                    var $a = $("<a href='http://www.adobe.com/go/getflashplayer' target='_blank'></a>").text($e.text());
                    $e.empty().append($a);
                })
            } else {
                this.player = videojs($(this.$el).find("video")[0], {
                    autoplay: this.autoplay
                });
            }
        }
    }
}
</script>


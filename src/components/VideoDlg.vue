<template>
    <div class="modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					    <span aria-hidden="true">&times;</span>
					</button>
                    <h4 class="modal-title text-success text-center">{{videoTitle}}</h4>
                </div>
                <div class="modal-body">
                    <VideoJS v-if="bShow" :videoUrl="videoUrl"></VideoJS>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import VideoJS from './VideoJS.vue'

export default {
    data() {
        return {
            videoUrl: "",
            videoTitle: "",
            bShow: false
        }
    },
    mounted() {
        $(document).on("hide.bs.modal", this.$el, () => {
            this.bShow = false;
        }).on("show.bs.modal", this.$el, () => {
            this.bShow = true;
        })
    },
    components: { VideoJS },
    methods: {
        play(src,title) {
            this.videoUrl = src||"";
            this.videoTitle = title||"";
            
            $(this.$el).modal("show");
        }
    }
}
</script>







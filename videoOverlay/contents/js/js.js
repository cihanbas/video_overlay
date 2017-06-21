class Video {
    constructor(media) {
        this.media = media;
        this.hideTime = 5;
        this.media.ontimeupdate = () => {
            var percentage = Math.floor((100 / this.media.duration) *
                this.media.currentTime);

            $("#progress-value").css("width", percentage + "%");
        }
        this.media.onwaiting = () => {
            $("#loaded").css("display", "block");
            console.log()
        }
        this.media.onplaying = () => {
            $("#loaded").css("display", "none")
        }

    }
    nextTime(second) {
        this.media.currentTime += second;

    }
    prevTime(scnd) {
        this.media.currentTime -= scnd;
    }
    playPause(prm) {
        if (this.media.paused || this.media.ended) {
            $(prm).removeClass("icon-Play").addClass("icon-Pause");
            this.media.play();
        } else {
            $(prm).removeClass("icon-Pause").addClass("icon-Play");
            this.media.pause();
        }
    };
    timeget(e) {
        var percent = e.offsetX / $(".progress-background")[0].offsetWidth;
        this.media.currentTime = percent * this.media.duration;

    };
    stopPlayer() {
        this.media.pause();
        $(".icon-Pause").removeClass("icon-Pause").addClass("icon-Play");
        this.media.currentTime = 0;
    };
    hideMenu() {
        var hideInterVal = setInterval(() => {
            this.hideTime -= 1;
            if (this.hideTime <= 1) {
                clearInterval(hideInterVal);
                $(".video-overlay").animate({
                    opacity: 0
                }, 200, () => {
                    $(".video-overlay").css("display", "none")
                });
            }
        }, 1000);

    };
    showMenu() {
        this.hideTime = 6;
        $(".video-overlay").css("display", "block");
        setTimeout(() => {
            $(".video-overlay").css("opacity", 1)
        }, 100);

    }

}
var video, media;
$(document).ready(function () {
    media = document.getElementById("media");
    video = new Video(media);

});

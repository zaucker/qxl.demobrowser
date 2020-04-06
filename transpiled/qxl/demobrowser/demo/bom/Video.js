(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Basic": {},
      "qx.bom.client.Html": {},
      "qx.util.ResourceManager": {},
      "qx.ui.basic.Label": {},
      "qx.bom.media.Video": {},
      "qx.ui.form.ToggleButton": {},
      "qx.ui.indicator.ProgressBar": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "html.video.h264": {
          "className": "qx.bom.client.Html"
        },
        "html.video.webm": {
          "className": "qx.bom.client.Html"
        },
        "html.video.ogg": {
          "className": "qx.bom.client.Html"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Adrian Olaru (adrianolaru)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(qxl/demobrowser/demo/media/qx.m4v)
   * @asset(qxl/demobrowser/demo/media/qx.ogv)
   * @asset(qxl/demobrowser/demo/media/qx.webm)
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Video", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Video.prototype.main.base.call(this);
        var doc = this.getRoot();
        var container = new qx.ui.container.Composite(new qx.ui.layout.Basic());
        doc.add(container, {
          left: 10,
          top: 40
        });

        if (qx.core.Environment.get("html.video.h264")) {
          var videoUrl = qx.util.ResourceManager.getInstance().toUri("demobrowser/demo/media/qx.m4v");
        } else if (qx.core.Environment.get("html.video.webm")) {
          var videoUrl = qx.util.ResourceManager.getInstance().toUri("demobrowser/demo/media/qx.webm");
        } else if (qx.core.Environment.get("html.video.ogg")) {
          var videoUrl = qx.util.ResourceManager.getInstance().toUri("demobrowser/demo/media/qx.ogv");
        } else {
          doc.add(new qx.ui.basic.Label("It seems that your browser doesn't support HTML5 video", {
            left: 10,
            top: 10
          }));
          return;
        }

        var video = new qx.bom.media.Video(videoUrl);
        var play = new qx.ui.form.ToggleButton("Play/Pause");
        play.addListener("changeValue", function (e) {
          if (video.isPaused()) {
            video.play();
          } else {
            video.pause();
          }
        }, this);
        var show = new qx.ui.form.ToggleButton("Native Controls");
        show.addListener("changeValue", function (e) {
          if (video.hasControls()) {
            video.hideControls();
          } else {
            video.showControls();
          }
        }, this);
        var mute = new qx.ui.form.ToggleButton("Mute");
        mute.addListener("changeValue", function (e) {
          if (video.isMuted()) {
            video.setMuted(false);
          } else {
            video.setMuted(true);
          }
        }, this);
        var loop = new qx.ui.form.ToggleButton("Loop");
        loop.addListener("changeValue", function (e) {
          if (video.isLoop()) {
            video.setLoop(false);
          } else {
            video.setLoop(true);
          }
        }, this);
        var duration = new qx.ui.basic.Label("0:00");
        duration.setTextColor("#CCC");
        var pb = new qx.ui.indicator.ProgressBar();
        pb.setHeight(21);
        pb.setWidth(220);
        video.addListener("loadeddata", function () {
          doc.add(show, {
            left: 315,
            top: 10
          });
          doc.add(play, {
            left: 10,
            top: 270
          });
          doc.add(pb, {
            left: 90,
            top: 272
          });
          doc.add(duration, {
            left: 185,
            top: 275
          });
          doc.add(mute, {
            left: 314,
            top: 270
          });
          doc.add(loop, {
            left: 364,
            top: 270
          });
          container.getContentElement().getDomElement().appendChild(video.getMediaObject());
          container.setWidth(400);
          container.setHeight(220);
          video.setWidth(container.getWidth());
          video.setHeight(container.getHeight());
        }, this);
        video.addListener("timeupdate", function () {
          //duration headake
          pb.setMaximum(video.getDuration());
          var currTime = video.getCurrentTime();
          var hour = Math.floor(currTime / 60);
          var sec = parseInt(currTime % 60);
          pb.setValue(currTime);
          duration.setValue(hour + ":" + (sec > 9 ? sec : "0" + sec));
        }, this);
        video.addListener("ended", function () {
          if (!video.isLoop()) {
            play.resetValue();
          }
        }, this);
      }
    }
  });
  qxl.demobrowser.demo.bom.Video.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Video.js.map?dt=1586199386132
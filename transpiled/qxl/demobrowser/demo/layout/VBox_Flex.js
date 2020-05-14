(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.util.LayoutApplication": {
        "require": true
      },
      "qx.ui.container.Scroll": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.core.Widget": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.layout.VBox_Flex", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.VBox_Flex.prototype.main.base.call(this);
        var scroll = new qx.ui.container.Scroll();
        this.getRoot().add(scroll, {
          edge: 0
        });
        var root = new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({
          padding: 20
        });
        scroll.add(root);
        root.add(this.getBox1());
        root.add(this.getBox2());
        root.add(this.getBox3());
        root.add(this.getBox4());
        root.add(this.getBox5());
        root.add(this.getBox6());
      },
      getBox1: function getBox1() {
        // different flex dimensions
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          allowGrowY: false
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          flex: 1
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          flex: 2
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          flex: 3
        });
        return container;
      },
      getBox2: function getBox2() {
        // different flex dimensions + limits
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          allowGrowY: false
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          maxHeight: 30
        }), {
          flex: 1
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          flex: 2
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          maxHeight: 100
        }), {
          flex: 3
        });
        return container;
      },
      getBox3: function getBox3() {
        // different flex dimensions + rounding issues
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          allowGrowY: false
        });

        for (var i = 0; i < 25; i++) {
          container.add(new qx.ui.core.Widget().set({
            decorator: "main",
            backgroundColor: "green",
            height: 5
          }), {
            flex: 1
          });
        }

        return container;
      },
      getBox4: function getBox4() {
        // container height > layout max height
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          minHeight: 300,
          allowGrowY: false
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          maxHeight: 60
        }), {
          flex: 1
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          maxHeight: 60
        }), {
          flex: 2
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          maxHeight: 60
        }), {
          flex: 3
        });
        return container;
      },
      getBox5: function getBox5() {
        // container height < layout min height
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          height: 150,
          minHeight: 0,
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowY: false
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          minHeight: 60
        }), {
          flex: 1
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          minHeight: 60
        }), {
          flex: 2
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          minHeight: 60
        }), {
          flex: 3
        });
        return container;
      },
      getBox6: function getBox6() {
        // container height < layout min height, but minHeight = auto
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          height: 150,
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowY: false
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          minHeight: 60
        }), {
          flex: 1
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          minHeight: 60
        }), {
          flex: 2
        });
        container.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green",
          minHeight: 60
        }), {
          flex: 3
        });
        return container;
      }
    }
  });
  qxl.demobrowser.demo.layout.VBox_Flex.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=VBox_Flex.js.map?dt=1589490214339
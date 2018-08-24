;(function(){try{
  defineClass('JPViewController', {
    handleBtn: function(sender) {
      var tableViewCtrl = JPTableViewController.__c("alloc")().__c("init")()
      self.__c("navigationController")().__c("pushViewController_animated")(tableViewCtrl, YES)
    }
  })
  
  defineClass('JPTableViewController : UITableViewController <UIAlertViewDelegate>', ['data'], {
    dataSource: function() {
      var data = self.__c("data")();
      if (data) return data;
      var data = [];
      for (var i = 0; i < 20; i ++) {
        data.__c("push")("cell from js " + i);
      }
      self.__c("setData")(data)
      return data;
    },
    numberOfSectionsInTableView: function(tableView) {
      return 1;
    },
    tableView_numberOfRowsInSection: function(tableView, section) {
      return self.__c("dataSource")().length;
    },
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
      var cell = tableView.__c("dequeueReusableCellWithIdentifier")("cell")
      if (!cell) {
        cell = require('UITableViewCell').__c("alloc")().__c("initWithStyle_reuseIdentifier")(0, "cell")
      }
      cell.__c("textLabel")().__c("setText")(self.__c("dataSource")()[indexPath.__c("row")()])
      return cell
    },
    tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
      return 60
    },
    tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
      var alertView = require('UIAlertView').__c("alloc")().__c("initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles")("Alert",self.__c("dataSource")()[indexPath.__c("row")()], self, "OK",  null);
      alertView.__c("show")()
    },
    alertView_willDismissWithButtonIndex: function(alertView, idx) {
      console.__c("log")('click btn ' + alertView.__c("buttonTitleAtIndex")(idx).__c("toJS")())
    }
  })
}catch(e){_OC_catch(e.message, e.stack)}})();

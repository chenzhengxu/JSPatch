require('UIViewController, UIColor')
defineClass('JPViewController', {
            viewWillAppear: function(animated) {
            self.super().viewWillAppear(animated);
            },
            handleBtn: function(sender) {
            var tableViewCtrl = UIViewController.alloc().init()
            tableViewCtrl.view().setBackgroundColor(UIColor.yellowColor())
            self.navigationController().pushViewController_animated(tableViewCtrl, YES)
            }
            })

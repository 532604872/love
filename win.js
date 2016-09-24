// 提示弹窗 maoamo 2016-09-07
function Win(options) {
    var opt = $.updateObject(options, {
        conf: {
            // 设置滑动高度
            scrollTop: '90'
        },
        // 初始化创建弹窗窗体
        init: function () {
            document.body.appendChild(w);
            // 是否显示窗体，以及显示窗体类型
            w.isShow = !1;
            // 阻止多次创建的产生
            this.init = false;
        },
        // 窗体头部模块
        head: function (s) {
            var h = $.tag('div', 'win_t');
            var hc = h.append('p');
            // 关闭按钮
            var c1 = h.append('a', 'win_x');
            $(c1).click(function (e) {
               $.breakEvent(e);
               opt.onClose();
            });
            // 重新设置内容
            var reSet = function (s) {
                hc.innerHTML = s;
            };
            reSet(s);
            return {target: h, reSet: reSet};
        },
        // 窗体内容模块
        body: {
            // 提示框
            tips: function (obj) {
                var b = $.tag('div', 'win_c');
                var bi = b.append('div');
                var bl = bi.append('span');
                var bc = bi.append('div').append('p');
                b.append('div', 'clearfix');
                // 重新设置内容
                var reSet = function (o) {
                    // 控制显示图案或状态
                    bl.className = o.type === 'success' ? 'la-success' : o.type === 'warning' ? 'la-warning' : '';
                    // 提示内容信息
                    bc.innerHTML = o.text;
                };
                reSet(obj);
                w.appendChild(b);
                return {
                    type: 'tips',
                    reSet: reSet
                };
            },
            // 警示框
            alert: function (s) {
                var b = $.tag('div', 'win_c');
                var bi = b.append('div');
                var bc = bi.append('div').append('p');
                b.append('div', 'clearfix');
                // 重新设置内容
                var reSet = function (s) {
                    // 警示内容信息
                    bc.innerHTML = s;
                };
                reSet(s);
                return {target: b, reSet: reSet};
            },
            // 询问框
            confirm: function (s) {
                var b = $.tag('div', 'win_c');
                var bi = b.append('div');
                var bc = bi.append('div').append('p');
                b.append('div', 'clearfix');
                // 重新设置内容
                var reSet = function (s) {
                    // 警示内容信息
                    bc.innerHTML = s;
                };
                reSet(s);
                return {target: b, reSet: reSet};
            },
            // 对话框
            pormpt: function (s, d) {
                var b = $.tag('div', 'win_c');
                var bi = b.append('div');
                var c = bi.append('div')
                var bc = c.append('p');
                var inp = w.input = bi.append('div', 'edit_box').append('input', {type: 'text', className: 'w400'});
                b.append('div', 'clearfix');
                // 重新设置内容
                var reSet = function (s, d) {
                    // 警示内容信息
                    bc.innerHTML = s;
                    inp.value = d;
                };
                reSet(s, d);
                return {target: b, reSet: reSet};
            }
        },
        // 窗体底部模块
        foot: {
            alert: function (o) {
                var a = $.tag('div', 'win_f');
                var b = a.append('div', 'ctl_bar ctl_r').append('div', {
                    className: 'win_ok btn',
                    innerHTML: o.confirmText
                });
                a.append('div', 'clearfix');
                b.f = o.confirm;
                // 确定按钮
                $(b).click(function (e) {
                    $.breakEvent(e);
                    opt.onHide();
                    // 执行确认
                    this.f && typeof this.f === 'function' && this.f();
                });
                // 重新设置内容
                var reSet = function (o) {
                    // 更新执行确认
                    b.innerHTML = o.confirmText;
                    b.f = o.confirm;
                };
                return {target: a, reSet: reSet};
            },
            confirm: function (o) {
                var a = $.tag('div', 'win_f');
                var btn = a.append('div', 'ctl_bar center')
                var b =btn.append('div', {
                    className: 'win_ok btn',
                    innerHTML: o.confirmText
                });
                var c = btn.append('div', {
                    className: 'win_x btn',
                    innerHTML: o.cancleText
                });
                a.append('div', 'clearfix');
                b.f = o.confirm;
                c.f = o.cancle;
                // 确定按钮
                $(b).click(function (e) {
                    $.breakEvent(e);
                    opt.onHide();
                    // 执行确认
                    this.f && typeof this.f === 'function' && this.f();
                    return !0;
                });
                // 取消按钮
                $(c).click(function (e) {
                    $.breakEvent(e);
                    opt.onHide();
                    // 执行取消
                    this.f && typeof this.f === 'function' && this.f();
                    return !1;
                });
                // 重新设置内容
                var reSet = function (o) {
                    // 更新执行确认
                    b.innerHTML = o.confirmText;
                    b.f = o.confirm;
                    c.innerHTML = o.cancleText;
                    c.f = o.cancle;
                };
                return {target: a, reSet: reSet};
            },
            pormpt: function (o) {
                var a = $.tag('div', 'win_f');
                var btn = a.append('div', 'ctl_bar center')
                var b =btn.append('div', {
                    className: 'win_ok btn',
                    innerHTML: o.confirmText
                });
                var c = btn.append('div', {
                    className: 'win_x btn',
                    innerHTML: o.cancleText
                });
                a.append('div', 'clearfix');
                b.f = o.confirm;
                c.f = o.cancle;
                // 确定按钮
                $(b).click(function (e) {
                    $.breakEvent(e);
                    opt.onHide();
                    // 执行确认
                    this.f && typeof this.f === 'function' && this.f();
                    return w.input.value;
                });
                // 取消按钮
                $(c).click(function (e) {
                    $.breakEvent(e);
                    opt.onHide();
                    // 执行取消
                    this.f && typeof this.f === 'function' && this.f();
                    return !1;
                });
                // 重新设置内容
                var reSet = function (o) {
                    // 更新执行确认
                    b.innerHTML = o.confirmText;
                    b.f = o.confirm;
                    c.innerHTML = o.cancleText;
                    c.f = o.cancle;
                };
                return {target: a, reSet: reSet};
            }
        },
        // 显示窗体
        onShow: function () {
            w.style.display = 'block';
            $(w).animate({top: this.conf.scrollTop, opacity: 1}, function () {
                w.isAnimate = !0;
                opt.sleep();
            });
        },
        // 关闭窗体
        onHide: function (f) {
            // 判断是否还在动画执行中
            if (w.isAnimate) {
                this.method.ct();
                $(w).animate({top: startTop, opacity: 0}, function () {
                    if (f && typeof f === 'function') {
                        f();
                    } else {
                        w.style.display = 'none';
                        this.isAnimate = !1;
                    }
                });
            } else {
                f && typeof f === 'function' && f();
            }
        },
        // 关闭按钮
        onClose: function () {
            this.onHide();
        },
        // 方法
        method: {
            // 删除计时器
            ct: function () {
                clearTimeout(w.timeOut);
            },
            // 设置计时器
            st: function () {
                w.timeOut = setTimeout(function () {
                    opt.onHide();
                }, 2000);
            },
            // 确定
            confirm: function (f) {

            }
            // 取消
        },
        // 暂停js继续执行
        sleep: function () {
            function sleep(d){
              for(var t = Date.now();Date.now() - t <= d;);
            }
             
            // sleep(5000); //当前方法暂停5秒
        }
    });
    var w = document.createElement('div');
    w.className = 'window';
    var startTop = opt.conf.scrollTop - 30 <= 0 ? 0 : opt.conf.scrollTop - 30;
    w.style.cssText = ';z-index:9999;position:fixed;left:0;right:0;margin:auto;-khtml-opacity:0;-moz-opacity:0;opacity:0;filter:alpha(opacity=0);display:none;top:' + startTop + 'px;';
    return {
        w: w,
        // 提示信息
        tips: function (obj) {
            // 初始化创建弹出框，如果已有将不会执行
            opt.init && opt.init();
            try {
                obj = $.updateObject(obj, {
                    type: 'success',
                    text: ''
                });
                opt.method.ct();
                opt.onHide(function () {
                    if (w.isShow && w.isShow.type === 'tips') {
                        w.isShow.reSet(obj);
                    } else {
                        w.innerHTML = '';
                        w.isShow = opt.body.tips(obj);
                    }
                    opt.onShow();
                    opt.method.st();
                });
            } catch(e) {
                console.log(e);
            }
        },
        // 警告提醒
        alert: function (obj) {
            // 初始化创建弹出框，如果已有将不会执行
            opt.init && opt.init();
            try {
                if (typeof obj === 'string' || typeof obj === 'number') obj = {text: obj};
                obj = $.updateObject(obj, {
                    title: '系统消息',
                    text: '',
                    confirmText: '确定',
                    confirm: function () {}
                });
                opt.onHide(function () {
                    if (w.isShow && w.isShow.type === 'alert') {
                        w.isShow.reSet(obj);
                    } else {
                        w.innerHTML = '';
                        var h = opt.head(obj.title),
                            b = opt.body.alert(obj.text),
                            f = opt.foot.alert(obj);
                        var fragment = document.createDocumentFragment();
                        fragment.appendChild(h.target);
                        fragment.appendChild(b.target);
                        fragment.appendChild(f.target);
                        w.appendChild(fragment);
                        w.isShow = {
                            type: 'alert',
                            reSet: function (obj) {
                                h.reSet(obj.title);
                                b.reSet(obj.text);
                                f.reSet(obj);
                            }
                        };
                    }
                    opt.onShow();
                });
            } catch(e) {
                console.log(e);
            }
        },
        // 询问框
        confirm: function (obj) {
            // 初始化创建弹出框，如果已有将不会执行
            opt.init && opt.init();
            try {
                if (typeof obj === 'string' || typeof obj === 'number') obj = {text: obj};
                obj = $.updateObject(obj, {
                    title: '系统消息',
                    text: '',
                    confirmText: '确定',
                    confirm: function () {},
                    cancleText: '取消',
                    cancle: function () {}
                });
                opt.onHide(function () {
                    if (w.isShow && w.isShow.type === 'confirm') {
                        w.isShow.reSet(obj);
                    } else {
                        w.innerHTML = '';
                        var h = opt.head(obj.title),
                            b = opt.body.confirm(obj.text),
                            f = opt.foot.confirm(obj);
                        var fragment = document.createDocumentFragment();
                        fragment.appendChild(h.target);
                        fragment.appendChild(b.target);
                        fragment.appendChild(f.target);
                        w.appendChild(fragment);
                        w.isShow = {
                            type: 'confirm',
                            reSet: function (obj) {
                                h.reSet(obj.title);
                                b.reSet(obj.text);
                                f.reSet(obj);
                            }
                        };
                    }
                    opt.onShow();
                });
            } catch(e) {
                console.log(e);
            }
        },
        pormpt: function (obj, string) {
            // 初始化创建弹出框，如果已有将不会执行
            opt.init && opt.init();
            try {
                if (typeof obj === 'string' || typeof obj === 'number') obj = {text: obj};
                if (typeof string === 'string' || typeof string === 'number') obj['default'] = string;
                obj = $.updateObject(obj, {
                    title: '系统消息',
                    text: '',
                    default: '',
                    confirmText: '确定',
                    confirm: function () {},
                    cancleText: '取消',
                    cancle: function () {}
                });
                opt.onHide(function () {
                    if (w.isShow && w.isShow.type === 'pormpt') {
                        w.isShow.reSet(obj);
                    } else {
                        w.innerHTML = '';
                        var h = opt.head(obj.title),
                            b = opt.body.pormpt(obj.text, obj.default),
                            f = opt.foot.pormpt(obj);
                        var fragment = document.createDocumentFragment();
                        fragment.appendChild(h.target);
                        fragment.appendChild(b.target);
                        fragment.appendChild(f.target);
                        w.appendChild(fragment);
                        w.isShow = {
                            type: 'pormpt',
                            reSet: function (obj) {
                                h.reSet(obj.title);
                                b.reSet(obj.text, obj.default);
                                f.reSet(obj);
                            }
                        };
                    }
                    opt.onShow();
                });
            } catch(e) {
                console.log(e);
            }
        },
        pop: function (obj) {
            
        }
    };
}

window.win = new Win();

// 把浏览器自带样式替换
// alert = win.alert;
// confirm = win.confirm;
pormpt = win.pormpt;
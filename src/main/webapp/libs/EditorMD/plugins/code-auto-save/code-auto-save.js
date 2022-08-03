(function() {
    var factory = function (exports) {
        // 定义插件名称
        var pluginName   = "code-auto-save";
        // 缓存key
        var cacheKey = 'editormd_cache';
        // 编辑器内容缓存key 替换url中的符号
        var cacheContentKey = ( location.protocol + location.host + location.pathname + location.search ).replace( /[.:?=\/-]/g, '_' );
        // 定义全局变量
        var cm;
        exports.fn.CodeAutoSave = function() {
            // 初始化系统变量
            var _this       = this;
            cm              = _this.cm;
            var settings    = _this.settings;
            var classPrefix = _this.classPrefix;
            var id          = _this.id;   // 编辑器id
            // 定时器
            var _saveFlag = null;
            // 自动保存间隔时间， 单位ms
            var saveInterval = 500;
            if(typeof(Storage)=="undefined"){
                console.log('对不起，您的浏览器不支持 web 存储。');
                return ;
            }
            // 设置编辑器为当前域名+编辑器id
            cacheContentKey = cacheContentKey + "_" + id;
           
            // 注册change事件
            cm.on('change', function(){
                //已经存在定时器关闭 重新开始 防止多次执行
                if(_saveFlag){
                    window.clearTimeout( _saveFlag );
                }
                //定时器的作用是加缓冲
                _saveFlag = window.setTimeout( function () {
                    // 执行设置缓存方法  cm.getValue() 是编辑器的源文档
                    _this.CodeAutoSaveSetCache(cm.getValue());
                }, saveInterval);
            })
        };
        // 设置缓存
        exports.fn.CodeAutoSaveSetCache = function(value) {
            value = value || cm.getValue();

            var cacheContent = {};
            cacheContent[cacheContentKey] = value;
            localStorage.setItem(cacheKey, JSON.stringify(cacheContent));
        }
        // 读取缓存
        exports.fn.CodeAutoSaveGetCache = function() {
            // 判断缓存key
            if(localStorage.hasOwnProperty(cacheKey)){
                var cacheData = JSON.parse(localStorage.getItem(cacheKey));
                if(cacheData[cacheContentKey]){

                    cm.setValue(cacheData[cacheContentKey]);
                }
            }else{

            }
        }
        // 删除缓存
        exports.fn.CodeAutoSaveDelCache = function() {

            localStorage.removeItem(cacheKey);
        }
        // 清空缓存的文档内容
        exports.fn.CodeAutoSaveEmptyCacheContent = function() {

            _this.CodeAutoSaveSetCache('');
        }
    };
    // CommonJS/Node.js
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    {
        module.exports = factory;
    }
    else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
        if (define.amd) { // for Require.js
            define(["editormd"], function(editormd) {
                factory(editormd);
            });
        } else { // for Sea.js
            define(function(require) {
                var editormd = require("./../../editormd");
                factory(editormd);
            });
        }
    }
    else
    {
        factory(window.editormd);
    }
})();
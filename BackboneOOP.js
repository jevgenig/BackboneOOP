(function (Backbone) {
    var _extend = Backbone.View.extend;
    Backbone.Model.implement = function () {
        var self = this,
            interfaces = Array.prototype.slice.apply(arguments);
        return {
            extend: function (parentClass) {
                var res = Backbone.Model.extend.apply(self, arguments);
                //@TODO Check if res implements all interfaces
                return res;
            }
        };
    };
    Backbone.Model.extend = function (child) {
        //@TODO Check if child implements parent correctly
        return _extend.apply(this, arguments);
    };
}(Backbone));
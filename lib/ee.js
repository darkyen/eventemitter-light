"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _temporalUndefined = {};

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var EventEmitter = _temporalUndefined;

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

EventEmitter = (function () {
    function EventEmitter() {
        _classCallCheck(this, _temporalAssertDefined(EventEmitter, "EventEmitter", _temporalUndefined) && EventEmitter);

        this._events = {};
        return this;
    }

    _createClass(_temporalAssertDefined(EventEmitter, "EventEmitter", _temporalUndefined) && EventEmitter, [{
        key: "on",
        value: function on(ev, handler) {
            var events = _temporalUndefined;
            events = this._events;
            ((_temporalAssertDefined(events, "events", _temporalUndefined) && events)[ev] || ((_temporalAssertDefined(events, "events", _temporalUndefined) && events)[ev] = [])).push(handler);
        }
    }, {
        key: "removeListener",
        value: function removeListener(ev, handler) {
            var array = _temporalUndefined;

            array = this._events[ev];
            _temporalAssertDefined(array, "array", _temporalUndefined) && array && (_temporalAssertDefined(array, "array", _temporalUndefined) && array).splice((_temporalAssertDefined(array, "array", _temporalUndefined) && array).indexOf(handler), 1);
        }
    }, {
        key: "emit",
        value: function emit(ev) {
            var args = _temporalUndefined,
                array = _temporalUndefined;

            args = [].slice.call(arguments, 1);
            array = this._events[ev] || [];
            for (var i = 0, len = (_temporalAssertDefined(array, "array", _temporalUndefined) && array).length; i < len; i++) {
                (_temporalAssertDefined(array, "array", _temporalUndefined) && array)[_temporalAssertDefined(i, "i", _temporalUndefined) && i].apply(this, _temporalAssertDefined(args, "args", _temporalUndefined) && args);
            }
        }
    }, {
        key: "once",
        value: function once(ev, handler) {
            this.on(ev, remover);

            function remover() {
                handler.apply(this, arguments);
                this.removeListener(ev, remover);
            }
        }
    }]);

    return _temporalAssertDefined(EventEmitter, "EventEmitter", _temporalUndefined) && EventEmitter;
})();

exports["default"] = _temporalAssertDefined(EventEmitter, "EventEmitter", _temporalUndefined) && EventEmitter;
module.exports = exports["default"];

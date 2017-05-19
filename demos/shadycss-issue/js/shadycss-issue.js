(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyElement = function (_HTMLElement) {
    _inherits(MyElement, _HTMLElement);

    function MyElement() {
        _classCallCheck(this, MyElement);

        var _this = _possibleConstructorReturn(this, (MyElement.__proto__ || Object.getPrototypeOf(MyElement)).call(this));

        if (!_this._template) {
            throw Error('Missing <template id="' + _this._tagName + '-template">');
        }

        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(_this._template.content.cloneNode(true));
        return _this;
    }

    _createClass(MyElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            if ('ShadyCSS' in window) {
                ShadyCSS.prepareTemplate(this._template, this._tagName);

                // Chrome 49.0.2623.112 (64-bit) - seems to need this only.
                // Firefox 48.0.2 - doesn't need this.
                ShadyCSS.styleElement(this);
            }
        }
    }, {
        key: '_tagName',
        get: function get() {
            return MyElement.tagName;
        }
    }, {
        key: '_template',
        get: function get() {
            return document.querySelector('#' + MyElement.tagName + '-template');
        }
    }], [{
        key: 'tagName',
        get: function get() {
            return 'my-element';
        }
    }]);

    return MyElement;
}(HTMLElement);

exports.default = MyElement;

},{}],2:[function(require,module,exports){
'use strict';

var _myElement = require('./components/my-element.js');

var _myElement2 = _interopRequireDefault(_myElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = document.querySelector('.wrapper');

window.customElements.whenDefined(_myElement2.default.tagName).then(function () {

    // Creating myElement element via the DOM API
    var myElementA = document.createElement('my-element');
    wrapper.appendChild(myElementA);

    // Creating myElement via the custom element constructor.
    var myElementB = new _myElement2.default();
    wrapper.appendChild(myElementB);
});

window.customElements.define(_myElement2.default.tagName, _myElement2.default);

},{"./components/my-element.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL215LWVsZW1lbnQuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUNBTSxTOzs7QUFFRix5QkFBYztBQUFBOztBQUFBOztBQUdWLFlBQUksQ0FBQyxNQUFLLFNBQVYsRUFBcUI7QUFDakIsa0JBQU0saUNBQStCLE1BQUssUUFBcEMsaUJBQU47QUFDSDs7QUFFRCxZQUFNLGFBQWEsTUFBSyxZQUFMLENBQWtCLEVBQUUsTUFBTSxNQUFSLEVBQWxCLENBQW5CO0FBQ0EsbUJBQVcsV0FBWCxDQUF1QixNQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLFNBQXZCLENBQWlDLElBQWpDLENBQXZCO0FBUlU7QUFTYjs7Ozs0Q0FjbUI7QUFDaEIsZ0JBQUksY0FBYyxNQUFsQixFQUEwQjtBQUN0Qix5QkFBUyxlQUFULENBQXlCLEtBQUssU0FBOUIsRUFBeUMsS0FBSyxRQUE5Qzs7QUFFQTtBQUNBO0FBQ0EseUJBQVMsWUFBVCxDQUFzQixJQUF0QjtBQUNIO0FBQ0o7Ozs0QkFoQmM7QUFDWCxtQkFBTyxVQUFVLE9BQWpCO0FBQ0g7Ozs0QkFFZTtBQUNaLG1CQUFPLFNBQVMsYUFBVCxPQUEyQixVQUFVLE9BQXJDLGVBQVA7QUFDSDs7OzRCQVZvQjtBQUNqQixtQkFBTyxZQUFQO0FBQ0g7Ozs7RUFmbUIsVzs7a0JBb0NULFM7Ozs7O0FDcENmOzs7Ozs7QUFFQSxJQUFNLFVBQVUsU0FBUyxhQUFULENBQXVCLFVBQXZCLENBQWhCOztBQUVBLE9BQU8sY0FBUCxDQUFzQixXQUF0QixDQUFrQyxvQkFBVSxPQUE1QyxFQUFxRCxJQUFyRCxDQUEwRCxZQUFNOztBQUU1RDtBQUNBLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbkI7QUFDQSxZQUFRLFdBQVIsQ0FBb0IsVUFBcEI7O0FBRUE7QUFDQSxRQUFNLGFBQWEseUJBQW5CO0FBQ0EsWUFBUSxXQUFSLENBQW9CLFVBQXBCO0FBQ0gsQ0FURDs7QUFXQSxPQUFPLGNBQVAsQ0FBc0IsTUFBdEIsQ0FBNkIsb0JBQVUsT0FBdkMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1pc3NpbmcgPHRlbXBsYXRlIGlkPVwiJHt0aGlzLl90YWdOYW1lfS10ZW1wbGF0ZVwiPmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiAnbXktZWxlbWVudCc7XG4gICAgfVxuXG4gICAgZ2V0IF90YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gTXlFbGVtZW50LnRhZ05hbWU7XG4gICAgfVxuXG4gICAgZ2V0IF90ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke015RWxlbWVudC50YWdOYW1lfS10ZW1wbGF0ZWApO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAoJ1NoYWR5Q1NTJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIFNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZSh0aGlzLl90ZW1wbGF0ZSwgdGhpcy5fdGFnTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIENocm9tZSA0OS4wLjI2MjMuMTEyICg2NC1iaXQpIC0gc2VlbXMgdG8gbmVlZCB0aGlzIG9ubHkuXG4gICAgICAgICAgICAvLyBGaXJlZm94IDQ4LjAuMiAtIGRvZXNuJ3QgbmVlZCB0aGlzLlxuICAgICAgICAgICAgU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUVsZW1lbnQ7XG4iLCJpbXBvcnQgTXlFbGVtZW50IGZyb20gJy4vY29tcG9uZW50cy9teS1lbGVtZW50LmpzJztcblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChNeUVsZW1lbnQudGFnTmFtZSkudGhlbigoKSA9PiB7XG5cbiAgICAvLyBDcmVhdGluZyBteUVsZW1lbnQgZWxlbWVudCB2aWEgdGhlIERPTSBBUElcbiAgICBjb25zdCBteUVsZW1lbnRBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbXktZWxlbWVudCcpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobXlFbGVtZW50QSk7XG5cbiAgICAvLyBDcmVhdGluZyBteUVsZW1lbnQgdmlhIHRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3Rvci5cbiAgICBjb25zdCBteUVsZW1lbnRCID0gbmV3IE15RWxlbWVudCgpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobXlFbGVtZW50Qik7XG59KTtcblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShNeUVsZW1lbnQudGFnTmFtZSwgTXlFbGVtZW50KTtcbiJdfQ==

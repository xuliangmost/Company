webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this.state = {
      loginName: ''
    };
    return _this;
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "\u6B22\u8FCE\u6765\u5230\u8FDC\u7A0B\u89C6\u754C"
        )
      );
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(806);

var _checked = __webpack_require__(79);

var _checked2 = _interopRequireDefault(_checked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jwtDecode = __webpack_require__(145);

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      loginName: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem('robertUserName')) {
        var bearer = localStorage.getItem('robertUserName');
        var decoded = jwtDecode(bearer);
        var userName = decoded.username;
        this.setState({
          loginName: userName
        });
      }
    }
  }, {
    key: "cancelLation",
    value: function cancelLation() {
      localStorage.removeItem("history");
      localStorage.removeItem("robertUserName");
      location.href = "http://192.168.100.133:8787";
    }
  }, {
    key: "render",
    value: function render() {
      var style = { "marginTop": "10px", "marginLeft": "10px" };
      return _react2.default.createElement(
        "div",
        { className: "header" },
        _react2.default.createElement(
          "a",
          { href: "http://192.168.100.133:8787/#/entrance" },
          _react2.default.createElement("img", { style: style, src: "./images/logo.png", alt: "\u8FDC\u7A0B\u89C6\u754C\u673A\u5668\u4EBA" })
        ),
        this.state.loginName ? _react2.default.createElement(
          "div",
          { className: "loginName" },
          _react2.default.createElement(
            "a",
            { href: "http://192.168.100.133:8787/#/entrance", className: "header_sp1" },
            "\u5207\u6362\u7CFB\u7EDF"
          ),
          _react2.default.createElement("span", { className: "header_sp2" }),
          _react2.default.createElement(
            "a",
            { className: "header_sp1" },
            this.state.loginName
          ),
          _react2.default.createElement("span", { className: "header_sp2" }),
          _react2.default.createElement(
            "a",
            { onClick: this.cancelLation.bind(this), className: "header_sp1" },
            "\u9000\u51FA"
          )
        ) : ""
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = __webpack_require__(571);

var _menu = __webpack_require__(149);

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(788);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var jwtDecode = __webpack_require__(145);
var q = ["6", "7", "8", "9", "10", "11", "12", "13", "14"];

var Left = function (_Component) {
  _inherits(Left, _Component);

  function Left(props) {
    _classCallCheck(this, Left);

    var _this = _possibleConstructorReturn(this, (Left.__proto__ || Object.getPrototypeOf(Left)).call(this, props));

    _this.state = {
      current: '1',
      openKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub0'],
      permissions: []
    };
    return _this;
  }

  _createClass(Left, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (localStorage.getItem('robertUserName')) {
        var bearer = localStorage.getItem('robertUserName');
        var decoded = jwtDecode(bearer);
        var permissions = decoded.permissions;
        this.setState({
          permissions: permissions
        });
        var flag = true;
        console.log(permissions);
        permissions.forEach(function (ele, index) {
          if (q.indexOf(ele) !== -1) {
            flag = false;
          }
        });
        if (flag) {
          alert("您无查看权限!");
          location.href = "http://192.168.100.133:8787/#/entrance";
        }
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      console.log('Clicked: ', e);
      this.setState({ current: e.key });
    }
  }, {
    key: 'onOpenChange',
    value: function onOpenChange(openKeys) {
      var state = this.state;
      var latestOpenKey = openKeys.find(function (key) {
        return !(state.openKeys.indexOf(key) > -1);
      });
      var latestCloseKey = state.openKeys.find(function (key) {
        return !(openKeys.indexOf(key) > -1);
      });

      var nextOpenKeys = [];
      if (latestOpenKey) {
        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
      }
      if (latestCloseKey) {
        nextOpenKeys = this.getAncestorKeys(latestCloseKey);
      }
      this.setState({ openKeys: nextOpenKeys });
    }
  }, {
    key: 'getAncestorKeys',
    value: function getAncestorKeys(key) {
      var map = {
        sub0: ['sub0']
      };
      return map[key] || [];
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'left' },
        _react2.default.createElement(
          _menu2.default,
          {
            mode: 'inline',
            openKeys: this.state.openKeys,
            selectedKeys: [this.state.current],
            style: { width: 260 },
            onOpenChange: this.onOpenChange.bind(this),
            onClick: this.handleClick.bind(this)
          },
          this.state.permissions.indexOf("6") !== -1 || this.state.permissions.indexOf("7") !== -1 || this.state.permissions.indexOf("8") !== -1 ? _react2.default.createElement(
            SubMenu,
            { key: 'sub1', title: _react2.default.createElement(
                'span',
                null,
                '\u7533\u8BF7\u4F1A\u8BCA'
              ) },
            this.state.permissions.indexOf("6") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '1', id: '6' },
              _react2.default.createElement(
                'a',
                { href: '#/apply' },
                '\u7533\u8BF7\u4F1A\u8BCA'
              )
            ) : "",
            this.state.permissions.indexOf("7") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '2', id: '7' },
              _react2.default.createElement(
                'a',
                { href: '#/apply/daiShen' },
                '\u5F85\u5BA1\u4F1A\u8BCA'
              )
            ) : "",
            this.state.permissions.indexOf("8") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '3', id: '8' },
              _react2.default.createElement(
                'a',
                { href: '#/apply/return/ReturnRecord' },
                '\u88AB\u9000\u4F1A\u8BCA'
              )
            ) : ""
          ) : "",
          this.state.permissions.indexOf("9") !== -1 || this.state.permissions.indexOf("10") !== -1 || this.state.permissions.indexOf("11") !== -1 ? _react2.default.createElement(
            SubMenu,
            { key: 'sub2', title: _react2.default.createElement(
                'span',
                null,
                '\u4F1A\u8BCA\u5BA1\u6838'
              ) },
            this.state.permissions.indexOf("9") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '5', id: '9' },
              _react2.default.createElement(
                'a',
                { href: '#/check/waitCheck/waitCheck' },
                '\u5F85\u5BA1\u4F1A\u8BCA'
              )
            ) : "",
            this.state.permissions.indexOf("10") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '6', id: '10' },
              _react2.default.createElement(
                'a',
                { href: '#/check/hadReturn/hadReturn' },
                '\u5DF2\u9000\u4F1A\u8BCA'
              )
            ) : "",
            this.state.permissions.indexOf("11") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '7', id: '11' },
              _react2.default.createElement(
                'a',
                { href: '#/check/checked/checked' },
                '\u5DF2\u5BA1\u4F1A\u8BCA'
              )
            ) : ""
          ) : "",
          this.state.permissions.indexOf("12") !== -1 ? _react2.default.createElement(
            SubMenu,
            { key: 'sub3', title: _react2.default.createElement(
                'span',
                null,
                '\u4F1A\u8BCA\u4EFB\u52A1'
              ) },
            this.state.permissions.indexOf("12") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '10', id: '12' },
              _react2.default.createElement(
                'a',
                { href: '#/task/consultationTask' },
                '\u4F1A\u8BCA\u4EFB\u52A1'
              )
            ) : ""
          ) : "",
          this.state.permissions.indexOf("13") !== -1 ? _react2.default.createElement(
            SubMenu,
            { key: 'sub4', title: _react2.default.createElement(
                'span',
                null,
                '\u4F5C\u5E9F\u4F1A\u8BCA'
              ) },
            this.state.permissions.indexOf("13") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '11' },
              _react2.default.createElement(
                'a',
                { href: '#/invalid/invalid', id: '13' },
                '\u4F5C\u5E9F\u4F1A\u8BCA'
              )
            ) : ""
          ) : "",
          this.state.permissions.indexOf("14") !== -1 ? _react2.default.createElement(
            SubMenu,
            { key: 'sub5', title: _react2.default.createElement(
                'span',
                null,
                '\u4F1A\u8BCA'
              ) },
            this.state.permissions.indexOf("14") !== -1 ? _react2.default.createElement(
              _menu2.default.Item,
              { key: '12', id: '14' },
              _react2.default.createElement(
                'a',
                { href: '#/consulationTables/consulation' },
                '\u4F1A\u8BCA\u603B\u8868'
              )
            ) : ""
          ) : ""
        )
      );
    }
  }]);

  return Left;
}(_react.Component);

exports.default = Left;

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style9 = __webpack_require__(100);

var _upload = __webpack_require__(82);

var _upload2 = _interopRequireDefault(_upload);

var _style10 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style11 = __webpack_require__(96);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _style12 = __webpack_require__(120);

var _transfer = __webpack_require__(99);

var _transfer2 = _interopRequireDefault(_transfer);

var _style13 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style14 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style15 = __webpack_require__(81);

var _message = __webpack_require__(66);

var _message2 = _interopRequireDefault(_message);

var _style16 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(286);

__webpack_require__(130);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _checked = __webpack_require__(79);

var _checked2 = _interopRequireDefault(_checked);

var _Action = __webpack_require__(656);

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var startTime = function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate;
}();
var token = localStorage.getItem("robertUserName");
var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //case编号
    "hospital": "", //case医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": startTime, //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    "file": [],
    "statusId": '1',
    "advice": [{
      "hospital": "",
      "statusId": '1',
      "doctor": "",
      "adviceTime": startTime,
      "advice": "",
      "prescription": [{
        "id": "0",
        "prescriptionTime": startTime, //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var NewConsultation = function (_Component) {
  _inherits(NewConsultation, _Component);

  function NewConsultation(props) {
    _classCallCheck(this, NewConsultation);

    var _this = _possibleConstructorReturn(this, (NewConsultation.__proto__ || Object.getPrototypeOf(NewConsultation)).call(this, props));

    _this.state = {
      consultationId: null,
      saveCase: false, //是否保存了病历
      userId: null,
      hospitalId: null,
      savePrescription: false, //是否保存了处方
      saveConsultationL: false, //是否保存了会诊
      saveAdvice: false, //是否保存了医嘱
      caseId: false, //是否显示添加医嘱按钮
      showPrescription: false, //是否显示新增处方弹出框
      getData: allData,
      history1: allData.case[0], //当前显示的病历
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      centerPrescription: null,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      dis: false, //是否禁用保存会诊
      history1Index: 0, //当前显示的病历的下标
      history2Index: 0, //当前显示的医嘱的下标

      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime'
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _this.state.history1.statusId ? _react2.default.createElement(
              'span',
              null,
              record.id == 0 ? _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.addPrescription.bind(_this), className: 'addMedicine', type: 'primary' },
                  '\u65B0\u589E'
                )
              ) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.deletePrescription.bind(_this, index), className: 'addMedicine', type: 'primary' },
                  '\u5220\u9664'
                )
              )
            ) : "-"
          );
        }
      }],
      fileListColumns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1,
            ' '
          );
        }
      }, {
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.url, target: 'blank', className: 'apply_link' },
              '\u67E5\u770B'
            ),
            _this.state.history1.statusId ? _react2.default.createElement(
              _reactRouter.Link,
              { to: '', onClick: _this.deleteFile.bind(_this, record.id, index), className: 'apply_link' },
              '\u5220\u9664'
            ) : ""
          );
        }
      }],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      data: [{
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      docUserId: [], //选中的医生的要上传的格式
      targetdoc: [], //选中的医生信息
      fileList: [], //显示的上传文件集合
      selectTime: false //是否选中过出生时间
    };
    return _this;
  }

  /////////////////////////

  _createClass(NewConsultation, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      var getData = this.state.getData;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        getData.consultation.birthday = response.data.result[0].birthday;
        that.setState({
          getData: getData,
          hospitalId: response.data.result[0].hospitalId,
          selectTime: false //是否选中过出生时间
        });
      }).catch(function () {
        alert("医院信息获取失败，请刷新页面!");
      });
    }
  }, {
    key: 'getMsg',
    value: function getMsg() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/doctor',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var targetKeys = [];
        var targetKeys1 = [];
        var mockData = [];
        var targetdoc = [];
        var docArr = response.data.result;

        for (var i = 0; i < docArr.length; i++) {
          var data = {
            key: docArr[i].doctorId,
            key1: docArr[i].userId,
            title: docArr[i].doctorName,
            description: docArr[i].hospitalName,
            chosen: function (a) {
              return responseDoc.indexOf(a) > -1 ? true : false;
            }(docArr[i].doctorId)
          };
          if (data.chosen) {
            targetKeys.push(data.key);
            targetKeys1.push(data.key1);
          }
          mockData.push(data);
        }
        docArr.map(function (ele, index) {
          targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
        });
        var docId = [];
        for (var _i = 0; _i < targetKeys.length; _i++) {
          var _obj = {};
          _obj.doctor = targetKeys[_i];
          _obj.userId = targetKeys1[_i];

          docId.push(_obj);
        }

        var obj = {}; //这里是生成医生接口的格式
        obj.consultationId = that.state.consultationId;
        obj.doctorId = docId;
        that.setState({
          mockData: mockData,
          targetKeys: targetKeys,
          targetKeys1: targetKeys1,
          docList: docArr,
          docId: obj,
          docKeys: targetKeys
        });
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var data = {
        //会诊
        "consultation": {
          "hospital": "", //隶属医院
          "applicant": "", //会诊申请人
          "consultationName": "", //会诊名称
          "startTime": startTime, //会诊时间
          "username": "", //会诊对象
          "phone": "", //会诊对象的手机号
          "identification": "", //身份证号
          "birthday": "", //出生日期
          "famliyName": "", //陪护家属
          "familyPhone": "", //家属手机号
          "content": "" //会诊描述
        },
        //病历
        "case": [{
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": startTime, //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": '1',
          "advice": [{
            "hospital": "",
            "statusId": '1',
            "doctor": "",
            "adviceTime": startTime,
            "advice": "",
            "prescription": [{
              "id": "0",
              "prescriptionTime": startTime, //开方时间
              "doctorName": "", //开方医生姓名
              "medicineTime": "", //药品名称
              "total": "", //总量
              "singleDose": "", //单次用量
              "frequency": "" //次/日
            }]
          }]
        }],
        //医生
        "doctor": [],
        "code": 200
      };
      this.setState({
        getData: JSON.parse(JSON.stringify(data)),
        history1: data.case[0],
        history2: data.case[0].advice[0]
      });
      this.getPeople();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getMsg();
      this.getValue();
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode == 27) {
        this.setState({
          showPrescription: false
        });
      }
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile(id, index) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/deleteCaseFile',
        method: 'get',
        params: {
          caseFileId: id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.case[that.state.history1Index].file.splice(index, 1);
        var list = getData.case[that.state.history1Index].file;
        that.setState({
          fileList: list,
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'handleChange',
    value: function handleChange(targetKeys) {
      var _this2 = this;

      var docUserId = [];
      var targetKey = targetKeys;
      var num = 0;
      this.state.docList.map(function (ele, index) {
        if (targetKey.indexOf(ele.doctorId) !== -1) {
          var obj = {};
          obj.user = ele.userId.toString();
          obj.hospitalId = ele.hospitalId.toString();
          docUserId.push(obj);
        }
      });

      docUserId.map(function (ele) {
        if (ele.hospitalId === _this2.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.warning("同一医院只能选择一名医生!");
      }

      this.setState({
        targetKeys: targetKeys,
        docUserId: docUserId
      });
    }
  }, {
    key: 'queDing',
    value: function queDing() {
      var _this3 = this;

      var num = 0;
      this.state.docUserId.map(function (ele) {
        if (ele.hospitalId === _this3.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.error('同一医院只能选择一名医生!');
        return false;
      } else if (num === 0) {
        _message2.default.error('本医院医生未选择!');
        return false;
      }

      var targetKeys = this.state.targetKeys;
      var arr = [];
      var targetTitle = [];
      for (var i = 0; i < targetKeys.length; i++) {
        var _obj2 = {};
        _obj2.doctor = targetKeys[i].toString();
        arr.push(_obj2);
        for (var k = 0; k < this.state.docList.length; k++) {
          if (targetKeys[i] == this.state.docList[k].doctorId * 1) {
            targetTitle.push(this.state.docList[k]);
          }
        }
      }
      var obj = {};
      obj.consultationId = this.state.consultationId;
      obj.doctorId = arr;
      obj.userId = this.state.docUserId;
      var that = this;
      _axios2.default.request({
        url: '/api/conference/edit/doctorlist',
        method: 'POST',
        data: obj,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {

        var allData = that.state.getData;
        allData.doctor = targetTitle;
        that.setState({
          isShow: false,
          targetdoc: targetTitle,
          allData: allData,
          docId: obj,
          docKeys: targetKeys
        });
      }).catch(function () {});
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'huizhenyisheng',
    value: function huizhenyisheng() {
      if (this.state.consultationId) {
        this.setState({
          isShow: true
        });
      }
    }
  }, {
    key: 'quxiaohuizhenyisheng',
    value: function quxiaohuizhenyisheng() {

      this.setState({
        isShow: false,
        targetKeys: this.state.docKeys
      });
    }
    ///////////////////////////

  }, {
    key: 'send',
    value: function send() {
      if (this.state.saveCase) {
        if (this.state.saveAdvice) {
          if (this.state.targetdoc == false) {
            alert("会诊医生未选择!");
            return false;
          }
          _axios2.default.request({
            url: '/api/conference/commit',
            method: 'get',
            params: {
              id: this.state.consultationId.toString()
            },
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            }
          }).then(function (response) {
            if (response.data.code == 200) {
              alert("提交成功!");
              location.hash = "apply";
            }
          }).catch(function () {
            alert("提交失败!");
          });
        } else {
          alert("当前医嘱未保存!");
        }
      } else {
        alert("当前病历未保存!");
      }
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历

      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("当前病历未保存!");
          return false;
        }
      }

      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {}
      } else {}
      var caseShow = false;
      if (this.state.getData.case[index].statusId) {
        caseShow = true;
      }
      if (this.state.getData.case[index].file && this.state.getData.case[index].file != false) {}
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        caseId: caseShow,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      if (!this.state.saveAdvice) {
        if (index != this.state.history2Index) {
          alert("当前医嘱未保存!");
          return false;
        }
      }
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {}
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        history2Index: index,
        data: data
      });
    }
  }, {
    key: 'addHistory1',
    value: function addHistory1() {
      //增加病历
      if (this.state.saveCase) {
        var getData = JSON.parse(JSON.stringify(this.state.getData));
        var length = getData.case.length + 1;
        var obj = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": "", //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": '1',
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": "",
            "advice": "",
            "prescription": [{
              "id": "0",
              "prescriptionTime": "", //开方时间
              "doctorName": "", //开方医生姓名
              "medicineTime": "", //药品名称
              "total": "", //总量
              "singleDose": "", //单次用量
              "frequency": "" //次/日
            }]
          }]
        };
        obj.diagnosisTime = startTime;
        getData.case.push(obj);
        var history1 = obj;

        var history2 = obj.advice[0];
        var fileList = obj.file;
        history2.adviceTime = startTime;
        history2.statusId = 1;
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history1Index: length - 1 < 0 ? 0 : length - 1,
          history2Index: 0,
          saveCase: false,
          caseId: true,
          fileList: fileList
        });
      } else {
        alert("上一病历未保存!");
      }
    }
  }, {
    key: 'alertMsg',
    value: function alertMsg() {
      if (!this.state.saveCase) {
        alert("请先保存病历!");
      }
    }
  }, {
    key: 'changeDiagnosis',
    value: function changeDiagnosis(e) {
      //修改临床诊断
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosis = e.target.value;
        history1.diagnosis = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeName',
    value: function changeName(e) {
      //修改病历名称
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].name = e.target.value;
        history1.name = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeSn',
    value: function changeSn(e) {
      //修改病历编号
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].sn = e.target.value;
        history1.sn = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      //修改病历医院
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].hospital = e.target.value;
        history1.hospital = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDoctor',
    value: function changeDoctor(e) {
      //修改主治医生
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].doctor = e.target.value;
        history1.doctor = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDagnosisTime',
    value: function changeDagnosisTime(date, dateString) {
      //修改诊治日期
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosisTime = dateString;
        history1.diagnosisTime = dateString;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
    //修改医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱

  }, {
    key: 'changeAdviceTime',
    value: function changeAdviceTime(date, dateString) {
      //修改医嘱时间
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].adviceTime = dateString;
        history2.adviceTime = dateString;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdvice',
    value: function changeAdvice(e) {
      //修改医嘱
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].advice = e.target.value;
        history2.advice = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceDoctor',
    value: function changeAdviceDoctor(e) {
      //修改医嘱医生
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].doctor = e.target.value;
        history2.doctor = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceHospital',
    value: function changeAdviceHospital(e) {
      //修改医嘱医院
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].hospital = e.target.value;
        history2.hospital = e.target.value;

        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'saveCase',
    value: function saveCase() {
      //保存病历

      if (!this.state.saveConsultationL) {
        alert("请先保存会诊资料!!!");
        return false;
      }

      var postCase = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index]));
      if (!postCase.sn) {
        alert("病历编号不能为空!!!");
        return false;
      }
      if (!postCase.hospital) {
        alert("病例医院不能为空!!!");
        return false;
      }

      var advice = JSON.parse(JSON.stringify(postCase.advice));
      delete postCase.advice;
      postCase.consultationId = this.state.consultationId;
      postCase.userId = this.state.userId;
      if (postCase.id) {
        postCase.id = postCase.id.toString();
        delete postCase.consultationId;
        delete postCase.userId;
      }
      var url = postCase.id ? "/api/conference/edit/case" : "/api/conference/add/case";
      var that = this;
      _axios2.default.request({
        url: url,
        method: 'POST',
        data: postCase,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.data.id) {
          postCase.id = response.data.id;
        }
        postCase.advice = advice;
        var getData = JSON.parse(JSON.stringify(that.state.getData));
        getData.case[that.state.history1Index] = postCase;

        that.setState({
          saveCase: true,
          history1: postCase,
          getData: getData,
          history2: postCase.advice ? postCase.advice[0] : null,
          dis: true
        });
        alert("病历保存成功!");
      }).catch(function () {
        alert("病历保存失败!");
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.consultationName = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changesStartTime',
    value: function changesStartTime(date, dateString) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.startTime = dateString;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeUsername',
    value: function changeUsername(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.username = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.phone = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'checkUserId',
    value: function checkUserId() {
      var that = this;
      var data = this.state.getData.consultation.phone;
      _axios2.default.request({
        url: "/api/conference/selectWithPhone",
        method: 'get',
        params: {
          phone: data
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        if (response.data.result !== false) {
          var getData = that.state.getData;
          var hospital = getData.consultation.hospital;
          var applicant = getData.consultation.applicant;
          var consultationName = getData.consultation.consultationName;
          var _startTime = getData.consultation.startTime;
          getData.consultation = response.data.result[0];
          getData.consultation.hospital = hospital;
          getData.consultation.applicant = applicant;
          getData.consultation.startTime = _startTime;
          getData.consultation.consultationName = consultationName;
          that.setState({
            getData: getData,
            userId: getData.consultation.id,
            saveConsultationL: true
          });
        }
      });
    }
  }, {
    key: 'changeBirthday',
    value: function changeBirthday(date, dateString) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.birthday = dateString;
      this.setState({
        getData: getData,
        selectTime: true
      });
    }
  }, {
    key: 'changeFamliyName',
    value: function changeFamliyName(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.famliyName = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeIdentification',
    value: function changeIdentification(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.identification = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeFamilyPhone',
    value: function changeFamilyPhone(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.familyPhone = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeContent',
    value: function changeContent(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.content = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'saveConsulation',
    value: function saveConsulation() {
      //保存会诊
      var postConsulation = this.state.getData.consultation;

      if (_checked2.default.isEmpty(postConsulation.consultationName)) {
        alert("会诊名称不能为空!");
        return false;
      }
      if (_checked2.default.isEmpty(postConsulation.startTime)) {
        alert("会诊时间不能为空!");
        return false;
      }

      if (!_checked2.default.mobileValidate(postConsulation.phone)) {
        alert("手机号不能为空或手机号格式错误!");
        return false;
      }
      if (_checked2.default.isEmpty(postConsulation.username)) {
        alert("会诊对象不能为空!");
        return false;
      }

      if (!_checked2.default.cardValidate(postConsulation.identification)) {
        alert("身份证号不能为空或身份证号格式填写错误!");
        return false;
      }

      postConsulation.userId = this.state.userId ? this.state.userId.toString().toString() : "";
      delete postConsulation.id;
      console.log(postConsulation);
      var that = this;
      _axios2.default.request({
        url: "/api/conference/add/consultation",
        method: 'POST',
        data: postConsulation,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.data.result) {
          postConsulation.id = response.data.id;
          console.log(response.data.userId);
          var getData = JSON.parse(JSON.stringify(that.state.getData));
          getData.consultation = postConsulation;
          that.setState({
            saveConsultationL: true,
            caseId: true,
            consultationId: response.data.id.toString(),
            userId: response.data.userId.toString(),
            dis: true
          });
          alert("会诊保存成功!");
        }
      }).catch(function () {
        alert("会诊保存失败!");
      });
    }
  }, {
    key: 'saveAdvice',
    value: function saveAdvice() {
      //保存医嘱
      if (this.state.saveCase) {
        var postAdvice = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index].advice[this.state.history2Index]));
        var prescription = JSON.parse(JSON.stringify(postAdvice.prescription));
        delete postAdvice.prescription;
        if (postAdvice.id) {
          postAdvice.id = postAdvice.id.toString();
        }
        postAdvice.caseId = this.state.history1.id.toString();
        var url = postAdvice.id ? "/api/conference/edit/advice" : "/api/conference/add/advice";
        var that = this;
        _axios2.default.request({
          url: url,
          method: 'POST',
          data: postAdvice,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.data.id) {
            postAdvice.id = response.data.id;
          }
          postAdvice.prescription = prescription;
          var getData = JSON.parse(JSON.stringify(that.state.getData));
          getData.case[that.state.history1Index].advice[that.state.history2Index] = postAdvice;
          that.setState({
            saveCase: true,
            history1: getData.case[that.state.history1Index],
            getData: getData,
            history2: postAdvice
          });
          alert("医嘱保存成功!");
        }).catch(function () {
          alert("医嘱保存失败!");
        });

        this.setState({
          saveAdvice: true
        });
      } else {
        alert("病历未保存!");
      }
    }
  }, {
    key: 'addHistory2',
    value: function addHistory2() {
      //增加医嘱
      if (this.state.saveAdvice) {
        var getData = this.state.getData;
        var length = getData.case[this.state.history1Index].advice.length;

        var obj = {
          "hospital": "",
          "doctor": "",
          "adviceTime": "",
          "advice": "",
          "prescription": [{
            "id": "0",
            "prescriptionTime": "", //开方时间
            "doctorName": "", //开方医生姓名
            "medicineTime": "", //药品名称
            "total": "", //总量
            "singleDose": "", //单次用量
            "frequency": "" //次/日
          }]
        };
        obj.adviceTime = startTime;
        obj.statusId = 1;
        getData.case[this.state.history1Index].advice.push(obj);
        var history1 = getData.case[this.state.history1Index];
        var history2 = getData.case[this.state.history1Index].advice[history1.advice.length - 1];
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history2Index: length,
          saveAdvice: false
        });
      } else {
        alert("上一医嘱未保存");
      }
    }
  }, {
    key: 'addPrescription',
    value: function addPrescription() {
      //增加处方-显示弹框
      if (this.state.saveAdvice) {
        //这里会有一个数据请求，获取处方的id
        var obj = {
          "prescriptionTime": startTime, //开方时间
          "doctorName": "", //开方医生姓名
          "medicineTime": "", //药品名称
          "total": "", //总量
          "singleDose": "", //单次用量
          "frequency": "" //次/日
        };
        this.setState({
          showPrescription: true,
          centerPrescription: obj
        });
      } else {
        alert("医嘱未保存!");
      }
    }
  }, {
    key: 'changeDoctorName',
    value: function changeDoctorName(e) {
      //处方医生姓名
      var obj = this.state.centerPrescription;
      obj.doctorName = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changePrescriptionTime',
    value: function changePrescriptionTime(date, dateString) {
      //开方时间
      var obj = this.state.centerPrescription;
      obj.prescriptionTime = dateString;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeMedicineTime',
    value: function changeMedicineTime(e) {
      //处方药物名称
      var obj = this.state.centerPrescription;
      obj.medicineTime = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeTotal',
    value: function changeTotal(e) {
      //处方总量
      var obj = this.state.centerPrescription;
      obj.total = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeSingleDose',
    value: function changeSingleDose(e) {
      //处方单次用量
      var obj = this.state.centerPrescription;
      obj.singleDose = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeFrequency',
    value: function changeFrequency(e) {
      //处方   次/日
      var obj = this.state.centerPrescription;
      obj.frequency = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'deletePrescription',
    value: function deletePrescription(index) {
      var data1 = this.state.data;
      var getData = this.state.getData;
      var that = this;
      console.log(getData.case[this.state.history1Index].advice[this.state.history2Index].prescription[index].id);
      _axios2.default.request({
        url: "/api/conference/delete/prescription",
        method: 'get',
        params: {
          id: getData.case[that.state.history1Index].advice[that.state.history2Index].prescription[index].id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.splice(index, 1);
        data1.splice(index, 1);
        that.setState({
          getData: getData,
          data: data1
        });
      });
    }
  }, {
    key: 'cancelSaveCF',
    value: function cancelSaveCF() {
      this.setState({
        showPrescription: false
      });
    }
  }, {
    key: 'closePrescription',
    value: function closePrescription() {
      //保存处方并关闭处方弹出框

      var postData = this.state.centerPrescription;
      console.log(this.state.history2);
      postData.adId = this.state.history2.id.toString();
      var that = this;
      _axios2.default.request({
        url: '/api/conference/add/prescription',
        method: 'POST',
        data: postData,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postData.id = response.data.id;
        var prescriptionData = that.state.data;
        prescriptionData.unshift(postData);
        var getData = that.state.getData;
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.unshift(postData);
        that.setState({
          data: prescriptionData,
          getData: getData,
          showPrescription: false,
          savePrescription: true
        });
      }).catch(function () {
        alert("保存处方失败，请检查网络!");
      });
    }
  }, {
    key: 'deleteHistory1',
    value: function deleteHistory1(index) {
      //删除病历


      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("请先保存病历!");
          return false;
        }
      }

      var getData = JSON.parse(JSON.stringify(this.state.getData));
      if (getData.case.length == 1) {
        getData.case[0] = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": startTime, //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": 1,
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": startTime,
            "advice": "",
            "statusId": 1,
            "prescription": [{
              "id": '0',
              "prescriptionTime": "-", //开方时间
              "doctorName": "-", //开方医生姓名
              "medicineTime": "-", //药品名称
              "total": "-", //总量
              "singleDose": "-", //单次用量
              "frequency": "-" //次/日
            }]
          }]
        };
        var history2 = getData.case[0].advice ? getData.case[0].advice[0] : null;
        var fileList = getData.case[0].file;
        var data = history2.prescription;
        this.setState({
          getData: getData,
          history1: getData.case[0],
          history2: history2,
          history1Index: 0,
          history2Index: 0,
          data: data,
          saveCase: false,
          caseId: true,
          saveAdvice: false,
          fileList: fileList
        });
      } else {
        var saveCase = void 0;
        if (getData.case[index].statusId) {
          saveCase = true;
        }
        getData.case.splice(index, 1);
        if (index == getData.case.length - 1) {} else {
          index = index < 1 ? 0 : index - 1;
        }
        var _history = getData.case[index].advice ? getData.case[index].advice[0] : null;

        var _data = _history ? _history.prescription : [];
        if (_data == false) {
          _data.push(this.state.oldData);
        }
        this.setState({
          getData: getData,
          history1: getData.case[index],
          history2: _history,
          history1Index: index,
          history2Index: 0,
          data: _data,
          saveCase: true
        });
      }
    }
  }, {
    key: 'deleteHistory2',
    value: function deleteHistory2(index) {
      //删除医嘱
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.case[this.state.history1Index].advice.splice(index, 1);
      index = index < 1 ? 0 : index - 1;
      var history1 = getData.case[this.state.history1Index];
      var history2 = history1.advice ? history1.advice[index] : null;
      var data = history2 ? history2.prescription : [];
      var saveAdvice = history2 ? false : true;
      if (data == false) {
        data.push(this.state.oldData);
      }
      this.setState({
        getData: getData,
        history1: history1,
        history2: history2,
        history2Index: this.state.history2Index - 1,
        data: data,
        saveAdvice: saveAdvice
      });
    }
  }, {
    key: 'upLoadMsg',
    value: function upLoadMsg() {}
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var style = { "height": document.body.clientHeight };
      var that = this;
      var caseId = null;
      var Hidden = { "overflowY": "hidden" };
      var Width = { "width": document.body.clientWidth, "height": document.body.clientHeight };
      if (this.state.history1.id) {
        caseId = this.state.history1.id.toString();
      }
      var props = { //上传的事件
        action: '/upload/consultation/' + caseId,
        headers: {
          "Authorization": "Bearer " + token
        },
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            if (!that.state.saveCase) {
              alert("病历未保存!");
              return false;
            }
            if (fileList.length) {
              var getData = that.state.getData;
              getData.case[that.state.history1Index].file = getData.case[that.state.history1Index].file ? getData.case[that.state.history1Index].file : [];
              getData.case[that.state.history1Index].file.push(fileList[fileList.length - 1].response.result);
              var list = getData.case[that.state.history1Index].file;
              that.setState({
                fileList: list,
                getData: getData
              });
            }
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { style: this.state.showPrescription ? Hidden : this.state.isShow ? Hidden : null, className: 'newHidden' },
        this.state.showPrescription ? _react2.default.createElement(
          'div',
          { style: style, className: 'Prescription' },
          _react2.default.createElement(
            'div',
            { className: 'showPrescription' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { showTime: true, format: dateFormat, onChange: this.changePrescriptionTime.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u65F6\u95F4' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u533B\u751F\u59D3\u540D'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.doctorName, onChange: this.changeDoctorName.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u836F\u54C1\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.medicineTime, onChange: this.changeMedicineTime.bind(this), size: 'large', placeholder: '\u836F\u54C1\u540D\u79F0' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u603B\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.total, onChange: this.changeTotal.bind(this), size: 'large', placeholder: '\u603B\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5355\u6B21\u7528\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.singleDose, onChange: this.changeSingleDose.bind(this), size: 'large', placeholder: '\u5355\u6B21\u7528\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u9891\u6B21'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.frequency, onChange: this.changeFrequency.bind(this), size: 'large', placeholder: '\u9891\u6B21' })
              )
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.closePrescription.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58\u5904\u65B9'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.cancelSaveCF.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u53D6\u6D88\u4FDD\u5B58'
            )
          )
        ) : "",
        this.state.isShow ? _react2.default.createElement(
          'div',
          { style: Width, className: 'transfer_box' },
          _react2.default.createElement(
            'div',
            { className: 'transfer' },
            _react2.default.createElement(_transfer2.default, {
              dataSource: this.state.mockData,
              listStyle: {
                width: 300,
                height: 500
              },
              rowKey: function rowKey(record) {
                return record.key;
              },
              targetKeys: this.state.targetKeys,
              targetKeys1: this.state.targetKeys1,
              onChange: this.handleChange.bind(this),
              render: this.renderItem.bind(this)
            }),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.queDing();
                }, className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.quxiaohuizhenyisheng();
                }, className: 'transfer_btn', type: 'primary' },
              '\u53D6\u6D88'
            )
          )
        ) : "",
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u65B0\u589E\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.hospital, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.applicant, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { placeholder: '\u5FC5\u586B', showTime: true, format: dateFormat, size: 'large', className: 'search_input', onChange: this.changesStartTime.bind(this) })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, onBlur: this.checkUserId.bind(this), className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changePhone.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeUsername.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeIdentification.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { placeholder: '\u51FA\u751F\u65E5\u671F', format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeBirthday.bind(this) })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E', onChange: this.changeFamliyName.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', onChange: this.changeFamilyPhone.bind(this) })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4, onChange: this.changeContent.bind(this) })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn_save' },
          _react2.default.createElement(
            'div',
            { className: 'btn_save_index' },
            _react2.default.createElement(
              _button2.default,
              { disabled: this.state.dis, onClick: this.saveConsulation.bind(this), className: 'btn_save_index_2', type: 'primary' },
              '\u4FDD\u5B58\u4F1A\u8BCA'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { className: 'history_case', key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory1.bind(_this4, index), className: 'history_sp1' },
                  '\u75C5\u4F8B ',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory1.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory1.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeSn.bind(this) })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeHospital.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', onChange: this.changeDoctor.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', onChange: this.changeName.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeDagnosisTime.bind(this) })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { onChange: this.changeDiagnosis.bind(this), value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          this.state.history1.statusId ? _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { onClick: this.saveCase.bind(this), className: 'btn_save_index_2', type: 'primary' },
                '\u4FDD\u5B58\u75C5\u5386'
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory2.bind(_this4, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory2.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            this.state.caseId ? _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory2.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            ) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", onChange: this.changeAdviceHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", onChange: this.changeAdviceDoctor.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeAdviceTime.bind(this) })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", onChange: this.changeAdvice.bind(this), className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            this.state.history2.statusId ? _react2.default.createElement(
              'div',
              { className: 'btn_save' },
              _react2.default.createElement(
                'div',
                { className: 'btn_save_index' },
                _react2.default.createElement(
                  _button2.default,
                  { onClick: this.saveAdvice.bind(this), className: 'btn_save_index_2', type: 'primary' },
                  '\u4FDD\u5B58\u533B\u5631'
                )
              )
            ) : "",
            this.state.data && this.state.data.length > 0 ? _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data })
              )
            ) : ""
          ) : "",
          this.state.fileList ? _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { onClick: this.alertMsg.bind(this), className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            this.state.caseId ? _react2.default.createElement(
              _upload2.default,
              props,
              _react2.default.createElement(
                _button2.default,
                { className: 'history_btn1' },
                _react2.default.createElement(_icon2.default, { type: 'upload' })
              )
            ) : "",
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList })
          ) : "",
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', onFocus: function onFocus() {
                  return _this4.huizhenyisheng();
                }, type: 'textarea', rows: 4 })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { className: 'btn_save_index_2', type: 'primary', onClick: function onClick() {
                    return _this4.send();
                  } },
                '\u63D0\u4EA4'
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'apply' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u53D6\u6D88'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NewConsultation;
}(_react.Component);

exports.default = NewConsultation;

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style9 = __webpack_require__(100);

var _upload = __webpack_require__(82);

var _upload2 = _interopRequireDefault(_upload);

var _style10 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style11 = __webpack_require__(96);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _style12 = __webpack_require__(120);

var _transfer = __webpack_require__(99);

var _transfer2 = _interopRequireDefault(_transfer);

var _style13 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style14 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style15 = __webpack_require__(81);

var _message = __webpack_require__(66);

var _message2 = _interopRequireDefault(_message);

var _style16 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(286);

__webpack_require__(130);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _checked = __webpack_require__(79);

var _checked2 = _interopRequireDefault(_checked);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var startTime = function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate;
}();
var token = localStorage.getItem("robertUserName");
var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": startTime, //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": startTime, //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //case编号
    "hospital": "", //case医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": startTime, //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    "file": [],
    "statusId": '1',
    "advice": [{
      "hospital": "",
      "statusId": '1',
      "doctor": "",
      "adviceTime": startTime,
      "advice": "",
      "prescription": [{
        "id": "0",
        "prescriptionTime": "", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var AddConsultation = function (_Component) {
  _inherits(AddConsultation, _Component);

  function AddConsultation(props) {
    _classCallCheck(this, AddConsultation);

    var _this = _possibleConstructorReturn(this, (AddConsultation.__proto__ || Object.getPrototypeOf(AddConsultation)).call(this, props));

    _this.state = {
      isShow: false,
      hospitalId: null,
      consultationId: null,
      saveCase: true, //是否保存了病历
      userId: null,
      savePrescription: false, //是否保存了处方
      saveConsultationL: false, //是否保存了会诊
      saveAdvice: true, //是否保存了医嘱
      caseId: true, //是否显示添加医嘱按钮
      showPrescription: false, //是否显示新增处方弹出框
      getData: allData,
      oldPhone: null, //获取的手机号
      centerPrescription: null,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2Index: 0, //当前显示的医嘱的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime'
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _this.state.history1.statusId ? _react2.default.createElement(
              'span',
              null,
              record.id == 0 ? _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.addPrescription.bind(_this), className: 'addMedicine', type: 'primary' },
                  '\u65B0\u589E'
                )
              ) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.deletePrescription.bind(_this, index), className: 'addMedicine', type: 'primary' },
                  '\u5220\u9664'
                )
              )
            ) : "-"
          );
        }
      }],
      fileListColumns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1,
            ' '
          );
        }
      }, {
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.url, target: 'blank', className: 'apply_link' },
              '\u67E5\u770B'
            ),
            _this.state.history1.statusId ? _react2.default.createElement(
              _reactRouter.Link,
              { to: '', onClick: _this.deleteFile.bind(_this, record.id, index), className: 'apply_link' },
              '\u5220\u9664'
            ) : ""
          );
        }
      }],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      data: [{
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      docUserId: [], //选中的医生的要上传的格式
      targetdoc: [], //选中的医生信息
      fileList: null, //显示的上传文件集合,
      dis: false
    };
    return _this;
  }

  /////////////////////////

  _createClass(AddConsultation, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.setState({
          hospitalId: response.data.result[0].hospitalId

        });
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        var data = [];
        var caseId = false;
        var fileList = [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          caseId = true;
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }

        // let getData=response.data.case&&response.data.case!=false?response.data:allData;
        getData.consultationId = that.props.params.id;

        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? getData.case[0].advice[0] : null,
          targetdoc: getData.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          fileList: fileList,
          oldPhone: getData.consultation.phone,
          userId: getData.consultation.userId
        });
        //因为异步的原因，所以只能在回调函数里面放数据请求了
        that.getPeople();

        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;
          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {});

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getValue();
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode == 27) {
        this.setState({
          showPrescription: false
        });
      }
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile(id, index) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/deleteCaseFile',
        method: 'get',
        params: {
          caseFileId: id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.case[that.state.history1Index].file.splice(index, 1);
        var list = getData.case[that.state.history1Index].file;
        that.setState({
          fileList: list,
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'handleChange',
    value: function handleChange(targetKeys) {
      var _this2 = this;

      var docUserId = [];
      var targetKey = targetKeys;
      var num = 0;
      this.state.docList.map(function (ele, index) {
        if (targetKey.indexOf(ele.doctorId) !== -1) {
          var obj = {};
          obj.user = ele.userId.toString();
          obj.hospitalId = ele.hospitalId.toString();
          docUserId.push(obj);
        }
      });

      docUserId.map(function (ele) {
        if (ele.hospitalId === _this2.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.warning("同一医院只能选择一名医生!");
      }

      this.setState({
        targetKeys: targetKeys,
        docUserId: docUserId
      });
    }
  }, {
    key: 'queDing',
    value: function queDing() {
      var _this3 = this;

      var num = 0;
      this.state.docUserId.map(function (ele) {
        if (ele.hospitalId === _this3.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.error('同一医院只能选择一名医生!');
        return false;
      } else if (num === 0) {
        _message2.default.error('本医院医生未选择!');
        return false;
      }
      var targetKeys = this.state.targetKeys;
      var arr = [];
      var targetTitle = [];
      for (var i = 0; i < targetKeys.length; i++) {
        var _obj2 = {};
        _obj2.doctor = targetKeys[i].toString();
        arr.push(_obj2);
        for (var k = 0; k < this.state.docList.length; k++) {
          if (targetKeys[i] == this.state.docList[k].doctorId * 1) {
            targetTitle.push(this.state.docList[k]);
          }
        }
      }
      var obj = {};
      obj.consultationId = this.state.consultationId;
      obj.doctorId = arr;

      var that = this;
      _axios2.default.request({
        url: '/api/conference/edit/doctorlist',
        method: 'POST',
        data: obj,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {

        var allData = that.state.getData;
        allData.doctor = targetTitle;
        that.setState({
          isShow: false,
          targetdoc: targetTitle,
          allData: allData,
          docId: obj,
          docKeys: targetKeys
        });
      }).catch(function () {});
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'huizhenyisheng',
    value: function huizhenyisheng() {
      this.setState({
        isShow: true
      });
    }
  }, {
    key: 'quxiaohuizhenyisheng',
    value: function quxiaohuizhenyisheng() {

      this.setState({
        isShow: false,
        targetKeys: this.state.docKeys
      });
    }
    ///////////////////////////

  }, {
    key: 'send',
    value: function send() {

      if (!this.state.consultationId) {
        alert("请先保存您的会诊资料!");
        return false;
      }
      if (this.state.saveCase) {
        if (this.state.saveAdvice) {
          if (this.state.targetdoc == false) {
            alert("会诊医生未选择!");
            return false;
          }
          _axios2.default.request({
            url: '/api/conference/commit',
            method: 'get',
            params: {
              id: this.state.consultationId.toString()
            },
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            }
          }).then(function (response) {
            if (response.data.code == 200) {
              alert("提交成功!");
              location.hash = "apply";
            }
          }).catch(function () {
            alert("提交失败!");
          });
        } else {
          alert("当前医嘱未保存!");
        }
      } else {
        alert("当前病历未保存!");
      }
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历

      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("当前病历未保存!");
          return false;
        }
      }

      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {}
      } else {}
      var caseShow = false;
      if (this.state.getData.case[index].statusId) {
        caseShow = true;
      }
      if (this.state.getData.case[index].file && this.state.getData.case[index].file != false) {}
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        caseId: caseShow,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      if (!this.state.saveAdvice) {
        if (index != this.state.history2Index) {
          alert("当前医嘱未保存!");
          return false;
        }
      }
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {}
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        history2Index: index,
        data: data
      });
    }
  }, {
    key: 'addHistory1',
    value: function addHistory1() {
      //增加病历
      if (this.state.saveCase) {
        var getData = JSON.parse(JSON.stringify(this.state.getData));
        var length = getData.case.length + 1;
        var obj = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": "", //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": '1',
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": "",
            "advice": "",
            "prescription": [{
              "id": "0",
              "prescriptionTime": "", //开方时间
              "doctorName": "", //开方医生姓名
              "medicineTime": "", //药品名称
              "total": "", //总量
              "singleDose": "", //单次用量
              "frequency": "" //次/日
            }]
          }]
        };
        obj.diagnosisTime = startTime;
        getData.case.push(obj);
        var history1 = obj;

        var history2 = obj.advice[0];
        var fileList = obj.file;
        history2.adviceTime = startTime;
        history2.statusId = 1;
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history1Index: length - 1 < 0 ? 0 : length - 1,
          history2Index: 0,
          saveCase: false,
          caseId: true,
          fileList: fileList
        });
      } else {
        alert("上一病历未保存!");
      }
    }
  }, {
    key: 'alertMsg',
    value: function alertMsg() {
      if (!this.state.saveCase) {
        alert("请先保存病历!");
      }
    }
  }, {
    key: 'changeDiagnosis',
    value: function changeDiagnosis(e) {
      //修改临床诊断
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosis = e.target.value;
        history1.diagnosis = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeName',
    value: function changeName(e) {
      //修改病历名称
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].name = e.target.value;
        history1.name = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeSn',
    value: function changeSn(e) {
      //修改病历编号
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].sn = e.target.value;
        history1.sn = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      //修改病历医院
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].hospital = e.target.value;
        history1.hospital = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDoctor',
    value: function changeDoctor(e) {
      //修改主治医生
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].doctor = e.target.value;
        history1.doctor = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDagnosisTime',
    value: function changeDagnosisTime(date, dateString) {
      //修改诊治日期
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosisTime = dateString;
        history1.diagnosisTime = dateString;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
    //修改医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱

  }, {
    key: 'changeAdviceTime',
    value: function changeAdviceTime(date, dateString) {
      //修改医嘱时间
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].adviceTime = dateString;
        history2.adviceTime = dateString;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdvice',
    value: function changeAdvice(e) {
      //修改医嘱
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].advice = e.target.value;
        history2.advice = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceDoctor',
    value: function changeAdviceDoctor(e) {
      //修改医嘱医生
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].doctor = e.target.value;
        history2.doctor = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceHospital',
    value: function changeAdviceHospital(e) {
      //修改医嘱医院
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].hospital = e.target.value;
        history2.hospital = e.target.value;

        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'saveCase',
    value: function saveCase() {
      //保存病历

      if (!this.state.saveConsultationL) {
        alert("请先保存会诊资料!!!");
        return false;
      }

      var postCase = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index]));

      if (!postCase.sn) {
        alert("病例医院不能为空!!!");
        return false;
      }
      if (!postCase.hospital) {
        alert("病例医院不能为空!!!");
        return false;
      }
      var advice = JSON.parse(JSON.stringify(postCase.advice));
      delete postCase.advice;
      postCase.id = this.state.consultationId;
      postCase.userId = this.state.getData.consultation.userId.toString();
      if (postCase.id) {
        postCase.id = postCase.id.toString();
        delete postCase.consultationId;
        delete postCase.userId;
      }
      var url = postCase.id ? "/api/conference/edit/case" : "/api/conference/add/case";
      var that = this;
      _axios2.default.request({
        url: url,
        method: 'POST',
        data: postCase,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.data.id) {
          postCase.id = response.data.id;
        }
        postCase.advice = advice;
        var getData = JSON.parse(JSON.stringify(that.state.getData));
        getData.case[that.state.history1Index] = postCase;

        that.setState({
          saveCase: true,
          history1: postCase,
          getData: getData,
          history2: postCase.advice ? postCase.advice[0] : null
        });
        alert("病历保存成功!");
      }).catch(function () {
        alert("病历保存失败!");
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.consultationName = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changesStartTime',
    value: function changesStartTime(dataString) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.startTime = dataString;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeUsername',
    value: function changeUsername(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.username = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.phone = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'checkUserId',
    value: function checkUserId() {
      var that = this;
      var data = this.state.getData.consultation.phone;
      var oldPhone = this.state.oldPhone;
      _axios2.default.request({
        url: "/api/conference/selectWithPhone",
        method: 'get',
        params: {
          phone: data
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        var hospital = getData.consultation.hospital;
        var applicant = getData.consultation.applicant;
        var consultationName = getData.consultation.consultationName;
        var startTime = getData.consultation.startTime;
        var caseId = false;
        var prescriptionData = [];
        if (response.data.result != false) {
          getData.consultation = response.data.result[0];
          getData.consultation.hospital = hospital;
          getData.consultation.applicant = applicant;
          getData.consultation.startTime = startTime;
          getData.consultation.consultationName = consultationName;
        }
        if (parseFloat(data) == parseFloat(that.state.oldPhone)) {} else {
          caseId = true;
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            prescriptionData.push(ele);
          }) : "";
        }
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? getData.case[0].advice[0] : null,
          userId: getData.consultation.id,
          saveConsultationL: false,
          saveCase: false,
          caseId: caseId,
          data: prescriptionData,
          fileList: [],
          saveAdvice: false
        });
      });
    }
  }, {
    key: 'changeBirthday',
    value: function changeBirthday(dataString) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.birthday = dataString;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeFamliyName',
    value: function changeFamliyName(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.famliyName = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeIdentification',
    value: function changeIdentification(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.identification = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeFamilyPhone',
    value: function changeFamilyPhone(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.familyPhone = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'changeContent',
    value: function changeContent(e) {
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.consultation.content = e.target.value;
      this.setState({
        getData: getData
      });
    }
  }, {
    key: 'saveConsulation',
    value: function saveConsulation() {
      //保存会诊
      var postConsulation = this.state.getData.consultation;

      if (_checked2.default.isEmpty(postConsulation.consultationName)) {
        alert("会诊名称不能为空!");
        return false;
      }
      if (_checked2.default.isEmpty(postConsulation.startTime)) {
        alert("会诊时间不能为空!");
        return false;
      }

      if (!_checked2.default.mobileValidate(postConsulation.phone)) {
        alert("手机号不能为空或手机号格式错误!");
        return false;
      }
      if (_checked2.default.isEmpty(postConsulation.username)) {
        alert("会诊对象不能为空!");
        return false;
      }

      if (!_checked2.default.cardValidate(postConsulation.identification)) {
        alert("身份证号不能为空或身份证号格式填写错误!");
        return false;
      }

      if (_checked2.default.isEmpty(postConsulation.birthday)) {
        alert("出生日期不能为空!");
        return false;
      }

      postConsulation.userId = this.state.userId ? this.state.userId.toString().toString() : "";
      delete postConsulation.id;
      console.log(postConsulation);
      var that = this;
      _axios2.default.request({
        url: "/api/conference/add/consultation",
        method: 'POST',
        data: postConsulation,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postConsulation.id = response.data.id;
        var getData = JSON.parse(JSON.stringify(that.state.getData));
        getData.consultation = postConsulation;
        that.setState({
          saveConsultationL: true,
          caseId: true,
          consultationId: response.data.id.toString(),
          dis: true
        });
        alert("会诊保存成功!");
      }).catch(function () {
        alert("会诊保存失败!");
      });
    }
  }, {
    key: 'saveAdvice',
    value: function saveAdvice() {
      //保存医嘱
      if (this.state.saveCase) {
        var postAdvice = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index].advice[this.state.history2Index]));
        var prescription = JSON.parse(JSON.stringify(postAdvice.prescription));
        delete postAdvice.prescription;
        if (postAdvice.id) {
          postAdvice.id = postAdvice.id.toString();
        }
        postAdvice.caseId = this.state.history1.id.toString();
        var url = postAdvice.id ? "/api/conference/edit/advice" : "/api/conference/add/advice";
        var that = this;
        _axios2.default.request({
          url: url,
          method: 'POST',
          data: postAdvice,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.data.id) {
            postAdvice.id = response.data.id;
          }
          postAdvice.prescription = prescription;
          var getData = JSON.parse(JSON.stringify(that.state.getData));
          getData.case[that.state.history1Index].advice[that.state.history2Index] = postAdvice;
          that.setState({
            saveCase: true,
            history1: getData.case[that.state.history1Index],
            getData: getData,
            history2: postAdvice
          });
          alert("医嘱保存成功!");
        }).catch(function () {
          alert("医嘱保存失败!");
        });

        this.setState({
          saveAdvice: true
        });
      } else {
        alert("病历未保存!");
      }
    }
  }, {
    key: 'addHistory2',
    value: function addHistory2() {
      //增加医嘱
      if (this.state.saveAdvice) {
        var getData = this.state.getData;
        var length = getData.case[this.state.history1Index].advice.length;

        var obj = {
          "hospital": "",
          "doctor": "",
          "adviceTime": "",
          "advice": "",
          "prescription": [{
            "id": "0",
            "prescriptionTime": "", //开方时间
            "doctorName": "", //开方医生姓名
            "medicineTime": "", //药品名称
            "total": "", //总量
            "singleDose": "", //单次用量
            "frequency": "" //次/日
          }]
        };
        obj.adviceTime = startTime;
        obj.statusId = 1;
        getData.case[this.state.history1Index].advice.push(obj);
        var history1 = getData.case[this.state.history1Index];
        var history2 = getData.case[this.state.history1Index].advice[history1.advice.length - 1];
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history2Index: length,
          saveAdvice: false
        });
      } else {
        alert("上一医嘱未保存");
      }
    }
  }, {
    key: 'addPrescription',
    value: function addPrescription() {
      //增加处方-显示弹框
      if (this.state.saveAdvice) {
        //这里会有一个数据请求，获取处方的id
        var obj = {
          "prescriptionTime": startTime, //开方时间
          "doctorName": "", //开方医生姓名
          "medicineTime": "", //药品名称
          "total": "", //总量
          "singleDose": "", //单次用量
          "frequency": "" //次/日
        };
        this.setState({
          showPrescription: true,
          centerPrescription: obj
        });
      } else {
        alert("医嘱未保存!");
      }
    }
  }, {
    key: 'changeDoctorName',
    value: function changeDoctorName(e) {
      //处方医生姓名
      var obj = this.state.centerPrescription;
      obj.doctorName = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changePrescriptionTime',
    value: function changePrescriptionTime(date, dateString) {
      //开方时间
      var obj = this.state.centerPrescription;
      obj.prescriptionTime = dateString;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeMedicineTime',
    value: function changeMedicineTime(e) {
      //处方药物名称
      var obj = this.state.centerPrescription;
      obj.medicineTime = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeTotal',
    value: function changeTotal(e) {
      //处方总量
      var obj = this.state.centerPrescription;
      obj.total = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeSingleDose',
    value: function changeSingleDose(e) {
      //处方单次用量
      var obj = this.state.centerPrescription;
      obj.singleDose = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeFrequency',
    value: function changeFrequency(e) {
      //处方   次/日
      var obj = this.state.centerPrescription;
      obj.frequency = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'deletePrescription',
    value: function deletePrescription(index) {
      var data1 = this.state.data;
      var getData = this.state.getData;
      var that = this;
      console.log(getData.case[this.state.history1Index].advice[this.state.history2Index].prescription[index].id);
      _axios2.default.request({
        url: "/api/conference/delete/prescription",
        method: 'get',
        params: {
          id: getData.case[that.state.history1Index].advice[that.state.history2Index].prescription[index].id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.splice(index, 1);
        data1.splice(index, 1);
        that.setState({
          getData: getData,
          data: data1
        });
      });
    }
  }, {
    key: 'cancelSaveCF',
    value: function cancelSaveCF() {
      this.setState({
        showPrescription: false
      });
    }
  }, {
    key: 'closePrescription',
    value: function closePrescription() {
      //保存处方并关闭处方弹出框

      var postData = this.state.centerPrescription;
      postData.adId = this.state.history2.id.toString();
      var that = this;
      _axios2.default.request({
        url: '/api/conference/add/prescription',
        method: 'POST',
        data: postData,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postData.id = response.data.id;
        var prescriptionData = that.state.data;
        prescriptionData.unshift(postData);
        var getData = that.state.getData;
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.unshift(postData);
        that.setState({
          data: prescriptionData,
          getData: getData,
          showPrescription: false,
          savePrescription: true
        });
      }).catch(function () {
        alert("保存处方失败，请检查网络!");
      });
    }
  }, {
    key: 'deleteHistory1',
    value: function deleteHistory1(index) {
      //删除病历


      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("请先保存病历!");
          return false;
        }
      }
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      if (getData.case.length == 1) {
        getData.case[0] = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": startTime, //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": 1,
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": startTime,
            "advice": "",
            "statusId": 1,
            "prescription": [{
              "id": '0',
              "prescriptionTime": "-", //开方时间
              "doctorName": "-", //开方医生姓名
              "medicineTime": "-", //药品名称
              "total": "-", //总量
              "singleDose": "-", //单次用量
              "frequency": "-" //次/日
            }]
          }]
        };
        var history2 = getData.case[0].advice ? getData.case[0].advice[0] : null;
        var fileList = getData.case[0].file;
        var data = history2.prescription;
        this.setState({
          getData: getData,
          history1: getData.case[0],
          history2: history2,
          history1Index: 0,
          history2Index: 0,
          data: data,
          saveCase: false,
          caseId: true,
          saveAdvice: false,
          fileList: fileList
        });
      } else {
        var saveCase = void 0;
        if (getData.case[index].statusId) {
          saveCase = true;
        }
        getData.case.splice(index, 1);
        if (index == getData.case.length - 1) {} else {
          index = index < 1 ? 0 : index - 1;
        }
        var _history = getData.case[index].advice ? getData.case[index].advice[0] : null;

        var _data2 = _history ? _history.prescription : [];
        if (_data2 == false) {
          _data2.push(this.state.oldData);
        }
        this.setState({
          getData: getData,
          history1: getData.case[index],
          history2: _history,
          history1Index: index,
          history2Index: 0,
          data: _data2,
          saveCase: true,
          fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
        });
      }
    }
  }, {
    key: 'deleteHistory2',
    value: function deleteHistory2(index) {
      //删除医嘱
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.case[this.state.history1Index].advice.splice(index, 1);
      index = index < 1 ? 0 : index - 1;
      var history1 = getData.case[this.state.history1Index];
      var history2 = history1.advice ? history1.advice[index] : null;
      var data = history2 ? history2.prescription : [];
      var saveAdvice = history2 ? false : true;
      if (data == false) {
        data.push(this.state.oldData);
      }
      this.setState({
        getData: getData,
        history1: history1,
        history2: history2,
        history2Index: this.state.history2Index - 1,
        data: data,
        saveAdvice: saveAdvice
      });
    }
  }, {
    key: 'upLoadMsg',
    value: function upLoadMsg() {}
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var style = { "height": document.body.clientHeight };
      var Width = { "height": document.body.offsetHeight };
      var Hidden = { "overflowY": "hidden" };
      var that = this;
      var caseId = null;
      if (this.state.history1.id) {
        caseId = this.state.history1.id.toString();
      }
      var props = { //上传的事件
        action: '/upload/consultation/' + caseId,
        headers: {
          "Authorization": "Bearer " + token
        },
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            if (!that.state.saveCase) {
              alert("病历未保存!");
              return false;
            }
            if (fileList.length) {
              var getData = that.state.getData;
              getData.case[that.state.history1Index].file = getData.case[that.state.history1Index].file ? getData.case[that.state.history1Index].file : [];
              getData.case[that.state.history1Index].file.push(fileList[fileList.length - 1].response.result);
              var list = getData.case[that.state.history1Index].file;
              that.setState({
                fileList: list,
                getData: getData
              });
            }
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { style: this.state.showPrescription ? Hidden : this.state.isShow ? Hidden : null, className: 'newHidden' },
        this.state.showPrescription ? _react2.default.createElement(
          'div',
          { style: style, className: 'Prescription' },
          _react2.default.createElement(
            'div',
            { className: 'showPrescription' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, showTime: true, format: dateFormat, onChange: this.changePrescriptionTime.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u533B\u751F\u59D3\u540D'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.doctorName, onChange: this.changeDoctorName.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u836F\u54C1\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.medicineTime, onChange: this.changeMedicineTime.bind(this), size: 'large', placeholder: '\u836F\u54C1\u540D\u79F0' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u603B\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.total, onChange: this.changeTotal.bind(this), size: 'large', placeholder: '\u603B\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5355\u6B21\u7528\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.singleDose, onChange: this.changeSingleDose.bind(this), size: 'large', placeholder: '\u5355\u6B21\u7528\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u9891\u6B21'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.frequency, onChange: this.changeFrequency.bind(this), size: 'large', placeholder: '\u9891\u6B21' })
              )
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.closePrescription.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58\u5904\u65B9'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.cancelSaveCF.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u53D6\u6D88\u4FDD\u5B58'
            )
          )
        ) : "",
        this.state.isShow ? _react2.default.createElement(
          'div',
          { style: Width, className: 'transfer_box' },
          _react2.default.createElement(
            'div',
            { className: 'transfer' },
            _react2.default.createElement(_transfer2.default, {
              dataSource: this.state.mockData,
              listStyle: {
                width: 300,
                height: 500
              },
              rowKey: function rowKey(record) {
                return record.key;
              },
              targetKeys: this.state.targetKeys,
              onChange: this.handleChange.bind(this),
              render: this.renderItem.bind(this)
            }),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.queDing();
                }, className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.quxiaohuizhenyisheng();
                }, className: 'transfer_btn', type: 'primary' },
              '\u53D6\u6D88'
            )
          )
        ) : "",
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u526F\u672C\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { showTime: true, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changesStartTime.bind(this) })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, onBlur: this.checkUserId.bind(this), className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changePhone.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeUsername.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeIdentification.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeBirthday.bind(this) })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E', onChange: this.changeFamliyName.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', onChange: this.changeFamilyPhone.bind(this) })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4, onChange: this.changeContent.bind(this) })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn_save' },
          _react2.default.createElement(
            'div',
            { className: 'btn_save_index' },
            _react2.default.createElement(
              _button2.default,
              { disabled: this.state.dis, onClick: this.saveConsulation.bind(this), className: 'btn_save_index_2', type: 'primary' },
              '\u4FDD\u5B58\u4F1A\u8BCA'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { className: 'history_case', key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory1.bind(_this4, index), className: 'history_sp1' },
                  '\u75C5\u4F8B ',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory1.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory1.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeSn.bind(this) })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeHospital.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', onChange: this.changeDoctor.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', onChange: this.changeName.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeDagnosisTime.bind(this) })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { onChange: this.changeDiagnosis.bind(this), value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { onClick: this.saveCase.bind(this), className: 'btn_save_index_2', type: 'primary' },
                '\u4FDD\u5B58\u75C5\u5386'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory2.bind(_this4, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory2.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            this.state.caseId ? _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory2.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            ) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", onChange: this.changeAdviceHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", onChange: this.changeAdviceDoctor.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeAdviceTime.bind(this) })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", onChange: this.changeAdvice.bind(this), className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'btn_save' },
              _react2.default.createElement(
                'div',
                { className: 'btn_save_index' },
                _react2.default.createElement(
                  _button2.default,
                  { onClick: this.saveAdvice.bind(this), className: 'btn_save_index_2', type: 'primary' },
                  '\u4FDD\u5B58\u533B\u5631'
                )
              )
            ),
            this.state.data && this.state.data.length > 0 ? _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data })
              )
            ) : ""
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { onClick: this.alertMsg.bind(this), className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            _react2.default.createElement(
              _upload2.default,
              props,
              _react2.default.createElement(
                _button2.default,
                { className: 'history_btn1' },
                _react2.default.createElement(_icon2.default, { type: 'upload' })
              )
            ),
            this.state.fileList ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList }) : ""
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', onFocus: function onFocus() {
                  return _this4.huizhenyisheng();
                }, type: 'textarea', rows: 4 })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { className: 'btn_save_index_2', type: 'primary', onClick: function onClick() {
                    return _this4.send();
                  } },
                '\u63D0\u4EA4'
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'apply' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u53D6\u6D88'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddConsultation;
}(_react.Component);

exports.default = AddConsultation;

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(109);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var token = localStorage.getItem("robertUserName");

var Apply = function (_Component) {
  _inherits(Apply, _Component);

  function Apply(props) {
    _classCallCheck(this, Apply);

    var _this = _possibleConstructorReturn(this, (Apply.__proto__ || Object.getPrototypeOf(Apply)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();

    _this.state = {
      applyPage: {
        pageSize: 10,
        consultationName: "",
        username: "",
        phone: "",
        status: "1",
        startTime: ""
      },
      total: 10,
      current: 1,
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '会诊对象',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '创建时间',
        dataIndex: 'creatAt',
        key: 'creatAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "apply/editCnsulation/" + record.id },
              '\u7F16\u8F91'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '', className: 'apply_link', onClick: function onClick() {
                  return _this.deleteRecord(record.id);
                } },
              '\u5220\u9664'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'apply_link', to: "apply/addConsultation/" + record.id },
              '\u521B\u5EFA\u526F\u672C'
            )
          );
        }
      }],
      dataSource: []
    };
    return _this;
  }

  _createClass(Apply, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'push',
    value: function push(id, index) {

      var that = this;
      _axios2.default.request({
        url: '/api/conference/commit',
        method: 'get',
        params: {
          id: id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.query();
      }).catch(function () {
        alert("数据提交失败!");
      });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(id) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/delete/consultation',
        method: 'get',
        params: {
          id: id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.query(1);
      }).catch(function () {
        alert("数据提交失败，请检查网络!");
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var applyPage = this.state.applyPage;
      applyPage.startTime = dateString;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var apply = this.state.applyPage;
      apply.consultationName = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeUsername',
    value: function changeUsername(e) {
      var apply = this.state.applyPage;
      apply.username = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var apply = this.state.applyPage;
      apply.phone = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pageNum = num;
      _axios2.default.request({
        url: '/api/conference/applyPageList',
        method: 'get',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var dataSource = response.data.result ? response.data.result.data : [];
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this2.query();
                }, className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.consultationName, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { allowClear: true, size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.username, onChange: this.changeUsername.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.phone, onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: 'apply/newConsultation' },
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', className: 'search_btn2' },
                '\u65B0\u589E'
              )
            )
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return Apply;
}(_react.Component);

exports.default = Apply;

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var token = localStorage.getItem("robertUserName");

var DaiShen = function (_Component) {
  _inherits(DaiShen, _Component);

  function DaiShen(props) {
    _classCallCheck(this, DaiShen);

    var _this = _possibleConstructorReturn(this, (DaiShen.__proto__ || Object.getPrototypeOf(DaiShen)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();
    _this.state = {
      applyPage: {
        pageSize: 10,
        consultationName: "",
        username: "",
        phone: "",
        status: 2,
        startTime: ""
      },
      total: 10,
      current: 1,
      dataSource: [],
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '会诊对象',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '提交时间',
        dataIndex: 'modifyAt',
        key: 'modifyAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "apply/daiShen/looked/" + record.id },
              '\u67E5\u770B'
            )
          );
        }
      }]
    };

    return _this;
  }

  _createClass(DaiShen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pageNum = num;
      _axios2.default.request({
        url: '/api/conference/applyPageList',
        method: 'get',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        console.log("response: ", response);
        var dataSource = response.data.result ? response.data.result.data : [];
        console.log("dataSource: ", dataSource);
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var applyPage = this.state.applyPage;
      applyPage.startTime = dateString;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this2.query();
                }, type: 'primary', className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return DaiShen;
}(_react.Component);

exports.default = DaiShen;

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var Looked = function (_Component) {
  _inherits(Looked, _Component);

  function Looked(props) {
    _classCallCheck(this, Looked);

    var _this = _possibleConstructorReturn(this, (Looked.__proto__ || Object.getPrototypeOf(Looked)).call(this, props));

    _this.state = {
      consultationId: null,
      getData: allData,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      //下面的这个是病历资料表头
      fileListColumns: [{
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'apply_link', href: record.url, download: record.fileName },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'a',
              { className: 'apply_link', href: record.url },
              '\u67E5\u770B'
            )
          );
        }
      }],
      fileList: [], //病历资料集合
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "126px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "126px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],

      conclusionColumns: [{
        title: '时间',
        dataIndex: 'creatTime',
        key: 'creatTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'doctorName',
        key: 'doctorName',
        width: "126px"
      }, {
        title: '会诊结论',
        dataIndex: 'message',
        key: 'message'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.docName },
              '\u4E0B\u8F7D'
            )
          );
        },
        width: "126px"
      }],
      conclusion: [],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      checkData: [],
      data: [{
        id: ' ',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      targetdoc: [] };
    return _this;
  }

  /////////////////////////


  _createClass(Looked, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        console.log(getData.consultation.hospital);
        console.log(getData.consultation.applicant);
        that.setState({
          getData: getData
        });
      }).catch(function () {
        alert("1");
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        getData.consultationId = that.props.params.id;
        var data = [];
        var fileList = [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }
        var conclusion = getData.conclusion ? getData.conclusion : []; //获取结论
        var checkData = getData.check ? getData.check : [];
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? getData.case[0].advice[0] : null,
          targetdoc: getData.doctor ? getData.doctor : [], //加载页面时，会诊医生栏显示的内容
          data: data,
          conclusion: conclusion,
          fileList: fileList,
          checkData: checkData
        });

        //因为异步的原因，所以只能在回调函数里面放数据请求了
        // that.getPeople();
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {
        alert("第一请求error");
      });

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.getValue();
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'ding',


    ///////////////////////////

    value: function ding() {
      /*let that=this;
      axios.request({
        url: '/api/conference/edit/page',
        method: 'get',
        params: {
          id:1
        },
        headers: {
       'Authorization': 'Bearer '+token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        },
      }).then(function(response) {
        that.setState({
          getData:response.data,
          history1:response.data.case[0],
          history2:response.data.case[0].advice[0]
        })
      }).catch(function () {
        alert("error");
        console.log(that.state.getData)
      });*/
    }
  }, {
    key: 'startTime',
    value: function startTime(data, dataString) {
      console.log(dataString.split('"'));
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      console.log(date, dateString);
    }
  }, {
    key: 'onCheck',
    value: function onCheck(e) {
      console.log(e.currentTarget);
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历
      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {
          data = null;
        }
      } else {
        data = null;
      }

      console.log(data);
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      if (!this.state.saveAdvice) {
        if (index != this.state.history2Index) {
          alert("当前医嘱未保存!");
          return false;
        }
      }
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {}
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        history2Index: index,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var props = { //上传的事件
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            console.log(file, fileList);
            that.setState({
              fileList: fileList
            });
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u770B\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, onChage: function onChage() {
                  return _this2.startTime();
                }, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          this.state.history1 != false ? _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  ' \u75C5\u5386 ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ) : "",
          this.state.history1 != false ? _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input' })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                this.state.data ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data }) : _react2.default.createElement('li', { className: 'search_input' })
              )
            )
          ) : "",
          this.state.fileList ? _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList })
          ) : "",
          this.state.targetdoc && this.state.targetdoc != false ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ) : "",

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",

          //这里面写判断有没有结论记录
          this.state.conclusion.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u7ED3\u8BBA\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.conclusionColumns, dataSource: this.state.conclusion })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'apply/daiShen' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u8FD4\u56DE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Looked;
}(_react.Component);

exports.default = Looked;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style9 = __webpack_require__(100);

var _upload = __webpack_require__(82);

var _upload2 = _interopRequireDefault(_upload);

var _style10 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style11 = __webpack_require__(96);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _style12 = __webpack_require__(120);

var _transfer = __webpack_require__(99);

var _transfer2 = _interopRequireDefault(_transfer);

var _style13 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style14 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style15 = __webpack_require__(81);

var _message = __webpack_require__(66);

var _message2 = _interopRequireDefault(_message);

var _style16 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var startTime = function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate;
}();
var token = localStorage.getItem("robertUserName");
var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "2999-12-31 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "2999-12-31 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //case编号
    "hospital": "", //case医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": startTime, //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    "file": [],
    "statusId": '1',
    "advice": [{
      "hospital": "",
      "doctor": "",
      "statusId": '1',
      "adviceTime": startTime,
      "advice": "",
      "prescription": [{
        "id": "0",
        "prescriptionTime": "", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var EditCnsulation = function (_Component) {
  _inherits(EditCnsulation, _Component);

  function EditCnsulation(props) {
    _classCallCheck(this, EditCnsulation);

    var _this = _possibleConstructorReturn(this, (EditCnsulation.__proto__ || Object.getPrototypeOf(EditCnsulation)).call(this, props));

    _this.state = {
      consultationId: _this.props.params.id,
      hospitalId: null,
      saveCase: true, //是否保存了病历
      savePrescription: false, //是否保存了处方
      saveAdvice: true, //是否保存了医嘱
      caseId: false, //是否显示添加医嘱按钮
      showPrescription: false, //是否显示新增处方弹出框
      getData: allData,
      centerPrescription: null,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      history1Index: 0, //当前显示的病历的下标
      history2Index: 0, //当前显示的医嘱的下标

      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _this.state.history1.statusId ? _react2.default.createElement(
              'span',
              null,
              record.id == 0 ? _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.addPrescription.bind(_this), className: 'addMedicine', type: 'primary' },
                  '\u65B0\u589E'
                )
              ) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.deletePrescription.bind(_this, index), className: 'addMedicine', type: 'primary' },
                  '\u5220\u9664'
                )
              )
            ) : "-"
          );
        }
      }],
      fileListColumns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1,
            ' '
          );
        }
      }, {
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.url, target: 'blank', className: 'apply_link' },
              '\u67E5\u770B'
            ),
            _this.state.history1.statusId ? _react2.default.createElement(
              _reactRouter.Link,
              { to: '', onClick: _this.deleteFile.bind(_this, record.id, index), className: 'apply_link' },
              '\u5220\u9664'
            ) : ""
          );
        }
      }],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      data: [{
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      docUserId: [], //选中的医生的要上传的格式
      targetdoc: [], //选中的医生信息
      fileList: null //显示的上传文件集合
    };
    return _this;
  }

  /////////////////////////

  _createClass(EditCnsulation, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.setState({
          hospitalId: response.data.result[0].hospitalId

        });
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });

        var getData = response.data;
        var data = [];
        var caseId = false;
        var fileList = [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          caseId = true;
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }
        // let getData=response.data.case&&response.data.case!=false?response.data:allData;
        getData.consultationId = that.props.params.id;

        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? getData.case[0].advice[0] : null,
          targetdoc: getData.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          fileList: fileList,
          caseId: caseId
        });
        //因为异步的原因，所以只能在回调函数里面放数据请求了

        that.getPeople();
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {
        alert(1);
      });

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getValue();

      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode == 27) {
        this.setState({
          showPrescription: false
        });
      }
    }
  }, {
    key: 'cancelSaveCF',
    value: function cancelSaveCF() {
      this.setState({
        showPrescription: false
      });
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile(id, index) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/deleteCaseFile',
        method: 'get',
        params: {
          caseFileId: id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.case[that.state.history1Index].file.splice(index, 1);
        var list = getData.case[that.state.history1Index].file;
        that.setState({
          fileList: list,
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'handleChange',
    value: function handleChange(targetKeys) {
      var _this2 = this;

      var docUserId = [];
      var targetKey = targetKeys;
      var num = 0;
      this.state.docList.map(function (ele, index) {
        if (targetKey.indexOf(ele.doctorId) !== -1) {
          var obj = {};
          obj.user = ele.userId.toString();
          obj.hospitalId = ele.hospitalId.toString();
          docUserId.push(obj);
        }
      });

      docUserId.map(function (ele) {
        if (ele.hospitalId === _this2.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.warning("同一医院只能选择一名医生!");
      }

      this.setState({
        targetKeys: targetKeys,
        docUserId: docUserId
      });
    }
  }, {
    key: 'queDing',
    value: function queDing() {
      var _this3 = this;

      var num = 0;
      this.state.docUserId.map(function (ele) {
        if (ele.hospitalId === _this3.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.error('同一医院只能选择一名医生!');
        return false;
      } else if (num === 0) {
        _message2.default.error('本医院医生未选择!');
        return false;
      }
      var targetKeys = this.state.targetKeys;
      var arr = [];
      var targetTitle = [];
      for (var i = 0; i < targetKeys.length; i++) {
        var _obj2 = {};
        _obj2.doctor = targetKeys[i].toString();
        arr.push(_obj2);
        for (var k = 0; k < this.state.docList.length; k++) {
          if (targetKeys[i] == this.state.docList[k].doctorId * 1) {
            targetTitle.push(this.state.docList[k]);
          }
        }
      }
      var obj = {};
      obj.consultationId = this.state.consultationId;
      obj.doctorId = arr;
      obj.userId = this.state.docUserId;

      var that = this;
      _axios2.default.request({
        url: '/api/conference/edit/doctorlist',
        method: 'POST',
        data: obj,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {

        var allData = that.state.getData;
        allData.doctor = targetTitle;
        that.setState({
          isShow: false,
          targetdoc: targetTitle,
          allData: allData,
          docId: obj,
          docKeys: targetKeys
        });
      }).catch(function () {});
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'huizhenyisheng',
    value: function huizhenyisheng() {
      this.setState({
        isShow: true
      });
    }
  }, {
    key: 'quxiaohuizhenyisheng',
    value: function quxiaohuizhenyisheng() {

      this.setState({
        isShow: false,
        targetKeys: this.state.docKeys
      });
    }
    ///////////////////////////

  }, {
    key: 'send',
    value: function send() {

      if (this.state.saveCase) {
        if (this.state.saveAdvice) {
          if (this.state.targetdoc == false) {
            alert("会诊医生未选择!");
            return false;
          }
          _axios2.default.request({
            url: '/api/conference/commit',
            method: 'get',
            params: {
              id: this.state.consultationId.toString()
            },
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            }
          }).then(function (response) {
            if (response.data.code == 200) {
              alert("提交成功!");
              location.hash = "apply";
            }
          }).catch(function () {
            alert("提交失败!");
          });
        } else {
          alert("当前医嘱未保存!");
        }
      } else {
        alert("当前病历未保存!");
      }
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历

      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("当前病历未保存!");
          return false;
        }
      }

      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {}
      } else {}
      var caseShow = false;
      if (this.state.getData.case[index].statusId) {
        caseShow = true;
      }
      if (this.state.getData.case[index].file && this.state.getData.case[index].file != false) {}
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        caseId: caseShow,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      if (!this.state.saveAdvice) {
        if (index != this.state.history2Index) {
          alert("当前医嘱未保存!");
          return false;
        }
      }
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {}
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        history2Index: index,
        data: data
      });
    }
  }, {
    key: 'addHistory1',
    value: function addHistory1() {
      //增加病历
      if (this.state.saveCase) {
        var getData = JSON.parse(JSON.stringify(this.state.getData));
        var length = getData.case.length + 1;
        var obj = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": "", //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": '1',
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": "",
            "advice": "",
            "prescription": [{
              "id": "0",
              "prescriptionTime": "", //开方时间
              "doctorName": "", //开方医生姓名
              "medicineTime": "", //药品名称
              "total": "", //总量
              "singleDose": "", //单次用量
              "frequency": "" //次/日
            }]
          }]
        };
        obj.diagnosisTime = startTime;
        getData.case.push(obj);
        var history1 = obj;

        var history2 = obj.advice[0];
        var fileList = obj.file;
        history2.adviceTime = startTime;
        history2.statusId = 1;
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history1Index: length - 1 < 0 ? 0 : length - 1,
          history2Index: 0,
          saveCase: false,
          caseId: true,
          fileList: fileList
        });
      } else {
        alert("上一病历未保存!");
      }
    }
  }, {
    key: 'alertMsg',
    value: function alertMsg() {
      if (!this.state.saveCase) {
        alert("请先保存病历!");
      }
    }
  }, {
    key: 'changeDiagnosis',
    value: function changeDiagnosis(e) {
      //修改临床诊断
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosis = e.target.value;
        history1.diagnosis = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeName',
    value: function changeName(e) {
      //修改病历名称
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].name = e.target.value;
        history1.name = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeSn',
    value: function changeSn(e) {
      //修改病历编号
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].sn = e.target.value;
        history1.sn = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      //修改病历医院
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].hospital = e.target.value;
        history1.hospital = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDoctor',
    value: function changeDoctor(e) {
      //修改主治医生
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].doctor = e.target.value;
        history1.doctor = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDagnosisTime',
    value: function changeDagnosisTime(date, dateString) {
      //修改诊治日期
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosisTime = dateString;
        history1.diagnosisTime = dateString;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
    //修改医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱

  }, {
    key: 'changeAdviceTime',
    value: function changeAdviceTime(date, dateString) {
      //修改医嘱时间
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].adviceTime = dateString;
        history2.adviceTime = dateString;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdvice',
    value: function changeAdvice(e) {
      //修改医嘱
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].advice = e.target.value;
        history2.advice = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceDoctor',
    value: function changeAdviceDoctor(e) {
      //修改医嘱医生
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].doctor = e.target.value;
        history2.doctor = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceHospital',
    value: function changeAdviceHospital(e) {
      //修改医嘱医院
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].hospital = e.target.value;
        history2.hospital = e.target.value;

        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'saveCase',
    value: function saveCase() {
      //保存病历
      var postCase = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index]));
      if (!postCase.sn) {
        alert("病历编号不能为空!!!");
        return false;
      }
      if (!postCase.hospital) {
        alert("病例医院不能为空!!!");
        return false;
      }

      var advice = JSON.parse(JSON.stringify(postCase.advice));
      delete postCase.advice;
      postCase.consultationId = this.state.consultationId;
      postCase.userId = this.state.getData.consultation.userId.toString();
      if (postCase.id) {
        postCase.id = postCase.id.toString();
        delete postCase.consultationId;
        delete postCase.userId;
      }
      var url = postCase.id ? "/api/conference/edit/case" : "/api/conference/add/case";
      var that = this;
      _axios2.default.request({
        url: url,
        method: 'POST',
        data: postCase,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postCase.id = response.data.id;
        postCase.advice = advice;
        var getData = JSON.parse(JSON.stringify(that.state.getData));
        getData.case[that.state.history1Index] = postCase;

        that.setState({
          saveCase: true,
          history1: postCase,
          getData: getData,
          history2: postCase.advice ? postCase.advice[0] : null
        });
        alert("病历保存成功!");
      }).catch(function () {
        alert("病历保存失败!");
      });
    }
  }, {
    key: 'saveAdvice',
    value: function saveAdvice() {
      //保存医嘱
      if (this.state.saveCase) {
        var postAdvice = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index].advice[this.state.history2Index]));
        var prescription = JSON.parse(JSON.stringify(postAdvice.prescription));
        delete postAdvice.prescription;
        if (postAdvice.id) {
          postAdvice.id = postAdvice.id.toString();
        }
        postAdvice.caseId = this.state.history1.id.toString();
        var url = postAdvice.id ? "/api/conference/edit/advice" : "/api/conference/add/advice";
        var that = this;
        _axios2.default.request({
          url: url,
          method: 'POST',
          data: postAdvice,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.data.id) {
            postAdvice.id = response.data.id;
          }
          postAdvice.prescription = prescription;
          var getData = JSON.parse(JSON.stringify(that.state.getData));
          getData.case[that.state.history1Index].advice[that.state.history2Index] = postAdvice;
          that.setState({
            saveCase: true,
            history1: getData.case[that.state.history1Index],
            getData: getData,
            history2: postAdvice
          });
          alert("医嘱保存成功!");
        }).catch(function () {
          alert("医嘱保存失败!");
        });

        this.setState({
          saveAdvice: true
        });
      } else {
        alert("病历未保存!");
      }
    }
  }, {
    key: 'addHistory2',
    value: function addHistory2() {
      //增加医嘱
      if (this.state.saveAdvice) {
        var getData = this.state.getData;
        var length = getData.case[this.state.history1Index].advice.length;

        var obj = {
          "hospital": "",
          "doctor": "",
          "adviceTime": "",
          "advice": "",
          "prescription": [{
            "id": "0",
            "prescriptionTime": "", //开方时间
            "doctorName": "", //开方医生姓名
            "medicineTime": "", //药品名称
            "total": "", //总量
            "singleDose": "", //单次用量
            "frequency": "" //次/日
          }]
        };
        obj.adviceTime = startTime;
        obj.statusId = 1;
        getData.case[this.state.history1Index].advice.push(obj);
        var history1 = getData.case[this.state.history1Index];
        var history2 = getData.case[this.state.history1Index].advice[history1.advice.length - 1];
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history2Index: length,
          saveAdvice: false
        });
      } else {
        alert("上一医嘱未保存");
      }
    }
  }, {
    key: 'addPrescription',
    value: function addPrescription() {
      //增加处方-显示弹框
      if (this.state.saveAdvice) {
        //这里会有一个数据请求，获取处方的id
        var obj = {
          "prescriptionTime": startTime, //开方时间
          "doctorName": "", //开方医生姓名
          "medicineTime": "", //药品名称
          "total": "", //总量
          "singleDose": "", //单次用量
          "frequency": "" //次/日
        };
        this.setState({
          showPrescription: true,
          centerPrescription: obj
        });
      } else {
        alert("医嘱未保存!");
      }
    }
  }, {
    key: 'changeDoctorName',
    value: function changeDoctorName(e) {
      //处方医生姓名
      var obj = this.state.centerPrescription;
      obj.doctorName = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changePrescriptionTime',
    value: function changePrescriptionTime(date, dateString) {
      //开方时间
      var obj = this.state.centerPrescription;
      obj.prescriptionTime = dateString;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeMedicineTime',
    value: function changeMedicineTime(e) {
      //处方药物名称
      var obj = this.state.centerPrescription;
      obj.medicineTime = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeTotal',
    value: function changeTotal(e) {
      //处方总量
      var obj = this.state.centerPrescription;
      obj.total = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeSingleDose',
    value: function changeSingleDose(e) {
      //处方单次用量
      var obj = this.state.centerPrescription;
      obj.singleDose = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeFrequency',
    value: function changeFrequency(e) {
      //处方   次/日
      var obj = this.state.centerPrescription;
      obj.frequency = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'deletePrescription',
    value: function deletePrescription(index) {
      var data1 = this.state.data;
      var getData = this.state.getData;
      var that = this;
      console.log(getData.case[this.state.history1Index].advice[this.state.history2Index].prescription[index].id);
      _axios2.default.request({
        url: "/api/conference/delete/prescription",
        method: 'get',
        params: {
          id: getData.case[this.state.history1Index].advice[this.state.history2Index].prescription[index].id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        getData.case[this.state.history1Index].advice[this.state.history2Index].prescription.splice(index, 1);
        data1.splice(index, 1);
        that.setState({
          getData: getData,
          data: data1
        });
      });
    }
  }, {
    key: 'closePrescription',
    value: function closePrescription() {
      //保存处方并关闭处方弹出框

      var postData = this.state.centerPrescription;
      postData.adId = this.state.history2.id.toString();
      var that = this;
      _axios2.default.request({
        url: '/api/conference/add/prescription',
        method: 'POST',
        data: postData,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postData.id = response.data.id;
        var prescriptionData = that.state.data;
        prescriptionData.unshift(postData);
        var getData = that.state.getData;
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.unshift(postData);
        that.setState({
          data: prescriptionData,
          getData: getData,
          showPrescription: false,
          savePrescription: true
        });
      }).catch(function () {
        alert("保存处方失败!");
      });
    }
  }, {
    key: 'deleteHistory1',
    value: function deleteHistory1(index) {
      //删除病历


      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("请先保存病历!");
          return false;
        }
      }
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      if (getData.case.length == 1) {
        getData.case[0] = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": startTime, //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": 1,
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": startTime,
            "advice": "",
            "statusId": 1,
            "prescription": [{
              "id": '0',
              "prescriptionTime": "-", //开方时间
              "doctorName": "-", //开方医生姓名
              "medicineTime": "-", //药品名称
              "total": "-", //总量
              "singleDose": "-", //单次用量
              "frequency": "-" //次/日
            }]
          }]
        };
        var history2 = getData.case[0].advice ? getData.case[0].advice[0] : null;
        var fileList = getData.case[0].file;
        var data = history2.prescription;
        this.setState({
          getData: getData,
          history1: getData.case[0],
          history2: history2,
          history1Index: 0,
          history2Index: 0,
          data: data,
          saveCase: false,
          caseId: true,
          saveAdvice: false,
          fileList: fileList
        });
      } else {
        var saveCase = void 0;
        if (getData.case[index].statusId) {
          saveCase = true;
        }
        getData.case.splice(index, 1);
        if (index == getData.case.length - 1) {} else {
          index = index < 1 ? 0 : index - 1;
        }
        var _history = getData.case[index].advice ? getData.case[index].advice[0] : null;

        var _data2 = _history ? _history.prescription : [];
        if (_data2 == false) {
          _data2.push(this.state.oldData);
        }
        this.setState({
          getData: getData,
          history1: getData.case[index],
          history2: _history,
          history1Index: index,
          history2Index: 0,
          data: _data2,
          saveCase: true,
          fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
        });
      }
    }
  }, {
    key: 'deleteHistory2',
    value: function deleteHistory2(index) {
      //删除医嘱
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.case[this.state.history1Index].advice.splice(index, 1);
      index = index < 1 ? 0 : index - 1;
      var history1 = getData.case[this.state.history1Index];
      var history2 = history1.advice ? history1.advice[index] : null;
      var data = history2 ? history2.prescription : [];
      var saveAdvice = history2 ? false : true;
      if (data == false) {
        data.push(this.state.oldData);
      }
      this.setState({
        getData: getData,
        history1: history1,
        history2: history2,
        history2Index: this.state.history2Index - 1,
        data: data,
        saveAdvice: saveAdvice
      });
    }
  }, {
    key: 'upLoadMsg',
    value: function upLoadMsg() {}
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var style = { "height": document.body.clientHeight };
      var that = this;
      var caseId = null;
      var Hidden = { "overflowY": "hidden" };
      var Width = { "width": document.body.clientWidth, "height": document.body.clientHeight };
      if (this.state.history1.id) {
        caseId = this.state.history1.id.toString();
      }
      var props = { //上传的事件
        action: '/upload/consultation/' + caseId,
        headers: {
          "Authorization": "Bearer " + token
        },
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            if (!that.state.saveCase) {
              alert("病历未保存!");
              return false;
            }
            if (fileList.length) {
              var getData = that.state.getData;
              getData.case[that.state.history1Index].file = getData.case[that.state.history1Index].file ? getData.case[that.state.history1Index].file : [];
              getData.case[that.state.history1Index].file.push(fileList[fileList.length - 1].response.result);
              var list = getData.case[that.state.history1Index].file;
              that.setState({
                fileList: list,
                getData: getData
              });
            }
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { style: this.state.showPrescription ? Hidden : this.state.isShow ? Hidden : null, className: 'newHidden' },
        this.state.showPrescription ? _react2.default.createElement(
          'div',
          { style: style, className: 'Prescription' },
          _react2.default.createElement(
            'div',
            { className: 'showPrescription' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, showTime: true, format: dateFormat, onChange: this.changePrescriptionTime.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u533B\u751F\u59D3\u540D'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.doctorName, onChange: this.changeDoctorName.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u836F\u54C1\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.medicineTime, onChange: this.changeMedicineTime.bind(this), size: 'large', placeholder: '\u836F\u54C1\u540D\u79F0' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u603B\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.total, onChange: this.changeTotal.bind(this), size: 'large', placeholder: '\u603B\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5355\u6B21\u7528\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.singleDose, onChange: this.changeSingleDose.bind(this), size: 'large', placeholder: '\u5355\u6B21\u7528\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u9891\u6B21'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.frequency, onChange: this.changeFrequency.bind(this), size: 'large', placeholder: '\u9891\u6B21' })
              )
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.closePrescription.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58\u5904\u65B9'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.cancelSaveCF.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u53D6\u6D88\u4FDD\u5B58'
            )
          )
        ) : "",
        this.state.isShow ? _react2.default.createElement(
          'div',
          { style: Width, className: 'transfer_box' },
          _react2.default.createElement(
            'div',
            { className: 'transfer' },
            _react2.default.createElement(_transfer2.default, {
              dataSource: this.state.mockData,
              listStyle: {
                width: 300,
                height: 500
              },
              rowKey: function rowKey(record) {
                return record.key;
              },
              targetKeys: this.state.targetKeys,
              onChange: this.handleChange.bind(this),
              render: this.renderItem.bind(this)
            }),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.queDing();
                }, className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.quxiaohuizhenyisheng();
                }, className: 'transfer_btn', type: 'primary' },
              '\u53D6\u6D88'
            )
          )
        ) : "",
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u7F16\u8F91\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { className: 'history_case', key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory1.bind(_this4, index), className: 'history_sp1' },
                  '\u75C5\u4F8B ',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory1.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory1.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeSn.bind(this) })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', onChange: this.changeHospital.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', onChange: this.changeDoctor.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', onChange: this.changeName.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeDagnosisTime.bind(this) })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { onChange: this.changeDiagnosis.bind(this), value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          this.state.history1.statusId ? _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { onClick: this.saveCase.bind(this), className: 'btn_save_index_2', type: 'primary' },
                '\u4FDD\u5B58\u75C5\u5386'
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory2.bind(_this4, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory2.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            this.state.caseId ? _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory2.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            ) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", onChange: this.changeAdviceHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", onChange: this.changeAdviceDoctor.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeAdviceTime.bind(this) })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", onChange: this.changeAdvice.bind(this), className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            this.state.history2.statusId ? _react2.default.createElement(
              'div',
              { className: 'btn_save' },
              _react2.default.createElement(
                'div',
                { className: 'btn_save_index' },
                _react2.default.createElement(
                  _button2.default,
                  { onClick: this.saveAdvice.bind(this), className: 'btn_save_index_2', type: 'primary' },
                  '\u4FDD\u5B58\u533B\u5631'
                )
              )
            ) : "",
            this.state.data && this.state.data.length > 0 ? _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data })
              )
            ) : ""
          ) : "",
          this.state.fileList ? _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { onClick: this.alertMsg.bind(this), className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            this.state.caseId ? _react2.default.createElement(
              _upload2.default,
              props,
              _react2.default.createElement(
                _button2.default,
                { className: 'history_btn1' },
                _react2.default.createElement(_icon2.default, { type: 'upload' })
              )
            ) : "",
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList })
          ) : "",
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', onFocus: function onFocus() {
                  return _this4.huizhenyisheng();
                }, type: 'textarea', rows: 4 })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { className: 'btn_save_index_2', type: 'primary', onClick: function onClick() {
                    return _this4.send();
                  } },
                '\u63D0\u4EA4'
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'apply' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u53D6\u6D88'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditCnsulation;
}(_react.Component);

exports.default = EditCnsulation;

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style9 = __webpack_require__(100);

var _upload = __webpack_require__(82);

var _upload2 = _interopRequireDefault(_upload);

var _style10 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style11 = __webpack_require__(96);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _style12 = __webpack_require__(120);

var _transfer = __webpack_require__(99);

var _transfer2 = _interopRequireDefault(_transfer);

var _style13 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style14 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style15 = __webpack_require__(81);

var _message = __webpack_require__(66);

var _message2 = _interopRequireDefault(_message);

var _style16 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样

var token = localStorage.getItem("robertUserName");
var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "2999-12-31 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "2999-12-31 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //case编号
    "hospital": "", //case医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    "file": [],
    "statusId": '1',
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "",
      "advice": "",
      "prescription": [{
        "id": "0",
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var startTime = function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + seperator1 + month + seperator1 + strDate;
}();

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var EditCnsulation = function (_Component) {
  _inherits(EditCnsulation, _Component);

  function EditCnsulation(props) {
    _classCallCheck(this, EditCnsulation);

    var _this = _possibleConstructorReturn(this, (EditCnsulation.__proto__ || Object.getPrototypeOf(EditCnsulation)).call(this, props));

    _this.state = {
      consultationId: _this.props.params.id,
      saveCase: true, //是否保存了病历
      savePrescription: false, //是否保存了处方
      //审核记录的表头
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName'
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult'
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],
      saveAdvice: true, //是否保存了医嘱
      checkData: [], //审核记录
      caseId: false, //是否显示添加医嘱按钮
      showPrescription: false, //是否显示新增处方弹出框
      getData: allData,
      centerPrescription: null,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      hospitalId: null,
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2Index: 0, //当前显示的医嘱的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: index },
            _this.state.history1.statusId ? _react2.default.createElement(
              'span',
              null,
              record.id == 0 ? _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.addPrescription.bind(_this), className: 'addMedicine', type: 'primary' },
                  '\u65B0\u589E'
                )
              ) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _button2.default,
                  { onClick: _this.deletePrescription.bind(_this, index), className: 'addMedicine', type: 'primary' },
                  '\u5220\u9664'
                )
              )
            ) : "-"
          );
        }
      }],
      fileListColumns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id'
      }, {
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: index },
            _react2.default.createElement(
              'a',
              { href: record.url, target: 'blank', className: 'apply_link' },
              '\u67E5\u770B'
            ),
            _this.state.history1.statusId ? _react2.default.createElement(
              _reactRouter.Link,
              { to: '', onClick: _this.deleteFile.bind(_this, record.id, index), className: 'apply_link' },
              '\u5220\u9664'
            ) : ""
          );
        }
      }],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      data: [{
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      docUserId: [], //选中的医生的要上传的格式
      targetdoc: [], //选中的医生信息
      fileList: null //显示的上传文件集合
    };
    return _this;
  }

  /////////////////////////

  _createClass(EditCnsulation, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.setState({
          hospitalId: response.data.result[0].hospitalId

        });
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });

        var getData = response.data;
        var data = [];
        var caseId = false;
        var fileList = [];

        var checkData = getData.check ? JSON.parse(JSON.stringify(getData.check)) : [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          caseId = true;
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }

        // let getData=response.data.case&&response.data.case!=false?response.data:allData;
        getData.consultationId = that.props.params.id;

        console.log(fileList);
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? getData.case[0].advice[0] : null,
          targetdoc: getData.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          fileList: fileList,
          caseId: caseId,
          checkData: checkData
        });
        //因为异步的原因，所以只能在回调函数里面放数据请求了
        that.getPeople();
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {});

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getValue();

      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 27) {
        this.setState({
          showPrescription: false
        });
      }
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile(id, index) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/deleteCaseFile',
        method: 'get',
        params: {
          caseFileId: id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.case[that.state.history1Index].file.splice(index, 1);
        var list = getData.case[that.state.history1Index].file;
        that.setState({
          fileList: list,
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'handleChange',
    value: function handleChange(targetKeys) {
      var _this2 = this;

      var docUserId = [];
      var targetKey = targetKeys;
      var num = 0;
      this.state.docList.map(function (ele, index) {
        if (targetKey.indexOf(ele.doctorId) !== -1) {
          var obj = {};
          obj.user = ele.userId.toString();
          obj.hospitalId = ele.hospitalId.toString();
          docUserId.push(obj);
        }
      });

      docUserId.map(function (ele) {
        if (ele.hospitalId === _this2.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.warning("同一医院只能选择一名医生!");
      }

      this.setState({
        targetKeys: targetKeys,
        docUserId: docUserId
      });
    }
  }, {
    key: 'queDing',
    value: function queDing() {
      var _this3 = this;

      var num = 0;
      this.state.docUserId.map(function (ele) {
        if (ele.hospitalId === _this3.state.hospitalId.toString()) {
          num++;
        }
      });
      if (num > 1) {
        _message2.default.error('同一医院只能选择一名医生!');
        return false;
      } else if (num === 0) {
        _message2.default.error('本医院医生未选择!');
        return false;
      }
      var targetKeys = this.state.targetKeys;
      var arr = [];
      var targetTitle = [];
      for (var i = 0; i < targetKeys.length; i++) {
        var _obj2 = {};
        _obj2.doctor = targetKeys[i].toString();
        arr.push(_obj2);
        for (var k = 0; k < this.state.docList.length; k++) {
          if (targetKeys[i] == this.state.docList[k].doctorId * 1) {
            targetTitle.push(this.state.docList[k]);
          }
        }
      }
      var obj = {};
      obj.consultationId = this.state.consultationId;
      obj.doctorId = arr;
      obj.userId = this.state.docUserId;

      var that = this;
      _axios2.default.request({
        url: '/api/conference/edit/doctorlist',
        method: 'POST',
        data: obj,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {

        var allData = that.state.getData;
        allData.doctor = targetTitle;
        that.setState({
          isShow: false,
          targetdoc: targetTitle,
          allData: allData,
          docId: obj,
          docKeys: targetKeys
        });
      }).catch(function () {});
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'huizhenyisheng',
    value: function huizhenyisheng() {
      this.setState({
        isShow: true
      });
    }
  }, {
    key: 'quxiaohuizhenyisheng',
    value: function quxiaohuizhenyisheng() {

      this.setState({
        isShow: false,
        targetKeys: this.state.docKeys
      });
    }
    ///////////////////////////

  }, {
    key: 'send',
    value: function send() {
      if (this.state.saveCase) {
        if (this.state.saveAdvice) {
          if (this.state.targetdoc == false) {
            alert("会诊医生未选择!");
            return false;
          }
          _axios2.default.request({
            url: '/api/conference/reCommit',
            method: 'get',
            params: {
              id: this.state.consultationId.toString()
            },
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/x-www-form-urlencoded UTF-8'
            }
          }).then(function (response) {
            if (response.data.code == 200) {
              alert("提交成功!");
              location.hash = "apply";
            }
          }).catch(function () {
            alert("提交失败!");
          });
        } else {
          alert("当前医嘱未保存!");
        }
      } else {
        alert("当前病历未保存!");
      }
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历

      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("当前病历未保存!");
          return false;
        }
      }

      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {}
      } else {}
      var caseShow = false;
      if (this.state.getData.case[index].statusId) {
        caseShow = true;
      }
      if (this.state.getData.case[index].file && this.state.getData.case[index].file != false) {}

      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        caseId: caseShow,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      if (!this.state.saveAdvice) {
        if (index != this.state.history2Index) {
          alert("当前医嘱未保存!");
          return false;
        }
      }
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {}
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        history2Index: index,
        data: data
      });
    }
  }, {
    key: 'addHistory1',
    value: function addHistory1() {
      //增加病历
      if (this.state.saveCase) {
        var getData = JSON.parse(JSON.stringify(this.state.getData));
        var length = getData.case.length + 1;
        var obj = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": "", //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": '1',
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": "",
            "advice": "",
            "prescription": [{
              "id": "0",
              "prescriptionTime": "", //开方时间
              "doctorName": "", //开方医生姓名
              "medicineTime": "", //药品名称
              "total": "", //总量
              "singleDose": "", //单次用量
              "frequency": "" //次/日
            }]
          }]
        };
        obj.diagnosisTime = startTime;
        getData.case.push(obj);
        var history1 = obj;

        var history2 = obj.advice[0];
        var fileList = obj.file;
        history2.adviceTime = startTime;
        history2.statusId = 1;
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history1Index: length - 1 < 0 ? 0 : length - 1,
          history2Index: 0,
          saveCase: false,
          caseId: true,
          fileList: fileList
        });
      } else {
        alert("上一病历未保存!");
      }
    }
  }, {
    key: 'alertMsg',
    value: function alertMsg() {
      if (!this.state.saveCase) {
        alert("请先保存病历!");
      }
    }
  }, {
    key: 'changeDiagnosis',
    value: function changeDiagnosis(e) {
      //修改临床诊断
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosis = e.target.value;
        history1.diagnosis = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeName',
    value: function changeName(e) {
      //修改病历名称
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].name = e.target.value;
        history1.name = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeSn',
    value: function changeSn(e) {
      //修改病历编号
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].sn = e.target.value;
        history1.sn = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      //修改病历医院
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].hospital = e.target.value;
        history1.hospital = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDoctor',
    value: function changeDoctor(e) {
      //修改主治医生
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].doctor = e.target.value;
        history1.doctor = e.target.value;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
  }, {
    key: 'changeDagnosisTime',
    value: function changeDagnosisTime(date, dateString) {
      //修改诊治日期
      if (this.state.caseId) {
        var getData = this.state.getData;
        var history1 = this.state.history1;
        getData.case[this.state.history1Index].diagnosisTime = dateString;
        history1.diagnosisTime = dateString;
        this.setState({
          getData: getData,
          history1: history1
        });
      }
    }
    //修改医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱医嘱

  }, {
    key: 'changeAdviceTime',
    value: function changeAdviceTime(date, dateString) {
      //修改医嘱时间
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].adviceTime = dateString;
        history2.adviceTime = dateString;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdvice',
    value: function changeAdvice(e) {
      //修改医嘱
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].advice = e.target.value;
        history2.advice = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceDoctor',
    value: function changeAdviceDoctor(e) {
      //修改医嘱医生
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].doctor = e.target.value;
        history2.doctor = e.target.value;
        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'changeAdviceHospital',
    value: function changeAdviceHospital(e) {
      //修改医嘱医院
      if (this.state.saveCase) {
        var getData = this.state.getData;
        var history2 = this.state.history2;
        getData.case[this.state.history1Index].advice[this.state.history2Index].hospital = e.target.value;
        history2.hospital = e.target.value;

        this.setState({
          getData: getData,
          history2: history2
        });
      }
    }
  }, {
    key: 'saveCase',
    value: function saveCase() {
      //保存病历
      var postCase = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index]));
      if (!postCase.sn) {
        alert("病历编号不能为空!!!");
        return false;
      }
      if (!postCase.hospital) {
        alert("病例医院不能为空!!!");
        return false;
      }

      var advice = JSON.parse(JSON.stringify(postCase.advice));
      delete postCase.advice;
      postCase.consultationId = this.state.consultationId;
      postCase.userId = this.state.getData.consultation.userId.toString();
      if (postCase.id) {
        postCase.id = postCase.id.toString();
      }
      var url = postCase.id ? "/api/conference/edit/case" : "/api/conference/add/case";
      var that = this;
      _axios2.default.request({
        url: url,
        method: 'POST',
        data: postCase,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postCase.id = response.data.id;
        postCase.advice = advice;
        var getData = JSON.parse(JSON.stringify(that.state.getData));
        getData.case[that.state.history1Index] = postCase;

        that.setState({
          saveCase: true,
          history1: postCase,
          getData: getData,
          history2: postCase.advice ? postCase.advice[0] : null
        });
        alert("保存病历成功!");
      }).catch(function () {
        alert("保存病历失败!");
      });
    }
  }, {
    key: 'saveAdvice',
    value: function saveAdvice() {
      //保存医嘱
      if (this.state.saveCase) {
        var postAdvice = JSON.parse(JSON.stringify(this.state.getData.case[this.state.history1Index].advice[this.state.history2Index]));
        var prescription = JSON.parse(JSON.stringify(postAdvice.prescription));
        delete postAdvice.prescription;
        if (postAdvice.id) {
          postAdvice.id = postAdvice.id.toString();
        }
        postAdvice.caseId = this.state.history1.id.toString();
        var url = postAdvice.id ? "/api/conference/edit/advice" : "/api/conference/add/advice";
        var that = this;
        _axios2.default.request({
          url: url,
          method: 'POST',
          data: postAdvice,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.data.id) {
            postAdvice.id = response.data.id;
          }
          postAdvice.prescription = prescription;
          var getData = JSON.parse(JSON.stringify(that.state.getData));
          getData.case[that.state.history1Index].advice[that.state.history2Index] = postAdvice;
          that.setState({
            saveCase: true,
            history1: getData.case[that.state.history1Index],
            getData: getData,
            history2: postAdvice
          });
          alert("保存医嘱成功!");
        }).catch(function () {
          alert("保存医嘱失败!");
        });

        this.setState({
          saveAdvice: true
        });
      } else {
        alert("病历未保存!");
      }
    }
  }, {
    key: 'addHistory2',
    value: function addHistory2() {
      //增加医嘱
      if (this.state.saveAdvice) {
        var getData = this.state.getData;
        var length = getData.case[this.state.history1Index].advice.length;

        var obj = {
          "hospital": "",
          "doctor": "",
          "adviceTime": "",
          "advice": "",
          "prescription": [{
            "id": "0",
            "prescriptionTime": "", //开方时间
            "doctorName": "", //开方医生姓名
            "medicineTime": "", //药品名称
            "total": "", //总量
            "singleDose": "", //单次用量
            "frequency": "" //次/日
          }]
        };
        obj.adviceTime = startTime;
        obj.statusId = 1;
        getData.case[this.state.history1Index].advice.push(obj);
        var history1 = getData.case[this.state.history1Index];
        var history2 = getData.case[this.state.history1Index].advice[history1.advice.length - 1];
        var data = [];
        data.push(this.state.oldData);
        this.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          data: data,
          history2Index: length,
          saveAdvice: false
        });
      } else {
        alert("上一医嘱未保存");
      }
    }
  }, {
    key: 'addPrescription',
    value: function addPrescription() {
      //增加处方-显示弹框
      if (this.state.saveAdvice) {
        //这里会有一个数据请求，获取处方的id
        var obj = {
          "prescriptionTime": startTime, //开方时间
          "doctorName": "", //开方医生姓名
          "medicineTime": "", //药品名称
          "total": "", //总量
          "singleDose": "", //单次用量
          "frequency": "" //次/日
        };
        this.setState({
          showPrescription: true,
          centerPrescription: obj
        });
      } else {
        alert("医嘱未保存!");
      }
    }
  }, {
    key: 'changeDoctorName',
    value: function changeDoctorName(e) {
      //处方医生姓名
      var obj = this.state.centerPrescription;
      obj.doctorName = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changePrescriptionTime',
    value: function changePrescriptionTime(date, dateString) {
      //开方时间
      var obj = this.state.centerPrescription;
      obj.prescriptionTime = dateString;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeMedicineTime',
    value: function changeMedicineTime(e) {
      //处方药物名称
      var obj = this.state.centerPrescription;
      obj.medicineTime = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeTotal',
    value: function changeTotal(e) {
      //处方总量
      var obj = this.state.centerPrescription;
      obj.total = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeSingleDose',
    value: function changeSingleDose(e) {
      //处方单次用量
      var obj = this.state.centerPrescription;
      obj.singleDose = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'changeFrequency',
    value: function changeFrequency(e) {
      //处方   次/日
      var obj = this.state.centerPrescription;
      obj.frequency = e.target.value;
      this.setState({
        centerPrescription: obj
      });
    }
  }, {
    key: 'deletePrescription',
    value: function deletePrescription(index) {
      var data1 = this.state.data;
      var getData = this.state.getData;
      getData.case[this.state.history1Index].advice[this.state.history2Index].prescription.splice(index, 1);
      data1.splice(index, 1);
      this.setState({
        getData: getData,
        data: data1
      });
    }
  }, {
    key: 'cancelSaveCF',
    value: function cancelSaveCF() {
      this.setState({
        showPrescription: false
      });
    }
  }, {
    key: 'closePrescription',
    value: function closePrescription() {
      //保存处方并关闭处方弹出框

      var postData = this.state.centerPrescription;
      postData.adId = this.state.history2.id.toString();
      var that = this;
      _axios2.default.request({
        url: '/api/conference/add/prescription',
        method: 'POST',
        data: postData,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        postData.id = response.data.id;
        var prescriptionData = that.state.data;
        prescriptionData.unshift(postData);
        var getData = that.state.getData;
        getData.case[that.state.history1Index].advice[that.state.history2Index].prescription.unshift(postData);
        that.setState({
          data: prescriptionData,
          getData: getData,
          showPrescription: false,
          savePrescription: true
        });
      }).catch(function () {
        alert("保存处方失败!");
      });
    }
  }, {
    key: 'deleteHistory1',
    value: function deleteHistory1(index) {
      //删除病历


      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("请先保存病历!");
          return false;
        }
      }
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      if (getData.case.length == 1) {
        getData.case[0] = {
          "sn": "", //case编号
          "hospital": "", //case医院
          "doctor": "", //主治医生
          "name": "", //病例名称
          "diagnosisTime": startTime, //诊治时间
          "diagnosis": "", //临床诊断
          "doc": "", //病例资料
          "file": [],
          "statusId": 1,
          "advice": [{
            "hospital": "",
            "doctor": "",
            "adviceTime": startTime,
            "advice": "",
            "statusId": 1,
            "prescription": [{
              "id": '0',
              "prescriptionTime": "-", //开方时间
              "doctorName": "-", //开方医生姓名
              "medicineTime": "-", //药品名称
              "total": "-", //总量
              "singleDose": "-", //单次用量
              "frequency": "-" //次/日
            }]
          }]
        };
        var history2 = getData.case[0].advice ? getData.case[0].advice[0] : null;
        var fileList = getData.case[0].file;
        var data = history2.prescription;
        this.setState({
          getData: getData,
          history1: getData.case[0],
          history2: history2,
          history1Index: 0,
          history2Index: 0,
          data: data,
          saveCase: false,
          caseId: true,
          saveAdvice: false,
          fileList: fileList
        });
      } else {
        var saveCase = void 0;
        if (getData.case[index].statusId) {
          saveCase = true;
        }
        getData.case.splice(index, 1);
        if (index == getData.case.length - 1) {} else {
          index = index < 1 ? 0 : index - 1;
        }
        console.log(index);
        var _history = getData.case[index].advice ? getData.case[index].advice[0] : null;

        var _data2 = _history ? _history.prescription : [];
        if (_data2 == false) {
          _data2.push(this.state.oldData);
        }
        this.setState({
          getData: getData,
          history1: getData.case[index],
          history2: _history,
          history1Index: index,
          history2Index: 0,
          data: _data2,
          saveCase: true,
          fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
        });
      }
    }
  }, {
    key: 'deleteHistory2',
    value: function deleteHistory2(index) {
      //删除医嘱
      var getData = JSON.parse(JSON.stringify(this.state.getData));
      getData.case[this.state.history1Index].advice.splice(index, 1);
      index = index < 1 ? 0 : index - 1;
      var history1 = getData.case[this.state.history1Index];
      var history2 = history1.advice ? history1.advice[index] : null;
      var data = history2 ? history2.prescription : [];
      var saveAdvice = !history2;
      if (data == false) {
        data.push(this.state.oldData);
      }
      this.setState({
        getData: getData,
        history1: history1,
        history2: history2,
        history2Index: this.state.history2Index - 1,
        data: data,
        saveAdvice: saveAdvice
      });
    }
  }, {
    key: 'upLoadMsg',
    value: function upLoadMsg() {}
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var style = { "height": document.body.clientHeight };
      var that = this;
      var caseId = null;
      var Hidden = { "overflowY": "hidden" };
      var Width = { "width": document.body.clientWidth, "height": document.body.clientHeight };
      if (this.state.history1.id) {
        caseId = this.state.history1.id.toString();
      }
      var props = { //上传的事件
        action: '/upload/consultation/' + caseId,
        headers: {
          "Authorization": "Bearer " + token
        },
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            if (!that.state.saveCase) {
              alert("病历未保存!");
              return false;
            }
            if (fileList.length) {
              var getData = that.state.getData;
              getData.case[that.state.history1Index].file = getData.case[that.state.history1Index].file ? getData.case[that.state.history1Index].file : [];
              getData.case[that.state.history1Index].file.push(fileList[fileList.length - 1].response.result);
              var list = getData.case[that.state.history1Index].file;
              that.setState({
                fileList: list,
                getData: getData
              });
            }
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { style: this.state.showPrescription ? Hidden : this.state.isShow ? Hidden : null, className: 'newHidden' },
        this.state.showPrescription ? _react2.default.createElement(
          'div',
          { style: style, className: 'Prescription' },
          _react2.default.createElement(
            'div',
            { className: 'showPrescription' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, showTime: true, format: dateFormat, onChange: this.changePrescriptionTime.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5F00\u65B9\u533B\u751F\u59D3\u540D'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.doctorName, onChange: this.changeDoctorName.bind(this), size: 'large', placeholder: '\u5F00\u65B9\u533B\u751F\u59D3\u540D' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u836F\u54C1\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.medicineTime, onChange: this.changeMedicineTime.bind(this), size: 'large', placeholder: '\u836F\u54C1\u540D\u79F0' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u603B\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.total, onChange: this.changeTotal.bind(this), size: 'large', placeholder: '\u603B\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u5355\u6B21\u7528\u91CF'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.singleDose, onChange: this.changeSingleDose.bind(this), size: 'large', placeholder: '\u5355\u6B21\u7528\u91CF' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u9891\u6B21'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.centerPrescription.frequency, onChange: this.changeFrequency.bind(this), size: 'large', placeholder: '\u9891\u6B21' })
              )
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.closePrescription.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58\u5904\u65B9'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.cancelSaveCF.bind(this), className: 'transfer_btn1', type: 'primary' },
              '\u53D6\u6D88\u4FDD\u5B58'
            )
          )
        ) : "",
        this.state.isShow ? _react2.default.createElement(
          'div',
          { style: Width, className: 'transfer_box' },
          _react2.default.createElement(
            'div',
            { className: 'transfer' },
            _react2.default.createElement(_transfer2.default, {
              dataSource: this.state.mockData,
              listStyle: {
                width: 300,
                height: 500
              },
              rowKey: function rowKey(record) {
                return record.key;
              },
              targetKeys: this.state.targetKeys,
              onChange: this.handleChange.bind(this),
              render: this.renderItem.bind(this)
            }),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.queDing();
                }, className: 'transfer_btn1', type: 'primary' },
              '\u4FDD\u5B58'
            ),
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this4.quxiaohuizhenyisheng();
                }, className: 'transfer_btn', type: 'primary' },
              '\u53D6\u6D88'
            )
          )
        ) : "",
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u7F16\u8F91\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { showTime: true, open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory1.bind(_this4, index), className: 'history_sp1' },
                  '\u75C5\u4F8B ',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory1.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory1.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7', onChange: this.changeSn.bind(this) })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', onChange: this.changeHospital.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', onChange: this.changeDoctor.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', onChange: this.changeName.bind(this) })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeDagnosisTime.bind(this) })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { onChange: this.changeDiagnosis.bind(this), value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          this.state.history1.statusId ? _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { onClick: this.saveCase.bind(this), className: 'btn_save_index_2', type: 'primary' },
                '\u4FDD\u5B58\u75C5\u5386'
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this4.changeHistory2.bind(_this4, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: _this4.deleteHistory2.bind(_this4, index), className: 'prescribe_btn1 edit_delete', size: 'small' },
                  _react2.default.createElement(_icon2.default, { type: 'minus' })
                )
              );
            }) : "",
            this.state.caseId ? _react2.default.createElement(
              _button2.default,
              { onClick: this.addHistory2.bind(this), className: 'history_btn1', type: 'primary' },
              _react2.default.createElement(_icon2.default, { type: 'plus' })
            ) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", onChange: this.changeAdviceHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", onChange: this.changeAdviceDoctor.bind(this), className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.changeAdviceTime.bind(this) })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", onChange: this.changeAdvice.bind(this), className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            this.state.history2.statusId ? _react2.default.createElement(
              'div',
              { className: 'btn_save' },
              _react2.default.createElement(
                'div',
                { className: 'btn_save_index' },
                _react2.default.createElement(
                  _button2.default,
                  { onClick: this.saveAdvice.bind(this), className: 'btn_save_index_2', type: 'primary' },
                  '\u4FDD\u5B58\u533B\u5631'
                )
              )
            ) : "",
            this.state.data && this.state.data.length > 0 ? _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data })
              )
            ) : ""
          ) : "",
          this.state.fileList ? _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { onClick: this.alertMsg.bind(this), className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            this.state.caseId ? _react2.default.createElement(
              _upload2.default,
              props,
              _react2.default.createElement(
                _button2.default,
                { className: 'history_btn1' },
                _react2.default.createElement(_icon2.default, { type: 'upload' })
              )
            ) : "",
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList })
          ) : "",
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', onFocus: function onFocus() {
                  return _this4.huizhenyisheng();
                }, type: 'textarea', rows: 4 })
            )
          ),

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _button2.default,
                { className: 'btn_save_index_2', type: 'primary', onClick: function onClick() {
                    return _this4.send();
                  } },
                '\u63D0\u4EA4'
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'apply/return/ReturnRecord' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u8FD4\u56DE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditCnsulation;
}(_react.Component);

exports.default = EditCnsulation;

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var token = localStorage.getItem("robertUserName");

var ReturnRecord = function (_Component) {
  _inherits(ReturnRecord, _Component);

  function ReturnRecord(props) {
    _classCallCheck(this, ReturnRecord);

    var _this = _possibleConstructorReturn(this, (ReturnRecord.__proto__ || Object.getPrototypeOf(ReturnRecord)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();
    _this.state = {
      applyPage: {
        pageSize: 10,
        consultationName: "",
        username: "",
        phone: "",
        status: 4,
        startTime: ""
      },
      total: 10,
      current: 1,
      dataSource: [],
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '会诊对象',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '被退时间',
        dataIndex: 'modifyAt',
        key: 'modifyAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "apply/return/ReturnRecord/editReturn/" + record.id },
              '\u7F16\u8F91'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '', className: 'apply_link', onClick: function onClick() {
                  return _this.invalid(record.id);
                } },
              '\u4F5C\u5E9F'
            )
          );
        }
      }]
    };
    return _this;
  }

  _createClass(ReturnRecord, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'push',
    value: function push(id, index) {

      var that = this;
      _axios2.default.request({
        url: '/api/conference/commit',
        method: 'get',
        params: {
          id: id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.query(1);
      }).catch(function () {
        alert("数据提交失败!");
      });
    }
  }, {
    key: 'invalid',
    value: function invalid(id) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/cancel',
        method: 'get',
        params: {
          id: id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.query(1);
      }).catch(function () {
        alert("作废失败，请检查网络!");
      });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pageNum = num;
      _axios2.default.request({
        url: '/api/conference/applyPageList',
        method: 'get',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {

        var dataSource = response.data.result ? response.data.result.data : [];

        console.log(dataSource);
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var applyPage = this.state.applyPage;
      applyPage.startTime = dateString;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this2.query();
                }, type: 'primary', className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { allowClear: false, size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return ReturnRecord;
}(_react.Component);

exports.default = ReturnRecord;

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(109);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var token = localStorage.getItem("robertUserName");

var Checked = function (_Component) {
  _inherits(Checked, _Component);

  function Checked(props) {
    _classCallCheck(this, Checked);

    var _this = _possibleConstructorReturn(this, (Checked.__proto__ || Object.getPrototypeOf(Checked)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();

    _this.state = {
      applyPage: {
        pageSize: 10,
        status: "3",
        title: "",
        hospital: "",
        phone: "",
        applyName: "",
        startTime: ""

      },
      total: 10,
      current: 1,
      startTime: startTime,
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '所属医院',
        dataIndex: 'hospital',
        key: 'hospital'
      }, {
        title: '申请人',
        dataIndex: 'applyName',
        key: 'applyName'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '审核时间',
        dataIndex: 'modifyTime',
        key: 'modifyTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "check/checked/lookChecked/" + record.id },
              '\u67E5\u770B'
            )
          );
        }
      }],
      dataSource: []
    };

    return _this;
  }
  // push(id,index){
  //
  //   let that=this;
  //   axios.request({
  //     url: '/api/conference/commit',
  //     method: 'get',
  //     params:{
  //       id:id
  //     },
  //     headers: {
  //       'Authorization': 'Bearer '+token,
  //       'Content-Type': 'application/x-www-form-urlencoded UTF-8'
  //     },
  //   }).then(function(response) {
  //     if(response.data.code==200){
  //       axios.request({
  //         url: '/api/conference/applyPageList',
  //         method: 'get',
  //         params:this.state.applyPage,
  //         headers: {
  //           'Authorization': 'Bearer '+token,
  //           'Content-Type': 'application/x-www-form-urlencoded UTF-8'
  //         },
  //       }).then(function(response) {
  //         let dataSource=response.data.result.data;
  //         console.log(dataSource)
  //         that.setState({
  //           dataSource:dataSource
  //         })
  //       });
  //
  //
  //     }
  //
  //
  //
  //
  //   }).catch(function () {
  //     alert("数据提交失败，请检查网络!")
  //   });
  //
  // }

  _createClass(Checked, [{
    key: 'deleteRecord',
    value: function deleteRecord(index) {

      alert("删除了id是" + index + "的数据");
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var apply = this.state.applyPage;
      apply.startTime = dateString;
      this.setState({
        applyPage: apply
      });

      this.setState({
        startTime: dateString
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var apply = this.state.applyPage;
      apply.title = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeUsername',
    value: function changeUsername(e) {
      var apply = this.state.applyPage;
      apply.applyName = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      var apply = this.state.applyPage;
      apply.hospital = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var apply = this.state.applyPage;
      apply.phone = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pagenum = num;
      _axios2.default.request({
        url: '/api/conference/check/pageList',
        method: 'post',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var dataSource = response.data.result.data;
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this2.query();
                }, className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.title, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.applyName, onChange: this.changeUsername.bind(this), className: 'search_input', size: 'large', placeholder: '\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u6240\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.hospital, onChange: this.changeHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u6240\u5C5E\u533B\u9662' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.phone, onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return Checked;
}(_react.Component);

exports.default = Checked;

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var LookChecked = function (_Component) {
  _inherits(LookChecked, _Component);

  function LookChecked(props) {
    _classCallCheck(this, LookChecked);

    var _this = _possibleConstructorReturn(this, (LookChecked.__proto__ || Object.getPrototypeOf(LookChecked)).call(this, props));

    _this.state = {
      consultationId: 1,
      getData: allData,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      //下面的这个是病历资料表头
      fileListColumns: [{
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'apply_link', href: record.url, download: record.fileName },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'a',
              { className: 'apply_link', href: record.url },
              '\u67E5\u770B'
            )
          );
        }
      }],
      fileList: [], //病历资料集合
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "126px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "126px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],

      conclusionColumns: [{
        title: '时间',
        dataIndex: 'creatTime',
        key: 'creatTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'doctorName',
        key: 'doctorName',
        width: "126px"
      }, {
        title: '附件名称',
        dataIndex: 'docName',
        key: 'docName',
        width: "126px"
      }, {
        title: '会诊结论',
        dataIndex: 'message',
        key: 'message'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.docName },
              '\u4E0B\u8F7D'
            )
          );
        },
        width: "126px"
      }],
      conclusion: [],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      checkData: [],
      data: [{
        id: ' ',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      targetdoc: [] };
    return _this;
  }

  /////////////////////////


  _createClass(LookChecked, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        console.log(getData.consultation.hospital);
        console.log(getData.consultation.applicant);
        that.setState({
          getData: getData
        });
      }).catch(function () {
        alert("1");
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        getData.consultationId = that.props.params.id;
        var data = [];
        var fileList = [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }
        var conclusion = getData.conclusion ? getData.conclusion : []; //获取结论
        var checkData = getData.check ? getData.check : [];
        var history1 = getData.case ? getData.case[0] : null;
        var history2 = history1 && history1.advice ? history1.advice[0] : null;
        that.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          targetdoc: getData.doctor ? getData.doctor : [], //加载页面时，会诊医生栏显示的内容
          data: data,
          conclusion: conclusion,
          fileList: fileList,
          checkData: checkData
        });

        //因为异步的原因，所以只能在回调函数里面放数据请求了
        //that.getPeople();
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {
        alert("第一请求error");
      });

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.getValue();
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'ding',


    ///////////////////////////

    value: function ding() {
      /*let that=this;
       axios.request({
       url: '/api/conference/edit/page',
       method: 'get',
       params: {
       id:1
       },
       headers: {
       'Authorization': 'Bearer '+token,
       'Content-Type': 'application/x-www-form-urlencoded UTF-8'
       },
       }).then(function(response) {
       that.setState({
       getData:response.data,
       history1:response.data.case[0],
       history2:response.data.case[0].advice[0]
       })
       }).catch(function () {
       alert("error");
       console.log(that.state.getData)
       });*/
    }
  }, {
    key: 'startTime',
    value: function startTime(data, dataString) {
      console.log(dataString.split('"'));
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      console.log(date, dateString);
    }
  }, {
    key: 'onCheck',
    value: function onCheck(e) {
      console.log(e.currentTarget);
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历
      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {
          data = null;
        }
      } else {
        data = null;
      }

      console.log(data);
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {
        data = null;
      }
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var props = { //上传的事件
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            console.log(file, fileList);
            that.setState({
              fileList: fileList
            });
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u770B\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, onChage: function onChage() {
                  return _this2.startTime();
                }, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          this.state.history1 != false ? _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  ' \u75C5\u5386 ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ) : "",
          this.state.history1 != false ? _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                this.state.data ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data }) : _react2.default.createElement('li', { className: 'search_input' })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            this.state.fileList ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList }) : _react2.default.createElement(
              'span',
              { className: 'history_btn1' },
              ' \u65E0\u75C5\u5386\u8D44\u6599 '
            )
          ),
          this.state.targetdoc && this.state.targetdoc != false ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ) : "",

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",

          //这里面写判断有没有结论记录
          this.state.conclusion.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u7ED3\u8BBA\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.conclusionColumns, dataSource: this.state.conclusion })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'check/checked/checked' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u8FD4\u56DE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LookChecked;
}(_react.Component);

exports.default = LookChecked;

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(109);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var token = localStorage.getItem("robertUserName");

var HadReturn = function (_Component) {
  _inherits(HadReturn, _Component);

  function HadReturn(props) {
    _classCallCheck(this, HadReturn);

    var _this = _possibleConstructorReturn(this, (HadReturn.__proto__ || Object.getPrototypeOf(HadReturn)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();

    _this.state = {
      applyPage: {
        pageSize: "10",
        status: "4",
        title: "",
        hospital: "",
        phone: "",
        applyName: "",
        startTime: ""

      },
      total: 10,
      current: 1,
      startTime: startTime,
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '所属医院',
        dataIndex: 'hospital',
        key: 'hospital'
      }, {
        title: '申请人',
        dataIndex: 'applyName',
        key: 'applyName'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '退回时间',
        dataIndex: 'modifyTime',
        key: 'modifyTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "check/hadReturn/lookHadReturn/" + record.id },
              '\u67E5\u770B'
            )
          );
        }
      }],
      dataSource: []
    };

    return _this;
  }

  _createClass(HadReturn, [{
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(index) {

      alert("删除了id是" + index + "的数据");
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var apply = this.state.applyPage;
      apply.startTime = dateString;
      this.setState({
        applyPage: apply
      });

      this.setState({
        startTime: dateString
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var apply = this.state.applyPage;
      apply.title = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeUser',
    value: function changeUser(e) {
      var apply = this.state.applyPage;
      apply.applyName = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      var apply = this.state.applyPage;
      apply.hospital = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var apply = this.state.applyPage;
      apply.phone = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pageNum = num;
      _axios2.default.request({
        url: '/api/conference/check/pageList',
        method: 'post',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var dataSource = response.data.result.data;
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this2.query();
                }, className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.title, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.applyName, onChange: this.changeUser.bind(this), className: 'search_input', size: 'large', placeholder: '\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u6240\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.hospital, onChange: this.changeHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u6240\u5C5E\u533B\u9662' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.phone, onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return HadReturn;
}(_react.Component);

exports.default = HadReturn;

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var LookHadReturn = function (_Component) {
  _inherits(LookHadReturn, _Component);

  function LookHadReturn(props) {
    _classCallCheck(this, LookHadReturn);

    var _this = _possibleConstructorReturn(this, (LookHadReturn.__proto__ || Object.getPrototypeOf(LookHadReturn)).call(this, props));

    _this.state = {
      consultationId: _this.props.params.id,
      saveCase: true, //是否保存了病历
      savePrescription: false, //是否保存了处方
      saveAdvice: true, //是否保存了医嘱
      caseId: false, //是否显示添加医嘱按钮
      showPrescription: false, //是否显示新增处方弹出框
      getData: allData,
      centerPrescription: null,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      history1Index: 0, //当前显示的病历的下标
      history2Index: 0, //当前显示的医嘱的下标

      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ")
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      fileListColumns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1,
            ' '
          );
        }
      }, {
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ")
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.url, target: 'blank', className: 'apply_link' },
              '\u67E5\u770B'
            )
          );
        }
      }],
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "126px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "126px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      data: [{
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      targetdoc: [], //选中的医生信息
      fileList: null, //显示的上传文件集合
      checkData: [] //审核记录
    };
    return _this;
  }

  /////////////////////////

  _createClass(LookHadReturn, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        console.log(getData.consultation.hospital);
        console.log(getData.consultation.applicant);
        that.setState({
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });

        var getData = response.data;
        var data = [];
        var caseId = false;
        var fileList = [];
        var checkData = getData.check ? JSON.parse(JSON.stringify(getData.check)) : [];

        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          caseId = true;
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }
        getData.consultationId = that.props.params.id;
        console.log(checkData);
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? getData.case[0].advice[0] : null,
          targetdoc: getData.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          fileList: fileList,
          caseId: caseId,
          checkData: checkData
        });
        //因为异步的原因，所以只能在回调函数里面放数据请求了

        //that.getPeople();
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {
        alert(1);
      });

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getValue();

      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode == 27) {
        this.setState({
          showPrescription: false
        });
      }
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'changeHistory1',


    ///////////////////////////


    value: function changeHistory1(index) {
      //切换病历

      if (!this.state.saveCase) {
        if (index != this.state.history1Index) {
          alert("当前病历未保存!");
          return false;
        }
      }

      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {}
      } else {}
      var caseShow = false;
      if (this.state.getData.case[index].statusId) {
        caseShow = true;
      }
      if (this.state.getData.case[index].file && this.state.getData.case[index].file != false) {}
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        caseId: caseShow,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      if (!this.state.saveAdvice) {
        if (index != this.state.history2Index) {
          alert("当前医嘱未保存!");
          return false;
        }
      }
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {}
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        history2Index: index,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u7F16\u8F91\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { className: 'history_case', key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  '\u75C5\u4F8B ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u5FC5\u586B' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input' })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input' })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            this.state.data && this.state.data.length > 0 ? _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data })
              )
            ) : ""
          ) : "",
          this.state.fileList ? _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList })
          ) : "",
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ),

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'check/hadReturn/hadReturn' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u8FD4\u56DE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LookHadReturn;
}(_react.Component);

exports.default = LookHadReturn;

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style6 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style7 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style8 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style9 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style10 = __webpack_require__(81);

var _message = __webpack_require__(66);

var _message2 = _interopRequireDefault(_message);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

__webpack_require__(130);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};
var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var LookWaitCheck = function (_Component) {
  _inherits(LookWaitCheck, _Component);

  function LookWaitCheck(props) {
    _classCallCheck(this, LookWaitCheck);

    var _this = _possibleConstructorReturn(this, (LookWaitCheck.__proto__ || Object.getPrototypeOf(LookWaitCheck)).call(this, props));

    _this.state = {
      consultationId: 1,
      getData: allData,
      isShowBiaoji: false,
      returnReason: "",
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ")
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      //下面的这个是病历资料表头
      fileListColumns: [{
        title: '文件名',
        dataIndex: 'fileName',
        key: 'fileName'
      }, {
        title: '大小',
        dataIndex: 'fileSize',
        key: 'fileSize'
      }, {
        title: '上传时间',
        dataIndex: 'uploadAt',
        key: 'uploadAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { className: 'apply_link', href: record.url, download: record.fileName },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'a',
              { className: 'apply_link', href: record.url },
              '\u67E5\u770B'
            )
          );
        }
      }],
      fileList: [], //病历资料集合
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "126px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "126px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],

      conclusionColumns: [{
        title: '时间',
        dataIndex: 'creatTime',
        key: 'creatTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ")
          );
        },
        width: "126px"

      }, {
        title: '操作人',
        dataIndex: 'doctorName',
        key: 'doctorName',
        width: "126px"
      }, {
        title: '会诊结论',
        dataIndex: 'message',
        key: 'message'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.docName },
              '\u4E0B\u8F7D'
            )
          );
        },
        width: "126px"
      }],
      conclusion: [],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      checkData: [],
      data: [{
        id: ' ',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      targetdoc: [], //选中的医生信息
      hadResolve: false
    };
    return _this;
  }

  /////////////////////////

  _createClass(LookWaitCheck, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        that.setState({
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'checkHadChecked',
    value: function checkHadChecked() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/judge',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (res) {
        if (res.data.code === 300) {
          that.setState({
            hadResolve: true
          });
        }
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        getData.consultationId = 1;
        var data = [];
        var fileList = [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }

        var conclusion = getData.conclusion ? getData.conclusion : []; //获取结论
        var checkData = getData.check ? getData.check : [];
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? response.data.case[0].advice[0] : null,
          targetdoc: response.data.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          conclusion: conclusion,
          fileList: fileList,
          checkData: checkData
        });

        //因为异步的原因，所以只能在回调函数里面放数据请求了
        //that.getPeople();
        that.checkHadChecked();
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {});

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.getValue();
    }
  }, {
    key: 'returnList',
    value: function returnList() {
      location.hash = "/check/waitCheck/waitCheck";
    }
  }, {
    key: 'changeReturn',
    value: function changeReturn(e) {

      var returnReason = this.state.returnReason;
      returnReason = e.target.value;

      if (returnReason.length >= 120) {
        _message2.default.warning("结论字数120字以内");
      }
      this.setState({
        returnReason: returnReason
      });
    }
  }, {
    key: 'tuihuiDiv',
    value: function tuihuiDiv() {
      this.setState({
        isShowBiaoji: true
      });
    }
  }, {
    key: 'conFirm',
    value: function conFirm() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/check/sure',
        method: 'post',
        params: {
          id: that.props.params.id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        alert("会诊确认成功");
        location.hash = "/check/waitCheck/waitCheck";
      }).catch(function () {
        alert("会诊确认出错");
      });
    }
  }, {
    key: 'quXiao',
    value: function quXiao() {
      this.setState({
        isShowBiaoji: false
      });
    }
  }, {
    key: 'conFirmReturn',
    value: function conFirmReturn() {
      var that = this;
      var returnReason = this.state.returnReason;
      if (returnReason.length >= 120) {
        _message2.default.error("结论字数120字以内!");
        return false;
      }
      _axios2.default.request({
        url: '/api/conference/check/back',
        method: 'post',
        params: {
          id: that.props.params.id.toString(),
          returnReason: returnReason
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        alert("退回成功");
        that.setState({
          isShowBiaoji: false
        });
        location.hash = "/check/waitCheck/waitCheck";
      }).catch(function () {
        alert("退回出错");
      });
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'ding',


    ///////////////////////////

    value: function ding() {
      /*let that=this;
       axios.request({
       url: '/api/conference/edit/page',
       method: 'get',
       params: {
       id:1
       },
       headers: {
       'Authorization': 'Bearer '+token,
       'Content-Type': 'application/x-www-form-urlencoded UTF-8'
       },
       }).then(function(response) {
       that.setState({
       getData:response.data,
       history1:response.data.case[0],
       history2:response.data.case[0].advice[0]
       })
       }).catch(function () {
       alert("error");
       console.log(that.state.getData)
       });*/
    }
  }, {
    key: 'startTime',
    value: function startTime(data, dateString) {
      console.log(dateString.split('"'));
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      console.log(date, dateString);
    }
  }, {
    key: 'onCheck',
    value: function onCheck(e) {
      console.log(e.currentTarget);
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历
      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {
          data = null;
        }
      } else {
        data = null;
      }
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data,
        fileList: this.state.getData.case[index].file && this.state.getData.case[index].file != false ? this.state.getData.case[index].file : null
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {
        data = null;
      }
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var props = { //上传的事件
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            console.log(file, fileList);
            that.setState({
              fileList: fileList
            });
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u770B\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, onChage: function onChage() {
                  return _this2.startTime();
                }, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  '\u75C5\u5386 ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          this.state.history1.advice.length > 0 ? _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ) : "",
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                this.state.data ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data }) : _react2.default.createElement('li', { className: 'search_input' })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            this.state.fileList ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList }) : _react2.default.createElement(
              'span',
              { className: 'history_btn1' },
              ' \u65E0\u75C5\u5386\u8D44\u6599 '
            )
          ),
          this.state.targetdoc && this.state.targetdoc != false ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ) : "",

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",

          //这里面写判断有没有结论记录
          this.state.conclusion.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u7ED3\u8BBA\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.conclusionColumns, dataSource: this.state.conclusion })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                'div',
                { className: 'btn_div1' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', disabled: this.state.hadResolve, onClick: function onClick() {
                      return _this2.conFirm();
                    } },
                  '\u4F1A\u8BCA\u786E\u8BA4'
                ),
                ' \xA0',
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', disabled: this.state.hadResolve, onClick: function onClick() {
                      return _this2.tuihuiDiv();
                    } },
                  '\u6807\u8BB0\u9000\u56DE'
                ),
                '\xA0'
              ),
              _react2.default.createElement(
                'div',
                { className: 'btn_div1' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', onClick: function onClick() {
                      return _this2.returnList();
                    } },
                  '\u53D6\u6D88'
                )
              )
            )
          ),
          this.state.isShowBiaoji ? _react2.default.createElement(
            'div',
            { className: 'returnDiv' },
            _react2.default.createElement(_input2.default, { type: 'textarea', value: this.state.returnReason, onChange: this.changeReturn.bind(this), rows: 4, placeholder: '\u8BF7\u8F93\u5165\u9000\u56DE\u539F\u56E0' }),
            _react2.default.createElement(
              'div',
              { className: 'btn_return_div' },
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', className: 'btn_one', onClick: function onClick() {
                    return _this2.conFirmReturn();
                  } },
                '\u786E\u8BA4\u9000\u56DE'
              ),
              '\xA0',
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', onClick: function onClick() {
                    return _this2.quXiao();
                  } },
                '\u53D6\u6D88'
              )
            )
          ) : ""
        )
      );
    }
  }]);

  return LookWaitCheck;
}(_react.Component);

exports.default = LookWaitCheck;

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(109);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var token = localStorage.getItem("robertUserName");

var WaitCheck = function (_Component) {
  _inherits(WaitCheck, _Component);

  function WaitCheck(props) {
    _classCallCheck(this, WaitCheck);

    var _this = _possibleConstructorReturn(this, (WaitCheck.__proto__ || Object.getPrototypeOf(WaitCheck)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();

    _this.state = {
      applyPage: {
        pageSize: 10,
        pageNum: 1,
        status: "2",
        title: "",
        hospital: "",
        phone: "",
        applyName: "",
        startTime: ""

      },
      total: 10,
      current: 1,
      startTime: startTime,
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '所属医院',
        dataIndex: 'hospital',
        key: 'hospital'
      }, {
        title: '申请人',
        dataIndex: 'applyName',
        key: 'applyName'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '提交时间',
        dataIndex: 'modifyTime',
        key: 'modifyTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "check/waitCheck/lookWaitCheck/" + record.id },
              '\u5BA1\u6838'
            )
          );
        }
      }],
      dataSource: []
    };

    return _this;
  }

  _createClass(WaitCheck, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query();
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var apply = this.state.applyPage;
      apply.startTime = dateString;
      this.setState({
        applyPage: apply
      });

      this.setState({
        startTime: dateString
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var apply = this.state.applyPage;
      apply.title = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeUser',
    value: function changeUser(e) {
      var apply = this.state.applyPage;
      apply.applyName = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      var apply = this.state.applyPage;
      apply.hospital = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var apply = this.state.applyPage;
      apply.phone = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pagenum = num;
      _axios2.default.request({
        url: '/api/conference/check/pageList',
        method: 'post',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var dataSource = response.data.result.data;
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this2.query();
                }, className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.title, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.applyName, onChange: this.changeUser.bind(this), className: 'search_input', size: 'large', placeholder: '\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u6240\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.hospital, onChange: this.changeHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u6240\u5C5E\u533B\u9662' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.phone, onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return WaitCheck;
}(_react.Component);

exports.default = WaitCheck;

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style9 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style10 = __webpack_require__(151);

var _select = __webpack_require__(67);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var token = localStorage.getItem("robertUserName");


var url = ["", "/api/conference/summary/apply", "/api/conference/summary/check", "/api/conference/summary/mission"];
var listValue = ["全部", "待提交", "待审核", "待会诊", "已退回", "已作废", "已结束"];
var statValue = ["", "会诊申请", "会诊审核", "会诊任务"];

var Consulation = function (_Component) {
  _inherits(Consulation, _Component);

  function Consulation(props) {
    _classCallCheck(this, Consulation);

    var _this = _possibleConstructorReturn(this, (Consulation.__proto__ || Object.getPrototypeOf(Consulation)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear();
    }();
    _this.state = {
      applyPage: {
        pageNum: "1",
        pageSize: "10",
        consultationName: "",
        username: "",
        phone: "",
        startTime: "",
        hospital: "",
        applicant: "",
        aPhone: ""
      },
      total: 10,
      current: 1, //当前页数
      stage: 0, //会诊状态过滤
      status: 0, //会诊阶段选中
      dataSource: [],
      dataSourceFather: [],
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'consultationName',
        key: 'consultationName'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '所属医院',
        dataIndex: 'hospital',
        key: 'hospital'
      }, {
        title: '会诊对象',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '申请人',
        dataIndex: 'applicant',
        key: 'applicant'
      }, {
        title: '手机号',
        dataIndex: 'aPhone',
        key: 'aPhone'
      },
      /*{
        title: '会诊阶段',
        dataIndex: 'jd',
        key: 'jd',
        /!*render: (text, record,index) => (
          <span  key={record.id}>
            {statValue[this.state.stage]}
        </span>
        )*!/
      },*/
      {
        title: '会诊状态',
        dataIndex: 'status',
        key: 'status',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            listValue[record.status]
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "consulationTables/lookConsulation/" + record.id },
              '\u67E5\u770B'
            )
          );
        }
      }]
    };
    return _this;
  }

  _createClass(Consulation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(0, 0, 1);
    }
  }, {
    key: 'query',
    value: function query(value, url, num) {
      if (value != 0) {
        var that = this;
        var applyPage = this.state.applyPage;
        applyPage.pageNum = num;
        _axios2.default.request({
          url: url,
          method: "get",
          params: applyPage,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          console.log(response.data.result.count);
          that.setState({
            dataSource: response.data.result.data,
            dataSourceFather: response.data.result.data,
            total: response.data.result.count
          });
        });
      } else if (value == 0) {
        var _that = this;
        var dataList = [];
        var total = 0;
        var _applyPage = this.state.applyPage;
        _applyPage.pageNum = num;
        //第一个接口
        _axios2.default.request({
          url: "/api/conference/summary",
          method: "get",
          params: _applyPage,
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          total = response.data.result.count;
          response.data.result.data.map(function (ele) {
            dataList.push(ele);
          });
          _that.setState({
            dataSource: response.data.result.data,
            dataSourceFather: response.data.result.data,
            total: total
          });
        });
      }
    }
  }, {
    key: 'selectStage',
    value: function selectStage(value) {
      //选中阶段
      this.setState({
        status: value
      });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(this.state.status, url[this.state.status], page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'selectState',
    value: function selectState(value) {
      //选中状态
      /*if(value==0){
        let dataSource=this.state.dataSourceFather;
        this.setState({
          dataSource
        })
      }else{
        let dataSource=this.state.dataSourceFather.filter(function (ele) {
          return ele.status==value
        });
        this.setState({
          dataSource
        })
      }*/
      if (value == 0) {
        var applyPage = this.state.applyPage;
        delete applyPage.status;
        this.setState({
          applyPage: applyPage
        });
      } else {
        var _applyPage2 = this.state.applyPage;
        _applyPage2.status = value;
        this.setState({
          applyPage: _applyPage2
        });
      }

      this.setState({
        stage: value
      });
    }

    //修改会诊名称

  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var applyPage = this.state.applyPage;
      applyPage.consultationName = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }
    //修改会诊对象

  }, {
    key: 'changeUsername',
    value: function changeUsername(e) {
      var applyPage = this.state.applyPage;
      applyPage.username = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }

    //修改手机号

  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var applyPage = this.state.applyPage;
      applyPage.phone = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }

    //修改会诊时间

  }, {
    key: 'changeStartTime',
    value: function changeStartTime(data, dateString) {
      var applyPage = this.state.applyPage;
      applyPage.startTime = dateString;
      this.setState({
        applyPage: applyPage
      });
    }

    //修改所属医院

  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      var applyPage = this.state.applyPage;
      applyPage.hospital = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }

    //修改申请人

  }, {
    key: 'changeApplicant',
    value: function changeApplicant(e) {
      var applyPage = this.state.applyPage;
      applyPage.applicant = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }

    //修改申请人手机号

  }, {
    key: 'changeAPhone',
    value: function changeAPhone(e) {
      var applyPage = this.state.applyPage;
      applyPage.aPhone = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var applyPage = this.state.applyPage;
      applyPage.startTime = dateString;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u4F1A\u8BCA\u603B\u8868\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { onClick: this.query.bind(this, this.state.status, url[this.state.status], 1), type: 'primary', className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeUsername.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u6240\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeApplicant.bind(this), className: 'search_input', size: 'large', placeholder: '\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeAPhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u9636\u6BB5'
              ),
              _react2.default.createElement(
                _select2.default,
                { optionFilterProp: 'children', className: 'search_input', onChange: this.selectStage.bind(this), defaultValue: '\u5168\u90E8' },
                _react2.default.createElement(
                  Option,
                  { value: '0' },
                  '\u5168\u90E8'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '1' },
                  '\u4F1A\u8BCA\u7533\u8BF7'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '2' },
                  '\u4F1A\u8BCA\u5BA1\u6838'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '3' },
                  '\u4F1A\u8BCA\u4EFB\u52A1'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u72B6\u6001'
              ),
              _react2.default.createElement(
                _select2.default,
                { optionFilterProp: 'children', className: 'search_input', onChange: this.selectState.bind(this), defaultValue: '\u5168\u90E8' },
                _react2.default.createElement(
                  Option,
                  { value: '0' },
                  '\u5168\u90E8'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '1' },
                  '\u5F85\u63D0\u4EA4'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '2' },
                  '\u5F85\u5BA1\u6838'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '4' },
                  '\u5DF2\u9000\u56DE'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '3' },
                  '\u5F85\u4F1A\u8BCA'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '5' },
                  '\u5DF2\u4F5C\u5E9F'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '6' },
                  '\u5DF2\u7ED3\u675F'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { rowKey: 'id', pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return Consulation;
}(_react.Component);

exports.default = Consulation;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var EditCnsulation = function (_Component) {
  _inherits(EditCnsulation, _Component);

  function EditCnsulation(props) {
    _classCallCheck(this, EditCnsulation);

    var _this = _possibleConstructorReturn(this, (EditCnsulation.__proto__ || Object.getPrototypeOf(EditCnsulation)).call(this, props));

    _this.state = {
      consultationId: 1,
      getData: allData,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      //下面的这个是病历资料表头
      fileListColumns: [{
        title: '文件名',
        dataIndex: 'diagnosis',
        key: 'diagnosis'
      }, {
        title: '大小',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '上传时间',
        dataIndex: 'diagnosisTime',
        key: 'diagnosisTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.diagnosis },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'a',
              { href: record.doc },
              '\u67E5\u770B'
            )
          );
        }
      }],
      fileList: [], //病历资料集合
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "126px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "126px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],

      conclusionColumns: [{
        title: '时间',
        dataIndex: 'creatTime',
        key: 'creatTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '附件名称',
        dataIndex: 'docName',
        key: 'docName',
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'doctorName',
        key: 'doctorName',
        width: "126px"
      }, {
        title: '会诊结论',
        dataIndex: 'message',
        key: 'message'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.docName },
              '\u4E0B\u8F7D'
            )
          );
        },
        width: "126px"
      }],
      conclusion: [],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      checkData: [],
      data: [{
        id: ' ',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      targetdoc: [] };
    return _this;
  }

  /////////////////////////

  _createClass(EditCnsulation, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        console.log(getData.consultation.hospital);
        console.log(getData.consultation.applicant);
        that.setState({
          getData: getData
        });
      }).catch(function () {
        alert("1");
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        getData.consultationId = 1;
        var data = [];

        if (getData.case && getData.case != false && getData.case[0].advice != false) {
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        } else {
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }
        var conclusion = getData.conclusion ? getData.conclusion : []; //获取结论
        var checkData = getData.check ? getData.check : [];
        var history1 = getData.case ? getData.case[0] : null;
        var history2 = history1 && history1.advice ? history1.advice[0] : null;
        console.log(history1, history2, data);
        that.setState({
          getData: getData,
          history1: history1,
          history2: history2,
          targetdoc: getData.doctor ? getData.doctor : [], //加载页面时，会诊医生栏显示的内容
          data: data,
          conclusion: conclusion,
          checkData: checkData
        });

        //因为异步的原因，所以只能在回调函数里面放数据请求了
        //that.getPeople()
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {
        alert("第一请求error");
      });

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.getValue();
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'ding',


    ///////////////////////////

    value: function ding() {
      /*let that=this;
       axios.request({
       url: '/api/conference/edit/page',
       method: 'get',
       params: {
       id:1
       },
       headers: {
       'Authorization': 'Bearer '+token,
       'Content-Type': 'application/x-www-form-urlencoded UTF-8'
       },
       }).then(function(response) {
       that.setState({
       getData:response.data,
       history1:response.data.case[0],
       history2:response.data.case[0].advice[0]
       })
       }).catch(function () {
       alert("error");
       console.log(that.state.getData)
       });*/
    }
  }, {
    key: 'startTime',
    value: function startTime(data, dataString) {
      console.log(dataString.split('"'));
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      console.log(date, dateString);
    }
  }, {
    key: 'onCheck',
    value: function onCheck(e) {
      console.log(e.currentTarget);
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历
      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {
          data = null;
        }
      } else {
        data = null;
      }

      console.log(data);
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {
        data = null;
      }
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var props = { //上传的事件
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            console.log(file, fileList);
            that.setState({
              fileList: fileList
            });
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u770B\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, onChage: function onChage() {
                  return _this2.startTime();
                }, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          this.state.history1 != false ? _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  ' \u75C5\u5386 ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ) : "",
          this.state.history1 != false ? _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                this.state.data ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data }) : _react2.default.createElement('li', { className: 'search_input' })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            _react2.default.createElement(
              'span',
              { className: 'history_btn1' },
              ' \u65E0\u75C5\u5386\u8D44\u6599 '
            )
          ),
          this.state.targetdoc && this.state.targetdoc != false ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ) : "",

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",

          //这里面写判断有没有结论记录
          this.state.conclusion.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u7ED3\u8BBA\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.conclusionColumns, dataSource: this.state.conclusion })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'consulationTables/consulation' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u8FD4\u56DE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditCnsulation;
}(_react.Component);

exports.default = EditCnsulation;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style6 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style7 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style8 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var token = localStorage.getItem("robertUserName");

var Invalid = function (_Component) {
  _inherits(Invalid, _Component);

  function Invalid(props) {
    _classCallCheck(this, Invalid);

    var _this = _possibleConstructorReturn(this, (Invalid.__proto__ || Object.getPrototypeOf(Invalid)).call(this, props));

    var startTime = function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + seperator1 + month + seperator1 + strDate;
    }();
    _this.state = {
      applyPage: {
        pageSize: 10,
        consultationName: "",
        username: "",
        phone: "",
        status: 5,
        startTime: ""
      },
      total: 10,
      current: 1,
      dataSource: [],
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'title',
        key: 'title'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '会诊对象',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '作废时间',
        dataIndex: 'modifyAt',
        key: 'modifyAt',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "invalid/lookInvalid/" + record.id },
              '\u67E5\u770B'
            )
          );
        }
      }]
    };

    return _this;
  }

  _createClass(Invalid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var applyPage = this.state.applyPage;
      applyPage.consultationName = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var applyPage = this.state.applyPage;
      applyPage.username = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'changeUserName',
    value: function changeUserName(e) {
      var applyPage = this.state.applyPage;
      applyPage.phone = e.target.value;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      applyPage.pagenum = num;
      _axios2.default.request({
        url: '/api/conference/applyPageList',
        method: 'get',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {

        var dataSource = response.data.result ? response.data.result.data : [];

        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var applyPage = this.state.applyPage;
      applyPage.startTime = dateString;
      this.setState({
        applyPage: applyPage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u4F5C\u5E9F\u4F1A\u8BCA\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return _this2.query();
                }, type: 'primary', className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changeUserName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return Invalid;
}(_react.Component);

exports.default = Invalid;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style5 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "0-0-0 00:00:00.000", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "" //会诊描述
  },
  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var EditCnsulation = function (_Component) {
  _inherits(EditCnsulation, _Component);

  function EditCnsulation(props) {
    _classCallCheck(this, EditCnsulation);

    var _this = _possibleConstructorReturn(this, (EditCnsulation.__proto__ || Object.getPrototypeOf(EditCnsulation)).call(this, props));

    _this.state = {
      consultationId: 1,
      getData: allData,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      //下面的这个是病历资料表头
      fileListColumns: [{
        title: '文件名',
        dataIndex: 'diagnosis',
        key: 'diagnosis'
      }, {
        title: '大小',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '上传时间',
        dataIndex: 'diagnosisTime',
        key: 'diagnosisTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.diagnosis },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'a',
              { href: record.doc },
              '\u67E5\u770B'
            )
          );
        }
      }],
      fileList: [], //病历资料集合
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "126px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "126px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],

      conclusionColumns: [{
        title: '时间',
        dataIndex: 'creatTime',
        key: 'creatTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'doctorName',
        key: 'doctorName',
        width: "126px"
      }, {
        title: '会诊结论',
        dataIndex: 'message',
        key: 'message'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.docName },
              '\u4E0B\u8F7D'
            )
          );
        },
        width: "126px"
      }],
      conclusion: [],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      checkData: [],
      data: [{
        id: ' ',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      docKeys: [], //确定时的会诊医生弹出框右边的index
      docId: [], //选中的医生的要上传的格式
      targetdoc: [] };
    return _this;
  }

  /////////////////////////

  _createClass(EditCnsulation, [{
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        console.log(getData.consultation.hospital);
        console.log(getData.consultation.applicant);
        that.setState({
          getData: getData
        });
      }).catch(function () {
        alert("1");
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        getData.consultationId = 1;
        var data = [];
        var fileList = [];
        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
          fileList = getData.case[0].file ? getData.case[0].file : [];
        } else {
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }

        var conclusion = getData.conclusion ? getData.conclusion : []; //获取结论
        var checkData = getData.check ? getData.check : [];
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? response.data.case[0].advice[0] : null,
          targetdoc: response.data.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          conclusion: conclusion,
          checkData: checkData
        });

        //因为异步的原因，所以只能在回调函数里面放数据请求了
        //that.getPeople()
        _axios2.default.request({
          url: '/api/conference/doctor',
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded UTF-8'
          }
        }).then(function (response) {
          var targetKeys = [];
          var mockData = [];
          var targetdoc = [];
          var docArr = response.data.result;

          for (var i = 0; i < docArr.length; i++) {
            var _data = {
              key: docArr[i].doctorId,
              title: docArr[i].doctorName,
              description: docArr[i].hospitalName,
              chosen: function (a) {
                return responseDoc.indexOf(a) > -1 ? true : false;
              }(docArr[i].doctorId)
            };
            if (_data.chosen) {
              targetKeys.push(_data.key);
            }
            mockData.push(_data);
          }

          docArr.map(function (ele, index) {
            targetdoc.push(ele); //targetdoc是显示在框子里面的医生的名字集合
          });
          var docId = [];
          for (var _i = 0; _i < targetKeys.length; _i++) {
            var _obj = {};
            _obj.doctor = targetKeys[_i];
            docId.push(_obj);
          }

          var obj = {}; //这里是生成医生接口的格式
          obj.consultationId = that.state.consultationId;
          obj.doctorId = docId;

          that.setState({
            mockData: mockData,
            targetKeys: targetKeys,
            docList: docArr,
            docId: obj,
            docKeys: targetKeys
          });
        });
      }).catch(function () {
        alert("第一请求error");
      });

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.getValue();
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'ding',


    ///////////////////////////

    value: function ding() {
      /*let that=this;
       axios.request({
       url: '/api/conference/edit/page',
       method: 'get',
       params: {
       id:1
       },
       headers: {
       'Authorization': 'Bearer '+token,
       'Content-Type': 'application/x-www-form-urlencoded UTF-8'
       },
       }).then(function(response) {
       that.setState({
       getData:response.data,
       history1:response.data.case[0],
       history2:response.data.case[0].advice[0]
       })
       }).catch(function () {
       alert("error");
       console.log(that.state.getData)
       });*/
    }
  }, {
    key: 'startTime',
    value: function startTime(data, dataString) {
      console.log(dataString.split('"'));
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      console.log(date, dateString);
    }
  }, {
    key: 'onCheck',
    value: function onCheck(e) {
      console.log(e.currentTarget);
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历
      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {
          data = null;
        }
      } else {
        data = null;
      }

      console.log(data);
      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {
        data = null;
      }
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var props = { //上传的事件
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            console.log(file, fileList);
            that.setState({
              fileList: fileList
            });
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u770B\u4F1A\u8BCA'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, onChage: function onChage() {
                  return _this2.startTime();
                }, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  '\u75C5\u5386 ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, allowClear: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          this.state.history1.advice.length > 0 ? _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ) : "",
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { allowClear: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input' })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                this.state.data ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data }) : _react2.default.createElement('li', { className: 'search_input' })
              )
            )
          ) : "",
          this.state.fileList ? _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'fileList', columns: this.state.fileListColumns, dataSource: this.state.fileList })
          ) : "",
          this.state.targetdoc && this.state.targetdoc != false ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ) : "",

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",

          //这里面写判断有没有结论记录
          this.state.conclusion.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u7ED3\u8BBA\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { className: 'search_input', columns: this.state.conclusionColumns, dataSource: this.state.conclusion })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'invalid/invalid' },
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary' },
                  '\u8FD4\u56DE'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditCnsulation;
}(_react.Component);

exports.default = EditCnsulation;

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style6 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style7 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style8 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style9 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style10 = __webpack_require__(151);

var _select = __webpack_require__(67);

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(109);

var _checked = __webpack_require__(79);

var _checked2 = _interopRequireDefault(_checked);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';
var startTime = function show_cur_times() {
  //获取当前日期
  var date_time = new Date();
  //年
  var year = date_time.getFullYear();
  //判断小于10，前面补0
  if (year < 10) {
    year = "0" + year;
  }

  //月
  var month = date_time.getMonth() + 1;
  //判断小于10，前面补0
  if (month < 10) {
    month = "0" + month;
  }

  //日
  var day = date_time.getDate();
  //判断小于10，前面补0
  if (day < 10) {
    day = "0" + day;
  }

  //时
  var hours = date_time.getHours();
  //判断小于10，前面补0
  if (hours < 10) {
    hours = "0" + hours;
  }

  //分
  var minutes = date_time.getMinutes();
  //判断小于10，前面补0
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //秒
  var seconds = date_time.getSeconds();
  //判断小于10，前面补0
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //拼接年月日时分秒
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}();
var token = localStorage.getItem("robertUserName");
var Option = _select2.default.Option;

var ConsultationTask = function (_Component) {
  _inherits(ConsultationTask, _Component);

  function ConsultationTask(props) {
    _classCallCheck(this, ConsultationTask);

    var _this = _possibleConstructorReturn(this, (ConsultationTask.__proto__ || Object.getPrototypeOf(ConsultationTask)).call(this, props));

    var Option = _select2.default.Option;
    _this.state = {
      applyPage: {
        pageSize: 10,
        status: "3",
        consultationName: "",
        username: "",
        phone: "",
        startTime: "",
        hospital: "",
        applicant: "",
        aPhone: "",
        stat: ""

      },
      total: 10,
      current: 1,
      startTime: startTime,
      columns: [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            index + 1
          );
        }
      }, {
        title: '会诊名称',
        dataIndex: 'consultationName',
        key: 'consultationName'
      }, {
        title: '会诊时间',
        dataIndex: 'startTime',
        key: 'startTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '所属医院',
        dataIndex: 'hospital',
        key: 'hospital'
      }, {
        title: '会诊对象',
        dataIndex: 'username',
        key: 'username'
      }, {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
      }, {
        title: '申请人',
        dataIndex: 'applicant',
        key: 'applicant'
      }, {
        title: '手机号',
        dataIndex: 'aPhone',
        key: 'aPhone'
      }, {
        title: '会诊状态',
        dataIndex: 'stat',
        key: 'stat',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            text === "已结束" ? "已结束" : !_checked2.default.Calculation(record.startTime.split("T").join(" "), startTime) ? "未开始" : "进行中"
          );
        }
      }, {
        title: '确认时间',
        dataIndex: 'modifyTime',
        key: 'modifyTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        }
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            { key: record.id },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: "task/lookConsultationTask/" + record.id },
              '\u67E5\u770B'
            ),
            '\xA0',
            record.conId ? _react2.default.createElement(
              'a',
              { disabled: !_checked2.default.Calculation(record.startTime.split("T").join(" "), startTime) || record.stat === "已结束", href: "http://192.168.100.133:8787/conference/#/mainFrame/personMeeting/addMeeting/" + record.conId + "/1" },
              '\u53C2\u52A0'
            ) : ""
          );
        }
      }],
      dataSource: []
    };

    return _this;
  }

  _createClass(ConsultationTask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.query(1);
    }
  }, {
    key: 'onChange',
    value: function onChange(date, dateString) {
      var apply = this.state.applyPage;
      apply.startTime = dateString;
      this.setState({
        applyPage: apply
      });

      this.setState({
        startTime: dateString
      });
    }
  }, {
    key: 'changeConsultationName',
    value: function changeConsultationName(e) {
      var apply = this.state.applyPage;
      apply.consultationName = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeUsername',
    value: function changeUsername(e) {
      var apply = this.state.applyPage;
      apply.username = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeHospital',
    value: function changeHospital(e) {
      var apply = this.state.applyPage;
      apply.hospital = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changePhone',
    value: function changePhone(e) {
      var apply = this.state.applyPage;
      apply.phone = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeApplicant',
    value: function changeApplicant(e) {
      var apply = this.state.applyPage;
      apply.applicant = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeaPhone',
    value: function changeaPhone(e) {
      var apply = this.state.applyPage;
      apply.aPhone = e.target.value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'changeStat',
    value: function changeStat() {
      // let obj_select=document.getElementById("select_id");
      // let  index=obj_select.selectedIndex;
      // let  text=obj_select.options[index].text;
      // let apply=this.state.applyPage;
      //  apply.stat=text;
      //  this.setState({
      //    applyPage:apply
      //  })
      //  console.log(text);
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.query(page);
      this.setState({
        current: page
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      console.log(value);
      var apply = this.state.applyPage;
      apply.stat = value;
      this.setState({
        applyPage: apply
      });
    }
  }, {
    key: 'query',
    value: function query(num) {
      var that = this;
      var applyPage = this.state.applyPage;
      if (applyPage.stat === "1") {
        delete applyPage.stat;
      }
      applyPage.pageNum = num;
      _axios2.default.request({
        url: '/api/conference/mission/pageList',
        method: 'get',
        params: applyPage,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var dataSource = response.data.result.data;
        that.setState({
          dataSource: dataSource,
          total: response.data.result.count
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'apple_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u67E5\u8BE2\u533A',
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this2.query();
                }, className: 'search_btn1' },
              '\u67E5\u8BE2'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.consultationName, onChange: this.changeConsultationName.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { size: 'large', className: 'search_input', onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.username, onChange: this.changeUsername.bind(this), className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.phone, onChange: this.changePhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u6240\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.hospital, onChange: this.changeHospital.bind(this), className: 'search_input', size: 'large', placeholder: '\u6240\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.applicant, onChange: this.changeApplicant.bind(this), className: 'search_input', size: 'large', placeholder: '\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { value: this.state.applyPage.aPhone, onChange: this.changeaPhone.bind(this), className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u72B6\u6001'
              ),
              _react2.default.createElement(
                _select2.default,
                { defaultValue: '\u8BF7\u9009\u62E9', className: 'search_input', onChange: this.handleChange.bind(this) },
                _react2.default.createElement(
                  Option,
                  { value: '1' },
                  '\u5168\u90E8'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '\u672A\u5F00\u59CB' },
                  '\u672A\u5F00\u59CB'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '\u8FDB\u884C\u4E2D' },
                  '\u8FDB\u884C\u4E2D'
                ),
                _react2.default.createElement(
                  Option,
                  { value: '\u5DF2\u7ED3\u675F' },
                  '\u5DF2\u7ED3\u675F'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apple_bottom' },
          _react2.default.createElement(
            'h1',
            { className: 'most_h1' },
            '\u5217\u8868\u533A'
          ),
          _react2.default.createElement(_table2.default, { pagination: { defaultPageSize: 10, showQuickJumper: true, onChange: this.changePage.bind(this),
              total: this.state.total, current: this.state.current }, rowKey: 'id', dataSource: this.state.dataSource, columns: this.state.columns })
        )
      );
    }
  }]);

  return ConsultationTask;
}(_react.Component);

exports.default = ConsultationTask;

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style8 = __webpack_require__(100);

var _upload = __webpack_require__(82);

var _upload2 = _interopRequireDefault(_upload);

var _style9 = __webpack_require__(22);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _style10 = __webpack_require__(96);

var _icon = __webpack_require__(14);

var _icon2 = _interopRequireDefault(_icon);

var _style11 = __webpack_require__(26);

var _table = __webpack_require__(24);

var _table2 = _interopRequireDefault(_table);

var _style12 = __webpack_require__(25);

var _datePicker = __webpack_require__(23);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _style13 = __webpack_require__(19);

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

var _style14 = __webpack_require__(81);

var _message = __webpack_require__(66);

var _message2 = _interopRequireDefault(_message);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

__webpack_require__(51);

__webpack_require__(130);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _checked = __webpack_require__(79);

var _checked2 = _interopRequireDefault(_checked);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//dataIndex  key要一样
var token = localStorage.getItem("robertUserName");

var startTime = function show_cur_times() {
  //获取当前日期
  var date_time = new Date();
  //年
  var year = date_time.getFullYear();
  //判断小于10，前面补0
  if (year < 10) {
    year = "0" + year;
  }

  //月
  var month = date_time.getMonth() + 1;
  //判断小于10，前面补0
  if (month < 10) {
    month = "0" + month;
  }

  //日
  var day = date_time.getDate();
  //判断小于10，前面补0
  if (day < 10) {
    day = "0" + day;
  }

  //时
  var hours = date_time.getHours();
  //判断小于10，前面补0
  if (hours < 10) {
    hours = "0" + hours;
  }

  //分
  var minutes = date_time.getMinutes();
  //判断小于10，前面补0
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //秒
  var seconds = date_time.getSeconds();
  //判断小于10，前面补0
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //拼接年月日时分秒
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}();

var allData = {
  //会诊
  "consultation": {
    "hospital": "", //隶属医院
    "applicant": "", //会诊申请人
    "consultationName": "", //会诊名称
    "startTime": "2017-04-17", //会诊时间
    "username": "", //会诊对象
    "phone": "", //会诊对象的手机号
    "identification": "", //身份证号
    "birthday": "0-0-0 00:00:00.000", //出生日期
    "famliyName": "", //陪护家属
    "familyPhone": "", //家属手机号
    "content": "", //会诊描述
    "stat": 0
  },

  //病历
  "case": [{
    "sn": "", //病例编号
    "hospital": "", //病例医院
    "doctor": "", //主治医生
    "name": "", //病例名称
    "diagnosisTime": "2999-12-31 00:00:00.000", //诊治时间
    "diagnosis": "", //临床诊断
    "doc": "", //病例资料
    //医嘱
    "advice": [{
      "hospital": "",
      "doctor": "",
      "adviceTime": "2999-12-31 00:00:00.000",
      "advice": "",
      "处方": [{
        "prescriptionTime": "2999-12-31 00:00:00.000", //开方时间
        "doctorName": "", //开方医生姓名
        "medicineTime": "", //药品名称
        "total": "", //总量
        "singleDose": "", //单次用量
        "frequency": "" //次/日
      }]
    }]
  }],
  //医生
  "doctor": [],
  "code": 200
};

_message2.default.config({
  top: 300,
  duration: 2
});

var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var LookConsultationTask = function (_Component) {
  _inherits(LookConsultationTask, _Component);

  function LookConsultationTask(props) {
    _classCallCheck(this, LookConsultationTask);

    var _this = _possibleConstructorReturn(this, (LookConsultationTask.__proto__ || Object.getPrototypeOf(LookConsultationTask)).call(this, props));

    _this.state = {
      consultationId: _this.props.params.id.toString(),
      userId: null,
      getData: allData,
      mockData: [], //会诊医生弹出框左边的选项
      targetTitle: [], //确定按钮的中间变量，点击确定才把医生放到input框
      targetKeys: [], //会诊医生弹出框右边的选项
      //以上是  呵呵呵呵呵
      history1: allData.case[0], //当前显示的病历
      history1Index: 0, //当前显示的病历的下标
      history2: allData.case[0].advice[0] ? allData.case[0].advice[0] : [], //当前显示的医嘱
      columns: [{
        title: '开方时间',
        dataIndex: 'prescriptionTime',
        key: 'prescriptionTime'
      }, {
        title: '开方医生姓名',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '药品名称',
        dataIndex: 'medicineTime',
        key: 'medicineTime'
      }, {
        title: '总量',
        dataIndex: 'total',
        key: 'total'
      }, {
        title: '单次用量',
        dataIndex: 'singleDose',
        key: 'singleDose'
      }, {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency'
      }],
      //下面的这个是病历资料表头
      fileListColumns: [{
        title: '文件名',
        dataIndex: 'diagnosis',
        key: 'diagnosis'
      }, {
        title: '大小',
        dataIndex: 'doctorName',
        key: 'doctorName'
      }, {
        title: '上传时间',
        dataIndex: 'diagnosisTime',
        key: 'diagnosisTime'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.diagnosis },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'a',
              { href: record.doc },
              '\u67E5\u770B'
            )
          );
        }
      }],
      fujianText: "", //
      meetingId: null,
      fileList: [], //病历资料集合
      checkColumns: [{
        title: '审核时间',
        dataIndex: 'checkTime',
        key: 'checkTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"

      }, {
        title: '操作人',
        dataIndex: 'assistantName',
        key: 'assistantName',
        width: "114px"
      }, {
        title: '审核结果',
        dataIndex: 'checkResult',
        key: 'checkResult',
        width: "114px"
      }, {
        title: '退回原因',
        dataIndex: 'returnReason',
        key: 'returnReason'
      }],
      showJoin: false,
      conclusionColumns: [{
        title: '时间',
        dataIndex: 'creatTime',
        key: 'creatTime',
        render: function render(text) {
          return _react2.default.createElement(
            'span',
            null,
            text.split("T").join(" ").split(".").splice(0, 1)
          );
        },
        width: "126px"
      }, {
        title: '操作人',
        dataIndex: 'doctorName',
        key: 'doctorName',
        width: "114px"
      }, {
        title: '附件',
        dataIndex: 'docName',
        key: 'docName',
        width: "124px"
      }, {
        title: '会诊结论',
        dataIndex: 'message',
        key: 'message'
      }, {
        title: '操作',
        key: 'action',
        render: function render(text, record, index) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: record.doc, download: record.docName },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              'span',
              null,
              '\xA0\xA0'
            ),
            record.doctorId === _this.state.doctorId ? _react2.default.createElement(
              'a',
              { onClick: _this.deleteDoc.bind(_this, record.id, index) },
              '\u5220\u9664'
            ) : ""
          );
        },
        width: "114px"
      }],
      conclusion: [],
      oldData: { //固定的，处方增加按钮的一项
        id: '0',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      },
      checkData: [],
      data: [{
        id: ' ',
        "prescriptionTime": "-", //开方时间
        "doctorName": "-", //开方医生姓名
        "medicineTime": "-", //药品名称
        "total": "-", //总量
        "singleDose": "-", //单次用量
        "frequency": "-" //次/日
      }],
      docList: [], //所有的医生列表
      doctorId: [], //当前操作医生的id
      targetdoc: [], //选中的医生信息
      joinTo: false,
      showCloseMeeting: false, //禁用结束会诊按钮
      isShow: false,
      fileUrl: null,
      fileName: null
    };
    return _this;
  }

  _createClass(LookConsultationTask, [{
    key: 'deleteDoc',
    value: function deleteDoc(id, index) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/delete/conclusion',
        method: 'get',
        params: {
          id: id.toString()
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        _message2.default.success("删除成功");
        var getData = that.state.getData;
        var conclusion = that.state.conclusion;
        conclusion.splice(index, 1);
        getData.conclusion = conclusion;
        that.setState({
          getData: getData,
          conclusion: conclusion
        });
      }).catch(function () {});
    }
    /////////////////////////

  }, {
    key: 'getPeople',
    value: function getPeople() {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/selectHosAndApply',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        var getData = that.state.getData;
        getData.consultation.hospital = response.data.result[0].hospitalName;
        getData.consultation.applicant = response.data.result[0].applyName;
        that.setState({
          getData: getData
        });
      }).catch(function () {});
    }
  }, {
    key: 'joinTo',
    value: function joinTo(stat, uid) {
      var that = this;
      _axios2.default.request({
        url: '/api/conference/jointo',
        method: 'get',
        params: {
          userId: uid
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (res) {
        if (res.data.code === 0) {
          if (stat !== 3) {
            that.setState({
              joinTo: true
            });
          }
        }
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var that = this;
      var responseDoc = [];
      _axios2.default.request({
        url: '/api/conference/page',
        method: 'get',
        params: {
          id: that.props.params.id
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        response.data.doctor.map(function (ele) {
          responseDoc.push(ele.id);
        });
        var getData = response.data;
        var data = [];

        if (getData.case && getData.case != false) {
          if (getData.case[0].advice != false && getData.case[0].advice[0].prescription) {
            getData.case[0].advice[0].prescription.map(function (ele) {
              data.push(ele);
            });
          }
        } else {
          getData.case = allData.case;
          getData.case[0].advice[0].prescription ? getData.case[0].advice[0].prescription.map(function (ele) {
            data.push(ele);
          }) : "";
        }

        var conclusion = getData.conclusion ? getData.conclusion : []; //获取结论
        var checkData = getData.check ? getData.check : [];
        that.setState({
          getData: getData,
          history1: getData.case[0],
          history2: getData.case[0].advice ? response.data.case[0].advice[0] : null,
          targetdoc: response.data.doctor, //加载页面时，会诊医生栏显示的内容
          data: data,
          conclusion: conclusion,
          checkData: checkData,
          meetingId: getData.consultation.conId,
          userId: getData.consultation.userId,
          docList: getData.doctor
        });
        that.joinTo(getData.consultation.stat, getData.consultation.applyId.toString());
        //因为异步的原因，所以只能在回调函数里面放数据请求了
        //that.getPeople();

      }).catch(function () {});

      //页面加载时获取医生列表
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getValue();
      var that = this;
      _axios2.default.request({
        url: '/api/conference/doctorId',
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        that.setState({
          doctorId: response.data.result[0].doctorId
        });
      });
    }
  }, {
    key: 'returnList',
    value: function returnList() {
      location.hash = "/check/waitCheck/waitCheck";
    }
  }, {
    key: 'changeText',
    value: function changeText(e) {
      var Text = this.state.fujianText;
      Text = e.target.value;
      if (Text.length >= 120) {
        _message2.default.warning("结论字数120字以内");
      }
      this.setState({
        fujianText: Text
      });
    }
  }, {
    key: 'huizhenjielun',
    value: function huizhenjielun() {
      this.setState({
        isShow: true
      });
    }
  }, {
    key: 'listReturn',
    value: function listReturn() {
      location.hash = "/task/consultationTask";
    }
  }, {
    key: 'closeMeeting',
    value: function closeMeeting() {
      var that = this;
      (0, _axios2.default)({
        url: '/api/conference/joinToUpdate',
        method: 'get',
        params: {
          userId: that.state.getData.consultation.applyId,
          consultationId: that.state.consultationId
        },
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        if (response.data.code === 200) {
          _message2.default.success("结束会诊成功");
          location.hash = "task/consultationTask";
        } else if (response.data.code === 1) {
          _message2.default.error("结束会诊失败,无权限结束");
        }
      }).catch(function () {
        _message2.default.error("结束会诊操作失败");
      });
    }
  }, {
    key: 'quxiaoFujian',
    value: function quxiaoFujian() {
      this.setState({
        isShow: false
      });
    }
  }, {
    key: 'confirmFujian',
    value: function confirmFujian() {
      //上传会诊结论
      var that = this;
      var data = {
        cId: this.props.params.id,
        message: this.state.fujianText, //会诊结论
        fileName: this.state.fileName,
        url: this.state.fileUrl //附件URL
      };
      if (!data.message) {
        _message2.default.warning("会诊结论不能为空!");
        return false;
      }
      if (data.message.length >= 120) {
        _message2.default.error("结论字数120字以内!");
        return false;
      }
      (0, _axios2.default)({
        url: '/api/conference/add/conclusion',
        method: 'POST',
        data: data,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded UTF-8'
        }
      }).then(function (response) {
        _message2.default.success("添加会诊结论成功");
        var obj = {};
        obj.id = response.data.result.id;
        obj.creatTime = startTime;
        obj.message = data.message;
        obj.docName = data.fileName;
        obj.doctorId = response.data.result.doctorId;
        that.state.docList.map(function (ele, index) {
          if (ele.id === that.state.doctorId) {
            obj.doctorName = ele.doctorName;
          }
        });
        obj.doc = that.state.fileUrl;
        var getData = that.state.getData;
        var conclusion = that.state.conclusion;
        getData.conclusion = conclusion;
        conclusion.push(obj);
        that.setState({
          conclusion: conclusion,
          getData: getData,
          isShow: false,
          fujianText: ""
        });

        //location.hash="task/consultationTask"
      }).catch(function (err) {});
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var customLabel = _react2.default.createElement(
        'span',
        { className: 'custom-item' },
        item.title,
        ' - ',
        item.description
      );
      return {
        label: customLabel, // for displayed item
        value: item.title };
    }
  }, {
    key: 'changeHistory1',
    value: function changeHistory1(index) {
      //切换病历
      var data = [];
      if (this.state.getData.case[index].advice && this.state.getData.case[index].advice != false) {
        if (this.state.getData.case[index].advice[0].prescription && this.state.getData.case[index].advice[0].prescription != false) {
          this.state.getData.case[index].advice[0].prescription.map(function (ele) {
            data.push(ele);
          });
        } else {
          data = null;
        }
      } else {
        data = null;
      }

      this.setState({
        history1: this.state.getData.case[index],
        history1Index: index,
        history2: this.state.getData.case[index].advice ? this.state.getData.case[index].advice[0] : null,
        data: data
      });
    }
  }, {
    key: 'changeHistory2',
    value: function changeHistory2(index) {
      //切换医嘱
      var history2 = this.state.history1.advice ? this.state.history1.advice[index] : null;
      var data = [];
      if (history2.prescription && history2.prescription != false) {
        history2.prescription.map(function (ele) {
          data.push(ele);
        });
      } else {
        data = null;
      }
      this.setState({
        history2: this.state.history1.advice ? this.state.history1.advice[index] : null,
        data: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      var consultationConclusionId = this.props.params.id;
      var props = {
        action: '/upload/consultationConclusion/' + consultationConclusionId,
        headers: {
          "Authorization": "Bearer " + token
        },
        onChange: function onChange(_ref) {
          var file = _ref.file,
              fileList = _ref.fileList;

          if (file.status !== 'uploading') {
            _message2.default.success("附件上传成功!");
            that.setState({
              fileUrl: file.response.result[0].url,
              fileName: file.response.result[0].fileName
            });
          }
        },

        defaultFileList: []
      };

      return _react2.default.createElement(
        'div',
        { className: 'newHidden' },
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_top' },
          _react2.default.createElement(
            'h1',
            null,
            '\u4F1A\u8BCA\u4EFB\u52A1'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u96B6\u5C5E\u533B\u9662'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.hospitalname, className: 'search_input', size: 'large', placeholder: '\u96B6\u5C5E\u533B\u9662' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u7533\u8BF7\u4EBA'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.applyName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u7533\u8BF7\u4EBA' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u540D\u79F0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.consultationName, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u540D\u79F0', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u65F6\u95F4'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, onChage: function onChage() {
                  return _this2.startTime();
                }, value: (0, _moment2.default)(this.state.getData.consultation.startTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u4F1A\u8BCA\u5BF9\u8C61'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.username, className: 'search_input', size: 'large', placeholder: '\u4F1A\u8BCA\u5BF9\u8C61', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.phone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u8EAB\u4EFD\u8BC1\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.identification, className: 'search_input', size: 'large', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7', required: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u51FA\u751F\u65E5\u671F'
              ),
              _react2.default.createElement(_datePicker2.default, { open: false, value: (0, _moment2.default)(this.state.getData.consultation.birthday, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u966A\u62A4\u5BB6\u5C5E'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.famliyName, className: 'search_input', size: 'large', placeholder: '\u966A\u62A4\u5BB6\u5C5E' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex' },
                '\u624B\u673A\u53F7'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.familyPhone, className: 'search_input', size: 'large', placeholder: '\u624B\u673A\u53F7' })
            ),
            _react2.default.createElement('li', null),
            _react2.default.createElement('li', null)
          ),
          _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'most_flex1' },
                '\u4F1A\u8BCA\u63CF\u8FF0'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.getData.consultation.content, className: 'search_input', type: 'textarea', rows: 4 })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'cnsultation_bottom' },
          _react2.default.createElement(
            'div',
            { className: 'history' },
            this.state.getData.case ? this.state.getData.case.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory1.bind(_this2, index), className: 'history_sp1' },
                  '\u75C5\u5386 ',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ),
          _react2.default.createElement(
            'div',
            { className: 'history_detail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u7F16\u53F7'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history1.sn, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u7F16\u53F7' })
              ),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history1.hospital, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u533B\u9662', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u4E3B\u6CBB\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history1.doctor, className: 'search_input', size: 'large', placeholder: '\u4E3B\u6CBB\u533B\u751F', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u75C5\u4F8B\u540D\u79F0'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history1.name, className: 'search_input', size: 'large', placeholder: '\u75C5\u4F8B\u540D\u79F0', required: true })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u8BCA\u6CBB\u65E5\u671F'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, value: (0, _moment2.default)(this.state.history1.diagnosisTime, dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u4E34\u5E8A\u8BCA\u65AD'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history1.diagnosis, className: 'search_input', type: 'textarea', rows: 4 })
              )
            )
          ),
          this.state.history1.advice.length > 0 ? _react2.default.createElement(
            'div',
            { className: 'prescribe' },
            this.state.history1.advice ? this.state.history1.advice.map(function (ele, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                _react2.default.createElement(
                  'span',
                  { onClick: _this2.changeHistory2.bind(_this2, index), className: 'prescribe_sp1' },
                  ' \u533B\u5631',
                  index + 1,
                  ' '
                )
              );
            }) : ""
          ) : "",
          this.state.history2 ? _react2.default.createElement(
            'div',
            { className: 'prescribeDetail' },
            _react2.default.createElement(
              'ul',
              { className: 'search_ul' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u9662'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history2.hospital ? this.state.history2.hospital : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u9662' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u533B\u751F'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history2.doctor ? this.state.history2.doctor : "", className: 'search_input', size: 'large', placeholder: '\u533B\u5631\u533B\u751F' })
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex' },
                  '\u533B\u5631\u65F6\u95F4'
                ),
                _react2.default.createElement(_datePicker2.default, { open: false, value: (0, _moment2.default)(this.state.history2.adviceTime ? this.state.history2.adviceTime : "", dateFormat), format: dateFormat, size: 'large', className: 'search_input', onChange: this.onChange })
              ),
              _react2.default.createElement('li', null)
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'most_flex1' },
                  '\u533B\u5631'
                ),
                _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.history2.advice ? this.state.history2.advice : "", className: 'search_input', type: 'textarea', rows: 4 })
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'search_ul2' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'search_ul2_sp1 most_flex1' },
                  '\u5904\u65B9'
                ),
                this.state.data ? _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.columns, dataSource: this.state.data }) : _react2.default.createElement('li', { className: 'search_input' })
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'record' },
            _react2.default.createElement(
              'span',
              { className: 'history_sp1 record_sp1' },
              ' \u75C5\u5386\u8D44\u6599 '
            ),
            this.state.fileList.length > 0 ? _react2.default.createElement(_table2.default, { rowKey: 'id', dataSource: this.state.fileList, columns: this.state.fileListColumns }) : _react2.default.createElement(
              'span',
              { className: 'history_btn1' },
              ' \u65E0\u75C5\u5386\u8D44\u6599 '
            )
          ),
          this.state.targetdoc && this.state.targetdoc != false ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u4F1A\u8BCA\u533B\u751F'
              ),
              _react2.default.createElement(_input2.default, { readOnly: true, value: this.state.targetdoc.map(function (ele) {
                  return ele.doctorName;
                }), className: 'search_input', type: 'textarea', rows: 4 })
            )
          ) : "",

          //这里面写判断有没有审核记录
          this.state.checkData.length > 0 ? _react2.default.createElement(
            'ul',
            { className: 'search_ul2' },
            _react2.default.createElement(
              'li',
              { className: 'search_li_last' },
              _react2.default.createElement(
                'span',
                { className: 'one_title' },
                '\u5BA1\u6838\u8BB0\u5F55'
              ),
              _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input', columns: this.state.checkColumns, dataSource: this.state.checkData })
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'conclusion_show' },
            _react2.default.createElement(
              'span',
              { className: 'one_title' },
              '\u7ED3\u8BBA\u8BB0\u5F55'
            ),
            _react2.default.createElement(
              'span',
              { className: 'one_title' },
              _react2.default.createElement(
                'button',
                { className: 'btn_huizhen', onClick: function onClick() {
                    return _this2.huizhenjielun();
                  } },
                '\u65B0\u589E\u7ED3\u8BBA'
              )
            ),
            _react2.default.createElement(_table2.default, { rowKey: 'id', className: 'search_input search_input_task', columns: this.state.conclusionColumns, dataSource: this.state.conclusion })
          ),
          this.state.isShow ? _react2.default.createElement(
            'div',
            { className: 'huizhenDivDiv' },
            _react2.default.createElement(
              'div',
              { className: 'huizhenDiv' },
              _react2.default.createElement(_input2.default, { type: 'textarea', value: this.state.fujianText, onChange: this.changeText.bind(this), rows: 4, placeholder: '\u8BF7\u8F93\u5165\u4F1A\u8BCA\u7ED3\u8BBA' }),
              _react2.default.createElement(
                _upload2.default,
                props,
                _react2.default.createElement(
                  _button2.default,
                  { className: 'history_btn1' },
                  _react2.default.createElement(_icon2.default, { type: 'upload' })
                )
              ),
              _react2.default.createElement(
                'ul',
                null,
                this.state.fileList.map(function (ele, index) {
                  return _react2.default.createElement(
                    'li',
                    { key: index },
                    ele.name
                  );
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'btn_fujian' },
                _react2.default.createElement(
                  'button',
                  { onClick: function onClick() {
                      return _this2.confirmFujian();
                    } },
                  '\u786E\u8BA4'
                ),
                '\xA0',
                _react2.default.createElement(
                  'button',
                  { onClick: function onClick() {
                      return _this2.quxiaoFujian();
                    } },
                  '\u53D6\u6D88'
                )
              )
            )
          ) : "",
          _react2.default.createElement(
            'div',
            { className: 'btn_save' },
            _react2.default.createElement(
              'div',
              { className: 'btn_save_index' },
              this.state.meetingId ? _react2.default.createElement(
                'a',
                { href: "http://192.168.100.133:8787/conference/#/mainFrame/personMeeting/addMeeting/" + this.state.meetingId + "/1" },
                _react2.default.createElement(
                  _button2.default,
                  { disabled: !_checked2.default.Calculation(this.state.getData.consultation.startTime.split("T").join(" "), startTime) || this.state.getData.consultation.stat === 3, type: 'primary' },
                  '\u53C2\u52A0\u4F1A\u8BCA'
                ),
                '\xA0'
              ) : "",
              this.state.joinTo ? _react2.default.createElement(
                _button2.default,
                { disabled: this.showCloseMeeting, onClick: this.closeMeeting.bind(this), type: 'primary' },
                '\u4F1A\u8BCA\u7ED3\u675F'
              ) : "",
              '\xA0',
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', onClick: function onClick() {
                    return _this2.listReturn();
                  } },
                '\u8FD4\u56DE'
              )
            )
          )
        )
      );
    }
  }]);

  return LookConsultationTask;
}(_react.Component);

exports.default = LookConsultationTask;

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(504);

var _header2 = _interopRequireDefault(_header);

var _left = __webpack_require__(505);

var _left2 = _interopRequireDefault(_left);

var _content = __webpack_require__(503);

var _content2 = _interopRequireDefault(_content);

var _reactRouter = __webpack_require__(21);

var _apply = __webpack_require__(508);

var _apply2 = _interopRequireDefault(_apply);

var _daiShen = __webpack_require__(509);

var _daiShen2 = _interopRequireDefault(_daiShen);

var _looked = __webpack_require__(510);

var _looked2 = _interopRequireDefault(_looked);

var _NewConsultation = __webpack_require__(506);

var _NewConsultation2 = _interopRequireDefault(_NewConsultation);

var _addConsultation = __webpack_require__(507);

var _addConsultation2 = _interopRequireDefault(_addConsultation);

var _editCnsultation = __webpack_require__(511);

var _editCnsultation2 = _interopRequireDefault(_editCnsultation);

var _return = __webpack_require__(513);

var _return2 = _interopRequireDefault(_return);

var _editReturn = __webpack_require__(512);

var _editReturn2 = _interopRequireDefault(_editReturn);

var _invalid = __webpack_require__(522);

var _invalid2 = _interopRequireDefault(_invalid);

var _lookInvalid = __webpack_require__(523);

var _lookInvalid2 = _interopRequireDefault(_lookInvalid);

var _consulation = __webpack_require__(520);

var _consulation2 = _interopRequireDefault(_consulation);

var _lookConsulation = __webpack_require__(521);

var _lookConsulation2 = _interopRequireDefault(_lookConsulation);

var _checked = __webpack_require__(79);

var _checked2 = _interopRequireDefault(_checked);

var _checked3 = __webpack_require__(514);

var _checked4 = _interopRequireDefault(_checked3);

var _lookChecked = __webpack_require__(515);

var _lookChecked2 = _interopRequireDefault(_lookChecked);

var _hadReturn = __webpack_require__(516);

var _hadReturn2 = _interopRequireDefault(_hadReturn);

var _lookHadReturn = __webpack_require__(517);

var _lookHadReturn2 = _interopRequireDefault(_lookHadReturn);

var _waitCheck = __webpack_require__(519);

var _waitCheck2 = _interopRequireDefault(_waitCheck);

var _lookWaitCheck = __webpack_require__(518);

var _lookWaitCheck2 = _interopRequireDefault(_lookWaitCheck);

var _consultationTask = __webpack_require__(524);

var _consultationTask2 = _interopRequireDefault(_consultationTask);

var _lookConsultationTask = __webpack_require__(525);

var _lookConsultationTask2 = _interopRequireDefault(_lookConsultationTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //申请会诊
//待审会诊
//待审查看会诊
//申请会诊-新增会诊
//申请会诊-创建副本
//申请会诊-编辑会诊
//申请会诊-被退会诊
//申请会诊-被退会诊编辑
//作废会诊-查询
//作废会诊-查看

//会诊总表-查询


//会诊总表-查看
var jwtDecode = __webpack_require__(145);

var reg = /^[0-9]+.?[0-9]*$/;
function matches(str) {
  var ar = str.split("/");
  if (reg.test(ar[ar.length - 1])) {
    return true;
  }
}
function spl(str) {
  var ar = str.split("/");
  ar.splice(ar.length - 1);
  return ar.join("/");
}
var auth = [{
  id: 6,
  route: "#/apply"
}, {
  id: 6,
  route: "#/apply/newConsultation"
}, {
  id: 6,
  route: "#/apply/editCnsulation"
}, {
  id: 6,
  route: "#/apply/addConsultation"
}, {
  id: 7,
  route: "#/apply/daiShen"
}, {
  id: 7,
  route: "#/apply/daiShen/looked"
}, {
  id: 8,
  route: "#/apply/return/ReturnRecord"
}, {
  id: 8,
  route: "#/apply/return/ReturnRecord/editReturn"
}, {
  id: 9,
  route: "#/check/waitCheck/waitCheck"
}, {
  id: 9,
  route: "#/check/waitCheck/lookWaitCheck"
}, {
  id: 10,
  route: "#/check/hadReturn/hadReturn"
}, {
  id: 10,
  route: "#/check/hadReturn/lookHadReturn"
}, {
  id: 11,
  route: "#/check/checked/checked"
}, {
  id: 11,
  route: "#/check/checked/lookChecked"
}, {
  id: 12,
  route: "#/task/consultationTask"
}, {
  id: 12,
  route: "#/task/lookConsultationTask"
}, {
  id: 13,
  route: "#/invalid/invalid"
}, {
  id: 13,
  route: "#/invalid/lookInvalid"
}, {
  id: 14,
  route: "#/consulationTables/consulation"
}, {
  id: 14,
  route: "#/consulationTables/lookConsulation"
}];

var PageBottom = function (_Component) {
  _inherits(PageBottom, _Component);

  function PageBottom(props) {
    _classCallCheck(this, PageBottom);

    return _possibleConstructorReturn(this, (PageBottom.__proto__ || Object.getPrototypeOf(PageBottom)).call(this, props));
  }

  _createClass(PageBottom, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _checked2.default.checked();
      this.checkAuthorization();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.checkAuthorization();
    }
  }, {
    key: "checkAuthorization",
    value: function checkAuthorization() {
      if (localStorage.getItem('robertUserName')) {
        var bearer = localStorage.getItem('robertUserName');
        var decoded = jwtDecode(bearer);
        var permissions = decoded.permissions;
        var flag = true;
        var hashed = location.hash;
        if (hashed !== "#/apply/blank") {
          if (matches(hashed)) {
            hashed = spl(hashed);
          }
          auth.map(function (ele) {
            if (ele.route === hashed) {
              if (permissions.indexOf(ele.id.toString()) !== -1) {
                flag = false;
              }
            }
          });
          if (flag) {

            location.href = "http://192.168.100.133:8787/#/entrance";
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var pageHeight = document.body.clientHeight - 60;
      var style = { "height": pageHeight };
      return _react2.default.createElement(
        "div",
        { style: style, className: "pageBottom" },
        _react2.default.createElement(_left2.default, null),
        _react2.default.createElement(
          "div",
          { className: "content" },
          this.props.children
        )
      );
    }
  }]);

  return PageBottom;
}(_react.Component);

var Page = function (_Component2) {
  _inherits(Page, _Component2);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "page" },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          _reactRouter.Router,
          { history: _reactRouter.hashHistory },
          _react2.default.createElement(
            _reactRouter.Route,
            { path: "/content", component: PageBottom },
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/blank", component: _content2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply", component: _apply2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/daiShen", component: _daiShen2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/daiShen/looked/:id", component: _looked2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/return/ReturnRecord", component: _return2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/return/ReturnRecord/editReturn/:id", component: _editReturn2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/newConsultation", component: _NewConsultation2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/addConsultation/:id", component: _addConsultation2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/apply/editCnsulation/:id", component: _editCnsultation2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/invalid/invalid", component: _invalid2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/invalid/lookInvalid/:id", component: _lookInvalid2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/consulationTables/consulation", component: _consulation2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/consulationTables/lookConsulation/:id", component: _lookConsulation2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/check/waitCheck/waitCheck", component: _waitCheck2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/check/waitCheck/lookWaitCheck(/:id)", component: _lookWaitCheck2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/check/checked/checked", component: _checked4.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/check/checked/lookChecked(/:id)", component: _lookChecked2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/check/hadReturn/hadReturn", component: _hadReturn2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/check/hadReturn/lookHadReturn(/:id)", component: _lookHadReturn2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/task/consultationTask", component: _consultationTask2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: "/task/lookConsultationTask(/:id)", component: _lookConsultationTask2.default })
          )
        )
      );
    }
  }]);

  return Page;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Page, null), document.getElementById("app"));

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Action = {
  on: function on(name, fn) {
    this[name] = fn;
  },
  //绑定函数
  emit: function emit(name, data) {
    this[name](data);
  }
  //触发函数
};
//使用的时候，记得需要bind(this)，不然this的指向会乱掉

exports.default = Action;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function isEmpty(value) {
  return value === null || value === undefined || value === '';
}
// 手机号验证
function mobileValidate(mobile) {
  return (/^1[34578][0-9]{9}$/.test(mobile)
  );
}
//邮箱验证
function emailValidate(email) {
  return (/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(email)
  );
}

function flashChecker() {
  var hasFlash = 0; //是否安装了flash
  var flashVersion = 0; //flash版本
  if (document.all) {
    var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if (swf) {
      hasFlash = 1;
      VSwf = swf.GetVariable("$version");
      flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
    }
  } else {
    if (navigator.plugins && navigator.plugins.length > 0) {
      var _swf = navigator.plugins["Shockwave Flash"];
      if (_swf) {
        hasFlash = 1;
        var words = _swf.description.split(" ");
        for (var i = 0; i < words.length; ++i) {
          if (isNaN(parseInt(words[i]))) continue;
          flashVersion = parseInt(words[i]);
        }
      }
    }
  }
  return !!hasFlash;
}
function Calculation(a, b) {
  //a 是开会时间，b是当前时间
  var date1 = new Date(a);
  var date2 = new Date(b);
  var s1 = date1.getTime(),
      s2 = date2.getTime();
  var total = (s1 - s2) / 1000;
  var day = parseInt(total / (24 * 60 * 60)); //计算整数天数
  var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
  var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数
  var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
  var min = parseInt(afterHour / 60); //计算整数分
  if (day >= 0 && afterDay >= 0 && hour >= 0 && afterHour >= 0 && min >= 10) {
    return false;
  } else {
    return true;
  }
}

//验证身份证

function cardValidate(card) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(card);
}
function FormatDate(strTime) {
  if (isEmpty(strTime)) {
    return;
  }
  var date = new Date(strTime);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

function checked() {
  if (!localStorage.getItem("robertUserName")) {
    localStorage.setItem("history", location.href);
    location.href = "http://192.168.100.133:8787/conference/#/";
  }
  var xhr = new XMLHttpRequest();
  xhr.open("get", "/api/conference/page?id=1", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 401) {
        localStorage.removeItem("history");
        localStorage.setItem("history", location.href);
        location.href = "http://192.168.100.133:8787/conference/#/";
      }
    }
  };
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded UTF-8");
  xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("robertUserName"));
  xhr.send();
}

exports.default = {
  mobileValidate: mobileValidate,
  isEmpty: isEmpty,
  cardValidate: cardValidate,
  emailValidate: emailValidate,
  FormatDate: FormatDate,
  checked: checked,
  Calculation: Calculation
};

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[655]);
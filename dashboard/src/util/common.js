/** 公共方法 */

export default {
  /**
     * 在深层数据结构中取值（为了替代类似 res && res.data && res.data.content这种写法）
     * @param {Object} obj [必填-需要取值的目标对象（例：res）]
     * @param {String} path [必填-数据结构路径（例：'data.content'）]
     * @param {Any} defaultValue [可选-如果取不到值则默认返回该值]
     */
  confirm(obj, path, defaultValue = null) {
    if (!obj || typeof(obj) != 'object' || !path || typeof(path) != 'string') return
    const reducer = (accumulator, currentValue) =>
      (accumulator && accumulator[currentValue]) ?
        accumulator[currentValue] :
        defaultValue

    path = path.split('.')
    return path.reduce(reducer, obj)
  },
  /**
     *  -----  柯里化版本 （为了不再重复输入obj这个参数） -----
     * 在深层数据结构中取值（为了替代类似 res && res.data && res.data.content这种写法）
     * @param {Object} obj [必填-需要取值的目标对象（例：res）]
     */
  confirm_currying(obj) {
    if (!obj || typeof(obj) != 'object') return
    return (path, defaultValue = null) => {
      if (!path || typeof(path) != 'string') return
      const reducer = (accumulator, currentValue) =>
        (accumulator && accumulator[currentValue]) ?
          accumulator[currentValue] :
          defaultValue
      path = path.split('.')
      return path.reduce(reducer, obj)
    }
  },
  /**
     * 判断一维数组中是否存在某个值
     * @param {String} value 需要校验的字符串
     * @param {Array} validList 被查找的一维数组
     * @return {Boolean}   是否存在的结果
     */
  oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true
      }
    }
    return false
  },
  /**
     * 转换为金钱格式(千分位且保留两位小数)
     * @param {Number | String} num [需转换的数字或字符串]
     */
  toMoney(num) {
    if (!num) {
      return 0.00
    }
    num = this.toFloat(num).toFixed(2)
    const arr = num.toString().split('.')
    let int = (arr[0] || 0).toString(),
      result = ''
    while (int.length > 3) {
      result = ',' + int.slice(-3) + result
      int = int.slice(0, int.length - 3)
    }
    if (int) {
      result = int + result
    }
    return `${result}.${arr[1]}`
  },

  /**
     * 手机号码校验
     * @param {String} num [需校验的手机号码]
     */
  checkPhone(num) {
    if (!num) return false
    const filter = /^1[3-9][0-9]{9}$/
    return filter.test(num)
  },

  /**
     * 固定电话号码校验
     * @param {String} num [需校验的固话]
     */
  checkTel(num) {
    if (!num) return false
    const filter = /^(?:0[1-9][0-9]{1,2}-)?[2-8][0-9]{6,7}$/
    return filter.test(num)
  },

  /**
     * 身份证号码校验
     * @param {String} num [需校验的身份证号码]
     */
  checkID(num) {
    if (!num) return false
    const filter = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/
    return filter.test(num)
  },
  /**
     * 数字校验(整数或者小数)
     * @param {String} num [需校验的数字]
     */
  checkNumber(num) {
    if (!num && num != 0) return false
    const filter = /^[0-9]+\.{0,1}[0-9]{0,2}$/
    return filter.test(num)
  },
  /**
     * 邮编校验(整数或者小数)
     * @param {String} num [需校验的数字]
     */
  checkZipCode(num) {
    if (!num && num != 0) return false
    const filter = /^[0-9]{6}$/
    return filter.test(num)
  },
  /**
     * 文本校验(只能为中文、英文、数字组合，不允许其他特殊符号)
     * @param {String} txt [需校验的文本]
     */
  checkContent(txt) {
    const filter = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
    return filter.test(txt)
  },
  /**
     * 密码校验(6位以上数字字母的组合)
     * @param {String} txt [需校验的文本]
     */
  checkPassword(num) {
    if (!num && num != 0) return false
    const filter = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/
    return filter.test(num)
  },

  /**
     * 获取URL执行参数值
     * @param {String} variable 地址参数名
     * @return false 未找到；
     */
  getQueryVariable(variable) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[0] == variable) {
        return pair[1]
      }
    }
  },
  /**
     * 获取当前年
     *
     */
  getCurrentYear() {
    var date = new Date
    return date.getFullYear()
  },
  /**
     * 接收带时分秒的时间格式，返回去掉时分秒的时间格式
     * @param {String} val
     */
  strTime(val) {
    if (val === undefined || val == null) return
    val = val.toString()
    if (val == null || val == '') {
      return ''
    } else {
      return val.slice(0, val.indexOf(' '))
    }
  },
  /**
     *  判断传入参数的类型，以字符串的形式返回
     *  @obj：数据
     **/
  dataType(obj) {
    if (obj === null) return 'Null'
    if (obj === undefined) return 'Undefined'
    return Object.prototype.toString.call(obj).slice(8, -1)
  },
  /**
     * 处理对象参数值，排除对象参数值为”“、null、undefined，并返回一个新对象
     **/
  dealObjectValue(obj) {
    var param = {}
    if (obj === null || obj === undefined || obj === '') return param
    for (var key in obj) {
      if (this.dataType(obj[key]) === 'Object') {
        param[key] = dealObjectValue(obj[key])
      } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
        param[key] = obj[key]
      }
    }
    return param
  },

  /**
   * 判断是否是ie并返回版本号
   */
  IEVersion() {
    const userAgent = navigator.userAgent //取得浏览器的userAgent字符串
    const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
    const isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
    const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    if(isIE) {
      const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(userAgent)
      const fIEVersion = parseFloat(RegExp['$1'])
      if(fIEVersion == 7) {
        return 7
      } else if(fIEVersion == 8) {
        return 8
      } else if(fIEVersion == 9) {
        return 9
      } else if(fIEVersion == 10) {
        return 10
      } else {
        return 6//IE版本<=7
      }
    } else if(isEdge) {
      return 'edge'//edge
    } else if(isIE11) {
      return 11 //IE11
    }else{
      return -1//不是ie浏览器
    }
  },

  /**
   * 输入数字转换成大写字母，比如 输入 0 输出 'A'
   * @param {Number} num 输入的数字
   */
  numToLetter(num) {
    if (!num && num != 0) return null
    return (Number(num) + 10).toString(36).toUpperCase()
  }
}

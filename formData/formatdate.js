/**
 * Created by renxiaoyi on 2017/9/30.
 */
let formatDate = {
  formatDate(obj) {
    let date = new Date(obj)
    let y = 1900 + date.getYear()
    let m = '0' + (date.getMonth() + 1)
    let d = '0' + date.getDate()
    let h = '0' + date.getHours()
    let f = '0' + date.getMinutes()
    let s = '0' + date.getSeconds()
    return (
      y +
      '-' +
      m.substring(m.length - 2, m.length) +
      '-' +
      d.substring(d.length - 2, d.length) +
      ' ' +
      h.substring(h.length - 2, h.length) +
      ':' +
      f.substring(f.length - 2, f.length) +
      ':' +
      s.substring(s.length - 2, s.length)
    )
  },
  formatDateWithoutTimes(obj) {
    let date = new Date(obj)
    let y = 1900 + date.getYear()
    let m = '0' + (date.getMonth() + 1)
    let d = '0' + date.getDate()
    return (
      y +
      '-' +
      m.substring(m.length - 2, m.length) +
      '-' +
      d.substring(d.length - 2, d.length)
    )
  },
}
export default formatDate

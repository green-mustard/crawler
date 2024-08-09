// 引入child_process模块，用于创建子进程
const cp = require('child_process')
// 引入path模块，用于路径处理
const { resolve } = require('path')
const Qiniu = require('qiniu')
const { nanoid } = require('fix-esm').require('nanoid')
const { qiniu } = require('../config/account_config')

// 导出一个对象，包含启动子进程的方法
module.exports = {
  /**
   * 启动一个子进程
   * @param {Object} options - 配置对象
   * @param {string} options.path - 脚本的相对路径
   * @param {Function} options.message - 接收子进程消息的回调函数
   * @param {Function} options.exit - 子进程退出时的回调函数
   * @param {Function} options.error - 子进程发生错误时的回调函数
   */
  startProcess(options) {
    // 解析脚本的绝对路径
    const script = resolve(__dirname, '../crawlers/' + options.file)
    // 创建一个子进程，使用fork方法以便于保持与子进程的通信
    const childProcess = cp.fork(script)
    // 标记是否已调用过回调函数，防止重复调用
    let invoked = false
    // 监听子进程的消息事件，接收到消息时调用options.message回调
    childProcess.on('message', data => {
      options.message(data)
    })
    // 监听子进程的退出事件，退出时调用options.exit回调
    childProcess.on('exit', code => {
      if (invoked) return
      invoked = true
      options.exit(code)
    })
    // 监听子进程的错误事件，发生错误时调用options.error回调
    childProcess.on('error', error => {
      if (invoked) return
      invoked = true
      options.error(error)
    })
  },

  qiniuUpload(options) {
    const { name: bucket } = qiniu.bucket.crawler_3rd
    const { keys } = qiniu
    const mac = new Qiniu.auth.digest.Mac(keys.accessKey, keys.secretKey)
    const config = new Qiniu.conf.Config()
    const client = new Qiniu.rs.BucketManager(mac, config)
    const key = options.path + nanoid() + options.ext

    return new Promise((resolve, reject) => {
      client.fetch(options.url, bucket, key, (err, ret, info) => {
        if (err) {
          reject(err)
        } else {
          if (info.statusCode === 200) {
            resolve({ key })
          } else {
            reject(info)
          }
        }
      })
    })

    // return new Promise((resolve, reject) => {
    //   client.put(options.url, key, name, (err, ret, info) => {
    //     if (err) {
    //       reject(err)
    //     } else {
    //       if (info.statusCode === 200) {
    //         resolve({
    //           key,
    //           imgSrc: `http://${domain}/${key}`,
    //         })
    //       }
    //     }
    //   })
    // })
  },
}

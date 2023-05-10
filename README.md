# EasyCoding

Nomen小队Easy Coding项目正式启动！ 这个项目的目的是为所有萌新建立一个完整的包装库，可以快速简单的执行各种复杂操作，节省时间不需要造轮子

---

<br/>

## 说明：

### **NomenPostgre**


 * NomenPostgre Class
 * @author Nomen 
 * @class
 * @version 1.0.0
 * @example const NomenPostgreConfig = require('./NomenPostgreConfig.js');  // 导入配置  
const NomenPostgre = require('./NomenPostgre.js');  // 导入NomenSQLite类  
// 传入Config， 然后选择一种启动模式  
(async) const Nomen = await NomenPostgre.launch(NomenPostgreConfig, NomenPostgre.LaunchAction.CREATE_OR_LAUNCH)

<br/>

### **NomenSQLite**


 * NomenSQLite Class
 * @author Nomen 
 * @class
 * @version 1.0.0
 * @example const NomenSQLiteConfig = require('./NomenSQLiteConfig.js');  // 导入配置  
const NomenSQLite = require('./NomenSQLite.js');  // 导入NomenSQLite类  
// 传入Config， 然后选择一种启动模式，最后传入一个回调函数，用于导出初始化过程中的错误  
(async) const Nomen = await NomenSQLite.launch(NomenSQLiteConfig, NomenSQLite.LaunchAction.CREATE_OR_LAUNCH, (data,err)=>{console.error(err)})

<br/>

### **EasyDialog**

 * EasyDialog 是由萌新大佬开发的一款便捷建立对话框的工具
 * 此工具完全开源，免费试用，共所有人学习与参考
 * @author 萌新大佬 <https://box3.codemao.cn/u/mxdlorzorz>
 * @version 0.0.1




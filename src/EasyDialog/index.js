/**
 * EasyDialog 是由萌新大佬开发的一款便捷建立对话框的工具
 * 此工具完全开源，免费试用，共所有人学习与参考
 * @author 萌新大佬 <https://box3.codemao.cn/u/mxdlorzorz>
 * @version 0.0.1
 */




/**
 * 重复询问，直到选择“×”或者回调函数返回null
 * 此功能强制选择对话框
 * @param {Box3PlayerEntity} entity 产生对话的实体
 * @param {Box3SelectDialogParams} configs 对话的参数，type强制select
 * @param {selectCallback} callback 回调函数
 */
async function reask(entity,configs,callback){
    configs.type=Box3DialogType.SELECT;
    while(true){
        let res=await entity.player.dialog(configs);
        if(!res||res==null)break;
        let cb=callback(res.index,res.value);
        if(cb===null)break;
        else configs.content=cb||configs.content;
    }
}

/**
 * 滚动字幕功能
 * 此功能不强制对话类型
 * 为了确保此功能正常运行，会在滚动前清除实体的所有对话框
 * 特殊字符可能会导致输出混乱
 * @param {Box3PlayerEntity} entity 产生对话的实体
 * @param {number} interval 两次滚动的间隔(ms)
 * @param {Box3DialogParams} configs 对话的参数
 * @param {boolean?} delay 如果为true，则除最后一次对话外均为text对话框，默认为false
 * 特殊处理:如果delay为true，则除最后一次对话外hasArrow强制为false
 * @returns {Box3DialogResponse} 返回最终对话框的结果

 */
async function rollPlay(entity,interval,configs,delay){
    delay=delay||false;
    let {content,hasArrow,type}=configs;
    configs.content='';
    if(delay)Object.assign(configs,{hasArrow:false,type:Box3DialogType.TEXT});
    entity.player.cancelDialogs();
    for(let i=0;i<content.length-1;i++){
        configs.content+=content[i];
        entity.player.dialog(configs);
        await sleep(interval);
        entity.player.cancelDialogs();
    }
    Object.assign(configs,{content,hasArrow,type});
    return await entity.player.dialog(configs);
}

//callbacks

/**
 * 选择对话框的回调函数
 * @callback selectCallback
 * @param {number} index
 * @param {string} value
 * @returns {string|null|undefined}
 * string    : 下次对话的content
 * null      : 如果返回null则退出循环询问
 * undefined : 什么也不做
 */
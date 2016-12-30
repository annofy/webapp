/**
 * 复制到粘贴板上
 * @param {Object} message
 */
function copyToClip(message){
    var Context = plus.android.importClass("android.content.Context");
    var main = plus.android.runtimeMainActivity();
    var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
    plus.android.invoke(clip,"setText", message);
}
function pasteToClip(){
    var Context = plus.android.importClass("android.content.Context");
    var main = plus.android.runtimeMainActivity();
    var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
    return plus.android.invoke(clip,"getText");
}
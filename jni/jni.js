function toHexString(bytes) {
    var string = "";
    if (!bytes) {
        return "is null";
    }

    for (var i = 0; i < bytes.length; i++) {
        var tmp = (bytes[i] & 0xFF).toString(16);
        if (tmp.length === 1)
            tmp = "0" + tmp;
        string += tmp;
    }
    return string;
}

function toHexStringWithLength(bytes, length) {
    var string = "";
    for (var i = 0; i < length; i++) {
        var tmp = (bytes[i] & 0xFF).toString(16);
        if (tmp.length === 1)
            tmp = "0" + tmp;
        string += tmp;
    }
    return string;
}

function showJavaStacks() {
    console.log("=======调用栈========");
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
}


Java.perform(function () {
    console.log('hello jni');

    var jni = Java.use("com.example.hellojni.HelloJni");

    jni.sign1.implementation = function (arg0) {

        console.log('sign = ', arg0);
        return this.sign1(arg0);
    };

    Interceptor.attach(Module.findExportByName('libhello-jni.so'));


});
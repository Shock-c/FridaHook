import frida,sys

processNames = [
    'com.example.hellojni_sign2'

]

def on_message(message, data):
    print(message)

def processName(process):
    devices = frida.get_usb_device()
    app = devices.attach(process)
    js_hook_file = open("jni.js", 'r', encoding='utf8')
    js_code = js_hook_file.read()
    script = app.create_script(js_code)
    script.on('message', on_message)
    script.load()

for process in processNames:
    processName(process)

sys.stdin.read(1)


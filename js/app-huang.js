var device = {
        isAndroid: -1 < navigator.userAgent.toLowerCase().indexOf("android"),
        isIos: null != navigator.userAgent.match(/(iPod|iPhone|iPad)/),
        isChrome: /chrom(e|ium)/.test(navigator.userAgent.toLowerCase())
    }, pagefromid = "0000",
    dececie_type = "",
    common = {
        qrcodeUrl: location.href,
        accountCode: "",
        channelCode: "",
        subChannelCode: "",
        inviteCode: "",
        getUrlQuery: function (o) {
            var n = new RegExp("(^|&)" + o + "=([^&]*)(&|$)", "i"), e = window.location.search.substr(1).match(n);
            return null != e ? unescape(e[2]) : null
        },
        getParms: function () {
           // common.accountCode = common.getUrlQuery("accountCode") || "006", common.channelCode = common.getUrlQuery("channelCode") || "01", common.subChannelCode = common.getUrlQuery("subChannelCode") || "official", common.inviteCode = common.getUrlQuery("inviteCode") || ""
        },
        init: function () {
            common.getParms()
        }
    };
$(function () {
    common.init()
});
var config = {
    downloadUrlAndroid: "",
    downloadUrlIos: "",
    app_code: "0000",
    setDownUrl: function () {
        device.isAndroid ? (config.downloadUrlAndroid = "http://d.line880.com/down/" + pagefromid + "/avshow-android.apk") : device.isIos && (config.downloadUrlIos = "itms-services://?action=download-manifest&url=https://xy12.app/app/" + pagefromid + "/manifest.plist")
    },
    init: function () {
        config.setDownUrl()
    }
};
$(function () {
    config.init()
});
var objApp = {
    saveInviteCode: function () {

    }, addClipboard: function (o, n) {
        var query = objApp.parseQueryString();
        var e = `::${query.invitation_code}::`;
        $("#bar2").val(e);
        var i = new ClipboardJS(o, {container: document.getElementById(n)});
        i.on("success", function (o) {

        }), i.on("error", function (o) {

            console.log("亲，此浏览器不支持，请手动复制粘贴吧")
        })
    }, initClick: function () {

        try {
            var clipboard = new ClipboardJS('a');
            clipboard.on('success', function (e) {
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
            objApp.addClipboard(".download-btn", "bar2");
        }
        catch (e) {
            $(".dialog-container").removeClass("hide");
            var query = objApp.parseQueryString();
            $('#code').html(`::${query.invitation_code}::`);
            $(".dialog-container").click(function () {
                $(".dialog-container").addClass("hide")
            });
            console.log(e);

        }
        if(!device.isIos&&!device.isAndroid)
        {

            $(".download-ios").removeClass("hide");
            $(".download-android").removeClass("hide");
            $(".download-btn").addClass("hide");
        }
        $(".download-btn").click(function () {
            if (device.isIos) {
                 location.href = config.downloadUrlIos;
            } else if (device.isAndroid) {
                 location.href = config.downloadUrlAndroid
            }
            objApp.report();
        })

        $(".download-ios").click(function () {

            location.href = config.downloadUrlIos;
            objApp.report();
        })
        $(".download-android").click(function () {

            location.href = config.downloadUrlAndroid
            objApp.report();
        })

    }, mySwipe: function () {
        window.mySwipe = Swipe(document.getElementById("mySwipe"), {
            speed: 400,
            auto: 3e3,
            continuous: !0,
            disableScroll: !1,
            stopPropagation: !1,
            callback: function (o, n) {
            },
            transitionEnd: function (o, n) {
            }
        })
    }, makeCode: function () {
       // new QRCode(document.getElementById("qrcode"), {width: 100, height: 100}).makeCode(common.qrcodeUrl)
    }, initSiteUser: function (o) {

    }, checkPlatForm: function () {
        device.isAndroid || device.isIos ? ($("#bar").focus(function () {
            document.activeElement.blur()
        }), device.isIos ? (812 == screen.availHeight && 375 == screen.availWidth && "375" == window.innerWidth && "812" == window.innerHeight && ($(".ewm-tk").css("margin", "2rem auto 1rem"), $(".bg-text").addClass("bgText")), $(".ios-tips").removeClass("hide"), $(".download-head >.download-btn").html("iOS下载")) : device.isAndroid ? ($(".android-tips").removeClass("hide"), $(".download-head >.download-btn").html("Android下载")) : window.prompt("请更换浏览器访问！")) : ($(".ios-tips").removeClass("hide"), $(".android-tips").removeClass("hide"), $(".download-head >.download-btn").html("立即下载"), $(".a_downcont").css("display", "none"), $(".a_ios").find("img").attr("src", "images/wap-icon-ios.png"), $(".a_android").find("img").attr("src", "images/wap-icon-android.png"), objApp.makeCode())
    }, isType: function (o) {
        switch (o) {
            case"001":
                $(".ios-tips img").attr("src", "images/ios-001-2b015ceb7b.png"), $(".text-content-step3").text("3.按下【“RASGOS DECERDE - UNIPESSOAL,LDA”描述文件】");
                break;
            case"002":
                $(".ios-tips img").attr("src", "images/ios-002-60594b9f4d.png"), $(".text-content-step3").text("3.按下【“MMI ENGINEERING SERVICES SDN.BHD”描述文件】");
                break;
            case"003":
                $(".ios-tips img").attr("src", "images/ios-003-dab5b5f837.png"), $(".text-content-step3").text("3.按下【“TTC Energy Joint Sto Company”描述文件】");
                break;
            case"004":
                $(".ios-tips img").attr("src", "images/ios-004-57c16c9adf.png"), $(".text-content-step3").text("3.按下【“MASTER TECH SIA”描述文件】");
                break;
            case"005":
                $(".ios-tips img").attr("src", "images/ios-005-01cef6637f.png"), $(".text-content-step3").text("3.按下【“ICALL EOOD”描述文件】");
                break;
            case"006":
                $(".ios-tips img").attr("src", "images/ios-006-10dc2d242b.png"), $(".text-content-step3").text("3.按下【“MAK ART SIA”描述文件】")
        }
    },
    parseQueryString: function () {

        var url = window.location.href
        var reg_url = /^[^\?]+\?([\w\W]+)$/, reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g, arr_url = reg_url.exec(url),
            ret = {};
        if (arr_url && arr_url[1]) {
            var str_para = arr_url[1], result;
            while ((result = reg_para.exec(str_para)) != null) {
                ret[result[1]] = result[2];
            }
        }
        return ret;
    },
    getIPs: function (callback) {
        var ip_dups = {};
        try {
            var RTCPeerConnection = window.RTCPeerConnection

                || window.mozRTCPeerConnection

                || window.webkitRTCPeerConnection;


            //bypass naive webrtc blocking
            if (RTCPeerConnection == null) {
                callback(undefined);
                return;
            }
            if (!RTCPeerConnection) {

                var iframe = document.createElement('iframe');

                //invalidate content script

                iframe.sandbox = 'allow-same-origin';

                iframe.style.display = 'none';

                document.body.appendChild(iframe);

                var win = iframe.contentWindow;

                window.RTCPeerConnection = win.RTCPeerConnection;

                window.mozRTCPeerConnection = win.mozRTCPeerConnection;

                window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;

                RTCPeerConnection = window.RTCPeerConnection

                    || window.mozRTCPeerConnection

                    || window.webkitRTCPeerConnection;

            }


            //minimal requirements for data connection

            var mediaConstraints = {

                optional: [{RtpDataChannels: true}]

            };


            //firefox already has a default stun server in about:config

            //    media.peerconnection.default_iceservers =

            //    [{"url": "stun:stun.services.mozilla.com"}]

            var servers = undefined;


            //add same stun server for chrome

            if (window.webkitRTCPeerConnection)

                servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};


            //construct a new RTCPeerConnection

            var pc = new RTCPeerConnection(servers, mediaConstraints);


            //listen for candidate events

            pc.onicecandidate = function (ice) {



                //skip non-candidate events

                if (ice.candidate) {



                    //match just the IP address

                    var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/

                    var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];


                    //remove duplicates

                    if (ip_dups[ip_addr] === undefined)

                        console.log(ip_addr);
                    callback(ip_addr);
                    ip_dups[ip_addr] = true;

                }

            };


            //create a bogus data channel

            pc.createDataChannel("");


            //create an offer sdp

            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                callback(undefined);
            } else {
                pc.createOffer(function (result) {



                    //trigger the stun server request

                    pc.setLocalDescription(result, function () {
                    }, function () {
                    });


                }, function () {
                });
            }
        }
        catch (e) {
            console.log(e);
            callback(undefined);
        }

    },
    report: function () {

        objApp.getIPs(function (ip) {
            var code_obj = objApp.parseQueryString();

            if (device.isIos) {
                dececie_type = "i";
            } else if (device.isAndroid) {
                dececie_type = "a";
            }
            else {
                dececie_type = "n";
            }
            code_obj.inner_net_ip = ip;
            code_obj.deviceType = dececie_type;
            code_obj.self_promotion = code_obj.promotion;
            code_obj.from = code_obj.fromid;
            if (code_obj.self_promotion == null) {
                code_obj.self_promotion = 1;
            }

            code_obj.fromid = pagefromid;

            var jsonform1 = JSON.stringify(code_obj, null, 4)
            console.log("code_obj------>" + jsonform1);

            console.log(ip);

             $.post("http://api.zxysn.com/api0.1/download_report", code_obj, function (result) {
             });

        });
    },
    access_report: function () {
        objApp.getIPs(function (ip) {
            var code_obj = objApp.parseQueryString();
            var jsonform1 = JSON.stringify(device, null, 4)
            console.log("access_report1------>" + jsonform1);

            if (device.isIos) {
                dececie_type = "i";
            } else if (device.isAndroid) {
                dececie_type = "a";
            }
            else {
                dececie_type = "n";
            }
            var div = document.getElementById("qrcode");
            while (div.hasChildNodes()) //清除二维码
            {
                console.log("div.hasChildNodes()------>");
                div.removeChild(div.firstChild);
            }
            code_obj.inner_net_ip = ip;
            code_obj.deviceType = dececie_type;
            code_obj.self_promotion = code_obj.promotion;
            code_obj.from = code_obj.fromid;
            console.log("access_report2------>" + code_obj);
            if (code_obj.self_promotion == null) {
                code_obj.self_promotion = 1;

            }

            code_obj.fromid = pagefromid;

            var xx = "http://app.line880.com/api0.1/getInstallUrl?from=" + pagefromid;
            if (pagefromid == null) {
                return;
            }
            if (code_obj.invitation_code != null) {
                xx = xx + "&invitation_code=" + code_obj.invitation_code;
            }
            if (code_obj.inner_net_ip != null) {
                xx = xx + "&inner_net_ip=" + code_obj.inner_net_ip;
            }
            console.log("turn_url--->" + xx);
            new QRCode(document.getElementById("qrcode"), {width: 60, height: 60}).makeCode(xx)

            var jsonform1 = JSON.stringify(code_obj, null, 4)
            console.log("access_report------>" + jsonform1);
            console.log(ip);
             $.post("http://api.zxysn.com/api0.1/access_report", code_obj, function (result) {
             });

        });
    },
    init: function () {
        objApp.isType(common.accountCode), objApp.checkPlatForm(), objApp.initSiteUser(1), objApp.mySwipe(), objApp.initClick(), objApp.access_report()
    }
};
$(function () {
    objApp.init()
});
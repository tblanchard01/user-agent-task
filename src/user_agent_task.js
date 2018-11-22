// convert to .test
// use +ve and -ve regex
userAgent = [
    "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:60.0) Gecko/20100101 Firefox/60.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15",
    "Opera/9.80 (X11; Linux x86_64; U; Ubuntu/10.10 (maverick); pl) Presto/2.7.62 Version/11.01",
    "Mozilla/4.0 (compatible; MSIE 8.0; X11; Linux x86_64; pl) Opera 11.00",
    "Mozilla/5.0 (Windows NT 6.1; U; en-GB; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 Opera 10.51",
    // iPhone. iPad, iPod

    "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)", //chrome
    "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25", //safari
    "Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53", //safari

    //IE
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
    "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.0; InfoPath.2; SV1; .NET CLR 2.0.50727; WOW64)",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7)",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
    "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/4.0; InfoPath.2; SV1; .NET CLR 2.0.50727; WOW64)",
    // cell phones android microsoft
    "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    "Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    "Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9",
    "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)",
    //tablets android
    "Mozilla/5.0 (Linux; Android 4.0.4; en-gb; SM-T330 Build/IMM76D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1",
    "Mozilla/5.0 (Linux; Android 4.0.4; en-gb; SM-T330 Build/IMM76D) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Safari/535.19",
    "Mozilla/5.0 (Linux; Android 6.0; vivo 1606 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.124 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 6.0; vivo 1713 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.124 Mobile Safari/537.36  ",
    "Dalvik/1.6.0 (Linux; U; Android 4.4.4; WT19M-FI Build/KTU84Q)",
    "Dalvik/1.6.0 (Linux; U; Android 4.3.1; WT19M-FI Build/JLS36I)",
    "Mozilla/5.0 (Linux; Android 4.4.2; XMP-6250 Build/HAWK) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36 ADAPI/2.0 (UUID:9e7df0ed-2a5c-4a19-bec7-2cc54800f99d) RK3188-ADAPI/1.2.84.533 (MODEL:XMP-6250)",
    "Mozilla/5.0 (Linux; Android 5.1; A37f Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 7.1; Mi A1 Build/N2G47H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36",
    // bot
    "AdsBot-Google (http://www.google.com/adsbot.html)"
]

function getBrowserAgent(userAgent) {
    var output = {}
    var desktop_regex = /AppleWebKit\/537\.36|Mac OS X 10_14_0|Intel Mac OS X 10\.13|Intel Mac OS X 10_14|Ubuntu\/10\.10|Ubuntu|Windows NT|Linux x86_64/ig
    var mobile_regex = /iPhone|Android 3\.0|LG|HTC|Blackberry|Phone|/ig
    var tablet_regex = /iPad|Android 4\.0\.4|Tablet|iPod/ig
    var bot_regex = /bot/ig
    // "Mozilla/5.0 (Linux; Android 4.0.4; en-gb; SM-T330 Build/IMM76D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1
    if (userAgent.match(bot_regex)) {
        output.deviceType = "bot"
    }
    else if (userAgent.match(tablet_regex)) {
        output.deviceType = "tablet"
    }
    else if (userAgent.match(desktop_regex)) {
        output.deviceType = "desktop"
    } else if (userAgent.match(mobile_regex)) {
        output.deviceType = "mobile"
    } else {
        alert("device type not recognised!")
    }
    /////........///////////////
    if (userAgent.match(bot_regex)) {
        output.browserName = "bot"
    } else if (userAgent.match(/BlackBerry/)) {
        output.browserName = "BlackBerry"
    } else if (userAgent.match(/Android/)) {
        output.browserName = "Android"
    }
    else if (userAgent.match(/Edge/)) {
        output.browserName = "Edge"
    } else if (userAgent.match(/Chrome|CriOS/)) {
        output.browserName = "Chrome"

    }

    else if (userAgent.match(/Safari/)) {
        output.browserName = "Safari"


    }

    else if (userAgent.match(/Firefox/)) {
        output.browserName = "Firefox"
    }


    else if (userAgent.match(/Opera/)) {
        output.browserName = "Opera"

    }

    else if (userAgent.match(/MSIE|Trident/)) {
        output.browserName = "Internet Explorer"
    } else {
        alert("browser type not recognised")
    }

    return output

}

userAgent.forEach((e, i) => {
    console.log(i)
    console.log(userAgent[i])
    console.log(getBrowserAgent(e))
});




// deviceType : “desktop/tablet/mobile/bot”,
// browserName : “Chrome/FF/Safari /bot etc”

// deviceType:desktop 
// browserName: chrome 

/chrome(?!.*edge)|edge/i

// /chrome(?!.*edge|.*safari)|Edge|Safari|Firefox|Opera|Internet Explorer|/i
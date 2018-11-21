function getBrowserDetails(userAgent) {
    var output = {}

    var device = {
        isPhone: /iPod|iPhone|LG|HTC|Blackberry|windows\sphone|Android\s2.3/ig.test(userAgent),
        isTablet: /iPad|Android\s(?!2\.3|.*LG|.*HTC)/ig.test(userAgent),
        isBot: /adsbot/ig.test(userAgent),
        isDesktop: /^(?:.*(msie|mac|windows|ubuntu))(?!.*(phone|mobile))/ig.test(userAgent)
    }

    if (device.isPhone) {
        console.log('it is a phone')
        var browser = /safari|android|MSIE|Blackberry/i
        output.deviceType = "Phone"
        userAgent.match(browser)[0] === 'MSIE' ? output.browserName = 'Internet Explorer' : output.browserName = userAgent.match(browser)[0]
    }

    if (device.isTablet) {
        console.log('it is a tablet')
        var browser = /(android(?!.*chrome))|(chrome|CriOS)|safari/i
        output.deviceType = "Tablet"
        userAgent.match(browser)[0] === 'CriOS' ? output.browserName = 'Chrome' : output.browserName = userAgent.match(browser)[0]
    }

    if (device.isDesktop) {
        console.log('it is a desktop')
        var browser = /edge|opera|(chrome(?!.*edge))|(msie(?!.*opera))|(safari(?!.*edge))|(firefox(?!.*opera))|Trident/i
        output.deviceType = "Desktop"
        // userAgent.match(browser)[0] === "Trident" ? output.browserName = 'MSIE' : output.browserName = userAgent.match(browser)[0]
        userAgent.match(browser)[0] === "Trident" ? output.browserName = 'Internet Explorer' : userAgent.match(browser)[0] === 'MSIE' ? output.browserName = 'Internet Explorer' : output.browserName = userAgent.match(browser)[0]
    }

    if (device.isBot) {
        output.deviceType = "Bot"
        output.browserName = "Bot"
    }
    
    return output
}


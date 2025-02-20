var cycles = msg.payload.supportedCycles.value;
var cycleList = [];
var customCycle = [];

for( var y in cycles) {
    let course = "Course_" + cycles[y].cycle;
    let bubbleSoak = false;
    let selectDry = "";
    let selectSpin = "";
    let selectSoil = "";
    let selectRinse = "";
    let selectTemp = "";
    let defaultDry = "";
    let defaultSpin = "";
    let defaultSoil = "";
    let defaultRinse = "";
    let defaultTemp = "";
    let cycleName = "";
    if ("bubbleSoak" in cycles[y].supportedOptions) { 
        if (cycles[y].supportedOptions.bubbleSoak.raw.charAt(2) == "F") {
            bubbleSoak = true;
        } else {
            bubbleSoak = false;
        };
    };
    if ("dryingLevel" in cycles[y].supportedOptions) { 
        let optionsDry = cycles[y].supportedOptions.dryingLevel.options;
        let counter = 0;
        defaultDry = cycles[y].supportedOptions.dryingLevel.default
        selectDry = "[";
        for( var x in optionsDry) {
            if (counter == 0) {
                selectDry = selectDry + "'" + optionsDry[x] + "'";
            } else {
                selectDry = selectDry + ",'" + optionsDry[x] + "'";
            };
            ++counter;
        };
        selectDry = selectDry + "]";
        if (selectDry == "[]") {
            selectDry = "['" + defaultDry + "']";
        };
    };
    if ("spinLevel" in cycles[y].supportedOptions) { 
        let optionsSpin = cycles[y].supportedOptions.spinLevel.options;
        let counter = 0;
        defaultSpin = cycles[y].supportedOptions.spinLevel.default
        selectSpin = "[";
        for( var x in optionsSpin) {
            if (counter == 0) {
                selectSpin = selectSpin + "'" + optionsSpin[x] + "'";
            } else {
                selectSpin = selectSpin + ",'" + optionsSpin[x] + "'";
            };
            ++counter;
        };
        selectSpin = selectSpin + "]";
        if (selectSpin == "[]") {
            selectSpin = "['" + defaultSpin + "']";
        };
    };
    if ("soilLevel" in cycles[y].supportedOptions) { 
        let optionsSoil = cycles[y].supportedOptions.soilLevel.options;
        let counter = 0;
        defaultSoil = cycles[y].supportedOptions.soilLevel.default
        selectSoil = "[";
        for( var x in optionssoil) {
            if (counter == 0) {
                selectSoil = selectSoil + "'" + optionsSoil[x] + "'";
            } else {
                selectSoil = selectSoil + ",'" + optionsSoil[x] + "'";
            };
            ++counter;
        };
        selectSoil = selectSoil + "]";
        if (selectSoil == "[]") {
            selectSoil = "['" + defaultSoil + "']";
        };
    };
    if ("rinseCycle" in cycles[y].supportedOptions) { 
        let optionsRinse = cycles[y].supportedOptions.rinseCycle.options;
        let counter = 0;
        defaultRinse = cycles[y].supportedOptions.rinseCycle.default
        selectRinse = "[";
        for( var x in optionsRinse) {
            if (counter == 0) {
                selectRinse = selectRinse + "'" + optionsRinse[x] + "'";
            } else {
                selectRinse = selectRinse + ",'" + optionsRinse[x] + "'";
            };
            ++counter;
        };
        selectRinse = selectRinse + "]";
        if (selectRinse == "[]") {
            selectRinse = "['" + defaultRinse + "']";
        };
    };
    if ("waterTemperature" in cycles[y].supportedOptions) { 
        let optionsTemp = cycles[y].supportedOptions.waterTemperature.options;
        let counter = 0;
        defaultTemp = cycles[y].supportedOptions.waterTemperature.default
        selectTemp = "[";
        for( var x in optionsTemp) {
            if (counter == 0) {
                selectTemp = selectTemp + "'" + optionsTemp[x] + "'";
            } else {
                selectTemp = selectTemp + ",'" + optionsTemp[x] + "'";
            };
            ++counter;
        };
        selectTemp = selectTemp + "]";
        if (selectTemp == "[]") {
            selectTemp = "['" + defaultTemp + "']";
        };
    };
    if (course == "Course_1B") {
        cycleName = "Katoen";
    } else if (course == "Course_1C") {
        cycleName = "Eco 40-60";
    } else if (course == "Course_1D") {
        cycleName = "Superspeed";
    } else if (course == "Course_1E") {
        cycleName = "15m kort programma";
    } else if (course == "Course_20") {
        cycleName = "Hygienisch stomen";
    } else if (course == "Course_21") {
        cycleName = "Gekleurde was";
    } else if (course == "Course_22") {
        cycleName = "Wol";
    } else if (course == "Course_23") {
        cycleName = "Outdoor";
    } else if (course == "Course_24") {
        cycleName = "Beddengoed";
    } else if (course == "Course_25") {
        cycleName = "Synthetisch";
    } else if (course == "Course_26") {
        cycleName = "Fijne was";
    } else if (course == "Course_27") {
        cycleName = "Spoelen en centrifugeren";
    } else if (course == "Course_28") {
        cycleName = "Afvoeren en centrifugeren";
    } else if (course == "Course_29") {
        cycleName = "Trommelreiniging";
    } else if (course == "Course_2B") {
        cycleName = "AI Wash";
    } else if (course == "Course_2D") {
        cycleName = "Stille was";
    } else if (course == "Course_30") {
        cycleName = "Bewolkte dag";
    } else if (course == "Course_32") {
        cycleName = "Overhemden";
    } else if (course == "Course_33") {
        cycleName = "Handdoeken";
    } else if (course == "Course_36") {
        cycleName = "Wassen en drogen";
    } else if (course == "Course_37") {
        cycleName = "Air Wash";
    } else if (course == "Course_38") {
        cycleName = "Katoen drogen";
    } else if (course == "Course_39") {
        cycleName = "Synthetisch drogen";
    } else if (course == "Course_8F") {
        cycleName = "Intens koud";
    } else if (course == "Course_96") {
        cycleName = "Microfiber";
    };
    let cycle = {
        "course": course,
        "program": cycleName,
        "type": cycles[y].cycleType,
        "bubbleSoak": bubbleSoak,
        "selectDry": selectDry,
        "selectSpin": selectSpin,
        "selectSoil": selectSoil,
        "selectRinse": selectRinse,
        "selectTemp": selectTemp,
        "defaultDry": defaultDry,
        "defaultSpin": defaultSpin,
        "defaultSoil": defaultSoil,
        "defaultRinse": defaultRinse,
        "defaultTemp": defaultTemp
    };
    cycleList.push(cycle);
};

flow.set("programList", cycleList);

msg.payload = cycleList;

return msg;
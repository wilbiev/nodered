var programs = flow.get("programList");
var fullName = "";
var course = msg.payload.washerCycle.value;
var cycleName = "";
var bubbleSoak = "off";
var selectDry = "";
var selectSpin = "";
var selectRinse = "";
var selectTemp = "";

for( var y in programs) {
    fullName = "Table_02_" + programs[y].course;
    if (fullName == course) {
        cycleName = programs[y].program;
        selectDry = programs[y].selectDry;
        selectSpin = programs[y].selectSpin;
        selectRinse = programs[y].selectRinse;
        selectTemp = programs[y].selectTemp;
        if (programs[y].bubbleSoak == true) {
            bubbleSoak = "on";
        } else {
            bubbleSoak = "off";
        };
    };
};

msg.payload = cycleName;
msg.bubbleSoak = bubbleSoak;
msg.selectDry = selectDry;
msg.selectSpin = selectSpin;
msg.selectRinse = selectRinse;
msg.selectTemp = selectTemp;

return msg;
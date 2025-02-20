var programs = flow.get("programList");
var name = "";
let program = "";
var switchList = "";
var counter = 0;

for( var y in programs) {
    if (programs[y].course != msg.value) {
        name = programs[y].program;
        name = name.replaceAll(" ", "_");
        name = name.replaceAll("-", "_");
        if (counter == 0) {
            switchList = switchList + "switch." + name.toLowerCase();
        } else {
            switchList = switchList + ",switch." + name.toLowerCase();
        };
        ++counter;
    };
} 

flow.set("switches", switchList);

msg.switch = switchList;

return msg;
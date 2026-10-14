const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const root = path.resolve(__dirname, "..", "ics-mentor", "js");
const data = new Map();
const localStorage = {
 getItem: k => data.has(k) ? data.get(k) : null,
 setItem: (k,v) => data.set(k,String(v)),
 removeItem: k => data.delete(k)
};
const window = {ICS:{}};
const context = vm.createContext({window,localStorage,Date,console});
vm.runInContext("var ICS = window.ICS;", context);
for (const file of ["consent.js","brain.js"]) vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),context);
const {ICS} = window;
const sample = {text:"SAMPLE_INPUT",muster:[],musterIds:[],thema:null,emotion:null,intensitaet:35,zeit:new Date().toISOString()};
const conversation = {antworten:["sample"],muster:null};
const update = () => ICS.brain.aktualisieren(conversation,sample);
update();
assert.equal(data.has("ICS_MENTOR_BRAIN_V10"),false);
ICS.mentorConsent.set({insights:true,transcripts:false});
update();
assert.equal(data.has("ICS_MENTOR_BRAIN_V10"),true);
assert.equal(JSON.parse(data.get("ICS_MENTOR_BRAIN_V10")).gespraeche[0].text,null);
ICS.mentorConsent.revoke();
const snapshot = data.get("ICS_MENTOR_BRAIN_V10");
update();
assert.equal(data.get("ICS_MENTOR_BRAIN_V10"),snapshot);
ICS.mentorConsent.deleteMemories();
assert.equal(data.has("ICS_MENTOR_BRAIN_V10"),false);
console.log("PASS: ICS Brain consent storage checks");

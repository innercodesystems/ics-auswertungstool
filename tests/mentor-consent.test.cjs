// Run: node tests/mentor-consent.test.cjs
// Isolated, in-memory storage: never accesses user browser data.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const source = fs.readFileSync(path.join(__dirname, "../ics-mentor/js/consent.js"), "utf8");
function setup(seed = {}) {
  const map = new Map(Object.entries(seed));
  const localStorage = {
    getItem: key => map.has(key) ? map.get(key) : null,
    setItem: (key, value) => map.set(key, String(value)),
    removeItem: key => map.delete(key)
  };
  const window = { ICS: {} };
  const context = vm.createContext({ window, localStorage, Date });
  vm.runInContext("var ICS = window.ICS;", context);
  vm.runInContext(source, context);
  return { consent: window.ICS.mentorConsent, map };
}
const BRAIN = "ICS_MENTOR_BRAIN_V10";
const PROFILE = "ICS_MENTOR_PROFILE_V1";
{
  const { consent } = setup();
  assert.equal(consent.allows("insights"), false, "default off");
  assert.equal(consent.allows("transcripts"), false, "transcripts default off");
  consent.set({ insights: true, transcripts: false });
  assert.equal(consent.allows("insights"), true, "new opt-in");
  assert.equal(consent.allows("transcripts"), false, "independent transcripts option");
  consent.revoke();
  assert.equal(consent.allows("insights"), false, "revoke");
}
{
  const { consent, map } = setup({ [BRAIN]: "legacy brain", [PROFILE]: "legacy profile" });
  assert.equal(consent.allows("insights"), false, "legacy default blocked");
  consent.set({ insights: true });
  assert.equal(consent.allows("insights"), false, "legacy still blocked after opt-in");
  consent.blockLegacy();
  assert.equal(consent.allows("insights"), false, "legacy declined");
  assert.equal(map.get(BRAIN), "legacy brain", "legacy preserved");
  consent.approveLegacy();
  assert.equal(consent.allows("insights"), true, "legacy separately approved");
  consent.revoke();
  assert.equal(consent.allows("insights"), false, "revocation after approval");
  consent.deleteMemories();
  assert.equal(map.has(BRAIN), false, "brain deleted");
  assert.equal(map.has(PROFILE), false, "profile deleted");
}
console.log("PASS: consent default, opt-in, legacy block/approval, revoke and deletion");

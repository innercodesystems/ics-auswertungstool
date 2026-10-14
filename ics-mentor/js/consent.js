// ICS Mentor 2.0 – consent controller (test branch only).
// No consent by default. Legacy memory is neither read nor migrated without consent.
window.ICS = window.ICS || {};
ICS.mentorConsent = (function () {
  const KEY = "ICS_MENTOR_CONSENT_V1";
  function get() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!value || value.version !== 1) return { insights: false, transcripts: false };
      return { insights: value.insights === true, transcripts: value.transcripts === true };
    } catch (_) { return { insights: false, transcripts: false }; }
  }
  function allows(kind) { return get()[kind] === true; }
  function set(options) {
    const next = {
      version: 1,
      insights: options?.insights === true,
      transcripts: options?.insights === true && options?.transcripts === true,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(KEY, JSON.stringify(next));
    return get();
  }
  // Revocation stops future access/writes; existing data remains until explicit deletion.
  function revoke() { return set({ insights: false, transcripts: false }); }
  function deleteMemories() {
    localStorage.removeItem("ICS_MENTOR_BRAIN_V10");
    localStorage.removeItem("ICS_MENTOR_PROFILE_V1");
  }
  return { get, allows, set, revoke, deleteMemories };
})();

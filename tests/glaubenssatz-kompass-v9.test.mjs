// Regressionstest für ICS Glaubenssatz-Kompass V9.
// Ausführen im Repository: node --test tests/glaubenssatz-kompass-v9.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const v8=readFileSync(new URL('../glaubenssatz-kompass.html',import.meta.url),'utf8');
const v9=readFileSync(new URL('../glaubenssatz-kompass-v9.html',import.meta.url),'utf8');
const entries=s=>[...s.matchAll(/<details class="entry"[^>]*\bid="(GS-\d+)"/g)].map(x=>x[1]);
const scripts=s=>[...s.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
test('V8 bleibt unverändert als vollständiger Bestandteil von V9',()=>{
  const addition=v9.indexOf("<script>\n(function(){\n'use strict';\nconst KEY='ICS_BELIEF_CHANGE_V9'");
  assert.ok(addition>0,'V9-Erweiterung nicht gefunden');
  assert.equal(v9.slice(0,addition),v8.replace('</body></html>',''));
});
test('Alle 50 IDs und acht Kategorien bleiben erhalten',()=>{
  assert.equal(new Set(entries(v8)).size,50);
  assert.deepEqual(entries(v9),entries(v8));
  assert.equal((v9.match(/<h2 class="category"/g)||[]).length,8);
});
test('Bestehende Speicherbereiche und neue V9-Daten sind getrennt',()=>{
  for(const key of ['ICS_BELIEF_SCORES_V1','ICS_SAVED_BELIEFS_V1','ICS_BELIEF_BODY_V1'])assert.ok(v9.includes(key));
  assert.ok(v9.includes("const KEY='ICS_BELIEF_CHANGE_V9'"));
});
test('Alle Inline-Skripte haben gültige Syntax',()=>{
  for(const [i,script] of scripts(v9).entries())assert.doesNotThrow(()=>new Function(script), 'Skript '+i);
});
test('NAC- und Freude-Code-Felder vorhanden',()=>{
  for(const field of ['habit','trigger','belief','need','cost','interrupt','alternative','joy','practice','review'])
    assert.ok(v9.includes("['"+field+"'"),field);
});

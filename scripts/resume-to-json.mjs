import fs from "fs";
import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse/lib/pdf-parse.js");

const root = path.resolve(process.cwd());
const pdfPath = path.join(root, "Faruk_Ince_Resume.pdf");
const outDir = path.join(root, "src", "data");
const outPath = path.join(outDir, "resume.json");

function sliceByHeadings(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const content = lines.join("\n");

  const find = (regexes) => {
    for (const r of regexes) {
      const m = content.match(r);
      if (m) return m.index ?? -1;
    }
    return -1;
  };

  const expIdx = find([/(\n|^)work experience(\n|$)/i, /(\n|^)experience(\n|$)/i, /(\n|^)professional experience(\n|$)/i]);
  const eduIdx = find([/(\n|^)education(\n|$)/i, /(\n|^)academic background(\n|$)/i, /(\n|^)education & skills(\n|$)/i]);
  const projIdx = find([/(\n|^)projects(\n|$)/i, /(\n|^)personal projects(\n|$)/i, /(\n|^)selected projects(\n|$)/i]);
  const skillsIdx = find([/(\n|^)skills(\n|$)/i, /(\n|^)technical skills(\n|$)/i, /(\n|^)skills & tools(\n|$)/i]);

  const indices = [
    ["experience", expIdx],
    ["projects", projIdx],
    ["education", eduIdx],
    ["skills", skillsIdx],
  ].filter(([, i]) => i >= 0).sort((a, b) => a[1] - b[1]);

  const byKey = {};
  for (let i = 0; i < indices.length; i++) {
    const [key, start] = indices[i];
    const end = i + 1 < indices.length ? indices[i + 1][1] : content.length;
    byKey[key] = content.slice(start, end).trim();
  }
  return byKey;
}

function parseExperience(block) {
  if (!block) return [];
  const lines = block.split(/\r?\n/).map((l) => l.trim());
  // remove heading line
  while (lines.length && /experience/i.test(lines[0])) lines.shift();
  const chunks = lines.join("\n").split(/\n{2,}/);
  const items = [];
  for (const ch of chunks) {
    const cls = ch.split(/\n/).filter(Boolean);
    if (cls.length === 0) continue;
    const head = cls[0];
    const periodMatch = ch.match(/\b(20\d{2}|19\d{2}).{0,5}(Present|Now|20\d{2}|19\d{2})\b/i);
    const roleCompany = head;
    const achievements = cls.slice(1).filter((l) => /^[•\-–]/.test(l) || l.length > 0).map((l) => l.replace(/^[•\-–]\s?/, "").trim());
    items.push({
      roleCompany,
      period: periodMatch ? periodMatch[0] : "",
      achievements,
    });
  }
  return items.filter((i) => i.roleCompany);
}

function parseEducation(block) {
  if (!block) return [];
  const lines = block.split(/\r?\n/).map((l) => l.trim());
  while (lines.length && /education|academic/i.test(lines[0])) lines.shift();
  const chunks = lines.join("\n").split(/\n{2,}/);
  return chunks
    .map((ch) => {
      const lns = ch.split(/\n/).filter(Boolean);
      if (!lns.length) return null;
      const title = lns[0];
      const inst = lns[1] || "";
      const periodMatch = ch.match(/\b(20\d{2}|19\d{2}).{0,5}(20\d{2}|19\d{2})\b/);
      const notes = lns.slice(2);
      return { title, institution: inst, period: periodMatch ? periodMatch[0] : "", notes };
    })
    .filter(Boolean);
}

function parseProjects(block) {
  if (!block) return [];
  const lines = block.split(/\r?\n/).map((l) => l.trim());
  while (lines.length && /projects/i.test(lines[0])) lines.shift();
  const chunks = lines.join("\n").split(/\n{2,}/);
  const items = [];
  for (const ch of chunks) {
    const lns = ch.split(/\n/).filter(Boolean);
    if (!lns.length) continue;
    const title = lns[0];
    const description = lns.slice(1).join(" ");
    items.push({ title, description });
  }
  return items;
}

function parseSkills(block) {
  if (!block) return [];
  const text = block.replace(/^\s*(skills|technical skills|skills & tools)\s*/i, "");
  const parts = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  return parts;
}

async function main() {
  const data = fs.readFileSync(pdfPath);
  const res = await pdf(data);
  const sections = sliceByHeadings(res.text || "");
  const experience = parseExperience(sections.experience);
  const education = parseEducation(sections.education);
  const projects = parseProjects(sections.projects);
  const skills = parseSkills(sections.skills);
  const payload = { experience, education, projects, skills, extractedAt: new Date().toISOString() };
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Wrote ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});



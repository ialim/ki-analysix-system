"use client";

import { useMemo, useState } from "react";

const spaceTypes = ["Home", "Hotel / short-let", "Office", "Retail / commercial"];
const goals = ["Lighting", "Security", "Climate", "Curtains", "Access", "Energy monitoring"];
const stages = ["Existing space / retrofit", "Renovation", "New build"];

export default function SystemBuilder() {
  const [space, setSpace] = useState(spaceTypes[0]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(["Lighting"]);
  const [stage, setStage] = useState(stages[0]);
  const recommendation = useMemo(() => {
    if (space === "Hotel / short-let" || selectedGoals.length >= 4) return "A coordinated project design and quotation";
    if (selectedGoals.some((goal) => ["Climate", "Curtains", "Access"].includes(goal))) return "Products supplied with professional installation";
    return "A curated starter package with compatibility review";
  }, [space, selectedGoals]);
  const toggleGoal = (goal: string) => setSelectedGoals((current) => current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]);
  const message = encodeURIComponent(`Hello KI Analysix,\n\nPlease review this smart-system brief.\nSpace: ${space}\nProject stage: ${stage}\nPriorities: ${selectedGoals.join(", ") || "Not selected"}\nRecommended path: ${recommendation}\n\nNumber of rooms:\nProject location:\nTarget date:`);
  return <section className="builder-section" id="builder"><div className="shell builder-grid">
    <div className="builder-intro"><p className="section-kicker">Build your system</p><h2>Start with the space, not the device.</h2><p>Share three decisions and we will route you to the right products, installation scope or project-design process.</p></div>
    <div className="builder-card">
      <fieldset><legend>1. What type of space?</legend><div className="choice-grid">{spaceTypes.map((item) => <button type="button" className={space === item ? "active" : ""} onClick={() => setSpace(item)} key={item}>{item}</button>)}</div></fieldset>
      <fieldset><legend>2. What should it improve?</legend><div className="choice-grid goal-grid">{goals.map((goal) => <button type="button" className={selectedGoals.includes(goal) ? "active" : ""} aria-pressed={selectedGoals.includes(goal)} onClick={() => toggleGoal(goal)} key={goal}>{goal}</button>)}</div></fieldset>
      <fieldset><legend>3. What stage is the project?</legend><div className="choice-grid">{stages.map((item) => <button type="button" className={stage === item ? "active" : ""} onClick={() => setStage(item)} key={item}>{item}</button>)}</div></fieldset>
      <div className="builder-result"><span>Recommended next step</span><strong>{recommendation}</strong><a className="button button-primary" href={`https://wa.me/2349011151234?text=${message}`} target="_blank" rel="noopener noreferrer">Send this brief on WhatsApp <span>↗</span></a></div>
    </div>
  </div></section>;
}

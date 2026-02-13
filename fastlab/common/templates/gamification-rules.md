# Oracle LiveLabs Gamification Rules Engine (rules.md)

## 1. Purpose
This document defines a **deterministic, rules-based gamification engine** for Oracle LiveLabs.
It is designed to be consumed by AI systems to automatically rewrite lab content in a consistent,
repeatable, and scalable way.

Primary objectives:
- Reinforce learning through lightweight assessment
- Encourage lab completion without test fatigue
- Enable optional social sharing (LinkedIn)
- Scale across many labs and lab types
- Be easy for new hires to apply without redesigning content

This system provides **completion validation**, not certification.

---

## 2. Global Rules (Apply to All Labs)

### 2.1 General Principles
- Gamification must **never block or interrupt hands-on execution**
- Quizzes validate conceptual understanding, not memorization
- All rules must be applied **deterministically** (no interpretation required)
- Original instructional content must be preserved verbatim

### 2.2 Placement Rules
- Quizzes are placed **only at the end of a lab or section**
- Quizzes must never appear:
  - Before the first hands-on task
  - Between step-by-step instructions
  - Inside code blocks or command sequences
- Introductory sections **never** contain quizzes

### 2.3 Scoring Rules
- Default passing score: **75%**
- Learners may retry quizzes without penalty
- Explanations must appear immediately after question submission

### 2.4 Terminology Rules
- Allowed terms:
  - “Completion Badge”
  - “Graduate”
  - “Completed”
- Prohibited terms:
  - “Certified”
  - “Certification”
  - Any language implying official credentialing

---

## 3. Fast Lab Rules

### 3.1 Applicability
Fast Labs are:
- Standalone
- Short-duration
- Non-sequential
- Typically completed independently

### 3.2 Quiz Structure
- Exactly **3 scored questions** per Fast Lab
- Questions appear in **one section only**, titled:

"Check Your Understanding"

### 3.3 Question Design
- Questions must test **why and when**, not syntax or recall
- Each question must have:
- One correct answer
- At least two incorrect detractors
- Questions must be answerable using **only the lab content**

### 3.4 Completion Logic
- Badge issuance requires:
- Completion of all required sections
- Aggregate passing score across all scored questions

---

## 4. Mega Lab/Signature Lab Rules

### 4.1 Applicability
Mega Labs and Signature Labs are:
- Long-running
- Sequential
- Multi-section
- Designed as an end-to-end workshop experience

### 4.2 Quiz Distribution
- Quizzes are distributed across **major conceptual boundaries**
- Quizzes appear **after section completion**, not mid-section
- Total scored questions per Mega Lab: **12–14**

### 4.3 Question Weighting
- Core concept sections: **2 scored questions**
- Practical execution sections: **1 scored question**
- Advanced or synthesis sections:
- Optional
- Unscored by default

### 4.4 Completion Logic
- Badge issuance requires:
- Completion of all required sections
- Aggregate passing score across all scored questions

---

## 5. Quiz Rules

### 5.1 Required Syntax
All quizzes must use this exact Markdown structure:

```markdown
```quiz score
Q: Question text
* Correct answer
- Incorrect answer
- Incorrect answer
> Explanation reinforcing the learning objective


Deviation from this format is not permitted.

### 5.2 Question Constraints
- Exactly **one** correct answer
- Total answer choices: **3–4**
- Explanation is **mandatory**
- Explanations must teach, not restate the answer

### 5.3 Prohibited Question Types
- Memorization of command names, package names, or object identifiers
- Questions with multiple defensible correct answers
- Trick or “gotcha” questions
- Questions requiring knowledge outside the lab

---

## 6. Badge Rules

### 6.1 Badge Types
- Default: **Completion Badge**
- Optional tiering (only if explicitly enabled):
  - Bronze: 70–79%
  - Silver: 80–89%
  - Gold: 90–100%

### 6.2 Badge Metadata
Each badge must support:
- Workshop or lab name
- Technology focus (e.g., Oracle Database 26ai)
- Completion date
- Score percentage
- Optional verification link

### 6.3 Badge File Resolution
- Badge paths must be relative to the lab file
- If a referenced badge file does not exist:
  - Badge display is skipped
  - Completion status remains valid

---

## 7. Social Sharing Rules

### 7.1 Share Availability
- Social sharing is **optional**
- Share prompts appear **only after successful completion**
- No social sharing is shown on failure states

### 7.2 Supported Channels
- LinkedIn (primary)
- Copyable text template

### 7.3 Share Content Rules
- Content must emphasize:
  - Skills acquired
  - Systems built
  - Technology used
- Content must not imply certification or formal endorsement

---

## 8. Output Formatting Rules

### 8.1 Content Preservation
- Existing headings, tasks, screenshots, and code blocks must remain unchanged
- Quiz sections are appended, never interwoven

### 8.2 Structural Consistency
- Section titles must be consistent across labs
- Markdown must remain compatible with LiveLabs rendering

### 8.3 Automation Defaults
When ambiguity exists, the AI must default to:
1. Fewer questions
2. End-of-lab placement
3. Non-blocking behavior
4. No badge tiering

---

## 9. Automation vs Manual Responsibilities

### 9.1 Automated by AI
- Quiz insertion
- Question formatting
- Badge logic application
- Consistent wording and structure

### 9.2 Manual (Human-Owned)
- Question quality review
- Badge visual design
- Final approval of share language

---

## 10. Versioning and Change Management

- This file is the **single source of truth**
- Changes apply prospectively unless explicitly re-applied
- Versioning is recommended for:
  - Quiz density changes
  - Scoring threshold changes
  - Badge logic changes

---
End of rules.md

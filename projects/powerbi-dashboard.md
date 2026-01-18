---
layout: default
title: "Power BI: Executive Dashboard"
---

# Power BI: Executive Dashboard (Redacted Demo)

## Summary
A stakeholder-ready Power BI dashboard designed for fast decision-making with a clean semantic model, optimized DAX, and usability-first navigation.

> Note: Screens are redacted. Any shared dataset is synthetic or public. No proprietary model/table names are included.

---

## Problem
Leadership needed a single view of performance and trends with drill-down capability, consistent definitions, and predictable refresh behavior.

## Constraints
- Sensitive data and restricted access
- Multiple sources and inconsistent definitions
- Performance constraints (large tables, frequent interactions)
- Fixed refresh windows and reliability expectations

## Approach
### Data model
- Star schema with clear facts and dimensions
- Conformed dimensions to keep definitions consistent
- Measures-driven logic (not calculated columns unless necessary)

### DAX and performance
- Measures optimized to reduce heavy iterators where possible
- Proper use of filter context and variables
- Aggregation strategy for large-grain visuals

### Report UX
- Page-level navigation for common workflows
- Drill-through paths designed around stakeholder questions
- Tooltips and definitions to reduce ambiguity

## Demo
- Screenshots (redacted):  
  - `assets/img/powerbi-01.png`  
  - `assets/img/powerbi-02.png`  
  - `assets/img/powerbi-03.png`
- Video walkthrough (unlisted): <PASTE_LINK_HERE>
- Public replica (optional): <PASTE_GITHUB_REPO_OR_LIVE_DEMO_LINK>

## Outcomes
- Faster access to key metrics and trend signals
- Reduced manual reporting effort
- Improved consistency of metric definitions across stakeholders

## What I would do next
- Add monitoring for refresh performance and query hotspots
- Expand the semantic layer for self-service exploration
- Formalize metric governance and documentation

## Tech stack
Power BI, Power Query, DAX, SQL (as applicable)

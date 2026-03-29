# IDP Technical excellence & Recruitment Checklist

This document serves as a self-assessment checklist for the **Senior DevOps / Platform Engineer** portfolio. It is designed to identify and mitigate "attack points" that high-level technical recruiters use to reject candidates.

## 🏗️ 1. Architecting for Longevity (Anti-DIY Risk)
*A custom tool is a liability until proven maintainable.*

- [ ] **Standard Tech Stack:** Are the custom platforms built using standard languages (Node.js, Python, React) that the rest of the team can maintain?
- [ ] **Documentation Status:** Is there a "Technical Handover" or "Design Doc" mention? (e.g., *"Built with OpenAPI specs and automated docs for team maintenance"*).
- [ ] **Modular Architecture:** Does the description imply a plug-and-play architecture rather than a monolithic custom script?
- [ ] **Dependency Proof:** Are the custom scanners (replacing SonarQube) using established open-source engines (e.g., Bandit, Trivy, ESLint) under the hood?

## 📊 2. The Scale & Density Metrics
*Complexity is relative to the volume of data and traffic.*

- [ ] **User Adoption:** Is the number of daily active developers (DAU) using the IDP mentioned? (e.g., *"Serving 50+ engineers"*).
- [ ] **Infra Volume:** Is the size of the managed infrastructure explicitly stated? (e.g., *"Managing 300+ Microservices across 20+ Clusters"*).
- [ ] **Security Volume:** For the code scanner, how many MRs/PRs are scanned per week?
- [ ] **Resilience:** Does the "Agent-Based Deployment" mention how it handles failures? (e.g., *"Built-in retry logic and circuit breakers for distributed node failure"*).

## 🛡️ 3. Security & Compliance Rigor
*Homemade security is often flawed security.*

- [ ] **Auth Integration:** Does the custom dashboard use enterprise SSO (LDAP, Okta, Azure AD) rather than a "homemade" user database?
- [ ] **Audit Strategy:** For the MongoDB tool, is the activity tracking saved to an immutable location (e.g., CloudWatch Logs, ELK) for compliance?
- [ ] **Identity Management:** Does the tool follow the "Least Privilege" principle?
- [ ] **Regulatory Alignment:** Does the project description use compliance-friendly language? (e.g., *"Aligned with SOC2 audit requirements for production access tracking"*).

## ⚡ 4. Developer Experience (DX) vs. Friction
*Automation should empower, not obstruct.*

- [ ] **Self-Service Factor:** Can developers perform actions without opening a ticket to the DevOps team?
- [ ] **Break-Glass Procedures:** Does the "Cloud Proxy" include an emergency bypass/admin path for 3 AM production outages?
- [ ] **Frictionless Login:** Does the MFA integration use smooth methods (e.g., Duo, Authenticator push) rather than manual complexity?
- [ ] **Speed Impact:** Is there a metric showing time saved? (e.g., *"Reduced cloud access request time from 2 hours to 30 seconds via on-demand dashboard"*).

## 💰 5. The "Why" of Cost Savings
*Turning off servers is easy; intelligent optimization is Senior level.*

- [ ] **Optimization Intelligence:** Does the cost dashboard use data-driven logic? (e.g., *"Uses Azure Metric APIs to predict family-specific upsizing/downsizing"*).
- [ ] **Automation Lead:** Is the cost saving automated (Auto-scaling/Karpenter) or just a manual suggestion?
- [ ] **Financial Impact:** Is the 30% saving localized to one project or company-wide?

## 🎯 6. Brand & Persona Balance
*A Senior Engineer is an Architect first, a Coder second.*

- [ ] **Strategic Tone:** Does the text focus on *Business Value* (Cost/Security/Speed) more than "Cool Tech"?
- [ ] **Leadership Proof:** Is there mention of mentorship or leading the R&D direction, not just doing the work?
- [ ] **Professional Restraint:** Is the portfolio design visually impressive but still "readable" and "accessible" for a conservative Hiring Manager?

---

### ✅ Summary: The "Big Tech" Filter
To move from a **9/10 (Startup)** to a **10/10 (Big Tech/Enterprise)**, every custom tool in this checklist must be described as:
1. **Maintainable** (Documentation & Standards)
2. **Scalable** (Volume & Metrics)
3. **Enterprise-Grade** (Compliance & SSO)
4. **Enabling** (Developer Speed)

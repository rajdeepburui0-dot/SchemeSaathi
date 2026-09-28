# SchemeSaathi

## AI-Driven Scheme Matching for Marginalized Entrepreneurs
SchemeSaathi is a personalized platform designed to help entrepreneurs discover government schemes that are relevant to their personal and business profile.
Instead of manually searching through multiple government schemes, users provide their profile details and SchemeSaathi filters eligible schemes and ranks them according to their profile relevance.

## Live Links

* Live Prototype: https://scheme-saathi-e2kn.vercel.app/

* Demo Video Link: https://youtu.be/6TyXeVuD7z4

* GitHub Repository Link: https://github.com/rajdeepburui0-dot/SchemeSaathi

## Core Concept
SchemeSaathi uses:
**Rule-Based Eligibility Filtering + Weighted Matching**

* **Hard eligibility rules** remove schemes that clearly do not meet essential requirements.
* **Weighted matching** evaluates profile factors such as business type, business stage, support requirement, social category, and state.
* Schemes are then ranked by their match score and presented as personalized recommendations.

### The Whole Process
USER PROFILE -> ELIGIBILITY FILTERING -> ELIGIBLE SCHEMES -> WEIGHTED MATCHING -> MATCH SCORE -> RANKED RECOMMENDATIONS

## Features
1. Personalized government scheme recommendations
2. Profile-based eligibility checking
3. Match score for each scheme
4. Explanation of why a scheme was recommended
5. "What am I missing?" requirement guidance
6. Document checklist
7. Scheme comparison
8. Official government portal links
9. Backend-based scheme matching
10. 20 government scheme records

## Technology

### Frontend
* HTML
* CSS
* JavaScript

### Backend
* Node.js
* Express.js
* CORS
* REST API

### Data & Matching
* JavaScript-based scheme data
* Rule-based eligibility filtering
* Weighted matching algorithm
* LocalStorage for profile and recommendation data

## Backend Flow
The frontend sends the user's profile to the backend through:
POST /api/match

The backend:
1. Receives the user profile
2. Checks hard eligibility requirements
3. Calculates a match score for eligible schemes
4. Generates match reasons
5. Identifies missing requirements
6. Sorts schemes by match score
7. Returns the recommendations to the frontend

## API Endpoints
GET /api/health
GET /api/schemes
POST /api/profile
POST /api/match

## Current Prototype
The current version includes:

* Complete frontend user flow
* Working Node.js/Express backend
* Profile-based scheme matching
* Hard eligibility filtering
* Weighted match scoring
* Match explanations
* Missing requirement guidance
* Document checklists
* Official government scheme links
* 20 government scheme records

The current prototype uses JavaScript-based scheme data and LocalStorage for frontend profile and recommendation data.

## Project Status
**Working Prototype**

The core frontend and backend matching flow is currently implemented.

### Future Development
1. Database integration
2. AI-assisted ranking and personalization
3. Larger and regularly updated scheme data
4. Additional validation and production deployment

## Screen References

### Home Page

![Index Page](<assets/Index%20page.png>)

### Profile Page 

![Profile Page](<assets/Profile%20page.png>)

### Matching Page

![Matching Page](<assets/Matching%20page.png>)

### Result Page

![Result Page](<assets/Result%20page.png>)

### Scheme Details

![Scheme-Details Page](<assets/Scheme-Details%20page.png>)

### Compare Page

![Compare Page](<assets/Compare%20page.png>)



## Smart India Hackathon 2026

**Project:** AI-Driven Scheme Matching for Marginalized Entrepreneurs

**Theme:** Smart Automation

**Team:** Jupitex
/* =========================================
SCHEMESAATHI
GOVERNMENT SCHEME DATABASE

This file contains the schemes used by
SchemeSaathi for prototype matching.

IMPORTANT:
Eligibility should always be verified
on the official government portal before
applying.
========================================= */

const schemeDatabase = [

/* =========================================
   1. PMEGP
========================================= */

{
    id: 1,

    name: "Prime Minister's Employment Generation Programme (PMEGP)",

    category: "Business Finance",

    icon: "fa-building-columns",

    description:
        "A credit-linked subsidy programme supporting eligible individuals in setting up new micro enterprises in the non-farm sector.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "food",
        "handicraft",
        "agriculture",
        "retail",
        "technology",
        "other"
    ],

    businessStages: [
        "idea",
        "startup"
    ],

    support: [
        "finance",
        "equipment"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Margin money subsidy support",
        "Credit-linked financial assistance",
        "Support for setting up new micro enterprises",
        "Employment generation support"
    ],

    eligibility: [
        "Applicant must be above 18 years of age",
        "Assistance is for new enterprises",
        "The proposed activity must satisfy PMEGP guidelines",
        "Additional educational requirements may apply for projects above specified costs"
    ],

    missing: [
        "Project proposal may be required",
        "Required registrations and documents must be verified before application"
    ],

    documents: [
        "Aadhaar / identity proof",
        "Address proof",
        "Photograph",
        "Project report",
        "Bank account details",
        "Category certificate where applicable"
    ],

    reason:
        "You may be a potential match because PMEGP supports eligible individuals starting new micro enterprises. Your business stage, business type and support requirements are considered in the ranking.",

    officialLink:
        "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
},



/* =========================================
   2. CGTMSE
========================================= */

{
    id: 2,

    name: "Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)",

    category: "Credit & Guarantee",

    icon: "fa-shield-halved",

    description:
        "A credit guarantee framework designed to facilitate institutional credit to eligible micro and small enterprises.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "food",
        "technology",
        "retail",
        "handicraft",
        "other"
    ],

    businessStages: [
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "finance"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Credit guarantee support",
        "Improved access to institutional credit",
        "Support for eligible micro and small enterprises"
    ],

    eligibility: [
        "Applicant must satisfy the applicable CGTMSE eligibility requirements",
        "Enterprise must fall within the eligible micro or small enterprise framework",
        "Loan must be obtained through an eligible lending institution"
    ],

    missing: [
        "Loan requirement must be established",
        "Enterprise and lender eligibility must be verified"
    ],

    documents: [
        "Identity proof",
        "Business registration details",
        "Udyam registration where applicable",
        "Business / financial documents",
        "Bank documents"
    ],

    reason:
        "You may be matched because you indicated a need for financial support and your business profile can fall within the micro or small enterprise segment.",

    officialLink:
        "https://www.cgtmse.in/"
},



/* =========================================
   3. MSE-CDP
========================================= */

{
    id: 3,

    name: "Micro & Small Enterprises Cluster Development Programme (MSE-CDP)",

    category: "Cluster Development",

    icon: "fa-users",

    description:
        "A programme supporting the development of clusters of micro and small enterprises through common infrastructure and related interventions.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "food",
        "handicraft",
        "service",
        "agriculture",
        "other"
    ],

    businessStages: [
        "existing",
        "expansion"
    ],

    support: [
        "equipment",
        "market",
        "finance"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Common facility infrastructure",
        "Cluster development support",
        "Technology and productivity improvement opportunities",
        "Support for participating MSE clusters"
    ],

    eligibility: [
        "Enterprise should fall within the applicable MSE framework",
        "Participation is connected with eligible cluster development activities",
        "Applicable programme guidelines must be satisfied"
    ],

    missing: [
        "Cluster participation may be required",
        "Specific project and cluster requirements must be verified"
    ],

    documents: [
        "Business registration details",
        "Udyam registration where applicable",
        "Business documents",
        "Cluster-related documents"
    ],

    reason:
        "This may be relevant when an existing micro or small enterprise needs infrastructure, technology or cluster-based development support.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   4. SFURTI
========================================= */

{
    id: 4,

    name: "Scheme of Fund for Regeneration of Traditional Industries (SFURTI)",

    category: "Traditional Industries",

    icon: "fa-hands-holding-circle",

    description:
        "A scheme supporting traditional industry clusters and helping traditional artisans and enterprises improve competitiveness and livelihoods.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "handicraft",
        "food",
        "agriculture",
        "manufacturing",
        "other"
    ],

    businessStages: [
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "equipment",
        "training",
        "market",
        "finance"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Cluster development support",
        "Common facility support",
        "Skill and capacity building",
        "Market linkage opportunities",
        "Technology and infrastructure support"
    ],

    eligibility: [
        "Applicant activity should relate to eligible traditional industries or clusters",
        "Applicable SFURTI cluster requirements must be satisfied"
    ],

    missing: [
        "Traditional industry / cluster relevance must be verified",
        "Cluster-level requirements may apply"
    ],

    documents: [
        "Identity proof",
        "Business / artisan details",
        "Registration details where applicable",
        "Activity-related documents"
    ],

    reason:
        "Your profile may match where your business is connected to traditional industries, handicrafts or cluster-based activities and you need equipment, training or market support.",

    officialLink:
        "https://sfurti.msme.gov.in/"
},



/* =========================================
   5. ESDP
========================================= */

{
    id: 5,

    name: "Entrepreneurship Skill Development Programme (ESDP)",

    category: "Training & Skills",

    icon: "fa-graduation-cap",

    description:
        "Entrepreneurship and skill-development activities intended to encourage and develop entrepreneurial capabilities.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "agriculture",
        "food",
        "handicraft",
        "technology",
        "retail",
        "other"
    ],

    businessStages: [
        "idea",
        "startup",
        "existing"
    ],

    support: [
        "training"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Entrepreneurship training",
        "Skill development",
        "Awareness about entrepreneurship opportunities",
        "Business-oriented capacity building"
    ],

    eligibility: [
        "Applicant must satisfy the requirements of the particular training programme",
        "Eligibility can vary according to the specific programme"
    ],

    missing: [
        "Specific training programme availability must be checked"
    ],

    documents: [
        "Identity proof",
        "Basic applicant information",
        "Educational / qualification documents where required"
    ],

    reason:
        "You selected training as a support requirement, making entrepreneurship and skill-development programmes potentially relevant.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   6. ATI
========================================= */

{
    id: 6,

    name: "Assistance to Training Institutions (ATI)",

    category: "Training Infrastructure",

    icon: "fa-school",

    description:
        "Support for eligible training institutions involved in entrepreneurship and skill development activities.",

    categories: [
        "general",
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "other"
    ],

    businessTypes: [
        "service",
        "manufacturing",
        "technology",
        "other"
    ],

    businessStages: [
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "training"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Training infrastructure support",
        "Capacity building support",
        "Entrepreneurship training ecosystem development"
    ],

    eligibility: [
        "Primarily applicable to eligible training institutions",
        "Institutional requirements must be satisfied"
    ],

    missing: [
        "Institutional eligibility should be verified"
    ],

    documents: [
        "Institution registration documents",
        "Institutional proposal",
        "Relevant supporting documents"
    ],

    reason:
        "This scheme is primarily institution-oriented, so an individual entrepreneur may not directly qualify. It is retained in the database for broader scheme discovery.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   7. COIR VIKAS YOJANA
========================================= */

{
    id: 7,

    name: "Coir Vikas Yojana",

    category: "Coir & Rural Industry",

    icon: "fa-leaf",

    description:
        "A programme supporting development of the coir sector through production, skill development, technology and related activities.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "handicraft",
        "manufacturing",
        "agriculture",
        "other"
    ],

    businessStages: [
        "idea",
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "training",
        "equipment",
        "market",
        "finance"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Skill development",
        "Technology support",
        "Coir sector development",
        "Market-related support"
    ],

    eligibility: [
        "Activity should be connected with eligible coir-sector activities",
        "Specific component guidelines must be satisfied"
    ],

    missing: [
        "Coir-sector relevance must be established"
    ],

    documents: [
        "Identity proof",
        "Business / artisan details",
        "Relevant activity documents"
    ],

    reason:
        "This recommendation becomes relevant when the business operates in coir-related manufacturing, handicraft or allied activities.",

    officialLink:
        "https://coirboard.gov.in/"
},



/* =========================================
   8. PROCUREMENT & MARKETING SUPPORT
========================================= */

{
    id: 8,

    name: "Procurement and Marketing Support (PMS) Scheme",

    category: "Marketing Support",

    icon: "fa-chart-line",

    description:
        "Support intended to help eligible micro and small enterprises improve market access, participation and marketing capabilities.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "food",
        "handicraft",
        "retail",
        "technology",
        "other"
    ],

    businessStages: [
        "existing",
        "expansion"
    ],

    support: [
        "market"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Marketing support",
        "Market access opportunities",
        "Participation support for eligible events and activities",
        "Business visibility support"
    ],

    eligibility: [
        "Enterprise must satisfy applicable MSME eligibility conditions",
        "Specific activity or event requirements may apply"
    ],

    missing: [
        "Udyam / MSME status may need verification",
        "Specific marketing activity requirements should be checked"
    ],

    documents: [
        "Udyam registration where applicable",
        "Business registration documents",
        "Identity proof",
        "Relevant event / marketing documents"
    ],

    reason:
        "You may receive this recommendation when market access is one of your stated business requirements.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   9. INTERNATIONAL COOPERATION
========================================= */

{
    id: 9,

    name: "International Cooperation (IC) Scheme",

    category: "International Market Access",

    icon: "fa-globe",

    description:
        "Support for eligible MSMEs and organizations for activities that promote international cooperation and market access.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "food",
        "handicraft",
        "technology",
        "other"
    ],

    businessStages: [
        "existing",
        "expansion"
    ],

    support: [
        "market"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "International market exposure",
        "Participation support for eligible international activities",
        "Market development opportunities"
    ],

    eligibility: [
        "Applicable MSME and programme requirements must be satisfied",
        "Specific international activity conditions may apply"
    ],

    missing: [
        "International market activity requirement may apply"
    ],

    documents: [
        "Business registration documents",
        "Udyam registration where applicable",
        "Identity proof",
        "International activity documentation"
    ],

    reason:
        "This may become relevant for an existing business seeking international market exposure or expansion.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   10. NATIONAL SC-ST HUB
========================================= */

{
    id: 10,

    name: "National SC-ST Hub",

    category: "SC/ST Entrepreneurship",

    icon: "fa-people-group",

    description:
        "A programme supporting SC/ST entrepreneurs and helping improve participation in public procurement and entrepreneurship opportunities.",

    categories: [
        "sc",
        "st"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "food",
        "handicraft",
        "technology",
        "retail",
        "other"
    ],

    businessStages: [
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "finance",
        "training",
        "market",
        "digital"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Support for SC/ST entrepreneurs",
        "Capacity building",
        "Market and procurement-related opportunities",
        "Entrepreneurship support"
    ],

    eligibility: [
        "Applicant / enterprise must satisfy applicable SC/ST Hub requirements",
        "Specific component conditions must be satisfied"
    ],

    missing: [
        "Valid SC/ST status documentation may be required",
        "Enterprise eligibility should be verified"
    ],

    documents: [
        "Identity proof",
        "SC/ST certificate",
        "Business registration documents",
        "Udyam registration where applicable"
    ],

    reason:
        "Your social category can make this programme relevant when you are an SC/ST entrepreneur seeking entrepreneurship, procurement or capacity-building support.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   11. ASPIRE
========================================= */

{
    id: 11,

    name: "ASPIRE — Promotion of Innovation, Rural Industries and Entrepreneurship",

    category: "Rural Entrepreneurship",

    icon: "fa-lightbulb",

    description:
        "A programme promoting innovation, rural industries and entrepreneurship through incubation and related support.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "agriculture",
        "food",
        "manufacturing",
        "service",
        "technology",
        "handicraft",
        "other"
    ],

    businessStages: [
        "idea",
        "startup",
        "existing"
    ],

    support: [
        "training",
        "equipment",
        "digital",
        "finance"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Entrepreneurship support",
        "Incubation-related opportunities",
        "Rural industry development",
        "Innovation support"
    ],

    eligibility: [
        "Specific ASPIRE component eligibility must be satisfied",
        "Incubation and institutional requirements may apply depending on the component"
    ],

    missing: [
        "Specific ASPIRE programme component must be identified"
    ],

    documents: [
        "Identity proof",
        "Business / project information",
        "Relevant proposal documents"
    ],

    reason:
        "ASPIRE can be relevant to entrepreneurs working in rural industries, agriculture-linked activities, innovation or incubation-oriented businesses.",

    officialLink:
        "https://aspire.msme.gov.in/"
},



/* =========================================
   12. KHADI VIKAS YOJANA
========================================= */

{
    id: 12,

    name: "Khadi Vikas Yojana",

    category: "Khadi & Village Industry",

    icon: "fa-shirt",

    description:
        "Support under the Khadi development framework for strengthening khadi activities, production and related infrastructure.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "handicraft",
        "manufacturing",
        "retail",
        "other"
    ],

    businessStages: [
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "equipment",
        "training",
        "market"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Khadi-sector development support",
        "Equipment and production support",
        "Skill development",
        "Market development"
    ],

    eligibility: [
        "Activity must satisfy the applicable Khadi programme requirements"
    ],

    missing: [
        "Khadi-related activity must be verified"
    ],

    documents: [
        "Identity proof",
        "Business / artisan details",
        "Relevant activity documents"
    ],

    reason:
        "This scheme becomes more relevant when your business is connected with khadi production, handicrafts or related village-industry activities.",

    officialLink:
        "https://www.kvic.gov.in/"
},



/* =========================================
   13. GRAMODYOG VIKAS YOJANA
========================================= */

{
    id: 13,

    name: "Gramodyog Vikas Yojana",

    category: "Village Industries",

    icon: "fa-house",

    description:
        "A village-industry development programme supporting eligible rural and traditional industry activities.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "agriculture",
        "food",
        "handicraft",
        "manufacturing",
        "other"
    ],

    businessStages: [
        "idea",
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "equipment",
        "training",
        "market"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Village-industry development",
        "Tool and equipment support",
        "Skill development",
        "Rural entrepreneurship opportunities"
    ],

    eligibility: [
        "Activity must fall within applicable village-industry programme requirements"
    ],

    missing: [
        "Eligible village-industry activity must be established"
    ],

    documents: [
        "Identity proof",
        "Business / artisan details",
        "Activity-related documents"
    ],

    reason:
        "Your profile may match this programme when your business is based on eligible village-industry or rural production activities.",

    officialLink:
        "https://www.kvic.gov.in/"
},



/* =========================================
   14. PM VISHWAKARMA
========================================= */

{
    id: 14,

    name: "PM Vishwakarma",

    category: "Artisan Support",

    icon: "fa-hammer",

    description:
        "A central government scheme supporting eligible traditional artisans and craftspeople through training, tools, credit and market-related support.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "handicraft",
        "manufacturing",
        "other"
    ],

    businessStages: [
        "idea",
        "startup",
        "existing"
    ],

    support: [
        "training",
        "equipment",
        "finance",
        "market",
        "digital"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Skill training",
        "Toolkit support",
        "Credit support",
        "Digital transaction incentives",
        "Marketing support"
    ],

    eligibility: [
        "Applicant must belong to an eligible traditional artisan or craftspeople trade",
        "Age and other scheme-specific conditions apply",
        "Applicant must satisfy PM Vishwakarma registration requirements"
    ],

    missing: [
        "Eligible artisan trade must be verified",
        "Scheme registration and verification are required"
    ],

    documents: [
        "Aadhaar",
        "Mobile number",
        "Bank account details",
        "Trade-related information",
        "Other documents required during verification"
    ],

    reason:
        "This can be highly relevant when your business is based on one of the traditional artisan trades covered by PM Vishwakarma.",

    officialLink:
        "https://pmvishwakarma.gov.in/"
},



/* =========================================
   15. PROMOTION OF MSME IN NER & SIKKIM
========================================= */

{
    id: 15,

    name: "Promotion of MSME in North Eastern Region and Sikkim",

    category: "Regional MSME Support",

    icon: "fa-map-location-dot",

    description:
        "Support framework for promoting MSME development in the North Eastern Region and Sikkim.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "service",
        "food",
        "agriculture",
        "handicraft",
        "technology",
        "other"
    ],

    businessStages: [
        "startup",
        "existing",
        "expansion"
    ],

    support: [
        "finance",
        "equipment",
        "market",
        "training"
    ],

    states: [
        "assam"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Regional MSME development support",
        "Infrastructure and entrepreneurship support",
        "Market and capacity-building opportunities"
    ],

    eligibility: [
        "Enterprise must operate in an eligible North Eastern Region state or Sikkim",
        "Specific component requirements apply"
    ],

    missing: [
        "Exact state and programme component must be verified"
    ],

    documents: [
        "Identity proof",
        "Business registration documents",
        "Address / state proof"
    ],

    reason:
        "Regional schemes are ranked when the entrepreneur's state falls within the scheme's geographic coverage.",

    officialLink:
        "https://msme.gov.in/"
},



/* =========================================
   16. ZED CERTIFICATION
========================================= */

{
    id: 16,

    name: "MSME Sustainable (ZED) Certification",

    category: "Quality & Sustainability",

    icon: "fa-award",

    description:
        "A programme encouraging MSMEs to adopt quality manufacturing practices with a focus on Zero Defect and Zero Effect principles.",

    categories: [
        "sc",
        "st",
        "obc",
        "minority",
        "women",
        "person-with-disability",
        "general",
        "other"
    ],

    businessTypes: [
        "manufacturing",
        "food",
        "handicraft",
        "other"
    ],

    businessStages: [
        "existing",
        "expansion"
    ],

    support: [
        "digital",
        "equipment",
        "training"
    ],

    states: [
        "all"
    ],

    minAge: 18,

    incomeLimit: null,

    benefits: [
        "Quality improvement",
        "Sustainability-oriented practices",
        "Certification support",
        "Improved competitiveness"
    ],

    eligibility: [
        "Enterprise must satisfy the applicable MSME and ZED requirements",
        "Certification-specific conditions apply"
    ],

    missing: [
        "MSME status should be verified",
        "Certification requirements must be completed"
    ],

    documents: [
        "Udyam registration where applicable",
        "Business information",
        "Certification-related documents"
    ],

    reason:
        "This may be relevant to existing manufacturing-oriented MSMEs seeking quality and sustainability improvements.",

    officialLink:
        "https://zed.msme.gov.in/"
}

];




/* =========================================
EXPORT / GLOBAL ACCESS
========================================= */

/*
The variable is intentionally kept global
so matching.js can directly access:

   schemeDatabase

*/

console.log(
"SchemeSaathi scheme database loaded:",
schemeDatabase.length,
"schemes"
);
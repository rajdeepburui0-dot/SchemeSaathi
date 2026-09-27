
const schemes = [

    // =========================================================
    // 1. PRADHAN MANTRI MUDRA YOJANA
    // =========================================================

    {
        id: 1,

        name: "Pradhan Mantri Mudra Yojana",

        shortName: "PMMY",

        description:
            "Provides loans to micro and small businesses for starting or expanding their business.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: 1000000,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Trading",
            "Retail",
            "Handicraft"
        ],

        businessStages: [
            "Idea",
            "Startup",
            "Existing"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Working Capital",
            "Equipment Purchase"
        ],

        support: [
            "finance",
            "equipment"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Business loan",
            "No collateral requirement for eligible loans",
            "Support for micro enterprises"
        ],

        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Address Proof",
            "Business Proof",
            "Bank Account Details"
        ],

        officialLink:
            "https://www.mudra.org.in/"
    },


    // =========================================================
    // 2. PMEGP
    // =========================================================

    {
        id: 2,

        name:
            "Prime Minister's Employment Generation Programme",

        shortName:
            "PMEGP",

        description:
            "Provides financial assistance to eligible entrepreneurs for setting up new micro enterprises.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Trading",
            "Food",
            "Handicraft",
            "Retail"
        ],

        businessStages: [
            "Idea",
            "Startup"
        ],

        goals: [
            "Start Business",
            "Equipment Purchase",
            "Business Expansion"
        ],

        support: [
            "finance",
            "equipment",
            "training"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Margin money subsidy",
            "Financial assistance for new enterprises",
            "Support for employment generation"
        ],

        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Project Report",
            "Address Proof",
            "Bank Account Details"
        ],

        officialLink:
            "https://www.kvic.gov.in/kvicres/index.php"
    },


    // =========================================================
    // 3. STAND-UP INDIA
    // =========================================================

    {
        id: 3,

        name:
            "Stand-Up India",

        shortName:
            "Stand-Up India",

        description:
            "Provides bank loans to eligible SC/ST and women entrepreneurs for setting up new enterprises.",

        categories: [
            "SC",
            "ST"
        ],

        genders: [
            "Female"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Trading",
            "Retail"
        ],

        businessStages: [
            "Idea",
            "Startup"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Equipment Purchase"
        ],

        support: [
            "finance",
            "equipment"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Bank loan assistance",
            "Support for SC/ST entrepreneurs",
            "Support for women entrepreneurs"
        ],

        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Caste Certificate",
            "Business Plan",
            "Address Proof"
        ],

        officialLink:
            "https://www.standupmitra.in/"
    },


    // =========================================================
    // 4. PM VISHWAKARMA
    // =========================================================

    {
        id: 4,

        name:
            "PM Vishwakarma",

        shortName:
            "PM Vishwakarma",

        description:
            "Provides support to traditional artisans and craftspeople through financial assistance, training and market support.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Handicraft",
            "Artisan",
            "Manufacturing"
        ],

        businessStages: [
            "Idea",
            "Startup",
            "Existing"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Equipment Purchase",
            "Skill Development"
        ],

        support: [
            "finance",
            "equipment",
            "training",
            "market",
            "digital"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Skill training",
            "Toolkit incentive",
            "Credit support",
            "Marketing support"
        ],

        documents: [
            "Aadhaar Card",
            "Identity Proof",
            "Address Proof",
            "Bank Account Details",
            "Artisan Registration"
        ],

        officialLink:
            "https://pmvishwakarma.gov.in/"
    },


    // =========================================================
    // 5. NATIONAL SC-ST HUB
    // =========================================================

    {
        id: 5,

        name:
            "National SC-ST Hub",

        shortName:
            "NSSH",

        description:
            "Supports SC and ST entrepreneurs through capacity building, market access and business development support.",

        categories: [
            "SC",
            "ST"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Trading",
            "Food",
            "Handicraft",
            "Technology",
            "Retail"
        ],

        businessStages: [
            "Startup",
            "Existing"
        ],

        goals: [
            "Business Expansion",
            "Market Access",
            "Skill Development",
            "Equipment Purchase"
        ],

        support: [
            "finance",
            "training",
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Capacity building",
            "Market support",
            "Tender participation support",
            "Business development assistance"
        ],

        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Caste Certificate",
            "Business Registration",
            "Bank Account Details"
        ],

        officialLink:
            "https://scsthub.in/"
    },


    // =========================================================
    // 6. CGTMSE
    // =========================================================

    {
        id: 6,

        name:
            "Credit Guarantee Scheme for Micro and Small Enterprises",

        shortName:
            "CGTMSE",

        description:
            "Provides credit guarantee support to eligible micro and small enterprises to improve access to institutional finance.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Trading",
            "Retail",
            "Food",
            "Technology"
        ],

        businessStages: [
            "Startup",
            "Existing",
            "Expansion"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Working Capital",
            "Equipment Purchase"
        ],

        support: [
            "finance"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Credit guarantee support",
            "Improved access to institutional credit",
            "Support for eligible micro and small enterprises"
        ],

        documents: [
            "Identity Proof",
            "Business Registration",
            "Udyam Registration",
            "Financial Documents",
            "Bank Documents"
        ],

        officialLink:
            "https://www.cgtmse.in/"
    },


    // =========================================================
    // 7. MSE-CDP
    // =========================================================

    {
        id: 7,

        name:
            "Micro and Small Enterprises Cluster Development Programme",

        shortName:
            "MSE-CDP",

        description:
            "Supports clusters of micro and small enterprises through common infrastructure, technology and productivity improvement.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Food",
            "Handicraft"
        ],

        businessStages: [
            "Existing",
            "Expansion"
        ],

        goals: [
            "Business Expansion",
            "Equipment Purchase",
            "Market Access"
        ],

        support: [
            "finance",
            "equipment",
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Common facility infrastructure",
            "Cluster development support",
            "Technology improvement",
            "Productivity improvement"
        ],

        documents: [
            "Business Registration",
            "Udyam Registration",
            "Business Documents",
            "Cluster Documents"
        ],

        officialLink:
            "https://msme.gov.in/"
    },


    // =========================================================
    // 8. SFURTI
    // =========================================================

    {
        id: 8,

        name:
            "Scheme of Fund for Regeneration of Traditional Industries",

        shortName:
            "SFURTI",

        description:
            "Supports traditional industry clusters and helps artisans and enterprises improve competitiveness and livelihoods.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Handicraft",
            "Food",
            "Agriculture",
            "Manufacturing",
            "Artisan"
        ],

        businessStages: [
            "Startup",
            "Existing",
            "Expansion"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Skill Development",
            "Market Access"
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

        benefits: [
            "Cluster development support",
            "Common facility support",
            "Skill development",
            "Market linkage",
            "Technology support"
        ],

        documents: [
            "Identity Proof",
            "Business Details",
            "Artisan Details",
            "Registration Documents"
        ],

        officialLink:
            "https://sfurti.msme.gov.in/"
    },


    // =========================================================
    // 9. ESDP
    // =========================================================

    {
        id: 9,

        name:
            "Entrepreneurship Skill Development Programme",

        shortName:
            "ESDP",

        description:
            "Promotes entrepreneurship and develops entrepreneurial and business skills through training programmes.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Agriculture",
            "Food",
            "Handicraft",
            "Technology",
            "Retail"
        ],

        businessStages: [
            "Idea",
            "Startup",
            "Existing"
        ],

        goals: [
            "Start Business",
            "Skill Development"
        ],

        support: [
            "training"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Entrepreneurship training",
            "Skill development",
            "Business awareness",
            "Capacity building"
        ],

        documents: [
            "Identity Proof",
            "Applicant Information",
            "Qualification Documents"
        ],

        officialLink:
            "https://msme.gov.in/"
    },


    // =========================================================
    // 10. ATI
    // =========================================================

    {
        id: 10,

        name:
            "Assistance to Training Institutions",

        shortName:
            "ATI",

        description:
            "Provides support to eligible training institutions involved in entrepreneurship and skill development.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Service",
            "Manufacturing",
            "Technology"
        ],

        businessStages: [
            "Startup",
            "Existing",
            "Expansion"
        ],

        goals: [
            "Skill Development",
            "Business Expansion"
        ],

        support: [
            "training"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Training infrastructure support",
            "Capacity building",
            "Entrepreneurship training ecosystem"
        ],

        documents: [
            "Institution Registration",
            "Institution Proposal",
            "Supporting Documents"
        ],

        officialLink:
            "https://msme.gov.in/"
    },


    // =========================================================
    // 11. COIR VIKAS YOJANA
    // =========================================================

    {
        id: 11,

        name:
            "Coir Vikas Yojana",

        shortName:
            "Coir Vikas Yojana",

        description:
            "Supports development of the coir sector through production, technology, skill development and market activities.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Handicraft",
            "Manufacturing",
            "Agriculture",
            "Artisan"
        ],

        businessStages: [
            "Idea",
            "Startup",
            "Existing",
            "Expansion"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Equipment Purchase",
            "Skill Development",
            "Market Access"
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

        benefits: [
            "Skill development",
            "Technology support",
            "Coir sector development",
            "Market support"
        ],

        documents: [
            "Identity Proof",
            "Business Details",
            "Artisan Details",
            "Activity Documents"
        ],

        officialLink:
            "https://coirboard.gov.in/"
    },


    // =========================================================
    // 12. PROCUREMENT AND MARKETING SUPPORT
    // =========================================================

    {
        id: 12,

        name:
            "Procurement and Marketing Support Scheme",

        shortName:
            "PMS",

        description:
            "Helps eligible micro and small enterprises improve market access, participation and marketing capabilities.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Food",
            "Handicraft",
            "Retail",
            "Technology"
        ],

        businessStages: [
            "Existing",
            "Expansion"
        ],

        goals: [
            "Market Access",
            "Business Expansion"
        ],

        support: [
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Marketing support",
            "Market access",
            "Participation support",
            "Business visibility"
        ],

        documents: [
            "Udyam Registration",
            "Business Registration",
            "Identity Proof",
            "Marketing Documents"
        ],

        officialLink:
            "https://msme.gov.in/"
    },


    // =========================================================
    // 13. INTERNATIONAL COOPERATION
    // =========================================================

    {
        id: 13,

        name:
            "International Cooperation Scheme",

        shortName:
            "IC Scheme",

        description:
            "Supports eligible MSMEs and organizations in activities related to international cooperation and market access.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Food",
            "Handicraft",
            "Technology"
        ],

        businessStages: [
            "Existing",
            "Expansion"
        ],

        goals: [
            "Market Access",
            "Business Expansion"
        ],

        support: [
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "International market exposure",
            "Market development opportunities",
            "International activity support"
        ],

        documents: [
            "Business Registration",
            "Udyam Registration",
            "Identity Proof",
            "International Activity Documents"
        ],

        officialLink:
            "https://msme.gov.in/"
    },


    // =========================================================
    // 14. ASPIRE
    // =========================================================

    {
        id: 14,

        name:
            "ASPIRE — Promotion of Innovation, Rural Industries and Entrepreneurship",

        shortName:
            "ASPIRE",

        description:
            "Promotes innovation, rural industries and entrepreneurship through incubation and related support.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Agriculture",
            "Food",
            "Manufacturing",
            "Service",
            "Technology",
            "Handicraft"
        ],

        businessStages: [
            "Idea",
            "Startup",
            "Existing"
        ],

        goals: [
            "Start Business",
            "Skill Development",
            "Equipment Purchase"
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

        benefits: [
            "Entrepreneurship support",
            "Incubation opportunities",
            "Rural industry development",
            "Innovation support"
        ],

        documents: [
            "Identity Proof",
            "Project Information",
            "Business Proposal"
        ],

        officialLink:
            "https://aspire.msme.gov.in/"
    },


    // =========================================================
    // 15. KHADI VIKAS YOJANA
    // =========================================================

    {
        id: 15,

        name:
            "Khadi Vikas Yojana",

        shortName:
            "Khadi Vikas Yojana",

        description:
            "Supports khadi activities, production, infrastructure, skills and market development.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Handicraft",
            "Manufacturing",
            "Retail",
            "Artisan"
        ],

        businessStages: [
            "Startup",
            "Existing",
            "Expansion"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Equipment Purchase",
            "Skill Development"
        ],

        support: [
            "equipment",
            "training",
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Khadi sector development",
            "Equipment support",
            "Skill development",
            "Market development"
        ],

        documents: [
            "Identity Proof",
            "Business Details",
            "Artisan Details",
            "Activity Documents"
        ],

        officialLink:
            "https://www.kvic.gov.in/"
    },


    // =========================================================
    // 16. GRAMODYOG VIKAS YOJANA
    // =========================================================

    {
        id: 16,

        name:
            "Gramodyog Vikas Yojana",

        shortName:
            "Gramodyog Vikas Yojana",

        description:
            "Supports eligible rural and traditional village-industry activities through equipment, training and development support.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Agriculture",
            "Food",
            "Handicraft",
            "Manufacturing",
            "Artisan"
        ],

        businessStages: [
            "Idea",
            "Startup",
            "Existing",
            "Expansion"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Equipment Purchase",
            "Skill Development"
        ],

        support: [
            "equipment",
            "training",
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Village industry development",
            "Tool and equipment support",
            "Skill development",
            "Rural entrepreneurship opportunities"
        ],

        documents: [
            "Identity Proof",
            "Business Details",
            "Artisan Details",
            "Activity Documents"
        ],

        officialLink:
            "https://www.kvic.gov.in/"
    },


    // =========================================================
    // 17. MSME SUSTAINABLE — ZED
    // =========================================================

    {
        id: 17,

        name:
            "MSME Sustainable (ZED) Certification",

        shortName:
            "ZED",

        description:
            "Encourages MSMEs to adopt quality manufacturing practices based on Zero Defect and Zero Effect principles.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Food",
            "Handicraft"
        ],

        businessStages: [
            "Existing",
            "Expansion"
        ],

        goals: [
            "Business Expansion",
            "Skill Development",
            "Equipment Purchase"
        ],

        support: [
            "digital",
            "equipment",
            "training"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Quality improvement",
            "Sustainable business practices",
            "Certification support",
            "Improved competitiveness"
        ],

        documents: [
            "Udyam Registration",
            "Business Information",
            "Certification Documents"
        ],

        officialLink:
            "https://zed.msme.gov.in/"
    },


    // =========================================================
    // 18. PM SVANIDHI
    // =========================================================

    {
        id: 18,

        name:
            "PM Street Vendor's AtmaNirbhar Nidhi",

        shortName:
            "PM SVANidhi",

        description:
            "Provides working capital support to eligible street vendors to help restart and expand their vending activities.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Retail",
            "Trading",
            "Food",
            "Service"
        ],

        businessStages: [
            "Existing"
        ],

        goals: [
            "Working Capital",
            "Business Expansion"
        ],

        support: [
            "finance",
            "digital"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Working capital loan",
            "Interest subsidy",
            "Digital transaction incentives",
            "Support for street vendors"
        ],

        documents: [
            "Identity Proof",
            "Street Vendor Certificate",
            "Address Proof",
            "Bank Account Details"
        ],

        officialLink:
            "https://pmsvanidhi.mohua.gov.in/"
    },


    // =========================================================
    // 19. STARTUP INDIA
    // =========================================================

    {
        id: 19,

        name:
            "Startup India",

        shortName:
            "Startup India",

        description:
            "Provides an ecosystem of recognition, support, resources and opportunities for eligible startups.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Technology",
            "Service",
            "Manufacturing",
            "Retail",
            "Food"
        ],

        businessStages: [
            "Startup",
            "Existing"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Working Capital"
        ],

        support: [
            "finance",
            "digital",
            "training",
            "market"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Startup recognition",
            "Business ecosystem support",
            "Networking opportunities",
            "Access to startup resources"
        ],

        documents: [
            "Identity Proof",
            "Business Registration",
            "Company Documents",
            "Startup Details"
        ],

        officialLink:
            "https://www.startupindia.gov.in/"
    },


    // =========================================================
    // 20. UDYAM REGISTRATION
    // =========================================================

    {
        id: 20,

        name:
            "Udyam Registration",

        shortName:
            "Udyam",

        description:
            "Provides official MSME registration that helps eligible enterprises access various government benefits and schemes.",

        categories: [
            "General",
            "SC",
            "ST",
            "OBC",
            "Minority"
        ],

        genders: [
            "Male",
            "Female",
            "Other"
        ],

        minAge: 18,

        maxAge: 65,

        maxIncome: null,

        businessTypes: [
            "Manufacturing",
            "Service",
            "Trading",
            "Retail",
            "Food",
            "Handicraft",
            "Technology"
        ],

        businessStages: [
            "Startup",
            "Existing"
        ],

        goals: [
            "Start Business",
            "Business Expansion",
            "Market Access"
        ],

        support: [
            "digital"
        ],

        states: [
            "all"
        ],

        benefits: [
            "Official MSME registration",
            "Access to government scheme benefits",
            "MSME identity and recognition"
        ],

        documents: [
            "Aadhaar Card",
            "PAN Card",
            "Business Information",
            "Bank Details"
        ],

        officialLink:
            "https://udyamregistration.gov.in/"
    }

];



// =========================================================
// EXPORT
// =========================================================

module.exports = schemes;


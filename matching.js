
/* =========================================
   SCHEMESAATHI
   MATCHING PAGE

   Uses:
   - scheme-data.js
   - profile.js
   - results.js
   - scheme-details.js
========================================= */


/* =========================================
   GET SAVED PROFILE
========================================= */

const savedProfile =
    localStorage.getItem("schemeSaathiProfile");


if (!savedProfile) {

    window.location.href = "profile.html";

}


/* =========================================
   READ PROFILE
========================================= */

let profile = null;

try {

    profile = JSON.parse(savedProfile);

} catch (error) {

    console.error("Invalid profile:", error);

    localStorage.removeItem("schemeSaathiProfile");

    window.location.href = "profile.html";

}



/* =========================================
   CHECK DATABASE
========================================= */

if (
    typeof schemeDatabase === "undefined" ||
    !Array.isArray(schemeDatabase)
) {

    console.error(
        "ERROR: schemeDatabase is not loaded."
    );

    alert(
        "Scheme database could not be loaded. Please check that scheme-data.js is loaded before matching.js."
    );

}



/* =========================================
   PAGE ELEMENTS
========================================= */

const profileName =
    document.getElementById("profileName");

const profileSummary =
    document.getElementById("profileSummary");

const progress =
    document.getElementById("analysisProgress");

const percentage =
    document.getElementById("analysisPercentage");


const steps = [

    document.getElementById("analysis1"),

    document.getElementById("analysis2"),

    document.getElementById("analysis3"),

    document.getElementById("analysis4")

];



/* =========================================
   DISPLAY PROFILE
========================================= */

if (profile) {

    if (profileName) {

        profileName.textContent =
            profile.name || "Your Profile";

    }


    const business =
        profile.businessType || "Business";


    const state =
        profile.state || "Your State";


    if (profileSummary) {

        profileSummary.textContent =
            `${business} • ${state}`;

    }

}



/* =========================================
   NORMALIZE
========================================= */

function normalize(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

}



/* =========================================
   UPDATE PROGRESS
========================================= */

function updateProgress(value) {

    if (!progress || !percentage) {

        return;

    }


    progress.style.width =
        `${value}%`;


    percentage.textContent =
        `${value}%`;

}



/* =========================================
   COMPLETE STEP
========================================= */

function completeStep(step) {

    if (!step) {

        return;

    }


    step.classList.remove("active");

    step.classList.add("completed");


    const status =
        step.querySelector(".analysis-status");


    if (status) {

        status.innerHTML =
            '<i class="fa-solid fa-circle-check"></i>';

    }

}



/* =========================================
   ACTIVE STEP
========================================= */

function activateStep(step) {

    if (!step) {

        return;

    }


    step.classList.add("active");


    const status =
        step.querySelector(".analysis-status");


    if (status) {

        status.innerHTML =
            '<i class="fa-solid fa-circle-notch fa-spin"></i>';

    }

}



/* =========================================
   HARD ELIGIBILITY
========================================= */

function isHardEligible(scheme) {


    /* -------------------------------------
       AGE
    ------------------------------------- */

    if (
        scheme.minAge !== null &&
        scheme.minAge !== undefined
    ) {

        if (
            Number(profile.age) <
            Number(scheme.minAge)
        ) {

            return false;

        }

    }



    /* -------------------------------------
       STATE
    ------------------------------------- */

    if (
        Array.isArray(scheme.states) &&
        scheme.states.length > 0
    ) {

        const userState =
            normalize(profile.state);


        const allowedStates =
            scheme.states.map(
                function (state) {

                    return normalize(state);

                }
            );


        if (
            !allowedStates.includes("all") &&
            !allowedStates.includes(userState)
        ) {

            return false;

        }

    }



    return true;

}



/* =========================================
   CALCULATE MATCH SCORE
========================================= */

function calculateMatch(scheme) {

    let score = 0;

    let totalWeight = 0;



    /* =====================================
       BUSINESS TYPE
       30 POINTS
    ===================================== */

    totalWeight += 30;


    const userBusinessType =
        normalize(profile.businessType);


    if (
        userBusinessType &&
        Array.isArray(scheme.businessTypes)
    ) {

        const businessTypes =
            scheme.businessTypes.map(normalize);


        if (
            businessTypes.includes(
                userBusinessType
            )
        ) {

            score += 30;

        }

    }



    /* =====================================
       BUSINESS STAGE
       20 POINTS
    ===================================== */

    totalWeight += 20;


    const userStage =
        normalize(profile.businessStage);


    if (
        userStage &&
        Array.isArray(scheme.businessStages)
    ) {

        const stages =
            scheme.businessStages.map(normalize);


        if (
            stages.includes(userStage)
        ) {

            score += 20;

        }

    }



    /* =====================================
       SUPPORT
       25 POINTS
    ===================================== */

    totalWeight += 25;


    const userSupport =
        Array.isArray(profile.support)
            ? profile.support
            : [];


    if (
        userSupport.length > 0 &&
        Array.isArray(scheme.support)
    ) {

        const schemeSupport =
            scheme.support.map(normalize);


        const matchedSupport =
            userSupport.filter(
                function (support) {

                    return schemeSupport.includes(
                        normalize(support)
                    );

                }
            );


        if (
            matchedSupport.length > 0
        ) {

            score += 25;

        }

    }



    /* =====================================
       SOCIAL CATEGORY
       15 POINTS
    ===================================== */

    totalWeight += 15;


    const userCategory =
        normalize(profile.category);


    if (
        userCategory &&
        Array.isArray(scheme.categories)
    ) {

        const categories =
            scheme.categories.map(normalize);


        if (
            categories.includes(
                userCategory
            )
        ) {

            score += 15;

        }

    }



    /* =====================================
       STATE
       10 POINTS
    ===================================== */

    totalWeight += 10;


    if (
        Array.isArray(scheme.states)
    ) {

        const userState =
            normalize(profile.state);


        const states =
            scheme.states.map(normalize);


        if (
            states.includes("all") ||
            states.includes(userState)
        ) {

            score += 10;

        }

    }



    /* =====================================
       FINAL SCORE
    ===================================== */

    let finalScore =
        Math.round(
            (score / totalWeight) * 100
        );


    /*
       Give every eligible scheme
       a visible score.

       This does NOT mean the user is
       officially eligible.

       It is only a profile relevance
       score for this prototype.
    */

    if (finalScore < 35) {

        finalScore = 35;

    }


    if (finalScore > 98) {

        finalScore = 98;

    }


    return finalScore;

}



/* =========================================
   GENERATE RECOMMENDATIONS
========================================= */

function generateRecommendations() {

    if (
        typeof schemeDatabase === "undefined" ||
        !Array.isArray(schemeDatabase)
    ) {

        console.error(
            "schemeDatabase is unavailable."
        );

        return [];

    }


    const recommendations = [];


    schemeDatabase.forEach(
        function (scheme) {

            /*
               Only clear hard restrictions
               remove a scheme.

               Business type, stage,
               category and support are
               used for ranking.
            */

            if (
                !isHardEligible(scheme)
            ) {

                return;

            }


            const match =
                calculateMatch(scheme);


            recommendations.push({

                ...scheme,

                match: match

            });

        }
    );



    /* =====================================
       SORT HIGHEST MATCH FIRST
    ===================================== */

    recommendations.sort(
        function (a, b) {

            return b.match - a.match;

        }
    );


    return recommendations;

}



/* =========================================
   SAVE RESULTS
========================================= */

function saveResults() {

    const recommendations =
        generateRecommendations();


    /*
       IMPORTANT DEBUG INFORMATION
    */

    console.log(
        "================================="
    );

    console.log(
        "SCHEMESAATHI MATCHING"
    );

    console.log(
        "Database:",
        schemeDatabase
    );

    console.log(
        "Total database schemes:",
        schemeDatabase.length
    );

    console.log(
        "Profile:",
        profile
    );

    console.log(
        "Generated recommendations:",
        recommendations.length
    );

    console.log(
        "Recommendations:",
        recommendations
    );

    console.log(
        "================================="
    );



    /* =====================================
       SAVE TO LOCAL STORAGE
    ===================================== */

    localStorage.setItem(

        "schemeSaathiResults",

        JSON.stringify(
            recommendations
        )

    );


    /*
       Extra verification
    */

    const saved =
        localStorage.getItem(
            "schemeSaathiResults"
        );


    console.log(
        "Saved results:",
        JSON.parse(saved)
    );


    return recommendations;

}



/* =========================================
   START MATCHING
========================================= */

function startMatching() {


    /*
       ======================================
       IMPORTANT
       ======================================

       Generate and save the schemes
       IMMEDIATELY.

       We do NOT wait 2.7 seconds.

       This guarantees that results.html
       has the data even if the user
       refreshes or the animation changes.
    */

    saveResults();



    /* =====================================
       STEP 1
    ===================================== */

    activateStep(
        steps[0]
    );


    setTimeout(
        function () {

            completeStep(
                steps[0]
            );


            updateProgress(25);


            activateStep(
                steps[1]
            );

        },
        900
    );



    /* =====================================
       STEP 2
    ===================================== */

    setTimeout(
        function () {

            completeStep(
                steps[1]
            );


            updateProgress(50);


            activateStep(
                steps[2]
            );

        },
        1800
    );



    /* =====================================
       STEP 3
    ===================================== */

    setTimeout(
        function () {

            completeStep(
                steps[2]
            );


            updateProgress(75);


            activateStep(
                steps[3]
            );

        },
        2700
    );



    /* =====================================
       STEP 4
    ===================================== */

    setTimeout(
        function () {

            completeStep(
                steps[3]
            );


            updateProgress(100);

        },
        3600
    );



    /* =====================================
       GO TO RESULTS
    ===================================== */

    setTimeout(
        function () {

            window.location.href =
                "results.html";

        },
        4400
    );

}



/* =========================================
   START
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (!profile) {

            return;

        }


        startMatching();

    }
);

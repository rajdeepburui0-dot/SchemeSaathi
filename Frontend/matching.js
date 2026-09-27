/* =========================================
   SCHEMESAATHI
   MATCHING PAGE

   Backend flow:

   profile.html
        ↓
   profile.js
        ↓
   POST /api/match
        ↓
   server.js
        ↓
   Backend returns ALL eligible schemes
        ↓
   Backend sorts by match priority
        ↓
   profile.js saves response
        ↓
   matching.js reads backend results
        ↓
   results.html

   IMPORTANT:
   - Backend performs eligibility checking
   - Backend calculates match score
   - Backend sorts schemes by priority
   - ALL eligible schemes are returned
   - No TOP 5 limitation here
========================================= */


/* =========================================
   GET SAVED PROFILE
========================================= */

const savedProfile =
    localStorage.getItem(
        "schemeSaathiProfile"
    );


if (!savedProfile) {

    window.location.href =
        "profile.html";

}


/* =========================================
   READ PROFILE
========================================= */

let profile = null;

try {

    profile =
        JSON.parse(savedProfile);

} catch (error) {

    console.error(
        "Invalid saved profile:",
        error
    );

    localStorage.removeItem(
        "schemeSaathiProfile"
    );

    window.location.href =
        "profile.html";

}


/* =========================================
   GET BACKEND RESULTS
========================================= */

const savedResults =
    localStorage.getItem(
        "schemeSaathiResults"
    );


if (!savedResults) {

    console.error(
        "No backend matching results found."
    );

    alert(
        "Matching results were not found. Please submit your profile again."
    );

    window.location.href =
        "profile.html";

}


/* =========================================
   READ BACKEND RESULTS
========================================= */

let backendResults = null;

try {

    backendResults =
        JSON.parse(savedResults);

} catch (error) {

    console.error(
        "Invalid backend results:",
        error
    );

    localStorage.removeItem(
        "schemeSaathiResults"
    );

    window.location.href =
        "profile.html";

}


/* =========================================
   VERIFY BACKEND RESPONSE
========================================= */

if (
    !backendResults ||
    backendResults.success !== true ||
    !Array.isArray(
        backendResults.schemes
    )
) {

    console.error(
        "Invalid backend matching response:",
        backendResults
    );

    alert(
        "Unable to load scheme recommendations. Please submit your profile again."
    );

    window.location.href =
        "profile.html";

}


/* =========================================
   PAGE ELEMENTS
========================================= */

const profileName =
    document.getElementById(
        "profileName"
    );


const profileSummary =
    document.getElementById(
        "profileSummary"
    );


const progress =
    document.getElementById(
        "analysisProgress"
    );


const percentage =
    document.getElementById(
        "analysisPercentage"
    );


const steps = [

    document.getElementById(
        "analysis1"
    ),

    document.getElementById(
        "analysis2"
    ),

    document.getElementById(
        "analysis3"
    ),

    document.getElementById(
        "analysis4"
    )

];


/* =========================================
   DISPLAY PROFILE
========================================= */

if (profile) {

    if (profileName) {

        profileName.textContent =
            profile.name ||
            "Your Profile";

    }


    const business =
        profile.businessType ||
        "Business";


    const state =
        profile.state ||
        "Your State";


    if (profileSummary) {

        profileSummary.textContent =
            `${business} • ${state}`;

    }

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


    step.classList.remove(
        "active"
    );


    step.classList.add(
        "completed"
    );


    const status =
        step.querySelector(
            ".analysis-status"
        );


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


    step.classList.add(
        "active"
    );


    const status =
        step.querySelector(
            ".analysis-status"
        );


    if (status) {

        status.innerHTML =
            '<i class="fa-solid fa-circle-notch fa-spin"></i>';

    }

}


/* =========================================
   VERIFY BACKEND RESULTS
========================================= */

function verifyBackendResults() {

    console.log(
        "================================="
    );


    console.log(
        "SCHEMESAATHI BACKEND RESULTS"
    );


    console.log(
        "Profile:",
        profile
    );


    console.log(
        "Backend response:",
        backendResults
    );


    console.log(
        "Backend success:",
        backendResults.success
    );


    console.log(
        "Backend count:",
        backendResults.count
    );


    console.log(
        "ALL SCHEMES RECEIVED:",
        backendResults.schemes.length
    );


    console.log(
        "SCHEMES:",
        backendResults.schemes
    );


    console.log(
        "================================="
    );

}


/* =========================================
   VALIDATE AND SORT BACKEND RESULTS
========================================= */

function prepareResults() {

    if (
        !backendResults ||
        !Array.isArray(
            backendResults.schemes
        )
    ) {

        return;

    }


    /*
       Make a copy so we don't directly
       modify the backend response.
    */

    const schemes =
        [...backendResults.schemes];


    /*
       Sort by match score.

       Highest match first.
    */

    schemes.sort(
        function (a, b) {

            return (
                Number(b.match || 0) -
                Number(a.match || 0)
            );

        }
    );


    /*
       Update priority.

       1 = highest match
       2 = second
       3 = third
       etc.
    */

    schemes.forEach(
        function (scheme, index) {

            scheme.priority =
                index + 1;

        }
    );


    /*
       IMPORTANT:

       Save ALL schemes.

       There is NO slice(0, 5).
    */

    backendResults.schemes =
        schemes;


    /*
       Update count.

       This allows results.html
       to know how many schemes
       were actually returned.
    */

    backendResults.count =
        schemes.length;


    /*
       Save complete results
       back to localStorage.
    */

    localStorage.setItem(
        "schemeSaathiResults",
        JSON.stringify(
            backendResults
        )
    );


    console.log(
        "Prepared ALL schemes:",
        schemes.length
    );

}


/* =========================================
   START MATCHING
========================================= */

function startMatching() {


    /* =====================================
       VERIFY BACKEND DATA
    ===================================== */

    verifyBackendResults();


    /* =====================================
       PREPARE ALL RESULTS
    ===================================== */

    prepareResults();


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


            updateProgress(
                25
            );


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


            updateProgress(
                50
            );


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


            updateProgress(
                75
            );


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


            updateProgress(
                100
            );

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


        if (!backendResults) {

            return;

        }


        startMatching();

    }
);

/* =========================================================
   SCHEMESAATHI
   SCHEME DETAILS PAGE
========================================================= */


/* =========================================================
   GET SELECTED SCHEME ID
========================================================= */

const selectedSchemeId =
    localStorage.getItem(
        "selectedSchemeId"
    );


/* =========================================================
   GET SAVED RESULTS
========================================================= */

const savedResults =
    localStorage.getItem(
        "schemeSaathiResults"
    );


let schemes = [];


try {

    schemes =
        savedResults
            ? JSON.parse(savedResults)
            : [];

} catch (error) {

    console.error(
        "Could not read saved schemes:",
        error
    );

    schemes = [];

}


/* =========================================================
   FIND SELECTED SCHEME
========================================================= */

let scheme = null;


if (
    Array.isArray(schemes) &&
    selectedSchemeId !== null
) {

    scheme =
        schemes.find(
            function (item) {

                return String(item.id) ===
                    String(selectedSchemeId);

            }
        );

}


/* =========================================================
   FALLBACK:
   READ DIRECTLY FROM selectedScheme
========================================================= */

if (!scheme) {

    const savedSelectedScheme =
        localStorage.getItem(
            "selectedScheme"
        );


    if (savedSelectedScheme) {

        try {

            scheme =
                JSON.parse(
                    savedSelectedScheme
                );

        } catch (error) {

            console.error(
                "Invalid selectedScheme:",
                error
            );

        }

    }

}


/* =========================================================
   IF SCHEME NOT FOUND
========================================================= */

if (!scheme) {

    console.error(
        "SchemeSaathi: Selected scheme not found."
    );

    alert(
        "Unable to load this scheme. Please select a scheme again."
    );

    window.location.href =
        "results.html";

}


/* =========================================================
   PAGE ELEMENTS
========================================================= */

const schemeIcon =
    document.getElementById(
        "schemeIcon"
    );


const schemeCategory =
    document.getElementById(
        "schemeCategory"
    );


const schemeName =
    document.getElementById(
        "schemeName"
    );


const schemeDescription =
    document.getElementById(
        "schemeDescription"
    );


const eligibilityBadge =
    document.getElementById(
        "eligibilityBadge"
    );


const matchPercentage =
    document.getElementById(
        "matchPercentage"
    );


const matchBar =
    document.getElementById(
        "matchBar"
    );


const schemeReason =
    document.getElementById(
        "schemeReason"
    );


const schemeBenefits =
    document.getElementById(
        "schemeBenefits"
    );


const eligibilityList =
    document.getElementById(
        "eligibilityList"
    );


const missingRequirements =
    document.getElementById(
        "missingRequirements"
    );


const documentList =
    document.getElementById(
        "documentList"
    );


const officialLink =
    document.getElementById(
        "officialLink"
    );


const checklistCount =
    document.getElementById(
        "checklistCount"
    );


const checklistProgressBar =
    document.getElementById(
        "checklistProgressBar"
    );


const checklistMessage =
    document.getElementById(
        "checklistMessage"
    );


const resetChecklist =
    document.getElementById(
        "resetChecklist"
    );


/* =========================================================
   NORMALIZE
========================================================= */

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


/* =========================================================
   FORMAT TEXT
========================================================= */

function formatText(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(/-/g, " ")
        .replace(/\b\w/g, function (letter) {

            return letter.toUpperCase();

        });

}


/* =========================================================
   GET MATCH SCORE
========================================================= */

function getMatchScore() {

    /*
       Support both:

       scheme.match

       and

       scheme.score
    */

    let score;


    if (
        scheme.match !== undefined &&
        scheme.match !== null
    ) {

        score =
            Number(
                scheme.match
            );

    }

    else if (
        scheme.score !== undefined &&
        scheme.score !== null
    ) {

        score =
            Number(
                scheme.score
            );

    }

    else {

        score = 0;

    }


    if (Number.isNaN(score)) {

        score = 0;

    }


    if (score < 0) {

        score = 0;

    }


    if (score > 100) {

        score = 100;

    }


    return score;

}


/* =========================================================
   BASIC SCHEME INFORMATION
========================================================= */

if (scheme) {


    /* -----------------------------------------
       ICON
    ----------------------------------------- */

    if (schemeIcon) {

        schemeIcon.className =
            `fa-solid ${
                scheme.icon ||
                "fa-building-columns"
            }`;

    }


    /* -----------------------------------------
       CATEGORY
    ----------------------------------------- */

    if (schemeCategory) {

        schemeCategory.textContent =
            scheme.category ||
            "Government Scheme";

    }


    /* -----------------------------------------
       NAME
    ----------------------------------------- */

    if (schemeName) {

        schemeName.textContent =
            scheme.name ||
            "Government Scheme";

    }


    /* -----------------------------------------
       DESCRIPTION
    ----------------------------------------- */

    if (schemeDescription) {

        schemeDescription.textContent =
            scheme.description ||
            "Government support scheme for eligible entrepreneurs.";

    }

}


/* =========================================================
   ELIGIBILITY BADGE
========================================================= */

if (eligibilityBadge) {

    const eligible =
        scheme.hardEligible !== false;


    if (eligible) {

        eligibilityBadge.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Eligible
        `;

        eligibilityBadge.classList.remove(
            "not-eligible"
        );

    }

    else {

        eligibilityBadge.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            Check Eligibility
        `;

        eligibilityBadge.classList.add(
            "not-eligible"
        );

    }

}


/* =========================================================
   MATCH SCORE
========================================================= */

const match =
    getMatchScore();


if (matchPercentage) {

    matchPercentage.textContent =
        `${match}%`;

}


if (matchBar) {

    matchBar.style.width =
        `${match}%`;

}


/* =========================================================
   WHY THIS SCHEME
========================================================= */

if (schemeReason) {

    let reasons = [];


    /*
       First check backend-style
       matchedFactors
    */

    if (
        Array.isArray(
            scheme.matchedFactors
        )
    ) {

        reasons =
            scheme.matchedFactors;

    }


    /*
       Then check whyMatch
    */

    if (
        reasons.length === 0 &&
        Array.isArray(
            scheme.whyMatch
        )
    ) {

        reasons =
            scheme.whyMatch;

    }


    /*
       Then check old "reason"
    */

    if (
        reasons.length === 0 &&
        scheme.reason
    ) {

        reasons = [
            scheme.reason
        ];

    }


    /*
       Display reasons
    */

    if (
        reasons.length > 0
    ) {

        schemeReason.innerHTML =
            reasons
                .map(
                    function (reason) {

                        return `

                            <div class="scheme-reason">

                                <i class="fa-solid fa-circle-check"></i>

                                <span>
                                    ${reason}
                                </span>

                            </div>

                        `;

                    }
                )
                .join("");

    }

    else {

        schemeReason.innerHTML = `

            <div class="scheme-reason">

                <i class="fa-solid fa-circle-info"></i>

                <span>
                    This scheme was recommended based
                    on your profile and the configured
                    matching criteria.
                </span>

            </div>

        `;

    }

}


/* =========================================================
   BENEFITS
========================================================= */

if (schemeBenefits) {

    const benefits =
        Array.isArray(
            scheme.benefits
        )
            ? scheme.benefits
            : [];


    if (
        benefits.length === 0
    ) {

        schemeBenefits.innerHTML = `

            <div class="benefit-item">

                <i class="fa-solid fa-circle-info"></i>

                <span>
                    Government support benefits are
                    available. Please verify the latest
                    details on the official portal.
                </span>

            </div>

        `;

    }

    else {

        benefits.forEach(
            function (benefit) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "benefit-item";


                item.innerHTML = `

                    <i class="fa-solid fa-circle-check"></i>

                    <span>
                        ${benefit}
                    </span>

                `;


                schemeBenefits.appendChild(
                    item
                );

            }
        );

    }

}


/* =========================================================
   ELIGIBILITY CRITERIA
========================================================= */

if (eligibilityList) {

    let eligibility =
        Array.isArray(
            scheme.eligibility
        )
            ? scheme.eligibility
            : [];


    /*
       If scheme-data does not have
       eligibility array, build it
       from available fields.
    */

    if (
        eligibility.length === 0
    ) {


        /* AGE */

        if (
            scheme.minAge !== undefined &&
            scheme.minAge !== null
        ) {

            eligibility.push(
                `Minimum age: ${scheme.minAge} years`
            );

        }


        /* STATE */

        if (
            Array.isArray(
                scheme.states
            ) &&
            scheme.states.length > 0
        ) {

            const states =
                scheme.states
                    .map(formatText);


            eligibility.push(
                `Available in: ${states.join(", ")}`
            );

        }


        /* BUSINESS TYPE */

        if (
            Array.isArray(
                scheme.businessTypes
            ) &&
            scheme.businessTypes.length > 0
        ) {

            eligibility.push(
                `Business type: ${
                    scheme.businessTypes
                        .map(formatText)
                        .join(", ")
                }`
            );

        }


        /* BUSINESS STAGE */

        if (
            Array.isArray(
                scheme.businessStages
            ) &&
            scheme.businessStages.length > 0
        ) {

            eligibility.push(
                `Business stage: ${
                    scheme.businessStages
                        .map(formatText)
                        .join(", ")
                }`
            );

        }


        /* CATEGORY */

        if (
            Array.isArray(
                scheme.categories
            ) &&
            scheme.categories.length > 0
        ) {

            eligibility.push(
                `Supported categories: ${
                    scheme.categories
                        .map(formatText)
                        .join(", ")
                }`
            );

        }

    }


    if (
        eligibility.length === 0
    ) {

        eligibilityList.innerHTML = `

            <div class="eligibility-item">

                <i class="fa-solid fa-circle-info"></i>

                <span>
                    Please verify the latest eligibility
                    criteria on the official government portal.
                </span>

            </div>

        `;

    }

    else {

        eligibility.forEach(
            function (requirement) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "eligibility-item";


                item.innerHTML = `

                    <i class="fa-solid fa-check"></i>

                    <span>
                        ${requirement}
                    </span>

                `;


                eligibilityList.appendChild(
                    item
                );

            }
        );

    }

}


/* =========================================================
   WHAT AM I MISSING?
========================================================= */

if (missingRequirements) {

    const missing =
        Array.isArray(
            scheme.missing
        )
            ? scheme.missing
            : [];


    if (
        missing.length === 0
    ) {

        missingRequirements.innerHTML = `

            <div class="no-missing">

                <i class="fa-solid fa-circle-check"></i>

                <div>

                    <strong>
                        No major gaps identified
                    </strong>

                    <p>
                        Based on the available profile
                        information, no additional
                        requirement has been flagged.
                    </p>

                </div>

            </div>

        `;

    }

    else {

        missing.forEach(
            function (itemText) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "missing-item";


                item.innerHTML = `

                    <i class="fa-solid fa-circle-exclamation"></i>

                    <span>
                        ${itemText}
                    </span>

                `;


                missingRequirements.appendChild(
                    item
                );

            }
        );

    }

}


/* =========================================================
   DOCUMENT CHECKLIST
========================================================= */

const documents =
    Array.isArray(
        scheme.documents
    )
        ? scheme.documents
        : [];


const checklistStorageKey =
    `schemeChecklist_${scheme.id}`;


let completedDocuments = [];


try {

    completedDocuments =
        JSON.parse(
            localStorage.getItem(
                checklistStorageKey
            )
        ) || [];

} catch (error) {

    completedDocuments = [];

}


/* =========================================================
   UPDATE CHECKLIST PROGRESS
========================================================= */

function updateChecklistProgress() {

    const total =
        documents.length;


    const completed =
        completedDocuments.length;


    if (checklistCount) {

        checklistCount.textContent =
            `${completed} / ${total} completed`;

    }


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );


    if (checklistProgressBar) {

        checklistProgressBar.style.width =
            `${percentage}%`;

    }


    if (checklistMessage) {

        if (
            total === 0
        ) {

            checklistMessage.textContent =
                "No document information available.";

        }

        else if (
            percentage === 100
        ) {

            checklistMessage.textContent =
                "All documents are marked as ready.";

        }

        else {

            checklistMessage.textContent =
                `${total - completed} document(s) remaining.`;

        }

    }

}


/* =========================================================
   DISPLAY DOCUMENTS
========================================================= */

if (documentList) {

    if (
        documents.length === 0
    ) {

        documentList.innerHTML = `

            <div class="document-item">

                <i class="fa-solid fa-file-circle-question"></i>

                <span class="document-name">

                    Document requirements are not available.
                    Please check the official portal.

                </span>

            </div>

        `;

    }

    else {

        documents.forEach(
            function (documentName, index) {

                const item =
                    document.createElement(
                        "label"
                    );


                item.className =
                    "document-item";


                const isCompleted =
                    completedDocuments.includes(
                        index
                    );


                if (isCompleted) {

                    item.classList.add(
                        "completed"
                    );

                }


                item.innerHTML = `

                    <input
                        type="checkbox"
                        ${isCompleted ? "checked" : ""}
                    >

                    <span class="document-check">

                        <i class="fa-solid fa-check"></i>

                    </span>

                    <span class="document-name">

                        ${documentName}

                    </span>

                `;


                const checkbox =
                    item.querySelector(
                        "input"
                    );


                checkbox.addEventListener(
                    "change",
                    function () {

                        if (
                            checkbox.checked
                        ) {

                            if (
                                !completedDocuments.includes(
                                    index
                                )
                            ) {

                                completedDocuments.push(
                                    index
                                );

                            }


                            item.classList.add(
                                "completed"
                            );

                        }

                        else {

                            completedDocuments =
                                completedDocuments.filter(
                                    function (itemIndex) {

                                        return (
                                            itemIndex !==
                                            index
                                        );

                                    }
                                );


                            item.classList.remove(
                                "completed"
                            );

                        }


                        localStorage.setItem(

                            checklistStorageKey,

                            JSON.stringify(
                                completedDocuments
                            )

                        );


                        updateChecklistProgress();

                    }
                );


                documentList.appendChild(
                    item
                );

            }
        );

    }

}


/* =========================================================
   RESET CHECKLIST
========================================================= */

if (resetChecklist) {

    resetChecklist.addEventListener(
        "click",
        function () {

            completedDocuments =
                [];


            localStorage.removeItem(
                checklistStorageKey
            );


            if (documentList) {

                documentList
                    .querySelectorAll(
                        "input[type='checkbox']"
                    )
                    .forEach(
                        function (checkbox) {

                            checkbox.checked =
                                false;

                        }
                    );


                documentList
                    .querySelectorAll(
                        ".document-item"
                    )
                    .forEach(
                        function (item) {

                            item.classList.remove(
                                "completed"
                            );

                        }
                    );

            }


            updateChecklistProgress();

        }
    );

}


/* =========================================================
   INITIAL CHECKLIST PROGRESS
========================================================= */

updateChecklistProgress();


/* =========================================
   OFFICIAL LINK
========================================= */

if (scheme.officialLink) {

    console.log("Official link from backend:", scheme.officialLink);

    officialLink.href = scheme.officialLink;

    officialLink.addEventListener("click", function () {

        console.log(
            "Opening official URL:",
            scheme.officialLink
        );

    });

} else {

    officialLink.style.display = "none";

}


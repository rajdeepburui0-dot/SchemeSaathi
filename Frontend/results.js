
/* =========================================================
   SCHEMESAATHI
   RESULTS PAGE

   IMPORTANT:
   - Results come from backend response saved by profile.js
   - ALL returned schemes are displayed
   - Schemes are sorted by match score
   - NO top-5 limit
   - Clicking "View Scheme Details" works with scheme-details.js
========================================================= */


/* =========================================================
   GET PROFILE
========================================================= */

const savedProfile =
    localStorage.getItem("schemeSaathiProfile");


if (!savedProfile) {

    window.location.href = "profile.html";

}


let profile = null;


try {

    profile = JSON.parse(savedProfile);

} catch (error) {

    console.error(
        "Invalid profile data:",
        error
    );

    localStorage.removeItem(
        "schemeSaathiProfile"
    );

    window.location.href =
        "profile.html";

}


/* =========================================================
   GET BACKEND RESULTS
========================================================= */

const savedResults =
    localStorage.getItem(
        "schemeSaathiResults"
    );


let allResults = [];


try {

    allResults =
        savedResults
            ? JSON.parse(savedResults)
            : [];

} catch (error) {

    console.error(
        "Invalid results data:",
        error
    );

    allResults = [];

}


/* =========================================================
   NORMALIZE BACKEND RESPONSE
========================================================= */

/*
   Your backend response may be:

   {
       success: true,
       count: 16,
       schemes: [...]
   }

   OR directly:

   [...]

   This handles both.
*/

if (
    !Array.isArray(allResults) &&
    allResults &&
    Array.isArray(allResults.schemes)
) {

    allResults =
        allResults.schemes;

}


/* =========================================================
   CHECK RESULTS
========================================================= */

if (!Array.isArray(allResults)) {

    allResults = [];

}


/* =========================================================
   SORT BY MATCH SCORE
========================================================= */

/*
   IMPORTANT:

   We DO NOT remove schemes.

   Every scheme returned by the backend
   remains visible.

   Highest match comes first.
*/

allResults.sort(
    function (a, b) {

        return (
            Number(b.match || 0) -
            Number(a.match || 0)
        );

    }
);


/* =========================================================
   SAVE NORMALIZED RESULTS
========================================================= */

localStorage.setItem(

    "schemeSaathiResults",

    JSON.stringify(
        allResults
    )

);


/* =========================================================
   PAGE ELEMENTS
========================================================= */

const userName =
    document.getElementById(
        "userName"
    );


const userSummary =
    document.getElementById(
        "userSummary"
    );


const schemeCount =
    document.getElementById(
        "schemeCount"
    );


const matchedCount =
    document.getElementById(
        "matchedCount"
    );


const supportCount =
    document.getElementById(
        "supportCount"
    );


const resultsList =
    document.getElementById(
        "resultsList"
    );


const emptyState =
    document.getElementById(
        "emptyState"
    );


const searchInput =
    document.getElementById(
        "schemeSearch"
    );


const categorySelect =
    document.getElementById(
        "schemeCategory"
    );


const sortSelect =
    document.getElementById(
        "schemeSort"
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
   DISPLAY PROFILE
========================================================= */

function displayProfile() {

    if (!profile) {

        return;

    }


    if (userName) {

        userName.textContent =
            profile.name ||
            "User";

    }


    if (userSummary) {

        const business =
            profile.businessType ||
            "Business";


        const state =
            profile.state ||
            "Your State";


        userSummary.textContent =
            `${business} • ${state}`;

    }

}


/* =========================================================
   MATCH LABEL
========================================================= */

function getMatchLabel(match) {

    match =
        Number(match || 0);


    if (match >= 70) {

        return {

            text: "Strong Match",

            className: "strong"

        };

    }


    if (match >= 45) {

        return {

            text: "Potential Match",

            className: "potential"

        };

    }


    if (match > 0) {

        return {

            text: "Explore",

            className: "explore"

        };

    }


    return {

        text: "Check Eligibility",

        className: "check"

    };

}


/* =========================================================
   GET MATCH REASONS
========================================================= */

function getMatchReasons(scheme) {

    const reasons = [];


    const businessType =
        normalize(
            profile?.businessType
        );


    const stage =
        normalize(
            profile?.businessStage
        );


    const category =
        normalize(
            profile?.category
        );


    const state =
        normalize(
            profile?.state
        );


    /* -----------------------------------------------------
       BUSINESS TYPE
    ----------------------------------------------------- */

    if (
        businessType &&
        Array.isArray(
            scheme.businessTypes
        ) &&
        scheme.businessTypes
            .map(normalize)
            .includes(
                businessType
            )
    ) {

        reasons.push({

            icon: "fa-store",

            text:
                "Matches your business type"

        });

    }


    /* -----------------------------------------------------
       BUSINESS STAGE
    ----------------------------------------------------- */

    if (
        stage &&
        Array.isArray(
            scheme.businessStages
        ) &&
        scheme.businessStages
            .map(normalize)
            .includes(
                stage
            )
    ) {

        reasons.push({

            icon: "fa-chart-line",

            text:
                "Suitable for your business stage"

        });

    }


    /* -----------------------------------------------------
       CATEGORY
    ----------------------------------------------------- */

    if (
        category &&
        Array.isArray(
            scheme.categories
        ) &&
        scheme.categories
            .map(normalize)
            .includes(
                category
            )
    ) {

        reasons.push({

            icon: "fa-user-check",

            text:
                "Matches your category"

        });

    }


    /* -----------------------------------------------------
       STATE
    ----------------------------------------------------- */

    if (
        Array.isArray(
            scheme.states
        )
    ) {

        const states =
            scheme.states.map(
                normalize
            );


        if (
            states.includes("all") ||
            states.includes(state)
        ) {

            reasons.push({

                icon:
                    "fa-location-dot",

                text:
                    "Available in your location"

            });

        }

    }


    /* -----------------------------------------------------
       SUPPORT
    ----------------------------------------------------- */

    if (
        Array.isArray(
            profile?.support
        ) &&
        Array.isArray(
            scheme.support
        )
    ) {

        const userSupport =
            profile.support.map(
                normalize
            );


        const schemeSupport =
            scheme.support.map(
                normalize
            );


        const supportMatch =
            userSupport.some(
                function (item) {

                    return schemeSupport.includes(
                        item
                    );

                }
            );


        if (supportMatch) {

            reasons.push({

                icon:
                    "fa-hand-holding-heart",

                text:
                    "Supports your selected needs"

            });

        }

    }


    return reasons.slice(
        0,
        3
    );

}


/* =========================================================
   FORMAT TEXT
========================================================= */

function formatText(value) {

    if (!value) {

        return "";

    }


    return String(value)
        .replace(/-/g, " ")
        .replace(
            /\b\w/g,
            function (letter) {

                return letter.toUpperCase();

            }
        );

}


/* =========================================================
   CREATE SCHEME CARD
========================================================= */

function createSchemeCard(scheme) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "scheme-card";


    /* -----------------------------------------------------
       ELIGIBILITY
    ----------------------------------------------------- */

    /*
       Backend may send hardEligible.

       If it doesn't, assume the backend result
       is already eligible because it returned it.
    */

    const hardEligible =
        scheme.hardEligible !== undefined
            ? Boolean(
                scheme.hardEligible
            )
            : true;


    if (!hardEligible) {

        card.classList.add(
            "not-eligible"
        );

    }


    /* -----------------------------------------------------
       MATCH
    ----------------------------------------------------- */

    const matchValue =
        Number(
            scheme.match || 0
        );


    const match =
        getMatchLabel(
            matchValue
        );


    /* -----------------------------------------------------
       REASONS
    ----------------------------------------------------- */

    const reasons =
        getMatchReasons(
            scheme
        );


    const reasonHTML =
        reasons.length > 0

            ? reasons
                .map(
                    function (reason) {

                        return `

                            <div class="scheme-reason">

                                <i class="fa-solid ${reason.icon}"></i>

                                <span>
                                    ${reason.text}
                                </span>

                            </div>

                        `;

                    }
                )
                .join("")

            : `

                <div class="scheme-reason muted">

                    <i class="fa-solid fa-circle-info"></i>

                    <span>
                        Review eligibility requirements
                    </span>

                </div>

            `;


    /* -----------------------------------------------------
       SUPPORT TAGS
    ----------------------------------------------------- */

    const supportTags =
        Array.isArray(
            scheme.support
        )

            ? scheme.support
                .slice(
                    0,
                    3
                )
                .map(
                    function (support) {

                        return `

                            <span class="scheme-tag">

                                ${formatText(
                                    support
                                )}

                            </span>

                        `;

                    }
                )
                .join("")

            : "";


    /* -----------------------------------------------------
       BENEFITS
    ----------------------------------------------------- */

    const benefits =
        Array.isArray(
            scheme.benefits
        ) &&
        scheme.benefits.length > 0

            ? scheme.benefits
                .slice(
                    0,
                    3
                )
                .map(
                    function (benefit) {

                        return `

                            <li>

                                <i class="fa-solid fa-check"></i>

                                <span>
                                    ${benefit}
                                </span>

                            </li>

                        `;

                    }
                )
                .join("")

            : `

                <li>

                    <i class="fa-solid fa-check"></i>

                    <span>
                        Government support available
                    </span>

                </li>

            `;


    /* =====================================================
       CARD HTML
    ===================================================== */

    card.innerHTML = `

        <!-- CARD TOP -->

        <div class="scheme-card-top">

            <div class="scheme-category">

                <span class="scheme-category-icon">

                    <i class="fa-solid ${
                        scheme.icon ||
                        "fa-landmark"
                    }"></i>

                </span>

                <span>

                    ${
                        scheme.category ||
                        "Government Scheme"
                    }

                </span>

            </div>


            <button
                class="scheme-bookmark"
                type="button"
                title="Save scheme"
                aria-label="Save ${scheme.name}"
                data-id="${scheme.id}"
            >

                <i class="fa-regular fa-bookmark"></i>

            </button>

        </div>


        <!-- TITLE -->

        <div class="scheme-card-heading">

            <h3>

                ${
                    scheme.name ||
                    "Government Scheme"
                }

            </h3>


            ${
                scheme.shortName
                    ? `

                        <span class="scheme-short-name">

                            ${scheme.shortName}

                        </span>

                    `
                    : ""

            }

        </div>


        <!-- DESCRIPTION -->

        <p class="scheme-description">

            ${
                scheme.description ||
                "Government support scheme for eligible entrepreneurs."
            }

        </p>


        <!-- MATCH -->

        <div class="scheme-match-box">

            <div class="match-score">

                <div
                    class="match-ring"
                    style="--match:${matchValue}%"
                >

                    <span>

                        ${matchValue}%

                    </span>

                </div>

            </div>


            <div class="match-content">

                <span class="match-eyebrow">

                    PERSONALIZED MATCH

                </span>


                <strong
                    class="match-title ${match.className}"
                >

                    ${match.text}

                </strong>


                <span class="match-description">

                    Ranked using your profile
                    and scheme requirements

                </span>

            </div>

        </div>


        <!-- WHY MATCHED -->

        <div class="scheme-reasons">

            <div class="scheme-reasons-title">

                <i class="fa-solid fa-wand-magic-sparkles"></i>

                Why this scheme?

            </div>


            <div class="scheme-reasons-list">

                ${reasonHTML}

            </div>

        </div>


        <!-- TAGS -->

        ${
            supportTags
                ? `

                    <div class="scheme-tags">

                        ${supportTags}

                    </div>

                `
                : ""

        }


        <!-- BENEFITS -->

        <div class="scheme-benefits">

            <div class="scheme-benefits-title">

                <i class="fa-solid fa-circle-check"></i>

                Key benefits

            </div>


            <ul>

                ${benefits}

            </ul>

        </div>


        <!-- FOOTER -->

        <div class="scheme-card-footer">

            <button
                type="button"
                class="scheme-details-button"
                data-id="${scheme.id}"
            >

                <span>

                    View Scheme Details

                </span>


                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>

    `;


    /* =====================================================
       DETAILS BUTTON
    ===================================================== */

    const detailsButton =
        card.querySelector(
            ".scheme-details-button"
        );


    if (detailsButton) {

        detailsButton.addEventListener(
            "click",
            function () {

                /*
                   Save the ID.

                   scheme-details.js uses:

                   selectedSchemeId
                */

                localStorage.setItem(

                    "selectedSchemeId",

                    String(
                        scheme.id
                    )

                );


                /*
                   Also save the complete selected
                   scheme as a backup.
                */

                localStorage.setItem(

                    "selectedScheme",

                    JSON.stringify(
                        scheme
                    )

                );


                /*
                   Go to details page.
                */

                window.location.href =
                    "scheme-details.html";

            }
        );

    }


    /* =====================================================
       BOOKMARK
    ===================================================== */

    const bookmark =
        card.querySelector(
            ".scheme-bookmark"
        );


    if (bookmark) {

        let savedSchemes =
            JSON.parse(
                localStorage.getItem(
                    "schemeSaathiSavedSchemes"
                ) || "[]"
            );


        const schemeId =
            String(
                scheme.id
            );


        if (
            savedSchemes.includes(
                schemeId
            )
        ) {

            bookmark.classList.add(
                "saved"
            );


            bookmark.innerHTML =
                '<i class="fa-solid fa-bookmark"></i>';

        }


        bookmark.addEventListener(
            "click",
            function () {

                let saved =
                    JSON.parse(
                        localStorage.getItem(
                            "schemeSaathiSavedSchemes"
                        ) || "[]"
                    );


                const id =
                    String(
                        scheme.id
                    );


                if (
                    saved.includes(
                        id
                    )
                ) {

                    saved =
                        saved.filter(
                            function (item) {

                                return item !== id;

                            }
                        );


                    bookmark.classList.remove(
                        "saved"
                    );


                    bookmark.innerHTML =
                        '<i class="fa-regular fa-bookmark"></i>';

                }

                else {

                    saved.push(
                        id
                    );


                    bookmark.classList.add(
                        "saved"
                    );


                    bookmark.innerHTML =
                        '<i class="fa-solid fa-bookmark"></i>';

                }


                localStorage.setItem(

                    "schemeSaathiSavedSchemes",

                    JSON.stringify(
                        saved
                    )

                );

            }
        );

    }


    return card;

}


/* =========================================================
   FILTER + SORT
========================================================= */

function getFilteredResults() {

    const search =
        searchInput
            ? normalize(
                searchInput.value
            )
            : "";


    const category =
        categorySelect
            ? categorySelect.value
            : "all";


    const sort =
        sortSelect
            ? sortSelect.value
            : "match";


    let filtered =
        allResults.filter(
            function (scheme) {

                const searchable =
                    normalize(
                        `
                        ${scheme.name || ""}

                        ${scheme.category || ""}

                        ${scheme.description || ""}

                        ${scheme.shortName || ""}
                        `
                    );


                const matchesSearch =
                    !search ||
                    searchable.includes(
                        search
                    );


                const matchesCategory =
                    category === "all" ||
                    scheme.category === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    /* -----------------------------------------------------
       SORT
    ----------------------------------------------------- */

    if (sort === "name") {

        filtered.sort(
            function (a, b) {

                return String(
                    a.name || ""
                ).localeCompare(
                    String(
                        b.name || ""
                    )
                );

            }
        );

    }

    else if (sort === "benefits") {

        filtered.sort(
            function (a, b) {

                const bBenefits =
                    Array.isArray(
                        b.benefits
                    )
                        ? b.benefits.length
                        : 0;


                const aBenefits =
                    Array.isArray(
                        a.benefits
                    )
                        ? a.benefits.length
                        : 0;


                return (
                    bBenefits -
                    aBenefits
                );

            }
        );

    }

    else {

        /*
           DEFAULT:

           Highest personalized match first.
        */

        filtered.sort(
            function (a, b) {

                return (
                    Number(
                        b.match || 0
                    ) -
                    Number(
                        a.match || 0
                    )
                );

            }
        );

    }


    return filtered;

}


/* =========================================================
   RENDER RESULTS
========================================================= */

function renderResults() {

    if (!resultsList) {

        return;

    }


    const filtered =
        getFilteredResults();


    resultsList.innerHTML = "";


    if (
        filtered.length === 0
    ) {

        if (emptyState) {

            emptyState.style.display =
                "block";

        }

        return;

    }


    if (emptyState) {

        emptyState.style.display =
            "none";

    }


    /*
       IMPORTANT:

       NO .slice(0, 5)

       NO LIMIT

       ALL BACKEND RESULTS
       ARE DISPLAYED.
    */

    filtered.forEach(
        function (scheme) {

            resultsList.appendChild(
                createSchemeCard(
                    scheme
                )
            );

        }
    );

}


/* =========================================================
   POPULATE CATEGORIES
========================================================= */

function populateCategories() {

    if (!categorySelect) {

        return;

    }


    const categories =
        [
            ...new Set(

                allResults
                    .map(
                        function (scheme) {

                            return scheme.category;

                        }
                    )
                    .filter(Boolean)

            )
        ]
        .sort();


    categorySelect.innerHTML = `

        <option value="all">

            All Categories

        </option>

    `;


    categories.forEach(
        function (category) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                category;


            option.textContent =
                category;


            categorySelect.appendChild(
                option
            );

        }
    );

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    if (schemeCount) {

        /*
           Total number of schemes returned
           by backend.
        */

        schemeCount.textContent =
            allResults.length;

    }


    if (matchedCount) {

        /*
           Number of strong matches.
        */

        matchedCount.textContent =
            allResults.filter(
                function (scheme) {

                    return Number(
                        scheme.match || 0
                    ) >= 70;

                }
            ).length;

    }


    if (supportCount) {

        supportCount.textContent =
            Array.isArray(
                profile?.support
            )
                ? profile.support.length
                : 0;

    }

}


/* =========================================================
   EVENTS
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderResults
    );

}


if (categorySelect) {

    categorySelect.addEventListener(
        "change",
        renderResults
    );

}


if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        renderResults
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProfile();


        if (
            allResults.length === 0
        ) {

            console.warn(
                "SchemeSaathi: No backend results found."
            );


            if (emptyState) {

                emptyState.style.display =
                    "block";

            }


            return;

        }


        populateCategories();


        updateDashboard();


        renderResults();


        console.log(
            "================================="
        );


        console.log(
            "SCHEMESAATHI RESULTS"
        );


        console.log(
            "Total backend schemes:",
            allResults.length
        );


        console.log(
            "Sorted by match:"
        );


        console.table(
            allResults.map(
                function (scheme) {

                    return {

                        id: scheme.id,

                        name: scheme.name,

                        match: scheme.match

                    };

                }
            )
        );


        console.log(
            "================================="
        );

    }
);


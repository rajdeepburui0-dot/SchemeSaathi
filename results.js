
/* =========================================================
   SCHEMESAATHI
   PREMIUM RESULTS PAGE
   =========================================================

   Required script order in results.html:

   <script src="scheme-data.js"></script>
   <script src="results.js"></script>

   Uses:
   - scheme-data.js
   - schemeSaathiProfile from localStorage

   No image system.
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

    console.error("Invalid profile data:", error);

    localStorage.removeItem("schemeSaathiProfile");

    window.location.href = "profile.html";

}


/* =========================================================
   CHECK DATABASE
========================================================= */

if (
    typeof schemeDatabase === "undefined" ||
    !Array.isArray(schemeDatabase)
) {

    console.error(
        "SchemeSaathi ERROR: schemeDatabase is undefined."
    );

    console.error(
        "Make sure results.html loads scheme-data.js BEFORE results.js."
    );

}


/* =========================================================
   ELEMENTS
========================================================= */

const userName =
    document.getElementById("userName");

const userSummary =
    document.getElementById("userSummary");

const schemeCount =
    document.getElementById("schemeCount");

const matchedCount =
    document.getElementById("matchedCount");

const supportCount =
    document.getElementById("supportCount");

const resultsList =
    document.getElementById("resultsList");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("schemeSearch");

const categorySelect =
    document.getElementById("schemeCategory");

const sortSelect =
    document.getElementById("schemeSort");


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
            profile.name || "User";

    }


    if (userSummary) {

        const business =
            profile.businessType || "Business";

        const state =
            profile.state || "Your State";

        userSummary.textContent =
            `${business} • ${state}`;

    }

}


/* =========================================================
   HARD ELIGIBILITY
========================================================= */

function isHardEligible(scheme) {


    /* -----------------------------------------------------
       AGE
    ----------------------------------------------------- */

    if (
        scheme.minAge !== null &&
        scheme.minAge !== undefined &&
        profile.age
    ) {

        if (
            Number(profile.age) <
            Number(scheme.minAge)
        ) {

            return false;

        }

    }


    /* -----------------------------------------------------
       STATE
    ----------------------------------------------------- */

    if (
        Array.isArray(scheme.states) &&
        scheme.states.length > 0
    ) {

        const userState =
            normalize(profile.state);

        const allowedStates =
            scheme.states.map(normalize);

        if (
            !allowedStates.includes("all") &&
            !allowedStates.includes(userState)
        ) {

            return false;

        }

    }


    return true;

}


/* =========================================================
   CALCULATE MATCH SCORE
========================================================= */

function calculateMatch(scheme) {

    let score = 0;


    /* -----------------------------------------------------
       BUSINESS TYPE — 30
    ----------------------------------------------------- */

    const businessType =
        normalize(profile.businessType);

    if (
        businessType &&
        Array.isArray(scheme.businessTypes)
    ) {

        if (
            scheme.businessTypes
                .map(normalize)
                .includes(businessType)
        ) {

            score += 30;

        }

    }


    /* -----------------------------------------------------
       BUSINESS STAGE — 20
    ----------------------------------------------------- */

    const businessStage =
        normalize(profile.businessStage);

    if (
        businessStage &&
        Array.isArray(scheme.businessStages)
    ) {

        if (
            scheme.businessStages
                .map(normalize)
                .includes(businessStage)
        ) {

            score += 20;

        }

    }


    /* -----------------------------------------------------
       SUPPORT NEED — 30
    ----------------------------------------------------- */

    if (
        Array.isArray(profile.support) &&
        Array.isArray(scheme.support)
    ) {

        const userSupport =
            profile.support.map(normalize);

        const schemeSupport =
            scheme.support.map(normalize);

        const matches =
            userSupport.filter(
                need =>
                    schemeSupport.includes(need)
            );

        if (matches.length > 0) {

            score += 25;

        }

        if (matches.length >= 2) {

            score += 5;

        }

    }


    /* -----------------------------------------------------
       SOCIAL CATEGORY — 15
    ----------------------------------------------------- */

    const category =
        normalize(profile.category);

    if (
        category &&
        Array.isArray(scheme.categories)
    ) {

        if (
            scheme.categories
                .map(normalize)
                .includes(category)
        ) {

            score += 15;

        }

    }


    /* -----------------------------------------------------
       STATE — 10
    ----------------------------------------------------- */

    const state =
        normalize(profile.state);

    if (
        Array.isArray(scheme.states)
    ) {

        const states =
            scheme.states.map(normalize);

        if (
            states.includes("all") ||
            states.includes(state)
        ) {

            score += 10;

        }

    }


    /* -----------------------------------------------------
       CONVERT TO 100
    ----------------------------------------------------- */

    let match =
        Math.round(
            (score / 105) * 100
        );


    if (match > 98) {
        match = 98;
    }


    return match;

}


/* =========================================================
   GET MATCH LABEL
========================================================= */

function getMatchLabel(match) {

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
        normalize(profile.businessType);

    const stage =
        normalize(profile.businessStage);

    const category =
        normalize(profile.category);

    const state =
        normalize(profile.state);


    if (
        businessType &&
        Array.isArray(scheme.businessTypes) &&
        scheme.businessTypes
            .map(normalize)
            .includes(businessType)
    ) {

        reasons.push({
            icon: "fa-store",
            text: "Matches your business type"
        });

    }


    if (
        stage &&
        Array.isArray(scheme.businessStages) &&
        scheme.businessStages
            .map(normalize)
            .includes(stage)
    ) {

        reasons.push({
            icon: "fa-chart-line",
            text: "Suitable for your business stage"
        });

    }


    if (
        category &&
        Array.isArray(scheme.categories) &&
        scheme.categories
            .map(normalize)
            .includes(category)
    ) {

        reasons.push({
            icon: "fa-user-check",
            text: "Matches your category"
        });

    }


    if (
        Array.isArray(scheme.states)
    ) {

        const states =
            scheme.states.map(normalize);

        if (
            states.includes("all") ||
            states.includes(state)
        ) {

            reasons.push({
                icon: "fa-location-dot",
                text: "Available in your location"
            });

        }

    }


    if (
        Array.isArray(profile.support) &&
        Array.isArray(scheme.support)
    ) {

        const userSupport =
            profile.support.map(normalize);

        const schemeSupport =
            scheme.support.map(normalize);

        const supportMatch =
            userSupport.some(
                item =>
                    schemeSupport.includes(item)
            );

        if (supportMatch) {

            reasons.push({
                icon: "fa-hand-holding-heart",
                text: "Supports your selected needs"
            });

        }

    }


    return reasons.slice(0, 3);

}


/* =========================================================
   GENERATE RESULTS
========================================================= */

function generateResults() {

    if (
        typeof schemeDatabase === "undefined" ||
        !Array.isArray(schemeDatabase)
    ) {

        return [];

    }


    const results = [];


    schemeDatabase.forEach(
        scheme => {

            const eligible =
                isHardEligible(scheme);

            const match =
                calculateMatch(scheme);


            results.push({

                ...scheme,

                match: eligible ? match : 0,

                hardEligible: eligible

            });

        }
    );


    results.sort(
        (a, b) =>
            b.match - a.match
    );


    localStorage.setItem(
        "schemeSaathiResults",
        JSON.stringify(results)
    );


    return results;

}


/* =========================================================
   POPULATE CATEGORIES
========================================================= */

function populateCategories(schemes) {

    if (!categorySelect) {
        return;
    }


    const categories =
        [
            ...new Set(
                schemes
                    .map(
                        scheme =>
                            scheme.category
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
        category => {

            const option =
                document.createElement("option");

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
   FORMAT TEXT
========================================================= */

function formatText(value) {

    if (!value) {
        return "";
    }

    return String(value)
        .replace(/-/g, " ")
        .replace(/\b\w/g, letter =>
            letter.toUpperCase()
        );

}


/* =========================================================
   CREATE SCHEME CARD
========================================================= */

function createSchemeCard(scheme) {

    const card =
        document.createElement("article");


    card.className =
        "scheme-card";


    if (!scheme.hardEligible) {

        card.classList.add(
            "not-eligible"
        );

    }


    const match =
        getMatchLabel(
            scheme.match
        );


    const reasons =
        getMatchReasons(
            scheme
        );


    const reasonHTML =
        reasons.length > 0

            ? reasons
                .map(
                    reason => `
                        <div class="scheme-reason">
                            <i class="fa-solid ${reason.icon}"></i>
                            <span>${reason.text}</span>
                        </div>
                    `
                )
                .join("")

            : `
                <div class="scheme-reason muted">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>Review eligibility requirements</span>
                </div>
            `;


    const supportTags =
        Array.isArray(scheme.support)

            ? scheme.support
                .slice(0, 3)
                .map(
                    support => `
                        <span class="scheme-tag">
                            ${formatText(support)}
                        </span>
                    `
                )
                .join("")

            : "";


    const benefits =
        Array.isArray(scheme.benefits)

            ? scheme.benefits
                .slice(0, 3)
                .map(
                    benefit => `
                        <li>
                            <i class="fa-solid fa-check"></i>
                            <span>${benefit}</span>
                        </li>
                    `
                )
                .join("")

            : `
                <li>
                    <i class="fa-solid fa-check"></i>
                    <span>Government support available</span>
                </li>
            `;


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
                    ${scheme.category || "Government Scheme"}
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
                ${scheme.name}
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
                    style="--match:${scheme.match}%"
                >

                    <span>
                        ${scheme.match}%
                    </span>

                </div>

            </div>


            <div class="match-content">

                <span class="match-eyebrow">
                    PERSONALIZED MATCH
                </span>

                <strong class="match-title ${match.className}">
                    ${match.text}
                </strong>

                <span class="match-description">
                    Based on your profile and requirements
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

                localStorage.setItem(
                    "selectedSchemeId",
                    String(scheme.id)
                );


                localStorage.setItem(
                    "selectedScheme",
                    JSON.stringify(scheme)
                );


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

        const savedSchemes =
            JSON.parse(
                localStorage.getItem(
                    "schemeSaathiSavedSchemes"
                ) || "[]"
            );


        if (
            savedSchemes.includes(
                String(scheme.id)
            )
        ) {

            bookmark.classList.add("saved");

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
                    String(scheme.id);


                if (
                    saved.includes(id)
                ) {

                    saved =
                        saved.filter(
                            item =>
                                item !== id
                        );

                    bookmark.classList.remove(
                        "saved"
                    );

                    bookmark.innerHTML =
                        '<i class="fa-regular fa-bookmark"></i>';

                } else {

                    saved.push(id);

                    bookmark.classList.add(
                        "saved"
                    );

                    bookmark.innerHTML =
                        '<i class="fa-solid fa-bookmark"></i>';

                }


                localStorage.setItem(
                    "schemeSaathiSavedSchemes",
                    JSON.stringify(saved)
                );

            }
        );

    }


    return card;

}


/* =========================================================
   FILTER + SORT
========================================================= */

let allResults = [];


function getFilteredResults() {

    const search =
        searchInput
            ? normalize(searchInput.value)
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
            scheme => {

                const searchable =
                    normalize(
                        `${scheme.name || ""}
                         ${scheme.category || ""}
                         ${scheme.description || ""}`
                    );


                const matchesSearch =
                    !search ||
                    searchable.includes(search);


                const matchesCategory =
                    category === "all" ||
                    scheme.category === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    if (sort === "name") {

        filtered.sort(
            (a, b) =>
                String(a.name)
                    .localeCompare(
                        String(b.name)
                    )
        );

    } else if (sort === "benefits") {

        filtered.sort(
            (a, b) =>
                (
                    Array.isArray(b.benefits)
                        ? b.benefits.length
                        : 0
                )
                -
                (
                    Array.isArray(a.benefits)
                        ? a.benefits.length
                        : 0
                )
        );

    } else {

        filtered.sort(
            (a, b) =>
                b.match - a.match
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


    filtered.forEach(
        scheme => {

            resultsList.appendChild(
                createSchemeCard(
                    scheme
                )
            );

        }
    );

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    if (schemeCount) {

        schemeCount.textContent =
            allResults.filter(
                scheme =>
                    scheme.hardEligible
            ).length;

    }


    if (matchedCount) {

        matchedCount.textContent =
            allResults.filter(
                scheme =>
                    scheme.hardEligible &&
                    scheme.match >= 70
            ).length;

    }


    if (supportCount) {

        supportCount.textContent =
            Array.isArray(profile.support)
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
            typeof schemeDatabase ===
            "undefined" ||
            !Array.isArray(
                schemeDatabase
            )
        ) {

            console.error(
                "SchemeSaathi: schemeDatabase is unavailable."
            );

            return;

        }


        allResults =
            generateResults();


        populateCategories(
            allResults
        );


        updateDashboard();


        renderResults();


        console.log(
            "SchemeSaathi:",
            allResults.length,
            "schemes loaded."
        );

    }
);


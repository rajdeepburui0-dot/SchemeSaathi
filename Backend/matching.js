const schemes = require("./data/schemes");


// =========================================================
// NORMALIZE
// =========================================================

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


// =========================================================
// ARRAY MATCHING
// =========================================================

function includesValue(array, value) {

    if (!Array.isArray(array)) {
        return false;
    }

    const normalizedValue =
        normalize(value);

    return array.some(function (item) {

        return normalize(item) === normalizedValue;

    });

}


// =========================================================
// HARD ELIGIBILITY
//
// Hard rules:
// - Age
// - State
//
// The other profile fields are used for
// personalized ranking rather than automatic rejection.
// This prevents incomplete prototype data from
// incorrectly eliminating potentially relevant schemes.
// =========================================================

function checkEligibility(
    profile,
    scheme
) {

    const reasons = [];


    // -----------------------------------------------------
    // AGE
    // -----------------------------------------------------

    if (
        profile.age !== undefined &&
        profile.age !== ""
    ) {

        const age =
            Number(profile.age);

        if (
            scheme.minAge !== null &&
            scheme.minAge !== undefined &&
            age < Number(scheme.minAge)
        ) {

            return {
                eligible: false,
                reasons: [
                    `Minimum age requirement is ${scheme.minAge}.`
                ]
            };

        }


        if (
            scheme.maxAge !== null &&
            scheme.maxAge !== undefined &&
            age > Number(scheme.maxAge)
        ) {

            return {
                eligible: false,
                reasons: [
                    `Maximum age requirement is ${scheme.maxAge}.`
                ]
            };

        }


        reasons.push(
            "Age requirement is satisfied"
        );

    }


    // -----------------------------------------------------
    // STATE
    // -----------------------------------------------------

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
            userState &&
            !allowedStates.includes(userState)
        ) {

            return {
                eligible: false,
                reasons: [
                    "Scheme is not configured for your state."
                ]
            };

        }


        if (
            allowedStates.includes("all") ||
            allowedStates.includes(userState)
        ) {

            reasons.push(
                "Scheme is available in your state"
            );

        }

    }


    return {
        eligible: true,
        reasons: reasons
    };

}


// =========================================================
// CALCULATE PERSONALIZED SCORE
//
// Maximum = 100
//
// Business Type   = 30
// Business Stage  = 20
// Goal            = 20
// Support         = 15
// Category        = 10
// Gender          = 5
//
// Hard eligibility is handled separately.
// =========================================================

function calculateScore(
    profile,
    scheme
) {

    let score = 0;

    const matchedFactors = [];


    // -----------------------------------------------------
    // BUSINESS TYPE - 30
    // -----------------------------------------------------

    if (
        includesValue(
            scheme.businessTypes,
            profile.businessType
        )
    ) {

        score += 30;

        matchedFactors.push(
            "Business type matches"
        );

    }


    // -----------------------------------------------------
    // BUSINESS STAGE - 20
    // -----------------------------------------------------

    if (
        includesValue(
            scheme.businessStages,
            profile.businessStage
        )
    ) {

        score += 20;

        matchedFactors.push(
            "Business stage matches"
        );

    }


    // -----------------------------------------------------
    // BUSINESS GOAL - 20
    // -----------------------------------------------------

    if (
        includesValue(
            scheme.goals,
            profile.goal
        )
    ) {

        score += 20;

        matchedFactors.push(
            "Business goal matches"
        );

    }


    // -----------------------------------------------------
    // SUPPORT REQUIREMENT - 15
    // -----------------------------------------------------

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


        const supportMatched =
            userSupport.some(function (item) {

                return schemeSupport.includes(
                    normalize(item)
                );

            });


        if (supportMatched) {

            score += 15;

            matchedFactors.push(
                "Support requirement matches"
            );

        }

    }


    // -----------------------------------------------------
    // SOCIAL CATEGORY - 10
    // -----------------------------------------------------

    if (
        includesValue(
            scheme.categories,
            profile.category
        )
    ) {

        score += 10;

        matchedFactors.push(
            "Social category is supported"
        );

    }


    // -----------------------------------------------------
    // GENDER - 5
    // -----------------------------------------------------

    if (
        includesValue(
            scheme.genders,
            profile.gender
        )
    ) {

        score += 5;

        matchedFactors.push(
            "Gender is supported"
        );

    }


    return {
        score: score,
        matchedFactors: matchedFactors
    };

}


// =========================================================
// MISSING / VERIFICATION REQUIREMENTS
//
// These are NOT hard rejection rules.
// They tell the user what still needs verification.
// =========================================================

function getMissingRequirements(
    profile,
    scheme
) {

    const missing = [];


    // -----------------------------------------------------
    // BUSINESS TYPE
    // -----------------------------------------------------

    if (
        profile.businessType &&
        Array.isArray(scheme.businessTypes) &&
        !includesValue(
            scheme.businessTypes,
            profile.businessType
        )
    ) {

        missing.push(
            "Business type does not match the configured scheme criteria."
        );

    }


    // -----------------------------------------------------
    // BUSINESS STAGE
    // -----------------------------------------------------

    if (
        profile.businessStage &&
        Array.isArray(scheme.businessStages) &&
        !includesValue(
            scheme.businessStages,
            profile.businessStage
        )
    ) {

        missing.push(
            "Business stage does not match the configured scheme criteria."
        );

    }


    // -----------------------------------------------------
    // GOAL
    // -----------------------------------------------------

    if (
        profile.goal &&
        Array.isArray(scheme.goals) &&
        !includesValue(
            scheme.goals,
            profile.goal
        )
    ) {

        missing.push(
            "Business goal does not directly match the configured scheme criteria."
        );

    }


    // -----------------------------------------------------
    // SUPPORT
    // -----------------------------------------------------

    if (
        Array.isArray(profile.support) &&
        profile.support.length > 0 &&
        Array.isArray(scheme.support)
    ) {

        const supportMatched =
            profile.support.some(function (item) {

                return includesValue(
                    scheme.support,
                    item
                );

            });


        if (!supportMatched) {

            missing.push(
                "The selected support requirement is not directly represented in the configured scheme data."
            );

        }

    }


    // -----------------------------------------------------
    // CATEGORY
    // -----------------------------------------------------

    if (
        profile.category &&
        Array.isArray(scheme.categories) &&
        !includesValue(
            scheme.categories,
            profile.category
        )
    ) {

        missing.push(
            "Social category is not included in the configured scheme criteria."
        );

    }


    // -----------------------------------------------------
    // GENDER
    // -----------------------------------------------------

    if (
        profile.gender &&
        Array.isArray(scheme.genders) &&
        !includesValue(
            scheme.genders,
            profile.gender
        )
    ) {

        missing.push(
            "Gender is not included in the configured scheme criteria."
        );

    }


    return missing;

}


// =========================================================
// MATCH SCHEMES
// =========================================================

function matchSchemes(profile) {

    const recommendations = [];


    schemes.forEach(function (scheme) {


        // -------------------------------------------------
        // HARD ELIGIBILITY
        // -------------------------------------------------

        const eligibility =
            checkEligibility(
                profile,
                scheme
            );


        // -------------------------------------------------
        // SCORE
        // -------------------------------------------------

        const ranking =
            eligibility.eligible
                ? calculateScore(
                    profile,
                    scheme
                )
                : {
                    score: 0,
                    matchedFactors: []
                };


        // -------------------------------------------------
        // MISSING REQUIREMENTS
        // -------------------------------------------------

        const missing =
            eligibility.eligible
                ? getMissingRequirements(
                    profile,
                    scheme
                )
                : [];


        // -------------------------------------------------
        // RESULT
        // -------------------------------------------------

        recommendations.push({

            ...scheme,

            match:
                ranking.score,

            score:
                ranking.score,

            hardEligible:
                eligibility.eligible,

            matchedFactors:
                ranking.matchedFactors,

            whyMatch:
                eligibility.eligible
                    ? (
                        ranking.matchedFactors.length > 0
                            ? ranking.matchedFactors
                            : eligibility.reasons
                    )
                    : [],

            missing:
                missing

        });

    });


    // -----------------------------------------------------
    // ONLY ELIGIBLE SCHEMES
    // -----------------------------------------------------

    const eligibleRecommendations =
        recommendations.filter(function (scheme) {

            return scheme.hardEligible;

        });


    // -----------------------------------------------------
    // SORT
    // -----------------------------------------------------

    eligibleRecommendations.sort(
        function (a, b) {

            return b.score - a.score;

        }
    );


    return eligibleRecommendations;

}


// =========================================================
// EXPORT
// =========================================================

module.exports = {

    matchSchemes,

    checkEligibility,

    calculateScore,

    getMissingRequirements

};
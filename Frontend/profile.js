/* =========================================
SCHEMESAATHI
PROFILE PAGE
========================================= */

const profileForm =
document.getElementById("profileForm");

/*
Every time the user submits the form,
we create a completely NEW profile object.

The old profile is replaced.
*/

profileForm.addEventListener(
"submit",
function (event) {


    event.preventDefault();


    /* =====================================
       GET PERSONAL DETAILS
    ===================================== */

    const name =
        document
            .getElementById("name")
            .value
            .trim();


    const age =
        document
            .getElementById("age")
            .value;


    const gender =
        document
            .getElementById("gender")
            .value;


    const state =
        document
            .getElementById("state")
            .value;


    const category =
        document
            .getElementById("category")
            .value;


    /* =====================================
       GET ANNUAL FAMILY INCOME
    ===================================== */

    const annualIncome =
        document
            .getElementById("annualIncome")
            .value;



    /* =====================================
       GET BUSINESS DETAILS
    ===================================== */

    const businessName =
        document
            .getElementById("businessName")
            .value
            .trim();


    const businessType =
        document
            .getElementById("businessType")
            .value;


    const businessStage =
        document
            .getElementById("businessStage")
            .value;


    const employees =
        document
            .getElementById("employees")
            .value;


    const annualTurnover =
        document
            .getElementById("annualTurnover")
            .value;



    /* =====================================
       GET SUPPORT OPTIONS
    ===================================== */

    const supportOptions =
        document.querySelectorAll(
            'input[name="support"]:checked'
        );


    const support = [];


    supportOptions.forEach(
        function (checkbox) {

            support.push(
                checkbox.value
            );

        }
    );



    /* =====================================
       CREATE NEW PROFILE
    ===================================== */

    const profile = {

        name: name,

        age: age,

        gender: gender,

        state: state,

        category: category,

        annualIncome: annualIncome,

        businessName: businessName,

        businessType: businessType,

        businessStage: businessStage,

        employees: employees,

        annualTurnover: annualTurnover,

        support: support,

        createdAt:
            new Date().toISOString()

    };



    /* =====================================
       REMOVE OLD PROFILE
    ===================================== */

    localStorage.removeItem(
        "schemeSaathiProfile"
    );



    /* =====================================
       SAVE NEW PROFILE
    ===================================== */

    localStorage.setItem(
        "schemeSaathiProfile",
        JSON.stringify(profile)
    );



    /*
       Remove previous matching results.

       This is important because the results
       must be generated from the NEW profile.
    */

    localStorage.removeItem(
        "schemeSaathiResults"
    );


    localStorage.removeItem(
        "selectedSchemeId"
    );



    /* =====================================
       GO TO MATCHING PAGE
    ===================================== */

    window.location.href =
        "matching.html";

}

);

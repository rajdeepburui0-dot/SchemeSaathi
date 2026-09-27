
/* =========================================
   SCHEMESAATHI
   PROFILE PAGE
========================================= */


const profileForm =
    document.getElementById("profileForm");


/* =========================================
   CHECK FORM
========================================= */

if (!profileForm) {

    console.error(
        "profileForm was not found."
    );

}


/* =========================================
   SUBMIT PROFILE
========================================= */

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        async function (event) {

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
                Number(
                    document
                        .getElementById("age")
                        .value
                );


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
                Number(
                    document
                        .getElementById("employees")
                        .value
                );


            /* =====================================
               GET ANNUAL TURNOVER
            ===================================== */

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
               CREATE PROFILE OBJECT
            ===================================== */

            const profile = {

                name: name,

                age: age,

                gender: gender,

                state: state,

                category: category,

                income: annualIncome,

                businessName: businessName,

                businessType: businessType,

                businessStage: businessStage,

                employees: employees,

                annualTurnover: annualTurnover,

                support: support

            };


            console.log(
                "================================="
            );

            console.log(
                "SCHEMESAATHI PROFILE SUBMISSION"
            );

            console.log(
                "Profile:",
                profile
            );

            console.log(
                "Sending request to:",
                "https://scheme-saathi-three.vercel.app/api/match"
            );


            /* =====================================
               SEND PROFILE TO BACKEND
            ===================================== */

            try {

                const response =
                    await fetch(
                        "https://scheme-saathi-three.vercel.app/api/match",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(profile)

                        }
                    );


                console.log(
                    "Backend HTTP status:",
                    response.status
                );


                /* =====================================
                   CHECK HTTP RESPONSE
                ===================================== */

                if (!response.ok) {

                    throw new Error(
                        "Backend returned HTTP " +
                        response.status
                    );

                }


                /* =====================================
                   READ JSON
                ===================================== */

                const data =
                    await response.json();


                console.log(
                    "Backend response:",
                    data
                );


                /* =====================================
                   CHECK BACKEND SUCCESS
                ===================================== */

                if (
                    !data ||
                    data.success !== true
                ) {

                    throw new Error(
                        data?.message ||
                        "Scheme matching failed."
                    );

                }


                /* =====================================
                   CHECK SCHEME RESULTS
                ===================================== */

                if (
                    !Array.isArray(
                        data.schemes
                    )
                ) {

                    throw new Error(
                        "Backend did not return scheme results."
                    );

                }


                console.log(
                    "Matched schemes:",
                    data.schemes.length
                );


                /* =====================================
                   SAVE PROFILE
                ===================================== */

                localStorage.setItem(
                    "schemeSaathiProfile",
                    JSON.stringify(profile)
                );


                /* =====================================
                   SAVE BACKEND RESULTS
                ===================================== */

                localStorage.setItem(
                    "schemeSaathiResults",
                    JSON.stringify(data)
                );


                /* =====================================
                   REMOVE OLD SELECTED SCHEME
                ===================================== */

                localStorage.removeItem(
                    "selectedSchemeId"
                );


                console.log(
                    "Profile and results saved successfully."
                );


                /* =====================================
                   GO TO MATCHING PAGE
                ===================================== */

                window.location.href =
                    "matching.html";

            }


            catch (error) {

                console.error(
                    "================================="
                );

                console.error(
                    "SCHEMESAATHI BACKEND ERROR"
                );

                console.error(
                    error
                );

                console.error(
                    "================================="
                );


                alert(
                    "Unable to connect to SchemeSaathi backend.\n\n" +
                    "Please make sure the backend server is running."
                );

            }

        }
    );

}



/* =========================================
   SCHEMESAATHI
   SCHEME DETAILS PAGE
========================================= */


/* =========================================
   GET SELECTED SCHEME
========================================= */

const selectedSchemeId =
    Number(
        localStorage.getItem(
            "selectedSchemeId"
        )
    );


const savedResults =
    localStorage.getItem(
        "schemeSaathiResults"
    );


const schemes =
    savedResults
        ? JSON.parse(savedResults)
        : [];



/* =========================================
   FIND SELECTED SCHEME
========================================= */

const scheme =
    schemes.find(
        function (item) {

            return item.id === selectedSchemeId;

        }
    );



/* =========================================
   IF SCHEME NOT FOUND
========================================= */

if (!scheme) {

    window.location.href =
        "results.html";

}



/* =========================================
   PAGE ELEMENTS
========================================= */

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



/* =========================================
   BASIC SCHEME INFORMATION
========================================= */

schemeIcon.className =
    `fa-solid ${scheme.icon}`;


schemeCategory.textContent =
    scheme.category;


schemeName.textContent =
    scheme.name;


schemeDescription.textContent =
    scheme.description;



/* =========================================
   MATCH SCORE
========================================= */

matchPercentage.textContent =
    `${scheme.match}%`;


matchBar.style.width =
    `${scheme.match}%`;



/* =========================================
   WHY THIS SCHEME
========================================= */

schemeReason.textContent =
    scheme.reason ||
    "This scheme was recommended based on the information provided in your profile and the scheme's eligibility requirements.";



/* =========================================
   BENEFITS
========================================= */

const benefits =
    scheme.benefits || [];


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


        schemeBenefits.appendChild(item);

    }
);



/* =========================================
   ELIGIBILITY
========================================= */

const eligibility =
    scheme.eligibility || [];


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


        eligibilityList.appendChild(item);

    }
);



/* =========================================
   WHAT AM I MISSING?
========================================= */

const missing =
    scheme.missing || [];


if (missing.length === 0) {

    missingRequirements.innerHTML = `

        <div class="no-missing">

            <i class="fa-solid fa-circle-check"></i>

            <div>

                <strong>
                    No major gaps identified
                </strong>

                <p>
                    Based on the available profile
                    information, no additional requirement
                    has been flagged.
                </p>

            </div>

        </div>

    `;

} else {

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


            missingRequirements.appendChild(item);

        }
    );

}



/* =========================================
   DOCUMENT CHECKLIST
========================================= */

const documents =
    scheme.documents || [];


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


/*
   Create a unique storage key
   for each scheme.
*/

const checklistStorageKey =
    `schemeChecklist_${scheme.id}`;


/*
   Get previously saved checklist.
*/

let completedDocuments =
    JSON.parse(
        localStorage.getItem(
            checklistStorageKey
        )
    ) || [];



/* =========================================
   UPDATE CHECKLIST PROGRESS
========================================= */

function updateChecklistProgress() {

    const total =
        documents.length;


    const completed =
        completedDocuments.length;


    checklistCount.textContent =
        `${completed} / ${total} completed`;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );


    checklistProgressBar.style.width =
        `${percentage}%`;


    if (total === 0) {

        checklistMessage.textContent =
            "No document information available.";

    }

    else if (percentage === 100) {

        checklistMessage.textContent =
            "All documents are marked as ready.";

    }

    else {

        checklistMessage.textContent =
            `${total - completed} document(s) remaining.`;

    }

}



/* =========================================
   DISPLAY DOCUMENTS
========================================= */

documents.forEach(
    function (documentName, index) {

        const item =
            document.createElement(
                "label"
            );


        item.className =
            "document-item";


        const isCompleted =
            completedDocuments.includes(index);


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

                if (checkbox.checked) {

                    if (
                        !completedDocuments.includes(index)
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

                                return itemIndex !== index;

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



/* =========================================
   RESET CHECKLIST
========================================= */

resetChecklist.addEventListener(
    "click",
    function () {

        completedDocuments = [];


        localStorage.removeItem(
            checklistStorageKey
        );


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


        updateChecklistProgress();

    }
);



/* =========================================
   INITIAL PROGRESS
========================================= */

updateChecklistProgress();



/* =========================================
   OFFICIAL LINK
========================================= */

if (scheme.officialLink) {

    officialLink.href =
        scheme.officialLink;

} else {

    officialLink.style.display =
        "none";

}


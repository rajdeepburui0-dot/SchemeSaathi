/* =========================================================
   SCHEMESAATHI
   PREMIUM SCHEME COMPARISON
   ========================================================= */


/* =========================================================
   LOAD RESULTS
========================================================= */

const savedResults =
    localStorage.getItem("schemeSaathiResults");

const schemes =
    savedResults
        ? JSON.parse(savedResults)
        : [];


/* =========================================================
   PAGE ELEMENTS
========================================================= */

const schemeSelector =
    document.getElementById("schemeSelector");

const compareButton =
    document.getElementById("compareButton");

const comparisonSection =
    document.getElementById("comparisonSection");

const comparisonHead =
    document.getElementById("comparisonHead");

const comparisonBody =
    document.getElementById("comparisonBody");

const compareEmpty =
    document.getElementById("compareEmpty");

const clearComparison =
    document.getElementById("clearComparison");


/* =========================================================
   SAFETY
========================================================= */

if (!schemeSelector) {
    console.error("Scheme selector not found.");
}


/* =========================================================
   CREATE SCHEME SELECTOR
========================================================= */

function createSchemeOptions() {

    if (!schemeSelector) return;

    schemeSelector.innerHTML = "";

    if (schemes.length === 0) {

        schemeSelector.innerHTML = `

            <div class="compare-no-results">

                <div class="compare-no-results-icon">
                    <i class="fa-solid fa-circle-info"></i>
                </div>

                <div>

                    <strong>
                        No schemes available
                    </strong>

                    <p>
                        Complete your profile first to
                        discover schemes you can compare.
                    </p>

                </div>

                <a href="profile.html"
                   class="primary-button">

                    Create Profile

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>

        `;

        if (compareButton) {
            compareButton.disabled = true;
        }

        return;
    }


    schemes.forEach(function (scheme) {

        const option =
            document.createElement("label");

        option.className =
            "compare-scheme-option";


        option.innerHTML = `

            <input
                type="checkbox"
                class="scheme-checkbox"
                value="${scheme.id}"
            >


            <div class="compare-option-main">

                <div class="compare-scheme-icon">

                    <i class="fa-solid ${
                        scheme.icon ||
                        "fa-building-columns"
                    }"></i>

                </div>


                <div class="compare-scheme-info">

                    <strong>
                        ${scheme.name}
                    </strong>

                    <span>
                        ${scheme.category || "Government Scheme"}
                    </span>

                </div>

            </div>


            <div class="compare-option-match">

                <span>
                    MATCH
                </span>

                <strong>
                    ${scheme.match || 0}%
                </strong>

            </div>


            <div class="compare-scheme-check">

                <i class="fa-solid fa-check"></i>

            </div>

        `;


        const checkbox =
            option.querySelector(".scheme-checkbox");


        checkbox.addEventListener(
            "change",
            function () {

                option.classList.toggle(
                    "selected",
                    checkbox.checked
                );


                updateSelectionState();

            }
        );


        schemeSelector.appendChild(option);

    });


    updateSelectionState();

}


/* =========================================================
   SELECTION STATE
========================================================= */

function updateSelectionState() {

    const selected =
        document.querySelectorAll(
            ".scheme-checkbox:checked"
        );


    const count =
        selected.length;


    if (compareButton) {

        compareButton.disabled =
            count < 2;

        compareButton.innerHTML = `

            <i class="fa-solid fa-scale-balanced"></i>

            ${
                count < 2
                    ? "Select at least 2 schemes"
                    : `Compare ${count} Schemes`
            }

        `;

    }

}


/* =========================================================
   GET SELECTED SCHEMES
========================================================= */

function getSelectedSchemes() {

    const selected =
        document.querySelectorAll(
            ".scheme-checkbox:checked"
        );


    const selectedSchemes = [];


    selected.forEach(function (checkbox) {

        const id =
            Number(checkbox.value);


        const scheme =
            schemes.find(function (item) {

                return item.id === id;

            });


        if (scheme) {

            selectedSchemes.push(scheme);

        }

    });


    return selectedSchemes;

}


/* =========================================================
   MATCH LABEL
========================================================= */

function getMatchLabel(match) {

    if (match >= 70) {
        return "Strong Match";
    }

    if (match >= 45) {
        return "Potential Match";
    }

    if (match > 0) {
        return "Explore";
    }

    return "Check Eligibility";

}


/* =========================================================
   MATCH CLASS
========================================================= */

function getMatchClass(match) {

    if (match >= 70) {
        return "strong";
    }

    if (match >= 45) {
        return "potential";
    }

    if (match > 0) {
        return "explore";
    }

    return "check";

}


/* =========================================================
   COMPARE BUTTON
========================================================= */

if (compareButton) {

    compareButton.addEventListener(
        "click",
        function () {

            const selectedSchemes =
                getSelectedSchemes();


            if (selectedSchemes.length < 2) {

                return;

            }


            displayComparison(
                selectedSchemes
            );

        }
    );

}


/* =========================================================
   DISPLAY COMPARISON
========================================================= */

function displayComparison(selectedSchemes) {

    comparisonHead.innerHTML = "";
    comparisonBody.innerHTML = "";


    /* =====================================================
       HEADER
    ===================================================== */

    const headerRow =
        document.createElement("tr");


    let headerHTML =
        `<th class="comparison-label-header">
            <span>COMPARE</span>
        </th>`;


    selectedSchemes.forEach(function (scheme) {

        const matchClass =
            getMatchClass(
                scheme.match || 0
            );


        headerHTML += `

            <th class="comparison-scheme-header">

                <div class="comparison-header-card">

                    <div class="comparison-icon">

                        <i class="fa-solid ${
                            scheme.icon ||
                            "fa-building-columns"
                        }"></i>

                    </div>


                    <div class="comparison-header-info">

                        <strong>
                            ${scheme.name}
                        </strong>

                        <span>
                            ${scheme.category || "Government Scheme"}
                        </span>

                    </div>

                </div>


                <div class="comparison-match ${matchClass}">

                    <strong>
                        ${scheme.match || 0}%
                    </strong>

                    <span>
                        ${getMatchLabel(
                            scheme.match || 0
                        )}
                    </span>

                </div>

            </th>

        `;

    });


    headerRow.innerHTML =
        headerHTML;


    comparisonHead.appendChild(
        headerRow
    );


    /* =====================================================
       ROWS
    ===================================================== */

    addComparisonRow(
        "Profile Match",
        selectedSchemes,
        function (scheme) {

            const match =
                scheme.match || 0;

            const matchClass =
                getMatchClass(match);


            return `

                <div class="comparison-match-cell ${matchClass}">

                    <strong>
                        ${match}%
                    </strong>

                    <span>
                        ${getMatchLabel(match)}
                    </span>

                </div>

            `;

        }
    );


    addComparisonRow(
        "Category",
        selectedSchemes,
        function (scheme) {

            return `

                <span class="comparison-value">
                    ${scheme.category || "—"}
                </span>

            `;

        }
    );


    addComparisonRow(
        "Description",
        selectedSchemes,
        function (scheme) {

            return `

                <p class="comparison-description">
                    ${scheme.description || "No description available."}
                </p>

            `;

        }
    );


    addComparisonRow(
        "Benefits",
        selectedSchemes,
        function (scheme) {

            return createList(
                scheme.benefits,
                "benefit"
            );

        }
    );


    addComparisonRow(
        "Eligibility",
        selectedSchemes,
        function (scheme) {

            return createList(
                scheme.eligibility,
                "eligibility"
            );

        }
    );


    addComparisonRow(
        "Missing Requirements",
        selectedSchemes,
        function (scheme) {

            if (
                !scheme.missing ||
                scheme.missing.length === 0
            ) {

                return `

                    <div class="comparison-no-gap">

                        <i class="fa-solid fa-circle-check"></i>

                        <span>
                            No major gaps identified
                        </span>

                    </div>

                `;

            }


            return createList(
                scheme.missing,
                "missing"
            );

        }
    );


    addComparisonRow(
        "Documents",
        selectedSchemes,
        function (scheme) {

            return createList(
                scheme.documents,
                "document"
            );

        }
    );


    addComparisonRow(
        "Official Portal",
        selectedSchemes,
        function (scheme) {

            if (!scheme.officialLink) {

                return `

                    <span class="comparison-unavailable">
                        Not available
                    </span>

                `;

            }


            return `

                <a
                    href="${scheme.officialLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="comparison-link"
                >

                    Visit Official Portal

                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                </a>

            `;

        }
    );


    comparisonSection.style.display =
        "block";


    compareEmpty.style.display =
        "none";


    setTimeout(function () {

        comparisonSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================================
   CREATE LIST
========================================================= */

function createList(items, type) {

    if (
        !Array.isArray(items) ||
        items.length === 0
    ) {

        return `

            <span class="comparison-unavailable">
                Not specified
            </span>

        `;

    }


    const icon =
        type === "missing"
            ? "fa-circle-exclamation"
            : type === "document"
                ? "fa-file-lines"
                : "fa-check";


    return `

        <ul class="comparison-list ${type}">

            ${items.map(function (item) {

                return `

                    <li>

                        <i class="fa-solid ${icon}"></i>

                        <span>
                            ${item}
                        </span>

                    </li>

                `;

            }).join("")}

        </ul>

    `;

}


/* =========================================================
   ADD COMPARISON ROW
========================================================= */

function addComparisonRow(
    label,
    selectedSchemes,
    valueFunction
) {

    const row =
        document.createElement("tr");


    let rowHTML = `

        <th class="comparison-row-label">

            <span>
                ${label}
            </span>

        </th>

    `;


    selectedSchemes.forEach(function (scheme) {

        rowHTML += `

            <td class="comparison-cell">

                ${valueFunction(scheme)}

            </td>

        `;

    });


    row.innerHTML =
        rowHTML;


    comparisonBody.appendChild(
        row
    );

}


/* =========================================================
   CLEAR
========================================================= */

if (clearComparison) {

    clearComparison.addEventListener(
        "click",
        function () {

            document
                .querySelectorAll(
                    ".scheme-checkbox"
                )
                .forEach(function (checkbox) {

                    checkbox.checked =
                        false;

                });


            document
                .querySelectorAll(
                    ".compare-scheme-option"
                )
                .forEach(function (option) {

                    option.classList.remove(
                        "selected"
                    );

                });


            comparisonSection.style.display =
                "none";


            compareEmpty.style.display =
                "flex";


            updateSelectionState();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

createSchemeOptions();
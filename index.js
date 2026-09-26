/* =========================================
   SCHEMESAATHI
   HOME PAGE
========================================= */


const mobileMenuBtn =
    document.getElementById(
        "mobileMenuBtn"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            if (
                navLinks.style.display ===
                "flex"
            ) {

                navLinks.style.display =
                    "";

            } else {

                navLinks.style.display =
                    "flex";

                navLinks.style.flexDirection =
                    "column";

                navLinks.style.position =
                    "absolute";

                navLinks.style.top =
                    "76px";

                navLinks.style.left =
                    "0";

                navLinks.style.right =
                    "0";

                navLinks.style.padding =
                    "20px";

                navLinks.style.background =
                    "white";

                navLinks.style.borderBottom =
                    "1px solid #e8e5f0";

            }

        }
    );

}
/* =========================================================
   SCHEMESAATHI BACKEND SERVER
   ========================================================= */

const express = require("express");
const cors = require("cors");

const schemes = require("./data/schemes");

const {
    matchSchemes
} = require("./matching");


const app = express();

const PORT = 5000;


/* =========================================================
   MIDDLEWARE
   ========================================================= */

app.use(cors());

app.use(express.json());


/* =========================================================
   HEALTH CHECK
   ========================================================= */

app.get(
    "/api/health",
    function (req, res) {

        res.json({

            success: true,

            message:
                "SchemeSaathi backend is running",

            schemes:
                schemes.length

        });

    }
);


/* =========================================================
   GET ALL SCHEMES
   ========================================================= */

app.get(
    "/api/schemes",
    function (req, res) {

        res.json({

            success: true,

            count:
                schemes.length,

            schemes:
                schemes

        });

    }
);


/* =========================================================
   POST PROFILE
   ========================================================= */

app.post(
    "/api/profile",
    function (req, res) {

        try {

            const profile =
                req.body;


            if (
                !profile ||
                typeof profile !== "object" ||
                Array.isArray(profile)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid profile data"

                });

            }


            console.log(
                "================================="
            );

            console.log(
                "SCHEMESAATHI PROFILE"
            );

            console.log(
                "Profile received:",
                profile
            );

            console.log(
                "================================="
            );


            res.json({

                success: true,

                message:
                    "Profile received successfully",

                profile:
                    profile

            });

        } catch (error) {

            console.error(
                "Profile error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Server error while processing profile"

            });

        }

    }
);


/* =========================================================
   POST MATCH
   ========================================================= */

app.post(
    "/api/match",
    function (req, res) {

        try {

            const profile =
                req.body;


            if (
                !profile ||
                typeof profile !== "object" ||
                Array.isArray(profile)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid profile data"

                });

            }


            console.log(
                "================================="
            );

            console.log(
                "SCHEMESAATHI MATCH REQUEST"
            );

            console.log(
                "Profile:",
                profile
            );


            const recommendations =
                matchSchemes(
                    profile
                );


            console.log(
                "Eligible schemes:",
                recommendations.length
            );


            console.log(
                "================================="
            );


            res.json({

                success: true,

                count:
                    recommendations.length,

                schemes:
                    recommendations

            });

        } catch (error) {

            console.error(
                "Matching error:",
                error
            );


            res.status(500).json({

                success: false,

                message:
                    "Server error while matching schemes"

            });

        }

    }
);


/* =========================================================
   404 HANDLER
   ========================================================= */

app.use(
    function (req, res) {

        res.status(404).json({

            success: false,

            message:
                "API endpoint not found"

        });

    }
);


/* =========================================================
   START SERVER
   ========================================================= */

app.listen(
    PORT,
    function () {

        console.log("");

        console.log(
            "================================="
        );

        console.log(
            "      SCHEMESAATHI BACKEND"
        );

        console.log(
            "================================="
        );

        console.log(
            `Server running on http://localhost:${PORT}`
        );

        console.log(
            `Schemes loaded: ${schemes.length}`
        );

        console.log(
            "Health: http://localhost:5000/api/health"
        );

        console.log(
            "Schemes: http://localhost:5000/api/schemes"
        );

        console.log(
            "Match: POST http://localhost:5000/api/match"
        );

        console.log(
            "================================="
        );

    }
);
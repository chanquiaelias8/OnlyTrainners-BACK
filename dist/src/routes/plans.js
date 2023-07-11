"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesPlans = (0, express_1.Router)();
routesPlans.post("/createplan");
exports.default = routesPlans;

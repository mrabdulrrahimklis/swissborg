import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/home/homeLayout.tsx", [
        index("routes/home/home.tsx")
    ]),
    layout("routes/summary/summaryLayout.tsx", [
        route("/summary", "routes/summary/summary.tsx")
    ])
] satisfies RouteConfig;

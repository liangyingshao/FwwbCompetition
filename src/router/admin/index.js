module.exports = {
    FixManager: {
        path: "/manage/dashboard",
        layout: "admin",
        component: () => import(/* webpackChunkName: "FixManager" */"@p/Modules/FixManager")
    },
    WorkflowConfig: {
        path: "/manage/wwf/config",
        layout: "admin",
        component: () => import(/* webpackChunkName: "WorkflowManager" */"@p/Modules/WorkflowConfig")
    }
};

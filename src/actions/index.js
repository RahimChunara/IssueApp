export const selectIssue = (issues) => {
    console.log("You selected id ", issues.id);
    return {
        type: "ISSUE_SELECTED",
        payload: issues
    }
};
let issueID = 1

export function addissue(value) {
    return ({
        type: 'ADD_ISSUE',
        payload: {
            ...value,
            id: issueID++,
            status: 'OPEN'
        }
    });
}

export const issueStatus = (issue) => {
    console.log("Clicked on " + issue.title);
    return {
        type: 'CHANGE_STATUS',
        payload: issue
    }
};
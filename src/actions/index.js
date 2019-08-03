let issueID = 1

export function addissue(value) {
    return ({
        type: 'ADD_ISSUE',
        payload: {
            ...value,
            id: issueID++
        }
    });
}


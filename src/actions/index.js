let issueID = 0

export function addissue(value) {
    return ({
        type: 'ADD_ISSUE',
        id: issueID++,
        value
    });
}


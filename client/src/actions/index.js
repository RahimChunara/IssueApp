import axios from 'axios';

export const getissue = () => dispatch => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    dispatch(loadingissue());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: 'GET_ISSUE',
                payload: res.data
            })
        )
        .catch((error) => {
            if(error.response.status === 401) {
              this.props.history.push("/");
            }
          });
}


export const addissue = value => dispatch =>{
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios
        .post('/api/items', value)
        .then(res =>
            dispatch({
                type: 'ADD_ISSUE',
                payload: res.data
            })
        )
        .catch((error) => {
            if(error.response.status === 401) {
              this.props.history.push("/");
            }
          });
};

export const issueStatus = (issue) => dispatch => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios
        .post('/api/items', issue)
        .then(res =>
            dispatch({
                type: 'CHANGE_STATUS',
                payload: issue
            })
        )
        .catch((error) => {
            if(error.response.status === 401) {
              this.props.history.push("/");
            }
          });
};

export const loadingissue = () => {
    return {
        type: 'LOADING_ISSUE'
    }
};
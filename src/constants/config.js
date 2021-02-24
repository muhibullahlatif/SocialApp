const _Environments = {
    development: {
        BASE_URL: 'https://jsonplaceholder.typicode.com/',
        GET_ALL_POST: 'posts',
    },
};

function getEnvironment() {
    const platform = 'development';
    return _Environments[platform];
}

const Environment = getEnvironment();
module.exports = Environment;
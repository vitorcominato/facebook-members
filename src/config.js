const dev = {
  baseUrl: {
    api1: 'https://api-api1-dev.azurewebsites.net/api',
    api2: 'https://api-api2-dev.azurewebsites.net/api',
    api3: 'https://api-api3-dev.azurewebsites.net/api',
  },
};

const qa = {
  baseUrl: {
    api1: 'https://api-api1-qa.azurewebsites.net/api',
    api2: 'https://api-api2-qa.azurewebsites.net/api',
    api3: 'https://api-api3-qa.azurewebsites.net/api',
  },
};

const hm = {
  baseUrl: {
    api1: 'https://api-api1-hm.azurewebsites.net/api',
    api2: 'https://api-api2-hm.azurewebsites.net/api',
    api3: 'https://api-api3-hm.azurewebsites.net/api',
  },
};

const prod = {
  baseUrl: {
    api1: 'https://api-api1.azurewebsites.net/api',
    api2: 'https://api-api2.azurewebsites.net/api',
    api3: 'https://api-api3.azurewebsites.net/api',
  },
};

let config = dev;

if (process.env.REACT_APP_STAGE === 'qa') {
  config = qa;
} else if (process.env.REACT_APP_STAGE === 'hm') {
  config = hm;
} else if (process.env.REACT_APP_STAGE === 'prod') {
  config = prod;
}

export default {
  TokenLifetime: '300',
  Versao: '',
  timeoutApi: 60000,
  ...config,
};

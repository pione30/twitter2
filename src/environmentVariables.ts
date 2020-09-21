export const getAuth0Domain = (): string => {
  if (process.env.AUTH0_DOMAIN) {
    return process.env.AUTH0_DOMAIN;
  } else {
    throw new Error("process.env.AUTH0_DOMAIN is not defined");
  }
};

export const getAuth0ClientId = (): string => {
  if (process.env.AUTH0_CLIENT_ID) {
    return process.env.AUTH0_CLIENT_ID;
  } else {
    throw new Error("process.env.AUTH0_CLIENT_ID is not defined");
  }
};

export const getAuth0Audience = (): string => {
  if (process.env.AUTH0_AUDIENCE) {
    return process.env.AUTH0_AUDIENCE;
  } else {
    throw new Error("process.env.AUTH0_AUDIENCE is not defined");
  }
};

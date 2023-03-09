import { API, Auth } from 'aws-amplify';

const PATHS = ['/listUsers'] as const;

type UserResponse = {
  Username: string;
  Attributes: { Name: string; Value: string }[];
};

export type User = {
  id: string;
  email: string;
};

const get = async (
  path: (typeof PATHS)[number],
  queryParams: { [param: string]: string } = {},
) => {
  return API.get('AdminQueries', path, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
    queryStringParameters: queryParams,
  });
};

const post = async (
  path: (typeof PATHS)[number],
  body: { [param: string]: string } = {},
) => {
  return API.post('AdminQueries', path, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
    body,
  });
};

const findAttributeValue = (user: UserResponse, attribute: string) =>
  user.Attributes.find((att) => att.Name === attribute)?.Value;

const isUserResponse = (value: unknown): value is UserResponse =>
  typeof value === 'object' &&
  value !== null &&
  'Username' in value &&
  'Attributes' in value &&
  Array.isArray((value as UserResponse)['Attributes']) &&
  (value as UserResponse)['Attributes'].reduce(
    (correct, value) => correct && isAttribute(value),
    true,
  );

const isAttribute = (
  value: unknown,
): value is { Name: string; Value: string } =>
  typeof value === 'object' &&
  value !== null &&
  'Name' in value &&
  'Value' in value &&
  !!(value as { Name: string; Value: string })['Name'] &&
  !!(value as { Name: string; Value: string })['Value'];

export const listUsers = async () => {
  const response = await get('/listUsers');
  if (
    !response.Users ||
    !Array.isArray(response.Users) ||
    !response.Users.length
  ) {
    return [];
  }
  const users = response.Users.map((user: unknown): User | null => {
    if (!isUserResponse(user)) {
      return null;
    }
    const id = user.Username;
    const email = findAttributeValue(user, 'email');
    if (!id || !email) {
      return null;
    }
    return { id, email };
  }).filter(Boolean);
  return users;
};

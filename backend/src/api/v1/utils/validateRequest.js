/**
 * Checks if a string is a valid http url
 * @param string
 * @returns {boolean}
 */
function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

/**
 * Checks if the request body contains all the required fields
 * @param req
 * @returns {{error: string}|{success:boolean}}
 */
function validateNewUserDetails(req) {
  const { firstName, lastName, email, profilePicture } = req.body;

  if (profilePicture && !isValidHttpUrl(profilePicture)) {
    return { error: 'profilePicture must be a valid URL' };
  }

  if (!firstName) {
    return { error: 'First name is missing, please provide it' };
  }
  if (!lastName) {
    return { error: 'Last name is missing, please provide it' };
  }
  if (!email) {
    return { error: 'Email is missing, please provide it' };
  }
  return { success: true };
}

export { validateNewUserDetails, isValidHttpUrl };

function createLoginTracker(userInfo) {
  let failedAttempts = 0;

  const loginAttempt = (passwordAttempt) => {
    if (failedAttempts >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    failedAttempts++;

    return "Attempt " + failedAttempts + ": Login failed";
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

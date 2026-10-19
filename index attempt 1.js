function createLoginTracker(userInfo) {
  let attemptCount = 0;  

const loginAttempt = (passwordAttempt) => {
  if (attemptCount >= 3){
    return "Account locked. Too many failed attempts.";
  }

  attemptCount++;
  if (passwordAttempt === userInfo.password) {
      return "Login successful!";
  }
  if (attemptCount>= 3) {
      return "Account locked. Too many failed attempts.";
  }

return "Incorrect password. Attempts used: " + attemptCount;
};

return loginAttempt
}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

const login = createLoginTracker({ password: "abc123" });

console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("abc123"));
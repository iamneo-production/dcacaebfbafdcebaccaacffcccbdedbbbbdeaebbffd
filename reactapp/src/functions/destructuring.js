// destructuring.js

// getUserIpDetails
const getUserIpDetails = ({ userName, userIp = '0.0.0.0' } = {}) => {
    return [userName, userIp];
  };
  
  // getTopThree
  const getTopThree = ([firstMark, secondMark, thirdMark, ...rest] = []) => {
    return [firstMark || null, secondMark || null, thirdMark || null];
  };
  
  export { getUserIpDetails, getTopThree };
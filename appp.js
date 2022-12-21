const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

// findUserByUsername:
function findUserByUsername(arr, username) {
    return arr.find(function(user){
      return user.username === username;
    })
  }

// removeUser: Got confusing was trying to use slice() and forgot about splice()
function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
    return usersArray.splice(foundIndex,1)[0];
  }
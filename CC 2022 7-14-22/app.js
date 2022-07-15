
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
const whosOnline = (friends) => {
    const status = {
      online: [],
      offline: [],
      away: []
    }
  
    for(const friend of friends) {
      if(friend.status === 'offline') {
        status.offline.push(friend.username)
      }
      else {
        if(friend.lastActivity > 10 && friend.status === 'online') {
          status.away.push(friend.username)
        } else {
          status.online.push(friend.username)
        } 
      }
    }
    for(const guests in status) {
      if(status[guests].length === 0) {
        delete status[guests];
      }
    }
    return status;
  }
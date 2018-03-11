const URL = 'https://api-qa.squadql.com/graphql?';
const TOKEN = "f1432e0d-557d-466f-877c-8fc6631e7594 1209600.DYMwsQ.H7GDNVW3KLgA7XCrP6y18v1Fl20";

export function fetchPlayers(teamId) {
  const query = `query fetchPlayers {
    auth(token: "${TOKEN}") {
      fantasyTeam(id: "${teamId}") {
        fantasyPlayers {
          id
          isStarting
          eligiblePositions
          realPlayer {
            fullName
            imageUrl
          }
        }
      }
    }
  }`;

  return request(query)
    .then(response => response.data.auth.fantasyTeam.fantasyPlayers);
}

export function fetchTeam(teamId) {
  const query = `query fetchTeam {
    auth(token: "${TOKEN}") {
      fantasyTeam(id: "${teamId}") {
        name
        logo
      }
    }
  }`;

  return request(query)
    .then(response => response.data.auth.fantasyTeam);
}

function request(query) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    Accept: 'application/json',
    body: JSON.stringify({ query })
  }).then(response => response.json());
}


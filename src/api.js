const URL = 'https://api-qa.squadql.com/graphql?';
const TOKEN = "f1432e0d-557d-466f-877c-8fc6631e7594 1209600.DYMwsQ.H7GDNVW3KLgA7XCrP6y18v1Fl20";

/**
 * Fetch players on a fantasty team.
 * @param {String} teamId
 * @return {Promise}
 */
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

/**
 * Fetch a team's details.
 * @param {String} teamId
 * @return {Promise}
 */
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

/**
 * Perform an api request.
 * @param {String} query
 * @return {Promise}
 */
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


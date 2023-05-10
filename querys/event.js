const eventQuery = `
  query getEvent($eventId: String!) {
    event(id: $eventId) {
      tickets {
          id
        }
      ticketBalances {
        id
      }
    }
  }
`;

const eventsIdQuery = `
      {
        events {
          id
        }
      }
    `;

const balanceQuery = `
    query getBalance($balanceId: String!) {
        balance(id: $balanceId) {
        owner {
            id
            }
        }
    }
`;

module.exports = {
  eventQuery,
  eventsIdQuery,
  balanceQuery,
};

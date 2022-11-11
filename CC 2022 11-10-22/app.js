// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
function rank(st, we, n) {
    let names = st.split(',')
    if (!st.length) return 'No participants'
    if (names.length < n) return 'Not enough participants'
    return names.map((_, i) => ({
        name: _,
        s: [..._.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) * we[i]
      }))
      .sort((a, b) => a.name > b.name)
      .sort((a, b) => b.s - a.s)
      [n - 1].name
  }
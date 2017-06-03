function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li')
  ranks.forEach((rank) => {
    rank.innerHTML = parseInt(rank.innerHTML) + n
  })
}

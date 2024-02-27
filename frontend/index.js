function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  let widgets = document.querySelectorAll("section div")
  widgets.forEach(div => div.classList.add("widget"))

  let quoteOfTheDay = document.querySelector(".quoteoftheday")
  let corporateSpeak = quoteOfTheDay.nextElementSibling
  let countdownWidget = corporateSpeak.nextElementSibling
  let friendsWidget = countdownWidget.nextElementSibling

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  let quoteDiv = document.createElement("div")
  let citationDiv = document.createElement("div")
  let randomizer = Math.floor(Math.random()*10)
  let quoteDate 
  if (quotes[randomizer].date === null) {quoteDate = "an unknown date"}
  else {quoteDate = quotes[randomizer].date}
  quoteDiv.textContent = quotes[randomizer].quote
  citationDiv.textContent = `${quotes[randomizer].author} in ${quoteDate}`
  quoteOfTheDay.insertAdjacentElement("beforeend", quoteDiv)
  quoteOfTheDay.insertAdjacentElement("beforeend", citationDiv)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  let randomizer1 = Math.floor(Math.random()*10)
  let randomizer2 = Math.floor(Math.random()*10)
  let randomizer3 = Math.floor(Math.random()*10)
  let randomizer4 = Math.floor(Math.random()*10)
  let randomizer5 = Math.floor(Math.random()*10)
  let randomizer6 = Math.floor(Math.random()*10)
  let speakP = document.createElement("p")
  let verb1 = verbs[randomizer1]
  let noun1 = nouns[randomizer2]
  let adverb1 = adverbs[randomizer3]
  let verb2 = verbs[randomizer4]
  let noun2 = nouns[randomizer5]
  let adverb2 = adverbs[randomizer6]
  speakP.textContent = `We need to ${verb1} our ${noun1} ${adverb1}
  in order to ${verb2} our ${noun2} ${adverb2}.`
  corporateSpeak.insertAdjacentElement("beforeend", speakP)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

let tP = document.createElement("p")
countdownWidget.insertAdjacentElement("beforeend", tP)
let tMinus = ["Liftoff! 🚀"]
function countDown(number) {
  let grow = 1
  while (number >= grow) {
    tMinus.unshift(`T-minus ${grow}...`)
    grow ++
  }
}
countDown(5)
let tPtext = tMinus[0]
tP.textContent = tPtext
let seconds = 1
let timer = setInterval(function() {
  tP.textContent = tMinus[seconds];
  seconds ++;
  if (seconds >= tMinus.length) {
    clearInterval(timer)
  }
}, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  let friendsP = document.createElement("p")
  friendsWidget.insertAdjacentElement("beforeend", friendsP)
  let randomizer7 =  Math.floor(Math.random()*15)
  let person = people[randomizer7]
  let friendsText = `${person.fname} ${person.lname} was born in ${person.dateOfBirth.slice(0, 4)} and`
  let friend1 = friendFinder(0)
  let friend2 = friendFinder(1)
  let friend3 = friendFinder(2)
  let friend4 = friendFinder(3)
  function friendFinder (number) {
    let friendName
    people.forEach(obj => {
      if (obj.id === person.friends[number])
      friendName = obj.fname + " " + obj.lname
    })
    return friendName
  }
  function personFinder(someone) {
    if (someone.friends.length === 0) {
      friendsText += ` has no friends.`
    } else if (someone.friends.length === 1) {
      friendsText += ` is friends with ${friend1}.`
    } else if (someone.friends.length === 2) {
      friendsText += ` is friends with ${friend1} and ${friend2}.`
    } else if (someone.friends.length === 3) {
      friendsText += ` is friends with ${friend1}, ${friend2} and ${friend3}.`
    } else if (someone.friends.length === 4) {
      friendsText += ` is friends with ${friend1}, ${friend2}, ${friend3} and ${friend4}.`
    } else {
      friendsText += ` has too many friends.`
    }
  }
  personFinder(person)
  friendsP.textContent = friendsText

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

widgets.forEach((widget, index) => {
  let idx = parseInt(index) + 1;
  widget.setAttribute("tabindex", idx)
})

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

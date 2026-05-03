const container = document.getElementById("card-container");

const cardsData = [
    {
        difficulty: "easy",
        question: "Who was the leader of Germany durring WW1?",
        choices: ["Kaiser Wilhelm", "Erich Ludendorff", "Paul von Hindenburg", "Helmuth von Moltke"],
        answer: "Kaiser Wilhelm",
        category: "ww1"
    },

    {
        difficulty: "easy",
        question: "When did World War 1 start?",
        choices: ["1914", "1912", "1916", "1918"],
        answer: "1914",
        category: "ww1"
    },

    {
        difficulty: "easy",
        question: "Which of these nations was NOT a member of the Central Powers",
        choices: ["Germany", "Austira", "Ottoman Empire", "Russian Empire"],
        answer: "Russian Empire",
        category: "ww1"
    },

    {
        difficulty: "easy",
        question: "World War 1 was also called?",
        choices: ["War of the Empires", "War of the Coalition", "The Great War", "Franco-German War"],
        answer: "The Great War",
        category: "ww1"
    },

    {
        difficulty: "easy",
        question: "World War 1 started after the assassination of which fiqure?",
        choices: ["Theodore Roosevelt", "Franz Ferdinand", "Tsar Nicholas", "George V"],
        answer: "Franz Ferdinand",
        category: "ww1"
    },

    {
        difficulty: "hard",
        question: "Kaiser Wilhelm II was a member of what German royal family?",
        choices: ["Hohenzollern", "Wittelsbach", "Saxe-Coburg and Gotha", "Glücksburg"],
        answer: "Hohenzollern",
        category: "ww1"
    },

    {
        difficulty: "hard",
        question: "The Spring Offensive of 1918 was also known as?",
        choices: ["Schlieffen–Moltke Plan", "Hundred Days Offensive", "Kaiserschlacht Plan", "Operation Citadel"],
        answer: "Kaiserschlacht Plan",
        category: "ww1"
    },

    {
        difficulty: "hard",
        question: "The treaty that pulled Russia out of the war was called what?",
        choices: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Brest-Litovsk", "Treaty of Moscow"],
        answer: "Treaty of Brest-Litovsk",
        category: "ww1"
    },

    {
        difficulty: "hard",
        question: "What was the largest naval battle of the war?",
        choices: ["Battle of the Mediterranean", "Battle of Imbros", "Battle of the English Strait", "Battle of Jutland"],
        answer: "Battle of Jutland",
        category: "ww1"
    },

    {
        difficulty: "hard",
        question: "The invasion of Belguim was part of what German war plan?",
        choices: ["Schlieffen–Moltke Plan", "Kaiserschlacht Plan", "Operation Michael", "Operation Downfall"],
        answer: "Schlieffen–Moltke Plan",
        category: "ww1"
    },

    {
        difficulty: "easy",
        question: "Which event started World War II in 1939?",
        choices: ["Attack on Pearl Harbor", "Invasion of Poland", "Battle of Britain", "D-Day"],
        answer: "Invasion of Poland",
        category: "ww2"
    },

    {
        difficulty: "easy",
        question: "Who was the leader of Nazi Germany during World War II?",
        choices: ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Franklin D. Roosevelt"],
        answer: "Adolf Hitler",
        category: "ww2"
    },

    {
        difficulty: "easy",
        question: "Which country was attacked at Pearl Harbor in 1941?",
        choices: ["United Kingdom", "France", "United States", "Australia"],
        answer: "United States",
        category: "ww2"
    },

    {
        difficulty: "medium",
        question: "What was the code name for the Allied invasion of Normandy?",
        choices: ["Operation Torch", "Operation Overlord", "Operation Barbarossa", "Operation Market Garden"],
        answer: "Operation Overlord",
        category: "ww2"
    },

    {
        difficulty: "medium",
        question: "Which battle is considered the turning point on the Eastern Front?",
        choices: ["Battle of Kursk", "Battle of Stalingrad", "Battle of Moscow", "Battle of Berlin"],
        answer: "Battle of Stalingrad",
        category: "ww2"
    },

    {
        difficulty: "medium",
        question: "Which alliance included Germany, Italy, and Japan?",
        choices: ["Allies", "Axis Powers", "Triple Entente", "NATO"],
        answer: "Axis Powers",
        category: "ww2"
    },

    {
        difficulty: "hard",
        question: "What was the name of the project that developed the atomic bomb?",
        choices: ["Apollo Project", "Manhattan Project", "Trinity Project", "Liberty Project"],
        answer: "Manhattan Project",
        category: "ww2"
    },

    {
        difficulty: "hard",
        question: "Which German general was known as the 'Desert Fox'?",
        choices: ["Erwin Rommel", "Heinz Guderian", "Karl Dönitz", "Wilhelm Keitel"],
        answer: "Erwin Rommel",
        category: "ww2"
    },

    {
        difficulty: "hard",
        question: "Which conference in 1945 divided Germany into occupation zones?",
        choices: ["Yalta Conference", "Tehran Conference", "Potsdam Conference", "Munich Conference"],
        answer: "Potsdam Conference",
        category: "ww2"
    },

    {
        difficulty: "medium",
        question: "Which country switched sides to join the Allies in 1943?",
        choices: ["Italy", "Spain", "Turkey", "Sweden"],
        answer: "Italy",
        category: "ww2"
    },

    {
        difficulty: "easy",
        question: "What was D-Day?",
        choices: ["The bombing of Hiroshima", "The invasion of Normandy", "Germany's surrender", "The attack on Pearl Harbor"],
        answer: "The invasion of Normandy",
        category: "ww2"
    },

    {
        difficulty: "medium",
        question: "Which city was the first to be hit by an atomic bomb?",
        choices: ["Nagasaki", "Tokyo", "Hiroshima", "Osaka"],
        answer: "Hiroshima",
        category: "ww2"
    },

    {
        difficulty: "easy",
        question: "What year did the American Revolution begin?",
        choices: ["1775", "1781", "1776", "1773"],
        answer: "1775",
        category: "american_revolution"
    },

    {
        difficulty: "easy",
        question: "Who was the first president of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
        answer: "George Washington",
        category: "american_revolution"
    },

    {
        difficulty: "easy",
        question: "Which battle was the turning point in the American Revolution?",
        choices: ["Battle of Yorktown", "Battle of Bunker Hill", "Battle of Saratoga", "Battle of Lexington"],
        answer: "Battle of Saratoga",
        category: "american_revolution"
    },

    {
        difficulty: "medium",
        question: "Which document declared American independence from Britain?",
        choices: ["The Federalist Papers", "The Articles of Confederation", "The Bill of Rights", "The Declaration of Independence"],
        answer: "The Declaration of Independence",
        category: "american_revolution"
    },

    {
        difficulty: "medium",
        question: "Who wrote the Declaration of Independence?",
        choices: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
        answer: "Thomas Jefferson",
        category: "american_revolution"
    },

    {
        difficulty: "medium",
        question: "Which country provided significant military support to the American colonies during the Revolution?",
        choices: ["Spain", "France", "Germany", "Netherlands"],
        answer: "France",
        category: "american_revolution"
    },

    {
        difficulty: "hard",
        question: "What was the name of the treaty that ended the American Revolution?",
        choices: ["Treaty of Paris 1783", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Utrecht"],
        answer: "Treaty of Paris 1783",
        category: "american_revolution"
    },

    {
        difficulty: "hard",
        question: "Which battle marked the final major military action of the American Revolution?",
        choices: ["Battle of Saratoga", "Battle of Bunker Hill", "Battle of Yorktown", "Battle of Princeton"],
        answer: "Battle of Yorktown",
        category: "american_revolution"
    },

    {
        difficulty: "hard",
        question: "Which American general switched sides and joined the British during the Revolution?",
        choices: ["Benedict Arnold", "George Washington", "Nathaniel Greene", "Francis Marion"],
        answer: "Benedict Arnold",
        category: "american_revolution"
    },

    {
        difficulty: "medium",
        question: "What was the name of the pamphlet written by Thomas Paine that urged Americans to fight for independence?",
        choices: ["The Rights of Man", "Common Sense", "The Federalist", "The American Crisis"],
        answer: "Common Sense",
        category: "american_revolution"
    },

    {
        difficulty: "easy",
        question: "Which of the following was a direct cause of the American Revolution?",
        choices: ["The Boston Tea Party", "The signing of the Bill of Rights", "The Constitution Convention", "The Whiskey Rebellion"],
        answer: "The Boston Tea Party",
        category: "american_revolution"
    },

    {
        difficulty: "medium",
        question: "What event took place on December 25, 1776, during the American Revolution?",
        choices: ["The Battle of Saratoga", "George Washington crossed the Delaware River", "The signing of the Treaty of Paris", "The first Continental Congress"],
        answer: "George Washington crossed the Delaware River",
        category: "american_revolution"
    },

    {
        difficulty: "easy",
        question: "What year did Napoleon Bonaparte crown himself Emperor of France?",
        choices: ["1799", "1804", "1812", "1815"],
        answer: "1804",
        category: "napoleonic_wars"
    },

    {
        difficulty: "easy",
        question: "Which battle is considered Napoleon's greatest victory?",
        choices: ["Battle of Leipzig", "Battle of Austerlitz", "Battle of Waterloo", "Battle of Borodino"],
        answer: "Battle of Austerlitz",
        category: "napoleonic_wars"
    },

    {
        difficulty: "hard",
        question: "Who defeated Napoleon at the Battle of Waterloo in 1815?",
        choices: ["Duke of Wellington", "Gebhard Leberecht von Blücher", "Emperor Alexander I of Russia", "Field Marshal Kutuzov"],
        answer: "Duke of Wellington",
        category: "napoleonic_wars"
    },

    {
        difficulty: "hard",
        question: "Which naval battle in 1805 marked a significant defeat for Napoleon's fleet?",
        choices: ["Battle of the Nile", "Battle of Trafalgar", "Battle of Copenhagen", "Battle of the Spanish Armada"],
        answer: "Battle of Trafalgar",
        category: "napoleonic_wars"
    },

    {
        difficulty: "medium",
        question: "Which country did Napoleon invade in 1812?",
        choices: ["Russia", "Spain", "Prussia", "Austria"],
        answer: "Russia",
        category: "napoleonic_wars"
    },

    {
        difficulty: "easy",
        question: "Where was Napoleon born?",
        choices: ["Corsica", "France", "Italy", "Switzerland"],
        answer: "Corsica",
        category: "napoleonic_wars"
    },

    {
        difficulty: "medium",
        question: "What was the name of the economic blockade Napoleon imposed on Britain?",
        choices: ["The Continental System", "The Berlin Decrees", "The Treaty of Fontainebleau", "The Navigation Acts"],
        answer: "The Continental System",
        category: "napoleonic_wars"
    },
]

function makeCards(dataArray) {
  container.innerHTML = ""; // clear existing cards

  dataArray.forEach(data => {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");

    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");

    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");

    const p1 = document.createElement("p");
    p1.textContent = data.question;

    const p2 = document.createElement("p");
    p2.textContent = data.answer;

    flipCardFront.appendChild(p1);
    flipCardBack.appendChild(p2);

    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    container.appendChild(flipCard);
  });
}

const filter = document.getElementById("categoryFilter");

filter.addEventListener("change", () => {
  const selected = filter.value;

  if (selected === "all") {
    makeCards(cardsData);
  } else {
    const filtered = cardsData.filter(card => card.category === selected);
    makeCards(filtered);
  }
});

makeCards()
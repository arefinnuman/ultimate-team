const playerList = [];

function display(players) {
    const tableBody = document.getElementById("ultimate-team");
    tableBody.innerHTML = "";
    if (playerList.length >= 5) {
        alert("Remainder: You can't select more.")
    }
    for (let i = 0; i < players.length; i++) {
        const name = playerList[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

}
function calculate(players) {
    let playerNumber;
    for (let i = 0; i < players.length; i++) {
        playerNumber = playerList.length;
    }
    document
        .getElementById("btn-calculate")
        .addEventListener("click", function () {
            const perPlayer = getValueById("per-player-field");
            if (isNaN(perPlayer) || (perPlayer <= 0)) {
                alert("Please enter a valid amount");
                return;

            }
            const totalExpenses = perPlayer * playerNumber;
            setValueById("total-expenses-field", totalExpenses);

            document
                .getElementById("btn-calculate-total")
                .addEventListener("click", function () {
                    
                    // Manager Expenses 
                    const managerExpenses = getValueById("manager-expenses-field");
                    if (isNaN(managerExpenses) || (managerExpenses <= 0)) {
                        alert("Please enter a valid amount");
                        return;
                    }

                    // Coach Expenses
                    const coachExpenses = getValueById("coach-expenses-field");
                    if (isNaN(coachExpenses) || (coachExpenses <= 0)) {
                        alert("Please enter a valid amount");
                        return;
                    }

                    // Calculate total Expenses
                    const newTotalExpenses = managerExpenses + coachExpenses + totalExpenses;
                    setValueById("new-total-expenses-field", newTotalExpenses);
                });
        });
}

function addPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName,
    };
    
    playerList.push(playerObj);
    setValueById("total-selection", playerList.length) 
    display(playerList);
    calculate(playerList);
}

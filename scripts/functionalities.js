const playerList = [];

function display(players) {
    const tableBody = document.getElementById("ultimate-team");
    tableBody.innerHTML = "";
    if (playerList.length >= 6) {
        alert("Remainder: You can't select more.");
    }

    for (let i = 0; i < players.length; i++) {
        const name = playerList[i].playerName;
        const list = document.createElement("list");
        list.innerHTML = `
            <li>${name}</li>
            `;
        tableBody.appendChild(list);
        console.log(playerList.length);
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
            if (isNaN(perPlayer) || perPlayer <= 0) {
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
                    if (isNaN(managerExpenses) || managerExpenses <= 0) {
                        alert("Please enter a valid amount");
                        return;
                    }

                    // Coach Expenses
                    const coachExpenses = getValueById("coach-expenses-field");
                    if (isNaN(coachExpenses) || coachExpenses <= 0) {
                        alert("Please enter a valid amount");
                        return;
                    }

                    // Calculate total Expenses
                    const newTotalExpenses =
                        managerExpenses + coachExpenses + totalExpenses;
                    setValueById("new-total-expenses-field", newTotalExpenses);
                });
        });
}

function addPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName,
    };

    if (playerList.length <= 4) {
        playerList.push(playerObj);
    } else {
        alert("You can't add more Players");
        return;
    }

    setValueById("total-selection", playerList.length);
    display(playerList);
    calculate(playerList);
}

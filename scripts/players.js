const playerList = [];

function display(players){
    const tableBody = document.getElementById("ultimate-team");
    tableBody.innerHTML = "";

    for(let i = 0; i < players.length; i++){
        const name = playerList[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);

        let playerNumber = playerList.length;
        // console.log(playerNumber);
        
    }
}
function calculate(players){
    for(let i = 0; i < players.length; i++){
        let playerNumber = playerList.length; 
        document.getElementById('btn-calculate').addEventListener('click', function(){
            const perPlayer = getValueById("per-player-field");
            const totalExpenses = perPlayer * playerNumber;
            setValueById('total-expenses-field', totalExpenses);
            return totalExpenses;
            
        });
    }   
}

function addPlayer(element){
    const playerName = element.parentNode.children[0].innerText

    const playerObj = {
        playerName : playerName
    }

    playerList.push(playerObj);

    display(playerList)
    calculate(playerList)

}



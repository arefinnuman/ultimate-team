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
    }
}
function calculate(players){
    let playerNumber;
    for(let i = 0; i < players.length; i++){
        playerNumber = playerList.length; 
    }   
     document.getElementById('btn-calculate').addEventListener('click', function(){
            const perPlayer = getValueById("per-player-field");
            const totalExpenses = perPlayer * playerNumber;
            setValueById('total-expenses-field', totalExpenses);
        
            document.getElementById('btn-calculate-total').addEventListener('click', function(){
                const managerExpenses = getValueById("manager-expenses-field");
                const coachExpenses = getValueById("coach-expenses-field");
                const newTotalExpenses =  managerExpenses + coachExpenses + totalExpenses;
                setValueById('new-total-expenses-field', newTotalExpenses);
            });   
        });
    
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

function disableBtn(btn) {
    btn.disabled = true;
}





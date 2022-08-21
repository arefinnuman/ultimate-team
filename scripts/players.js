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

function addPlayer(element){
    const playerName = element.parentNode.children[0].innerText

    const playerObj = {
        playerName : playerName
    }

    playerList.push(playerObj);

    display(playerList)

}



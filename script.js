let x = 1
let y = 1
document.getElementById('click').addEventListener('click', add_player)
document.getElementById('score').addEventListener('click', add_score)
document.getElementById('save').addEventListener('click', save)
document.getElementById('delete').addEventListener('click', delete_data)

function add_player() {
    x +=1 
    if(x >= 10) {
        x = 10
    }
    document.getElementById('v').innerText = `Player ${x}`
}

function save() {
    localStorage.setItem('number', x)
    localStorage.setItem('score', y)
    location.reload()
}

function add_score() {
    y += 2
    if(y >= 10) {
        y = 10
    }
    document.getElementById('s').innerText = `${y}`
}

function delete_data() {
    localStorage.clear()
    location.reload()
}


let player_table = document.createElement('table'), tr, td, row, cell

for(row = 0; row < 1; row ++) {
    player_name_row = document.createElement('tr')
    player_score_row = document.createElement('tr')
    for(cell = 0; cell < localStorage.getItem('number'); cell++) {
        let player_name = document.createElement('td') // create player_name
        player_name_row.appendChild(player_name) // add player name to row
        player_name.setAttribute('class', "player-name") // add player-class class to player_name
        player_name.innerHTML = `Player ${cell}`
    }
    for(cell = 0; cell < localStorage.getItem('score'); cell++) {
        let player_score = document.createElement('td')
        player_score_row.appendChild(player_score) //create player_score
        player_score.setAttribute('class', "player-name") // add player-class class to player_score
        player_score.innerHTML = `${cell}`
    }
    player_table.appendChild(player_name_row) // add player_name_row to player_table
    player_table.appendChild(player_score_row) // add player_score_row to player_table
}
document.body.appendChild(player_table) // add player_table to body



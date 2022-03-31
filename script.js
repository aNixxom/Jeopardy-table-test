let x = 1
let y = 1

let players = [
    'p1',
    'p2',
    'p3'
]
document.getElementById('click').addEventListener('click', add_player)
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

function delete_data() {
    localStorage.clear()
    location.reload()
}

let player_table = document.createElement('table'), tr, td, row, cell

player_table.setAttribute('class', "player-info-table")

for(row = 0; row < 1; row ++) {
    let player_name_row = document.createElement('tr') // table row
    let player_score_row = document.createElement('tr') // tabel row
    let player_button_row = document.createElement('tr') // table row

    player_name_row.setAttribute('id', "player_names") // id "player_names" to player_name_row
    player_score_row.setAttribute('id', "player_score_text") // add id "player_score_text" to player_score_row
    player_button_row.setAttribute('class', "player-score-buttons") // add class "player-score-buttons" to player_button_row
    player_button_row.setAttribute('id', "player_score_buttons") // add id "player_score_buttons" to player_button_row 

    for(cell = 0; cell < players.length; cell++) {
        let player_name = document.createElement('th') // create player_name
        player_name_row.appendChild(player_name) // add player name to row
        player_name.setAttribute('class', "headers") // add player-class class to player_name
        player_name.innerHTML = `Player ${cell}`
    }
    for(cell = 0; cell < players.length; cell++) {
        let player_score = document.createElement('th')
        player_score_row.appendChild(player_score) //create player_score
        player_score.setAttribute('class', "score_boxes") // add player-class class to player_score
        player_score.innerHTML = `${cell}`
    }
    for(cell = 0; cell < players.length; cell++) {
        let button_td_holder = document.createElement('th') // create td that will hold player button
        let add_button = document.createElement('button') // create add_button
        let take_button = document.createElement('button') // create take_button
        player_button_row.appendChild(button_td_holder)

        add_button.innerHTML = "ADD"
        add_button.setAttribute('class', "points-button") // add "points-button" class to add_button

        take_button.innerHTML = "TAKE" 
        take_button.setAttribute('class', "points-button") // add "points-button" class to take_button

        button_td_holder.appendChild(add_button) // append add_button to button_td_holder
        button_td_holder.appendChild(take_button) // append take_buton to button_td_holder

    }
    player_table.appendChild(player_name_row) // add player_name_row to player_table
    player_table.appendChild(player_score_row) // add player_score_row to player_table
    player_table.appendChild(player_button_row) // add player_button_row to plaer_table
}
document.body.appendChild(player_table) // add player_table to body
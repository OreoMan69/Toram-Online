const userid = document.getElementById('userid')
const PlayerName = document.getElementById('PlayerName')
const Class = document.getElementById('Class')
const Gender = document.getElementById('Gender')
const addBtn = document.getElementById('addBtn')
const updateBtn = document.getElementById('updateBtn')
const removeBtn = document.getElementById('removeBtn')

const database = firebase.database();
const rootRef = database.ref('players');

addBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    rootRef.child(userid.value).set({
        Player_Name: PlayerName.value,
        Class: Class.value,
        Gender: Gender.value,
    });
});

updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        Class: Class.value,
        Gender: Gender.value 
    };
    rootRef.child(userid.value).update(newData);
});

removeBtn.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(userid.value).remove();
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note-button');
const notesList = document.getElementById('notes-list');

let notes = [];

function saveNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        notes.push(noteText);
        updateNotesList();
        noteInput.value = '';
    }
}

function updateNotesList() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('li');
        noteItem.classList.add('note-item');
        noteItem.textContent = note;
        noteItem.addEventListener('click', () => {
            editNote(index);
        });
        notesList.appendChild(noteItem);
    });
}

function editNote(index) {
    const noteText = prompt('Edit your note:', notes[index]);
    if (noteText !== null && noteText.trim() !== '') {
        notes[index] = noteText.trim();
        updateNotesList();
    } else if (noteText === '') {
        if (confirm('Do you want to delete this note?')) {
            notes.splice(index, 1);
            updateNotesList();
        }
    }
}

saveNoteButton.addEventListener('click', saveNote);

function openPopup(popup) {
    popup.style.display = 'block';
}

function closePopup(popup) {
    popup.style.display = 'none';
}

// the accessablity button js 
const openAccessibilityPanelButton = document.getElementById('open-accessibility-panel');
const closeAccessibilityPanelButton = document.getElementById('close-accessibility-panel');
const accessibilityPanel = document.getElementById('accessibility-panel');
const textSizeInput = document.getElementById('text-size');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('background-color');
const fontSelect = document.getElementById('font-select');
const gameContent = document.getElementById('wrapper');

function openAccessibilityPanel() {
    accessibilityPanel.style.display = 'block';
}

function closeAccessibilityPanel() {
    accessibilityPanel.style.display = 'none';
}

function applyAccessibilityOptions() {
    gameContent.style.fontSize = textSizeInput.value + "px";
    gameContent.style.color = textColorInput.value;
    gameContent.style.backgroundColor = backgroundColorInput.value;
    gameContent.style.fontFamily = fontSelect.value;
    document.styleSheets[0].cssRules[0].style.color = textColorInput.value;
    console.log(document.styleSheets[0].cssRules[0]);
}

openAccessibilityPanelButton.addEventListener('click', openAccessibilityPanel);
closeAccessibilityPanelButton.addEventListener('click', closeAccessibilityPanel);
textSizeInput.addEventListener('input', applyAccessibilityOptions);
textColorInput.addEventListener('input', applyAccessibilityOptions);
backgroundColorInput.addEventListener('input', applyAccessibilityOptions);
fontSelect.addEventListener('change', applyAccessibilityOptions);
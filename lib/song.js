import Note from './note';

const song = [
  'A','D','G','D',
  'A','A','A','',
  'D','D','D','',
  'A','E','E','',
  'A','D','G','D',
  'A','A','A','',
  'D','D','A','D',
  'G','','',''
];

class Song {
  constructor(canvas, ctx, startY) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.startY = startY;
    this.notes = this.notes();
  }

  notes() {
    const notes = [];
    const canvas = this.canvas;
    const ctx = this.ctx;
    let startY = this.startY;
    song.forEach( function(note) {
      if (note === '') {
        startY -= 30;
        return;
      } else {
        let newNote = new Note(canvas, ctx, startY, note, 30);
        notes.push(newNote);
        startY -= 30;
      }
    });
    return notes;
  }

  move(distance) {
    this.notes.forEach( function(note) {
      note.move(distance);
    });
  }
}

export default Song;

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

const canon = [
  ['E', 2], ['A', 2], ['D', 2], ['G', 2],
  ['D', 2], ['G', 2], ['D', 2], ['A', 2],
  ['E', 2], ['A', 2], ['D', 2], ['G', 2],
  ['D', 2], ['G', 2], ['D', 2], ['A', 2],
  ['A', 0.5], ['D', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['D', 0.5], ['G', 0.5], ['D', 0.5],
  ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['D', 0.5], ['A', 0.5], ['E', 0.5], ['G', 0.5],
  ['A', 0.5], ['D', 0.5], ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['E', 0.5], ['A', 0.5],
  ['G', 0.5], ['E', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5], ['A', 0.5], ['D', 0.5], ['G', 0.5],
  ['E', 0.5], ['D', 0.25], ['A', 0.25], ['E', 0.5], ['D', 0.25], ['A', 0.25],
  ['E', 0.25], ['G', 0.25], ['A', 0.25], ['D', 0.25], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25],
  ['A', 0.5], ['G', 0.25], ['D', 0.25], ['A', 0.5], ['G', 0.25], ['D', 0.25],
  ['A', 0.25], ['E', 0.25], ['A', 0.25], ['D', 0.25], ['A', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25],
  ['D', 0.5], ['E', 0.25], ['A', 0.25], ['D', 0.5], ['G', 0.25], ['E', 0.25],
  ['G', 0.25], ['E', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25],
  ['G', 0.5], ['A', 0.25], ['D', 0.25], ['A', 0.5], ['E', 0.25], ['G', 0.25],
  ['D', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25], ['D', 0.25], ['A', 0.25], ['E', 0.25], ['G', 0.25],
  ['E', 2], ['A', 2], ['D', 2], ['G', 2],
  ['D', 2], ['G', 2], ['D', 2], ['A', 2],
  ['E', 2], ['A', 2], ['D', 2], ['G', 2],
  ['D', 2], ['G', 2], ['D', 2], ['A', 2]
];

class Song {
  constructor(canvas, ctx, startY, len) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.startY = startY;
    this.len = len;
    this.notes = this.notes();
  }

  notes() {
    const notes = [];
    const canvas = this.canvas;
    const ctx = this.ctx;
    const len = this.len;
    let startY = this.startY;
    canon.forEach( function(note) {
      if (note === '') {
        startY -= 30;
        return;
      } else {
        let newNote = new Note(canvas, ctx, startY, note[0], len*note[1]);
        notes.push(newNote);
        startY -= len*note[1];
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

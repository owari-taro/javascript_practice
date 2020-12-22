import { Note, AbstractNotestore } from './Notes.mjs';

const notes = [];
export class InmemoryNotesStore extends AbstractNotestore {
    async close() { }
    async update(key, title, body) {
        notes[key] = new Note(key, title, body);
        return notes[key];
    }

    async create(key, title, body) {
        notes[key] = new Note(key, title, body);
        return notes[key];
    }

    async read(key) {
        if (notes[key]) return notes[key];
        else throw new Error(`Note ${key} does not exist`);
    }

    async destroy(key) {
        if (notes[key]) {
            delete note[key];
        } else throw new Error(`note ${key} does not exist!`);
    }

    async keylist() {
        return Object.key(notes);
    }
    async count() {
        return notes.length;
    }

}
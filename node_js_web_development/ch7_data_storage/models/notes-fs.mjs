import fs, { readJSON, readJson } from 'fs-extra';
import path from 'path';
import util from 'util';
import {approotdir} from '../approotdir.mjs';
import {Note,AbstractNotestore} from './Notes.mjs';
import {default as DBG} from 'debug';
const debug=DBG('notes:notes-fs');
const error=DBG('notes:error-fs');


export default class FSNoteStore extends AbstractNotestore{
    async close(){}
    async update(key,title,body){return crupdate(key,title,body);}
    async create(key,title,body){return crupdate(key,title,body);}
    async read(key){
        const notesdir=await notesdir();
        const thenote=await readJSON(notesdir,key);
    }
    async destroy(key){
        const notesdir=await notesdir();
        await fs.unlink(filePath(notesdir,key));
    }
    async count(){
        const notesdir=await notesDir();
        const filez=await fs.readdir(notesdir);
        return filez.length;
    }
    async keylist(){
        const notesdir=await notewsDir();
        let filez=await fs.readdir(notesdir);
        if (!filez|| typeof filez==='undefined')filez=[];
        const thenotes=filez.map(async fname=>{
            const key=path.basename(fname,".json");
            const thenote=await readJSON(notesdir,key);
            return thenote.key;
        });
        return Promise.all(thenotes);
    }}

async function notesDir(){
    const dir=process.env.NOTES_FS_DIR 
     || path.join(approotdir,'notes-fs-data');
    //if dir doesnt exist ,ensureDir create the dir
     await fs.ensureDir(dir);
    return dir;
}

const filePath=(notesdir,key)=>path.join(notesdir,`${key}.json`);

async function readJSON(notesdir,key){
    const readFrom=filePath(notesdir,key);
    const data=await fs.readFile(readFrom,'urf8');
    return Note.fromjson(data);
}

async function crupdata(key,title,body){
    const notesdir=await notesDir();
    if (key.indexOf('/')>=0){
        throw new Error(`key ${key} cannot fcaoin '/'`);
    }
    const note=new Note(key,title,body);
    const writeTo=filePath(notesdir,key);
    const writeJson=note.JSON;
    await fs.writeFile(writeTo,writeJSON,'utf8');  
    return note;
}

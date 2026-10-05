import {env} from 'cloudflare:workers';
import {blankWorkspace, type Workspace} from './scholar';
export function database(){if(!env.DB)throw new Error('Storage is unavailable');return env.DB;}
export async function load(userId:string){const db=database();await db.prepare('INSERT OR IGNORE INTO workspaces (user_id,data,revision) VALUES (?,?,0)').bind(userId,JSON.stringify(blankWorkspace())).run();const row=await db.prepare('SELECT data,revision FROM workspaces WHERE user_id=?').bind(userId).first<{data:string;revision:number}>();if(!row)throw new Error('Workspace not found');return {workspace:JSON.parse(row.data) as Workspace,revision:row.revision};}
export async function save(userId:string,w:Workspace,revision:number){const result=await database().prepare('UPDATE workspaces SET data=?,revision=revision+1 WHERE user_id=? AND revision=?').bind(JSON.stringify(w),userId,revision).run();if(!result.meta.changes)throw new Error('CONFLICT');return revision+1;}

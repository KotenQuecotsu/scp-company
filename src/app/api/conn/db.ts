import {Pool} from 'pg';


let conn

if (!conn){
    conn = new Pool({
        user: 'postgres',
        password: 'h6lld6m6n',
        host: 'localhost',
        port: 5432,
        database: 'scp',

    });
}

export default conn;
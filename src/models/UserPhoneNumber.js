import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table= 'users_phn_no';

export async function getPhoneNumberByUserId(userId){
    const result = await connection
    .select('id','phn_no', 'type')
    .from(table)
    .where('users_id',userId);

    return camelize(result);
}

export async function add(params) {
    const insertData = snakeize(params);
    const [result] = await connection.batchInsert(table, insertData);
  
    return camelize(result);
}


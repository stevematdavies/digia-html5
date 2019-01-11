module.exports  = {
    migrate: 'INSERT INTO participant (name, email, phone) VALUES (?, ?, ?)',
    add_participant: 'INSERT INTO participant (name, email, phone) VALUES (?, ?, ?)',
    update_participant:  'UPDATE participant SET name = (?), email = (?), phone = (?) WHERE id = (?)',
    delete_participant: 'DELETE from participant where id= (?)'
};

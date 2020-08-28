import connection from '../db.js'


export const getMember = (req,res) => {
    connection.query(
        "SELECT * FROM customer WHERE isDeleted = 0",
        (err, rows, fields) => {
            if (err) throw err;
            res.send(rows)
        }
    )
};

export const postMember = (req,res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, ?, now(), 0)';
    let image = 'http://localhost:5000/image/' + req.file.filename;
    const {
        body: {name, birth, gender, location, job }
      } = req;

      const params = [image,name,birth,gender,location,job]
      connection.query(sql,params,
        async (err,rows,fields) => {

            await res.send(rows)
        }
    )


}

export const deleteMember = (req,res) => {
    let sql = "UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?";
    const {
        params : {id}
    } = req;

    connection.query(sql,id,
        (err,rows,fields) => {
            res.send(rows)

        })
        
}



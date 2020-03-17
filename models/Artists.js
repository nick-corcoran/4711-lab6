var DB = require("./util/databaseConnection.js")

async function getAllArtists() {
    try {
        var data = await DB.execute('select * from Artists ORDER BY ID');
        return data;
    }
    catch (err) {
        console.log(err)
    }
}



async function addArtist(name, about, image) {
    try {
        var index = await DB.execute('SELECT COUNT(*) as count FROM Artists')
        index = index[0][0].count+1;
        await DB.execute('insert into Artists (ID, Name,About,Image)VALUES(?,?,?,?)', [index,name, about, image])
        // var newData =await DB.execute('select* from Artists ORDER BY ID');
        // return newData;
    } catch (err) {
        console.log(err)
    }
}






async function deleteArtist(ArtistId) {
    try {
        console.log("delete-artist" + ArtistId)
        await DB.execute('Delete from Artists where ID = ?', [ArtistId])
        
        await DB.execute('UPDATE Artists  SET ID = ID-1 WHERE ID>? ORDER BY ID', [ArtistId])
        console.log("update-auto")
        // var newData = await DB.execute('select* from Artists ORDER BY ID');
        // console.log("newData")
        // return newData;
    } catch (err) {
        console.log(err)
    }
}


async function search(Phrase) {
    console.log("index: "+Phrase)
    var data = await DB.execute("SELECT * FROM Artists where Name like ?",['%'+Phrase+'%'])
    console.log(data)
    return data[0];
}

async function loginCheck(username, password) {
    var data = await DB.execute("SELECT * FROM Login WHERE Username = ? && Password = ?", [username, password])
    if (data[0].length != 0) {   
        return true;
    }
    return false;
}

module.exports = {
    getAllArtists: getAllArtists,
    addArtist: addArtist,
    deleteArtist: deleteArtist,
    search: search,
    loginCheck:loginCheck
    
}
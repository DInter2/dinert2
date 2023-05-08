import {google}  from 'googleapis';
const fs = require('fs').promises;
const googleFolderId = "QkVsejmN1SqJ2gQGksWiesh71xxiVJi9"

async function uploadFile(){
  try {
    const auth  = new google.auth.GoogleAuth({
      keyFilename: 'googledrive.json',
      // Scopes can be specified either as an array or as a single, space-delimited string.
      scopes: ['https://www.googleapis.com/auth/drive']
    });
    const driverservice = google.drive({
      version: "v3",
      auth
    })
    const fileMeteData = {
      'name': 'snowplace.jpg',
      'parents': [googleFolderId]
    }
    const media = {
      mimeType: "image/jpg",
      body: fs.createReadStream('./gc.jpg')
    }
    const response = await driverservice.files.create({
      requestBody: fileMeteData,
      media: media,
      fields: "id"
    })
    return response.data.id
  } catch (error) {
    console.log(error)
  }
}
export default uploadFile

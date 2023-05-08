import { drive_v3, google } from 'googleapis';
export async function getEmojiList() {
  try {
    const target = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    console.log(target)
    // const jwt = new google.auth.JWT(
    //   process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
    //   "",
    //   (process.env.GOOGLE_DRIVE_CLIENT_EMAIL || '').replace(/\\n/g, '\n'),
    //   target
    // );
    // const drive = google.drive({version: "v3", auth: jwt});

    // const response = await drive.files.list({
    //   pageSize: 10,
    //   fields: 'nextPageToken, files(id, name)',
    // });
    // const files = response.data.files as drive_v3.Schema$File[];
    // if (files.length === 0) {
    //   console.log('No files found.');
    //   return;
    // }
    // console.log('Files:');
    // files.map((file) => {
    //   console.log(`${file.name} (${file.id})`);
    // });
  } catch (err) {
    console.log(err);
  }
  return [];
}

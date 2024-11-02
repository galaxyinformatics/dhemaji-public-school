import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const notices = await sql`SELECT * FROM Announcement where instituteId = 1 order by id desc;`;
    return response.status(200).json({ notices: notices.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
 
}
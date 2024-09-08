import { useEffect, useState } from 'react';

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notices from your API
    async function fetchNotices() {
      try {
        const response = await fetch('/api/getNotices'); // Adjust the API path if necessary
        const data = await response.json();
        setNotices(data.notices);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    }

    fetchNotices();
  }, []);

  return (
    <marquee direction="up" scrollamount="5" style={{ height: '340px' }}>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id}>
            <i>{new Date(notice.created_at).toLocaleDateString()} :</i> {notice.title}
            <p style={{ color: 'red' }}>New</p>
          </li>
        ))}
      </ul>
    </marquee>
  );
}

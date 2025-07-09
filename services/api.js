import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ltovkgdrqlvdzgvtjxsa.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0b3ZrZ2RycWx2ZHpndnRqeHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTAzMzYsImV4cCI6MjA2NzQ4NjMzNn0.24iqlv0rC-V6nwL8nEP_0DCnwUV2jNoGeOVbG94EF2c",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0b3ZrZ2RycWx2ZHpndnRqeHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTAzMzYsImV4cCI6MjA2NzQ4NjMzNn0.24iqlv0rC-V6nwL8nEP_0DCnwUV2jNoGeOVbG94EF2c"
    }
})



import React from 'react';
import { LessonCard } from './components/LessonCard';

export default function App() {
  const lessons = [
    {
      id: 1,
      topic: 'React та JSX',
      date: '15.06.2026',
      isOnline: true,
      zoomLink: 'zoom.com',
    },
    {
      id: 2,
      topic: 'Компоненти',
      date: '17.06.2026',
      isOnline: false,
    },
    {
      id: 3,
      topic: 'рендеринг React',
      date: '20.06.2026',
      isOnline: true,
      zoomLink: 'zoom.com',
    },
    {
      id: 4,
      topic: 'Практична робота',
      date: '22.06.2026',
      isOnline: false,
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Розклад</h1>
      <h2>Найближчі заняття</h2>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          topic={lesson.topic}
          date={lesson.date}
          isOnline={lesson.isOnline}
          zoomLink={lesson.zoomLink}
        />
      ))}
    </div>
  );
}

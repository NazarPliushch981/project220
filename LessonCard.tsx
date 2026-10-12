import React from 'react';
import clsx from 'clsx';
interface LessonProps {
  topic: string;
  date: string;
  isOnline: boolean;
  zoomLink?: string;
}

export function LessonCard({ topic, date, isOnline, zoomLink }: LessonProps) {
  return (
    <div
      className={clsx('lesson-card', {
        'online-bg': isOnline,
        'offline-bg': !isOnline,
      })}
      style={{
        padding: '15px',
        margin: '10px 0',
        borderRadius: '8px',
        color: '#fff',
        backgroundColor: isOnline ? '#007bff' : '#6f42c1',
      }}
    >
      <h3>{topic}</h3>
      <p><b>Дата час:</b> {date}</p>
      <p><b>Формат:</b> {isOnline ? 'Онлайн' : 'Офлайн'}</p>
      
      {isOnline && zoomLink && (
        <a 
          href={zoomLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '8px 12px', background: '#fff', color: '#000', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}
        >
          Підключитис
        </a>
      )}

      {!isOnline && (
        <p style={{ fontStyle: 'italic', background: 'rgba(0,0,0,0.2)', padding: '5px' }}>
          Аудиторія 404
        </p>
      )}
    </div>
  );
}

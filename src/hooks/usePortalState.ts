import { useState, useEffect, useCallback } from 'react';
import { Language, ReferenceItem, TopicScheduleMap } from '../types';
import { STORAGE_KEYS } from '../config/constants';
import { DEFAULT_REFERENCES } from '../data/references';

function parseTopicHash(): number | null {
  if (typeof window === 'undefined') return null;
  const match = window.location.hash.match(/^#\/topic\/(\d+)$/);
  if (!match) return null;
  const id = Number(match[1]);
  return id >= 1 && id <= 15 ? id : null;
}

export function usePortalState() {
  // 1. Language state (default: 'uz')
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language | null;
      if (saved === 'uz' || saved === 'en' || saved === 'ru') return saved;
    } catch {
      // ignore storage errors
    }
    return 'uz';
  });

  // 2. Theme state (respects prefers-color-scheme initially)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {
      // ignore storage errors
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // 3. Completed topics
  const [completedTopics, setCompletedTopics] = useState<number[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // 4. Bookmarked ("Muhim") topics
  const [bookmarkedTopics, setBookmarkedTopics] = useState<number[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_TOPICS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // 5. Teacher schedules (Date & Group per topic)
  const [schedules, setSchedules] = useState<TopicScheduleMap>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.TOPIC_SCHEDULES);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // 6. Editable references [1]-[6]
  const [references, setReferences] = useState<ReferenceItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_REFERENCES);
      return raw ? JSON.parse(raw) : DEFAULT_REFERENCES;
    } catch {
      return DEFAULT_REFERENCES;
    }
  });

  // 7. Active Topic Modal via URL hash (#/topic/4)
  const [activeTopicId, setActiveTopicId] = useState<number | null>(() => parseTopicHash());

  // 8. Admin / Instructor Mode session state
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Sync HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // Sync HTML dark class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  // Sync completed topics
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(completedTopics));
    } catch {
      // ignore
    }
  }, [completedTopics]);

  // Sync bookmarked topics
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKED_TOPICS, JSON.stringify(bookmarkedTopics));
    } catch {
      // ignore
    }
  }, [bookmarkedTopics]);

  // Sync schedules
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TOPIC_SCHEDULES, JSON.stringify(schedules));
    } catch {
      // ignore
    }
  }, [schedules]);

  // Sync references
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_REFERENCES, JSON.stringify(references));
    } catch {
      // ignore
    }
  }, [references]);

  // Listen to browser hashchange (back/forward or shared URL #/topic/4)
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTopicId(parseTopicHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openTopic = useCallback((id: number) => {
    if (id < 1 || id > 15) return;
    window.location.hash = `#/topic/${id}`;
    setActiveTopicId(id);
  }, []);

  const closeTopic = useCallback(() => {
    if (window.location.hash.startsWith('#/topic/')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setActiveTopicId(null);
  }, []);

  const toggleCompleted = useCallback((id: number) => {
    setCompletedTopics((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const toggleBookmark = useCallback((id: number) => {
    setBookmarkedTopics((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const updateSchedule = useCallback((topicId: number, field: 'date' | 'group', value: string) => {
    setSchedules((prev) => ({
      ...prev,
      [topicId]: {
        date: prev[topicId]?.date || '',
        group: prev[topicId]?.group || '',
        [field]: value,
      },
    }));
  }, []);

  const resetReferences = useCallback(() => {
    setReferences(DEFAULT_REFERENCES);
  }, []);

  return {
    lang,
    setLang: setLangState,
    isDark,
    toggleTheme: () => setIsDark((d) => !d),
    completedTopics,
    toggleCompleted,
    bookmarkedTopics,
    toggleBookmark,
    schedules,
    updateSchedule,
    references,
    setReferences,
    resetReferences,
    activeTopicId,
    openTopic,
    closeTopic,
    isAdmin,
    setIsAdmin,
  };
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TOPICS, getTopicById } from './data/topics';
import { usePortalState } from './hooks/usePortalState';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutCourseSection } from './components/AboutCourseSection';
import { TopicsSection } from './components/TopicsSection';
import { ClimateDashboard } from './components/ClimateDashboard';
import { GlossarySection } from './components/GlossarySection';
import { GeneralQuizSection } from './components/GeneralQuizSection';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';
import { TopicDetailModal, TopicDetailTab } from './components/TopicDetailModal';
import { CommandPalette } from './components/CommandPalette';
import { AdminModal } from './components/AdminModal';

export default function App() {
  const {
    lang,
    setLang,
    isDark,
    toggleTheme,
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
  } = usePortalState();

  const [commandOpen, setCommandOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [initialModalTab, setInitialModalTab] = useState<TopicDetailTab>('content');

  const activeTopic = useMemo(
    () => (activeTopicId !== null ? getTopicById(activeTopicId) ?? null : null),
    [activeTopicId]
  );

  // Global Ctrl+K / Cmd+K shortcut for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenTopicWithTab = useCallback(
    (topicId: number, tab: TopicDetailTab = 'content') => {
      setInitialModalTab(tab);
      openTopic(topicId);
    },
    [openTopic]
  );

  const handleAdminButtonClick = useCallback(() => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setAdminModalOpen(true);
    }
  }, [isAdmin, setIsAdmin]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Main Page Content (hidden during print when a Topic Modal is open so PDF prints cleanly) */}
      <div className={activeTopic ? 'no-print' : ''}>
        <Navbar
          lang={lang}
          onChangeLang={setLang}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenSearch={() => setCommandOpen(true)}
        />

        <main>
          <HeroSection lang={lang} />

          <AboutCourseSection lang={lang} />

          <TopicsSection
            topics={TOPICS}
            lang={lang}
            completedTopics={completedTopics}
            onToggleCompleted={toggleCompleted}
            bookmarkedTopics={bookmarkedTopics}
            onToggleBookmark={toggleBookmark}
            schedules={schedules}
            onUpdateSchedule={updateSchedule}
            isAdmin={isAdmin}
            onOpenTopic={(id) => handleOpenTopicWithTab(id, 'content')}
          />

          <ClimateDashboard lang={lang} />

          <GlossarySection
            lang={lang}
            onOpenTopic={(id) => handleOpenTopicWithTab(id, 'terms')}
          />

          <GeneralQuizSection
            lang={lang}
            onOpenTopic={(id) => handleOpenTopicWithTab(id, 'content')}
          />

          <ReferencesSection
            lang={lang}
            references={references}
            onUpdateReferences={setReferences}
            onResetReferences={resetReferences}
            isAdmin={isAdmin}
          />
        </main>

        <Footer
          lang={lang}
          isAdmin={isAdmin}
          onAdminButtonClick={handleAdminButtonClick}
        />
      </div>

      {/* Topic Detail Modal (#/topic/:id) */}
      <TopicDetailModal
        topic={activeTopic}
        totalTopics={TOPICS.length}
        lang={lang}
        isDark={isDark}
        initialTab={initialModalTab}
        isCompleted={activeTopic ? completedTopics.includes(activeTopic.id) : false}
        onToggleCompleted={toggleCompleted}
        isBookmarked={activeTopic ? bookmarkedTopics.includes(activeTopic.id) : false}
        onToggleBookmark={toggleBookmark}
        onClose={closeTopic}
        onNavigateTopic={(id) => handleOpenTopicWithTab(id, initialModalTab)}
      />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandOpen}
        lang={lang}
        onClose={() => setCommandOpen(false)}
        onSelectTopic={handleOpenTopicWithTab}
      />

      {/* Instructor / Admin PIN Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        lang={lang}
        onClose={() => setAdminModalOpen(false)}
        onSuccess={() => setIsAdmin(true)}
      />
    </div>
  );
}

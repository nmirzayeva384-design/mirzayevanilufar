import { Topic, QuizQuestion } from '../types';
import { TOPICS_1_TO_3 } from './topics1to3';
import { TOPICS_4_TO_6 } from './topics4to6';
import { TOPICS_7_TO_9 } from './topics7to9';
import { TOPICS_10_TO_12 } from './topics10to12';
import { TOPICS_13_TO_15 } from './topics13to15';

/**
 * Barcha 15 ta o'quv mavzusining birlashtirilgan ro'yxati.
 * Mavzu matnlarini tahrirlash uchun tegishli `topics1to3.ts` ... `topics13to15.ts` fayllarini oching.
 */
export const TOPICS: Topic[] = [
  ...TOPICS_1_TO_3,
  ...TOPICS_4_TO_6,
  ...TOPICS_7_TO_9,
  ...TOPICS_10_TO_12,
  ...TOPICS_13_TO_15,
];

export function getTopicById(id: number): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

export function getAllQuizQuestions(): QuizQuestion[] {
  return TOPICS.flatMap((topic) =>
    topic.quiz.map((q) => ({
      ...q,
      topicId: topic.id,
    }))
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    id: 'intro',
    title: 'למה חשוב לעזור בבית? 🏠',
    content: 'כשאנחנו עוזרים בבית, אנחנו לומדים להיות אחראים, עצמאיים ומפתחים כישורי חיים חשובים. זו דרך נהדרת להראות אכפתיות למשפחה שלנו!'
  },
  {
    id: 'tasks',
    title: 'איזה משימות אפשר לעשות? 📝',
    tasks: [
      { task: 'סידור החדר', age: '4+' },
      { task: 'קיפול כביסה', age: '6+' },
      { task: 'עריכת שולחן', age: '5+' },
      { task: 'האכלת חיות מחמד', age: '6+' },
      { task: 'שטיפת כלים', age: '8+' },
      { task: 'טאטוא/שואב', age: '7+' },
    ]
  },
  {
    id: 'discussion',
    title: 'בואו נדבר על זה! 💭',
    questions: [
      'איך אתם מרגישים כשאתם עוזרים בבית?',
      'איזו משימה אתם הכי אוהבים לעשות?',
      'האם יש משימה שאתם לא אוהבים? למה?',
      'איך אפשר להפוך את המשימות לכיפיות יותר?'
    ]
  },
  {
    id: 'rewards',
    title: 'תגמול והערכה ⭐',
    content: 'חשוב לזכור שעזרה בבית היא חלק מלהיות חבר במשפחה. אבל אפשר גם ליצור מערכת תגמול כיפית!',
    ideas: [
      'טבלת מדבקות שבועית',
      'זמן איכות מיוחד עם ההורים',
      'בחירת ארוחת ערב או פעילות משפחתית',
      'הכרה והערכה מילולית'
    ]
  }
];

// Custom hook for section visibility
function useSectionInView(threshold = 0.2) {
  return useInView({
    threshold,
    triggerOnce: true
  });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-primary/10 to-secondary/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold title-gradient mb-6">
            משימות בבית
          </h1>
          <p className="text-xl md:text-2xl text-text-dark/80 max-w-2xl mx-auto">
            בואו נלמד ביחד על החשיבות של עזרה בבית ואיך אנחנו יכולים לתרום למשפחה שלנו!
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      {sections.map((section) => {
        const { ref, inView } = useSectionInView();

        return (
          <section
            key={section.id}
            ref={ref}
            id={section.id}
            className={`section-container ${
              section.id === 'tasks' ? 'bg-secondary/10' :
              section.id === 'discussion' ? 'bg-accent/10' :
              section.id === 'rewards' ? 'bg-primary/10' : ''
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                {section.title}
              </h2>

              {section.id === 'tasks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.tasks?.map((task, index) => (
                    <motion.div
                      key={task.task}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="card hover:bg-primary/5"
                    >
                      <h3 className="text-xl font-semibold mb-2">{task.task}</h3>
                      <p className="text-sm text-text-dark/70">גיל מומלץ: {task.age}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {section.id === 'discussion' && (
                <div className="space-y-6">
                  {section.questions?.map((question, index) => (
                    <motion.div
                      key={question}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="card flex items-start gap-4"
                    >
                      <QuestionMarkCircleIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-lg">{question}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {section.id === 'rewards' && (
                <div className="space-y-6">
                  <p className="text-lg text-center mb-8">{section.content}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.ideas?.map((idea, index) => (
                      <motion.div
                        key={idea}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="card flex items-center gap-3"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                        <p>{idea}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {section.id === 'intro' && (
                <div className="text-center text-lg leading-relaxed">
                  <p className="mb-6">{section.content}</p>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl"
                  >
                    👨‍👩‍👧‍👦
                  </motion.div>
                </div>
              )}
            </motion.div>
          </section>
        );
      })}
    </main>
  );
}

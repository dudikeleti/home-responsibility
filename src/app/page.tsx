'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    id: 'intro',
    title: 'משפחת קלטי - עוזרים ביחד! ✨',
    content: 'היי יונתן, יעל ומיכל! כשאנחנו עוזרים בבית, אנחנו הופכים את הבית שלנו למקום נעים יותר לכולם. זו הזדמנות נהדרת להראות אחריות ולתרום למשפחה שלנו!',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'tasks',
    title: 'משימות שאפשר לעשות בבית 🏠',
    tasks: [
      { task: 'הדחת כלים והוצאה מהמדיח', icon: '🍽️', description: 'לפנות את המדיח כשהוא נקי ולהכניס כלים מלוכלכים' },
      { task: 'ניקוי חדר אמבטיה', icon: '🚿', description: 'ניקוי המקלחת, הכיור והאסלה' },
      { task: 'טיול עם מקס', icon: '🐕', description: 'להוציא את מקס לטיול בוקר/ערב' },
      { task: 'סידור החדר', icon: '🛏️', description: 'סידור כללי, אוורור החדר וסידור המיטה' },
      { task: 'ניקוי מטבח', icon: '🧽', description: 'ניקוי השיש, הכיריים והרצפה' },
      { task: 'קניות בסופר', icon: '🛒', description: 'עזרה בקניות שבועיות או השלמות' },
      { task: 'כביסות', icon: '👕', description: 'קיפול, תלייה והכנסת כביסה למכונה' },
      { task: 'שואב אבק', icon: '🧹', description: 'שאיבת אבק בחדרים ובסלון' },
      { task: 'האכלת מקס', icon: '🦴', description: 'לדאוג שלמקס יש מים ואוכל טרי' }
    ]
  },
  {
    id: 'discussion',
    title: 'בואו נדבר על זה! 💫',
    questions: [
      'איך אתם מרגישים כשהבית נקי ומסודר? 🏡',
      'איזו משימה כל אחד מכם הכי אוהב לעשות? 💝',
      'איך אפשר לחלק את המשימות בצורה הוגנת? 🤝',
      'איך מקס מרגיש כשלוקחים אותו לטיול? 🐕',
      'מה דעתכם על רוטציה שבועית של משימות? 🔄',
      'איך אפשר לעזור אחד לשני במשימות? 🤗'
    ]
  },
  {
    id: 'schedule',
    title: 'איך מתארגנים? 📅',
    content: 'בואו נחשוב ביחד איך לארגן את המשימות בצורה שתתאים לכולם, בהתחשב בלוח הזמנים של כל אחד:',
    scheduleIdeas: [
      { text: 'יונתן - אחרי אימון כדורסל', icon: '🏀' },
      { text: 'יעל - בין שיעורי הפסנתר', icon: '🎹' },
      { text: 'מיכל - אחרי שיעורי בית', icon: '📚' },
      { text: 'משימות משותפות בסופ"ש', icon: '🌞' }
    ]
  },
  {
    id: 'rewards',
    title: 'רעיונות לתגמול והערכה 🌈',
    content: 'כשכולם עוזרים, כולם מרוויחים! הנה כמה רעיונות איך אפשר להעריך את העזרה של כל אחד:',
    ideas: [
      { text: 'ערב משפחתי - בחירת סרט או משחק', icon: '🎮' },
      { text: 'בחירת מסעדה לארוחת ערב', icon: '🍕' },
      { text: 'זמן איכות מיוחד עם אבא או אמא', icon: '❤️' },
      { text: 'הזמנת חברים הביתה', icon: '👥' },
      { text: 'תוספת לדמי הכיס', icon: '💰' },
      { text: 'יציאה משפחתית מיוחדת', icon: '🎡' }
    ]
  },
  {
    id: 'special',
    title: 'משימות מיוחדות 🌟',
    content: 'לפעמים יש משימות מיוחדות שדורשות שיתוף פעולה של כולם:',
    specialTasks: [
      { text: 'סידור הבית לפני אירוח', icon: '🎉' },
      { text: 'ניקיון יסודי לפני חג', icon: '✨' },
      { text: 'ארגון וסידור הארונות', icon: '📦' },
      { text: 'הכנת ארוחת ערב משפחתית', icon: '👨‍🍳' }
    ]
  }
];

function Section({ section }: { section: typeof sections[0] }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      id={section.id}
      className={`section-container ${
        section.id === 'tasks' ? 'bg-secondary/5' :
        section.id === 'discussion' ? 'bg-accent/5' :
        section.id === 'rewards' ? 'bg-primary/5' : ''
      }`}
    >
      <div className="section-background">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? {
              opacity: 0.1,
              scale: 1,
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%',
            } : {}}
            transition={{ duration: 2, delay: i * 0.1 }}
          >
            {section.id === 'tasks' ? '✨' :
             section.id === 'discussion' ? '💭' :
             section.id === 'rewards' ? '🌟' : '❤️'}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {section.title}
        </h2>

        {section.id === 'tasks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.tasks?.map((task, index) => (
              <motion.div
                key={task.task}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card group"
              >
                <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                  {task.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{task.task}</h3>
                <p className="text-lg text-text-dark/70">{task.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {section.id === 'discussion' && (
          <div className="space-y-8">
            {section.questions?.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card flex items-start gap-6 group"
              >
                <QuestionMarkCircleIcon className="w-8 h-8 text-secondary flex-shrink-0 mt-1 
                  transform transition-transform group-hover:rotate-12" />
                <p className="text-xl">{question}</p>
              </motion.div>
            ))}
          </div>
        )}

        {(section.id === 'rewards' || section.id === 'special' || section.id === 'schedule') && (
          <div className="space-y-8">
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              {section.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(section.ideas || section.specialTasks || section.scheduleIdeas)?.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card flex items-center gap-4 group"
                >
                  <div className="text-3xl transform transition-transform group-hover:scale-125 group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <p className="text-xl">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {section.id === 'intro' && (
          <div className="text-center text-xl leading-relaxed max-w-3xl mx-auto">
            <p className="mb-8">{section.content}</p>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              {section.icon}
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-primary/10 via-secondary/5 to-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-8"
          >
            ✨
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold title-gradient mb-8">
            משימות בבית
          </h1>
          <p className="text-2xl md:text-3xl text-text-dark/80 max-w-3xl mx-auto leading-relaxed">
            בואו נארגן את המשימות בבית בצורה כיפית ומשפחתית!
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </main>
  );
}

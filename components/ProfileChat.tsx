'use client';

import { motion } from 'framer-motion';

export default function ProfilChat() {
  // ⚠️ DO NOT CHANGE YOUR EMAIL
  const email = "sandeshdeshmukh2704@gmail.com";

  const messages = [
    "Hey 👋",
    "Frontend developer focused on detail",
    "Let’s build something meaningful ✨",
    "Grab my email, and get in touch ✌️",
  ];

  return (
    <motion.div
      className="absolute bottom-6 left-4 right-4 space-y-2 pointer-events-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.35,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {messages.map((text, i) => {
        const isFirst = i === 0;
        const isLast = i === messages.length - 1;
        const isMiddle = !isFirst && !isLast;

        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                },
              },
            }}
            className="flex justify-start"
          >
            <div
              className={`bg-gradient-to-br from-[#111] to-[#0b0b0b]
                w-fit px-3 py-2 border border-white/10 backdrop-blur-md
                text-sm text-white font-medium

                ${isFirst && 'rounded-t-2xl rounded-br-2xl rounded-bl-sm'}
                ${isMiddle && 'rounded-l-sm rounded-tr-2xl rounded-br-2xl'}
                ${isLast && 'rounded-b-2xl rounded-tl-sm rounded-tr-2xl'}
              `}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="text-sm text-gray-300 font-medium"
              >
                {text.includes("Grab") ? (
                  <>
                    <a
                      href={`mailto:${email}`}
                      className="pointer-events-auto underline underline-offset-4 decoration-pink-500 hover:text-pink-400 transition"
                    >
                      Grab
                    </a>
                    , and get in touch ✌️
                  </>
                ) : (
                  text
                )}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
  const Transitions = () => (
    <>
      <OriginalComponent />

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  // Set displayName for debugging and ESLint
  Transitions.displayName = `WithTransition(${OriginalComponent.displayName || OriginalComponent.name})`;

  return Transitions;
};

export default withTransition;

import "./Loader.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
        }}
      >
        Lakshit<span>.</span>
      </motion.h1>
    </motion.div>
  );
}

export default Loader;
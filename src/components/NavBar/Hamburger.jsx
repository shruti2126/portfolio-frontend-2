/** @format */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";
import { Links } from "./Links";
import { Squash as Hamburger } from "hamburger-react";
import "../../styles/styles.css";

const Ham = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} id="hamburger">
      <Hamburger
        label="hamburger-menu"
        color="white"
        direction="right"
        toggled={isOpen}
        size={20}
        toggle={setOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="center-hamlinks"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Links collapsed={isOpen} open={setOpen} />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ham;

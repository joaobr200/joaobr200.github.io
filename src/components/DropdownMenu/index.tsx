import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import * as S from "./styles";
import Network from "../Network";
import { menuItems } from "../Header";

const menu = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "190px" },
  exit: { opacity: 0, height: 0 },
};

const list = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 1, scale: 0 },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: { y: 20, opacity: 0 },
};

interface DropDownMenuProps {
  open: boolean;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropDownMenuProps>(
  ({ open }, ref) => {
    return (
      <AnimatePresence>
        {open && (
          <S.Dropdown
            key="modal"
            variants={menu}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", bounce: 0.5 }}
            ref={ref}
          >
            <S.DropdownList
              variants={list}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {menuItems.map((i) => {
                return (
                  <motion.li variants={item}>
                    <a href={i.href}>{i.name}</a>
                  </motion.li>
                );
              })}
              <motion.li variants={item}>
                <Network />
              </motion.li>
            </S.DropdownList>
          </S.Dropdown>
        )}
      </AnimatePresence>
    );
  }
);

export default DropdownMenu;

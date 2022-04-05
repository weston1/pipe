import ContractItem from "./ContractItem";
import { motion, AnimatePresence } from "framer-motion";

function ContractTable({ contracts }) {
  if (!contracts || !contracts.length) {
    return <p>No Current Contracts</p>;
  }

  return (
    <div className="section">
      <div className="container">
        {contracts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <ContractItem key={item.id} item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default ContractTable;

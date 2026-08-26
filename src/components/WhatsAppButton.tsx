import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5511920621241"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contato via WhatsApp"
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 0.4, ease: [0.2, 0, 0, 1] }}
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
  >
    <MessageCircle size={26} strokeWidth={1.5} />
  </motion.a>
);

export default WhatsAppButton;

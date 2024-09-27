 function ChatBot() {
  window.owlbotConfigId = {chatbotUuid: "e75fa97e-d785-4f34-be1c-2b73406cb404" }
  const d=document;
  const s=d.createElement("script");
  s.src="https://hrfaciqawmkslnzhtrpe.supabase.co/storage/v1/object/public/publicjs/owlbot_script.js"
  s.async=1
  return s.innerHTML
}
export default ChatBot
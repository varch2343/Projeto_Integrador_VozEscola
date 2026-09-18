const KEY="vozctbj_tickets_v2";
const OLD_KEY="vozctbj_tickets_v1";
const DEMO_DESCRIPTIONS=[
"Ar-condicionado quebrado.",
"Sugestão para intercalar aulas expositivas com pesquisa.",
"Dúvida sobre lançamento de notas."
];
function loadTickets(){
  let data=JSON.parse(localStorage.getItem(KEY)||"null");
  if(!Array.isArray(data)){
    data=JSON.parse(localStorage.getItem(OLD_KEY)||"null");
  }
  if(!Array.isArray(data)) return [];
  return data.filter(t=>!DEMO_DESCRIPTIONS.includes(t.description));
}
let tickets=loadTickets();
function save(){localStorage.setItem(KEY,JSON.stringify(tickets));render()}
function route(c){return c==="Infraestrutura"?"Manutenção":c==="Pedagógico"?"Coordenação":"Secretaria"}
function priority(d,c){let s=(d+" "+c).toLowerCase(); if(/segurança|incêndio|elétrica|risco|vital/.test(s))return"Vital";if(/urgente|urgência|emergência/.test(s))return"Urgente";if(c==="Pedagógico"||c==="Acadêmico")return"Média";return"Baixa"}
function showForm(){document.getElementById("formCard").classList.remove("hidden")}
function hideForm(){document.getElementById("formCard").classList.add("hidden")}
document.getElementById("ticketForm").addEventListener("submit",e=>{e.preventDefault();let c=category.value,d=description.value;let t={id:Date.now(),category:c,location:location.value,description:d,mode:mode.value,priority:priority(d,c),status:"Aberto",area:route(c),created:new Date().toISOString().slice(0,10)};tickets.unshift(t);save();e.target.reset();hideForm();alert("Chamado enviado com sucesso!")})
document.getElementById("role").addEventListener("change",render);
function ticketHTML(t,controls=false){return `<article class="ticket"><h3>#${t.id} · ${t.category}</h3><div class="meta"><span>Área: ${t.area}</span><span>${t.location||"Sem localização"}</span><span>${t.mode}</span><span>${t.created}</span></div><p>${escapeHTML(t.description)}</p><div><span class="priority ${t.priority.toLowerCase()}">Prioridade: ${t.priority}</span> · <span class="status">Status: ${t.status}</span></div>${controls?`<p><select onchange="setStatus(${t.id},this.value)"><option ${t.status==="Aberto"?"selected":""}>Aberto</option><option ${t.status==="Em análise"?"selected":""}>Em análise</option><option ${t.status==="Respondido"?"selected":""}>Respondido</option><option ${t.status==="Finalizado"?"selected":""}>Finalizado</option></select><button onclick="setPriority(${t.id})">Classificar prioridade</button></p>`:`<p><button class="delete-button" onclick="deleteTicket(${t.id})">Apagar chamado</button></p>`}</article>`}
function deleteTicket(id){
  const t=tickets.find(x=>x.id===id);
  if(!t) return;
  if(confirm(`Tem certeza que deseja apagar o chamado #${t.id}? Essa ação não pode ser desfeita.`)){
    tickets=tickets.filter(x=>x.id!==id);
    save();
  }
}
function setStatus(id,v){let t=tickets.find(x=>x.id===id);t.status=v;save()}
function setPriority(id){let t=tickets.find(x=>x.id===id);let p=prompt("Prioridade: Vital, Urgente, Média ou Baixa",t.priority);if(["Vital","Urgente","Média","Baixa"].includes(p)){t.priority=p;save()}}
function render(){let r=document.getElementById("role").value;["studentView","managerView","adminView"].forEach(x=>document.getElementById(x).classList.add("hidden"));document.getElementById(r==="aluno"?"studentView":r==="gestor"?"managerView":"adminView").classList.remove("hidden");
if(r==="aluno"){document.getElementById("count").textContent=tickets.length+" chamados";document.getElementById("myTickets").innerHTML=tickets.map(t=>ticketHTML(t)).join("")}
if(r==="gestor"){document.getElementById("managerTickets").innerHTML=tickets.map(t=>ticketHTML(t,true)).join("");stats.innerHTML=statsHTML()}
if(r==="admin"){document.getElementById("adminTickets").innerHTML=tickets.map(t=>ticketHTML(t,true)).join("");adminStats.innerHTML=statsHTML()}}
function statsHTML(){return ["Vital","Urgente","Média","Baixa"].map(p=>`<div class="stat"><b>${tickets.filter(t=>t.priority===p).length}</b>${p}</div>`).join("")}
function escapeHTML(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
render();
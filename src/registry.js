export const DEFAULT_SITES={
"quanta-phi":["quant:send","quant:receive","data:send","data:receive"],
"news-phi":["quant:receive","data:receive","news:seed"],
"cloudlair":["quant:send","quant:receive","data:send","data:receive","store"],
"monitor-phi":["quant:send","quant:receive","data:send","data:receive","validate"],
"owner-phi":["data:send","data:receive","ownership:resolve","ownership:transfer"],
"api-phi":["data:send","data:receive","api:normalize"],
"quant-shop":["quant:send","quant:receive","data:send","data:receive","listing:create","listing:close"],
"trade-phi":["quant:send","quant:receive","data:send","data:receive","trade:propose","trade:accept"],
"test-phi":["data:send","data:receive","test:run"],
"density-opaque":["data:send","data:receive","opacity:apply","opacity:clear"],
"infinity-phi":["quant:send","quant:receive","data:send","data:receive"],
"omni-phi":["quant:send","quant:receive","data:send","data:receive"]};
export function createRegistry(seed=DEFAULT_SITES){const sites=new Map(Object.entries(seed).map(([id,c])=>[id,new Set(c)]));return {register(id,capabilities=[]){sites.set(id,new Set(capabilities));return this;},has(id,cap){return sites.get(id)?.has(cap)||false;},capabilities(id){return [...(sites.get(id)||[])];},list(){return [...sites].map(([id,c])=>({id,capabilities:[...c]}));}};}

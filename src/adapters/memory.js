export function createMemoryAdapter(){const transfers=[];return {transfers,async receive(envelope){transfers.push(envelope);return {accepted:true,id:envelope.id};}};}

import {createQuantumRouter} from "../src/index.js";import {createMemoryAdapter} from "../src/adapters/memory.js";
const quantum=createQuantumRouter();const news=createMemoryAdapter();quantum.registerAdapter("news-phi",news);const result=await quantum.transfer({from:"quanta-phi",to:"news-phi",kind:"quant",payload:{id:"example-quant",topic:"example"}});console.log(result);

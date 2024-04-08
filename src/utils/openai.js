// import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';
const { CohereClient } = require("cohere-ai");
// const openai = new OpenAI({
//   apiKey: OPENAI_KEY, 
//   dangerouslyAllowBrowser : true,
// });

// export default openai;


const cohere = new CohereClient({
    token: OPENAI_KEY,
});
export default cohere;
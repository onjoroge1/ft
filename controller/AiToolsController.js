const { Configuration, OpenAIApi }  = require('openai')


const configuration = new Configuration({
    apiKey: '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',
  });
  
  const openai = new OpenAIApi(configuration);



  // here is movie emoji api
exports.textToEmoji = async (req, res, next) => {
    try {
        const {inputText} = req.body
        console.log(inputText);
      const completion =  await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n${inputText}:`,
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
        res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
      res.status(500).json({ message  : 'this is not a valid text' , error : error});
    }

}

// here is grammer correction api == complete

exports.grammerCorrection = async (req , res , next) => {
    
    const {inputText} = req.body

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Correct this to standard English:\n\n${inputText}`,
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
      res.status(500).json({ message  : 'this is not a valid text' , error : error});
    }
}


// here is question answer api
exports.questionAnswer = async (req , res , next) => {
  const {inputText} = req.body
    try {
        const completion = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: ${inputText}?\nA:`,
          temperature: 0,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ["\n"],
        });
        res.status(200).json({ result: completion.data.choices[0].text });
      } catch (error) {
        res.status(500).json({ message  : 'this is not a valid text' , error : error});
      }

      
}



// here is language convertion api
exports.languageConversion = async (req , res , next) => {
    const {inputText} = req.body

    try {
        const completion =  await openai.createCompletion({
          model: "text-davinci-002",
          prompt: `Translate this into French, Spanish and Japanese:\n\n${inputText}?.`,
          temperature: 0.3,
          max_tokens: 100,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
          res.status(200).json({ result: completion.data.choices[0].text });
      } catch (error) {
        res.status(500).json({ message  : 'this is not a valid text' , error : error});
      }
}


// here is text summerize content api 
exports.summerizeContent = async (req , res , next) => {
    const {inputText} = req.body
  try {
    const completion =  await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Summarize this for a second-grade student:\n\n${inputText}.`,
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
      res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ message  : 'this is not a valid text' , error : error});
  }
}

// here is keyword extracter api
exports.keywordExtracter = async (req , res , next) => {
    try {
        const {inputText} = req.body
        const completion = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: `Extract keywords from this text:\n\n${inputText}.`,
          temperature: 0.3,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.8,
          presence_penalty: 0.0,
        });
          res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
        res.status(500).json({ message  : 'this is not a valid text' , error : error});
    }
}
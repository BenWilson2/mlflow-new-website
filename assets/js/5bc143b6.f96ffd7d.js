"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4120],{8045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(5893),i=n(1151);const s={title:"LLM as judge",description:"Perform LLM Evaluations with custom metrics",slug:"llm-as-judge",authors:["pedro-azevedo","rahul-pandey"],tags:["genai","mlflow-evalaute"],thumbnail:"/img/blog/llm-as-judge.png"},l=void 0,o={permalink:"/mlflow-website/blog/llm-as-judge",source:"@site/blog/2024-10-03-llm-as-judge/index.md",title:"LLM as judge",description:"Perform LLM Evaluations with custom metrics",date:"2024-10-03T00:00:00.000Z",formattedDate:"October 3, 2024",tags:[{label:"genai",permalink:"/mlflow-website/blog/tags/genai"},{label:"mlflow-evalaute",permalink:"/mlflow-website/blog/tags/mlflow-evalaute"}],readingTime:16.54,hasTruncateMarker:!1,authors:[{name:"Pedro Azevedo",title:"Machine Learning Analyst at Adidas",url:"https://www.linkedin.com/in/pedro-azevedo-/",imageURL:"/img/authors/pedro.png",key:"pedro-azevedo"},{name:"Rahul Pandey",title:"Sr. Solutions Architect at adidas",url:"https://www.linkedin.com/in/rahulpandey1901/",imageURL:"/img/ambassadors/Rahul_Pandey.png",key:"rahul-pandey"}],frontMatter:{title:"LLM as judge",description:"Perform LLM Evaluations with custom metrics",slug:"llm-as-judge",authors:["pedro-azevedo","rahul-pandey"],tags:["genai","mlflow-evalaute"],thumbnail:"/img/blog/llm-as-judge.png"},unlisted:!1,nextItem:{title:"Models from Code Logging in MLflow - What, Why, and How",permalink:"/mlflow-website/blog/models_from_code"}},r={authorsImageUrls:[void 0,void 0]},c=[{value:"The Challenge of Evaluating Language Models",id:"the-challenge-of-evaluating-language-models",level:2},{value:"Introducing MLflow LLM Evaluate",id:"introducing-mlflow-llm-evaluate",level:2},{value:"Conquering new markets with an LLM as a judge",id:"conquering-new-markets-with-an-llm-as-a-judge",level:2},{value:"Custom Metrics: Tailoring Evaluation to Your Needs",id:"custom-metrics-tailoring-evaluation-to-your-needs",level:2},{value:"Evaluating Worldwide WanderAgency&#39;s AI Systems",id:"evaluating-worldwide-wanderagencys-ai-systems",level:2},{value:"Cultural Sensitivity Metric",id:"cultural-sensitivity-metric",level:3},{value:"The Toxicity Metric",id:"the-toxicity-metric",level:3},{value:"The Faithfulness Metric",id:"the-faithfulness-metric",level:3},{value:"Using MLflow to Evaluate RAG - Faithfulness",id:"using-mlflow-to-evaluate-rag---faithfulness",level:3},{value:"GenAI Metrics",id:"genai-metrics",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In this blog post, we'll dive on a journey to revolutionize how we evaluate language models. We'll explore the power of MLflow Evaluate and harness the capabilities of Large Language Models (LLMs) as judges. By the end, you'll learn how to create custom metrics, implement LLM-based evaluation, and apply these techniques to real-world scenarios. Get ready to transform your model assessment process and gain deeper insights into your AI's performance!"}),"\n",(0,a.jsx)(t.h2,{id:"the-challenge-of-evaluating-language-models",children:"The Challenge of Evaluating Language Models"}),"\n",(0,a.jsx)(t.p,{children:"Evaluating large language models (LLMs) and natural language processing (NLP) systems presents several challenges, primarily due to their complexity and the diversity of tasks they can perform."}),"\n",(0,a.jsx)(t.p,{children:"One major difficulty is creating metrics that comprehensively measure performance across varied applications, from generating coherent text to understanding nuanced human emotions. Traditional benchmarks often fail to capture these subtleties, leading to incomplete assessments."}),"\n",(0,a.jsx)(t.p,{children:"An LLM acting as a judge can address these issues by leveraging its extensive training data to provide a more nuanced evaluation, offering insights into model behavior and areas needing improvement. For instance, an LLM can analyze whether a model generates text that is not only grammatically correct but also contextually appropriate and engaging, something more static metrics might miss."}),"\n",(0,a.jsx)(t.p,{children:"However, to move forward effectively, we need more than just better evaluation methods. Standardized experimentation setups are essential to ensure that comparisons between models are both fair and replicable. A uniform framework for testing and evaluation would enable researchers to build on each other's work, leading to more consistent progress and the development of more robust models."}),"\n",(0,a.jsx)(t.h2,{id:"introducing-mlflow-llm-evaluate",children:"Introducing MLflow LLM Evaluate"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/llms/llm-evaluate/index.html",children:"MLflow LLM Evaluate"})," is a powerful function within the MLflow ecosystem that allows for comprehensive model assessment by providing a standardized experiment setup. It supports both built-in metrics and custom (LLM) metrics, making it an ideal tool for evaluating complex language tasks. With ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:"MLflow LLM Evaluate"}),", you can:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Evaluate models against multiple metrics simultaneously"}),"\n",(0,a.jsx)(t.li,{children:"Use pre-defined metrics for specific model types (e.g., question-answering, text-summarization and pure text)"}),"\n",(0,a.jsxs)(t.li,{children:["Create custom metrics, including those that use LLMs as judges using ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.metrics.html#mlflow.metrics.genai.make_genai_metric",children:"mlflow.metrics.genai.make_genai_metric()"}),"\nand\n",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.metrics.html#mlflow.metrics.genai.make_genai_metric_from_prompt",children:"mlflow.metrics.genai.make_genai_metric_from_prompt()"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"MLflow Evaluate",src:n(514).Z+"",width:"700",height:"300"})}),"\n",(0,a.jsx)(t.h2,{id:"conquering-new-markets-with-an-llm-as-a-judge",children:"Conquering new markets with an LLM as a judge"}),"\n",(0,a.jsx)(t.p,{children:"Imagine you're part of a global travel agency, \"WorldWide Wandercorp,\" that's expanding its reach to Spanish-speaking countries."}),"\n",(0,a.jsx)(t.p,{children:"Your team has developed an AI-powered translation system to help create culturally appropriate marketing materials and customer communications. However, as you begin to use this system, you realize that traditional evaluation metrics, such as BLEU (Bilingual Evaluation Understudy), fall short in capturing the nuances of language translation, especially when it comes to preserving cultural context and idiomatic expressions."}),"\n",(0,a.jsx)(t.p,{children:'For instance, consider the phrase "kick the bucket." A direct translation might focus on the literal words, but the idiom actually means "to die." A traditional metric like BLEU may incorrectly evaluate the translation as adequate if the translated words match a reference translation, even if the cultural meaning is lost. In such cases, the metric might score the translation highly despite it being completely inappropriate in context. This could lead to embarrassing or culturally insensitive marketing content, which is something your team wants to avoid.'}),"\n",(0,a.jsxs)(t.p,{children:["You need a way to evaluate whether the translation not only is accurate but also preserves the intended meaning, tone, and cultural context. This is where ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:"MLflow Evaluate"})," and LLMs (Large Language Models) as judges come into play. These tools can assess translations more holistically by considering context, idiomatic expressions, and cultural relevance, providing a more reliable evaluation of the AI\u2019s output."]}),"\n",(0,a.jsx)(t.h2,{id:"custom-metrics-tailoring-evaluation-to-your-needs",children:"Custom Metrics: Tailoring Evaluation to Your Needs"}),"\n",(0,a.jsx)(t.p,{children:"In the following section, we\u2019ll implement three metrics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:'"cultural_sensitivity"'})," metric ensures translations maintain cultural context and appropriateness."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:'"faithfulness"'})," metric checks that chatbot responses align accurately with company policies and retrieved content."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:'"toxicity"'})," metric evaluates responses for harmful or inappropriate content, ensuring respectful customer interactions."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"These metrics will help Worldwide WanderAgency ensure their AI-driven translations and interactions meet their specific needs."}),"\n",(0,a.jsx)(t.h2,{id:"evaluating-worldwide-wanderagencys-ai-systems",children:"Evaluating Worldwide WanderAgency's AI Systems"}),"\n",(0,a.jsx)(t.p,{children:"Now that we understand WanderAgency's challenges, let's dive into a code walkthrough to address them. We'll implement custom metrics to measure AI performance and build a gauge visualization chart for sharing results with stakeholders."}),"\n",(0,a.jsx)(t.p,{children:'We\'ll start by evaluating a language translation model, focusing on the "cultural_sensitivity" metric to ensure it preserves cultural nuances. This will help WanderAgency maintain high standards in global communication.'}),"\n",(0,a.jsx)(t.h3,{id:"cultural-sensitivity-metric",children:"Cultural Sensitivity Metric"}),"\n",(0,a.jsx)(t.p,{children:"The travel agency wants to ensure their translations are not only accurate but also culturally appropriate.\nTo achieve this they are considering creating a custom metric that allows Worldwide WanderAgency to quantify how well their translations maintain cultural context and idiomatic expressions."}),"\n",(0,a.jsx)(t.p,{children:'For instance, a phrase that is polite in one culture might be inappropriate in another.\nIn English, addressing someone as "Dear" in a professional email might be seen as polite. However, in Spanish, using "Querido" in a professional context can be too personal and inappropriate.'}),"\n",(0,a.jsx)(t.p,{children:'How can we evaluate such an abstract concept in a systematic way? Traditional Metrics would fall short so we need a better way of doing it. In this case LLM as a judge would be a great fit!\nFor this use case let\'s create a "cultural_sensitivity" metric.'}),"\n",(0,a.jsx)(t.p,{children:"Here's a brief overview of the process:\nStart by installing all the necessary libraries for this demo to work."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pip install mlflow>=2.14.1 openai  transformers torch torchvision evaluate datasets tiktoken fastapi rouge_score textstat tenacity plotly ipykernel nbformat>=5.10.4\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We will be using gpt3.5 and gpt4 during this example for that let's start by making sure our ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/llms/openai/notebooks/openai-quickstart.html#API-Key-Security-Overview",children:"OpenAI key is setup"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Import the necessary libraries."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import mlflow\nimport os\n\n# Run a quick validation that we have an entry for the OPEN_API_KEY within environment variables\n\nassert "OPENAI_API_KEY" in os.environ, "OPENAI_API_KEY environment variable must be set"\n\nimport openai\nimport pandas as pd\n'})}),"\n",(0,a.jsxs)(t.p,{children:["When using the ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})})," function, your large language model (LLM) can take one of the following forms:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.code,{children:"mlflow.pyfunc.PyFuncModel()"})," \u2014 typically an MLflow model."]}),"\n",(0,a.jsx)(t.li,{children:"A Python function that accepts strings as inputs and returns a single string as output."}),"\n",(0,a.jsxs)(t.li,{children:["An ",(0,a.jsx)(t.code,{children:"MLflow Deployments"})," endpoint URI."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"model=None"})," if the data you are providing has already been scored by a model, and you do not need to specify one."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For this example, we will use an MLflow model."}),"\n",(0,a.jsx)(t.p,{children:"We\u2019ll begin by logging a translation model in MLflow. For this tutorial, we'll use GPT-3.5 with a defined system prompt."}),"\n",(0,a.jsxs)(t.p,{children:["In a production environment, you would typically experiment with different prompts and models to determine the most suitable configuration for your use case. For more details, refer to MLflow\u2019s ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/llms/prompt-engineering/index.html",children:"Prompt Engineering UI"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'\nsystem_prompt = "Translate the following sentences into Spanish"\n# Let\'s set up an experiment to make it easier to track our results\nmlflow.set_experiment("/Path/to/your/experiment")\n\nbasic_translation_model = mlflow.openai.log_model(\n    model="gpt-3.5-turbo",\n    task=openai.chat.completions,\n    artifact_path="model",\n    messages=[\n        {"role": "system", "content": system_prompt},\n        {"role": "user", "content": "{user_input}"},\n    ],\n)\n'})}),"\n",(0,a.jsx)(t.p,{children:"Let's test the model to make sure it works."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"model = mlflow.pyfunc.load_model(basic_translation_model.model_uri)\n\nmodel.predict(\"Hello, how are you?\")\n\n# Output = ['\xa1Hola, \xbfc\xf3mo est\xe1s?']\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To use ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})}),", we first need to prepare sample data that will serve as input to our LLM. In this scenario, the input would consist of the content the company is aiming to translate."]}),"\n",(0,a.jsx)(t.p,{children:"For demonstration purposes, we will define a set of common English expressions that we want the model to translate."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Prepare evaluation data\neval_data = pd.DataFrame(\n    {\n        "llm_inputs": [\n            "I\'m over the moon about the news!",\n            "Spill the beans.",\n            "Bite the bullet.",\n            "Better late than never.",\n\n        ]\n    }\n)\n'})}),"\n",(0,a.jsx)(t.p,{children:"To meet the objectives of the travel agency, we will define custom metrics that evaluate the quality of translations. In particular, we need to assess how faithfully the translations capture not only the literal meaning but also cultural nuances."}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})})," uses ",(0,a.jsx)(t.code,{children:"openai:/gpt-4"})," as the evaluation model. However, you also have the option to use a ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/llms/llm-evaluate/index.html#selecting-the-llm-as-judge-model",children:"local model for evaluation"}),", such as a model wrapped in a PyFunc (e.g., Ollama)."]}),"\n",(0,a.jsx)(t.p,{children:"For this example, we will use GPT-4 as the evaluation model."}),"\n",(0,a.jsx)(t.p,{children:"To begin, provide a few examples that illustrate good and poor translation scores."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Define the custom metric\ncultural_sensitivity = mlflow.metrics.genai.make_genai_metric(\n    name="cultural_sensitivity",\n    definition="Assesses how well the translation preserves cultural nuances and idioms.",\n    grading_prompt="Score from 1-5, where 1 is culturally insensitive and 5 is highly culturally aware.",\n    examples=[\n        mlflow.metrics.genai.EvaluationExample(\n            input="Break a leg!",\n            output="\xa1R\xf3mpete una pierna!",\n            score=2,\n            justification="This is a literal translation that doesn\'t capture the idiomatic meaning."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="Break a leg!",\n            output="\xa1Mucha mierda!",\n            score=5,\n            justification="This translation uses the equivalent Spanish theater idiom, showing high cultural awareness."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="It\'s raining cats and dogs.",\n            output="Est\xe1 lloviendo gatos y perros.",\n            score=1,\n            justification="This literal translation does not convey the idiomatic meaning of heavy rain."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="It\'s raining cats and dogs.",\n            output="Est\xe1 lloviendo a c\xe1ntaros.",\n            score=5,\n            justification="This translation uses a Spanish idiom that accurately conveys the meaning of heavy rain."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="Kick the bucket.",\n            output="Patear el balde.",\n            score=1,\n            justification="This literal translation fails to convey the idiomatic meaning of dying."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="Kick the bucket.",\n            output="Estirar la pata.",\n            score=5,\n            justification="This translation uses the equivalent Spanish idiom for dying, showing high cultural awareness."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="Once in a blue moon.",\n            output="Una vez en una luna azul.",\n            score=2,\n            justification="This literal translation does not capture the rarity implied by the idiom."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="Once in a blue moon.",\n            output="De vez en cuando.",\n            score=4,\n            justification="This translation captures the infrequency but lacks the idiomatic color of the original."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="The ball is in your court.",\n            output="La pelota est\xe1 en tu cancha.",\n            score=3,\n            justification="This translation is understandable but somewhat lacks the idiomatic nuance of making a decision."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="The ball is in your court.",\n            output="Te toca a ti.",\n            score=5,\n            justification="This translation accurately conveys the idiomatic meaning of it being someone else\'s turn to act."\n        )\n    ],\n    model="openai:/gpt-4",\n    parameters={"temperature": 0.0},\n)\n'})}),"\n",(0,a.jsx)(t.h3,{id:"the-toxicity-metric",children:"The Toxicity Metric"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to this custom metric let's use MLflow built-in metrics for the evaluators. In this case MLflow wll use roberta-hate-speech model to detect the ",(0,a.jsx)(t.a,{href:"https://huggingface.co/spaces/evaluate-measurement/toxicity",children:"toxicity"}),". This metric evaluates responses for any harmful or inappropriate content, reinforcing the company's commitment to a positive customer experience."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Log and evaluate the model\nwith mlflow.start_run() as run:\n    results = mlflow.evaluate(\n        basic_translation_model.model_uri,\n        data=eval_data,\n        model_type="text",\n        evaluators="default",\n        extra_metrics=[cultural_sensitivity],\n        evaluator_config={\n        "col_mapping": {\n            "inputs": "llm_inputs",\n           }}\n   )\n\nmlflow.end_run()\n'})}),"\n",(0,a.jsx)(t.p,{children:"You can retrieve the final results as such:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'results.tables["eval_results_table"]\n'})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"llm_inputs"}),(0,a.jsx)(t.th,{children:"outputs"}),(0,a.jsx)(t.th,{children:"token_count"}),(0,a.jsx)(t.th,{children:"toxicity/v1/score"}),(0,a.jsx)(t.th,{children:"flesch_kincaid_grade_level/v1/score"}),(0,a.jsx)(t.th,{children:"ari_grade_level/v1/score"}),(0,a.jsx)(t.th,{children:"cultural_sensitivity/v1/score"}),(0,a.jsx)(t.th,{children:"cultural_sensitivity/v1/justification"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"I'm over the moon about the news!"}),(0,a.jsx)(t.td,{children:"\xa1Estoy feliz por la noticia!"}),(0,a.jsx)(t.td,{children:"9"}),(0,a.jsx)(t.td,{children:"0.000258"}),(0,a.jsx)(t.td,{children:"5.2"}),(0,a.jsx)(t.td,{children:"3.7"}),(0,a.jsx)(t.td,{children:"4"}),(0,a.jsx)(t.td,{children:"The translation captures the general sentiment..."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"Spill the beans."}),(0,a.jsx)(t.td,{children:"Revela el secreto."}),(0,a.jsx)(t.td,{children:"7"}),(0,a.jsx)(t.td,{children:"0.001017"}),(0,a.jsx)(t.td,{children:"9.2"}),(0,a.jsx)(t.td,{children:"5.2"}),(0,a.jsx)(t.td,{children:"5"}),(0,a.jsx)(t.td,{children:"The translation accurately captures the idioma..."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:"Bite the bullet."}),(0,a.jsx)(t.td,{children:"Morder la bala."}),(0,a.jsx)(t.td,{children:"7"}),(0,a.jsx)(t.td,{children:"0.001586"}),(0,a.jsx)(t.td,{children:"0.9"}),(0,a.jsx)(t.td,{children:"3.6"}),(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:'The translation "Morder la bala" is a litera...'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"3"}),(0,a.jsx)(t.td,{children:"Better late than never."}),(0,a.jsx)(t.td,{children:"M\xe1s vale tarde que nunca."}),(0,a.jsx)(t.td,{children:"7"}),(0,a.jsx)(t.td,{children:"0.004947"}),(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"0.9"}),(0,a.jsx)(t.td,{children:"5"}),(0,a.jsx)(t.td,{children:"The translation accurately captures the idioma..."})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Let's analyze the final metrics..."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'cultural_sensitivity_score = results.metrics[\'cultural_sensitivity/v1/mean\']\nprint(f"Cultural Sensitivity Score: {cultural_sensitivity_score}")\n\ntoxicity_score = results.metrics[\'toxicity/v1/mean\']\n# Calculate non-toxicity score\nnon_toxicity_score = "{:.2f}".format((1 - toxicity_score) * 100)\nprint(f"Non-Toxicity Score: {non_toxicity_score}%")\n\n'})}),"\n",(0,a.jsx)(t.p,{children:"Output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Cultural Sensitivity Score: 3.75\nPureness Score: 99.80\n"})}),"\n",(0,a.jsx)(t.p,{children:"It is often the case we want to monitor and track these metrics on a dashboard so both data scientists and stakeholders have an understanding of the performance and reliability of these solutions."}),"\n",(0,a.jsx)(t.p,{children:"For this example let's create a gauge to display the final metric."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import plotly.graph_objects as go\nfrom plotly.subplots import make_subplots\n\ndef create_gauge_chart(value1, title1, value2, title2):\n    # Create a subplot figure with two columns\n    fig = make_subplots(rows=1, cols=2, specs=[[{'type': 'indicator'}, {'type': 'indicator'}]])\n\n    # Add the first gauge chart\n    fig.add_trace(go.Indicator(\n        mode = \"gauge+number\",\n        value = value1,\n        title = {'text': title1},\n        gauge = {'axis': {'range': [None, 5]}}\n    ), row=1, col=1)\n\n    # Add the second gauge chart\n    fig.add_trace(go.Indicator(\n        mode = \"gauge+number\",\n        value = value2,\n        title = {'text': title2},\n        gauge = {'axis': {'range': [None, 100]}}\n    ), row=1, col=2)\n\n    # Update layout\n    fig.update_layout(height=400, width=800)\n\n    # Show figure\n    fig.show()\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'create_gauge_chart(cultural_sensitive_score, "Cultural Sensitivity Score", float(non_toxicity_score), "Non Toxicity Score")\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Gauge Chart",src:n(2960).Z+"",width:"800",height:"400"})}),"\n",(0,a.jsx)(t.h3,{id:"the-faithfulness-metric",children:"The Faithfulness Metric"}),"\n",(0,a.jsx)(t.p,{children:"As Worldwide WanderAgency's AI grows, they add a customer service chatbot that handles questions in multiple languages. This chatbot uses a RAG (Retrieval-Augmented Generation) system, which means it retrieves information from a database or documents and then generates an answer based on that information."}),"\n",(0,a.jsx)(t.p,{children:"It's important that the answers provided by the chatbot stay true to the information it retrieves. To make sure of this, we create a \"faithfulness\" metric. This metric checks how well the chatbot's responses match the materials it\u2019s supposed to be based on, ensuring the information given to customers is accurate."}),"\n",(0,a.jsx)(t.p,{children:'For example, If the retrieved document says "Returns are accepted within 30 days," and the chatbot replies with "Our return policy is flexible and varies by region," it is not aligning well with the retrieved material. This inaccurate response (bad faithfulness) could mislead customers and create confusion.'}),"\n",(0,a.jsx)(t.h3,{id:"using-mlflow-to-evaluate-rag---faithfulness",children:"Using MLflow to Evaluate RAG - Faithfulness"}),"\n",(0,a.jsx)(t.p,{children:"Let's evaluate how well our chatbot is doing in sticking to the retrieved information. Instead of using an MLflow model this time, we\u2019ll use a custom function to define the faithfulness metric and see how aligned the chatbot's answers are with the data it pulls from."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Prepare evaluation data\neval_data = pd.DataFrame(\n    {\n        "llm_inputs": [\n            """Question: What is the company\'s policy on employee training?\ncontext: "Our company offers various training programs to support employee development. Employees are required to complete at least one training course per year related to their role. Additional training opportunities are available based on performance reviews." """,\n            """Question: What is the company\'s policy on sick leave?\ncontext: "Employees are entitled to 10 days of paid sick leave per year. Sick leave can be used for personal illness or to care for an immediate family member. A doctor\'s note is required for sick leave exceeding three consecutive days." """,\n            """Question: How does the company handle performance reviews?\ncontext: "Performance reviews are conducted annually. Employees are evaluated based on their job performance, goal achievement, and overall contribution to the team. Feedback is provided, and development plans are created to support employee growth." """,\n        ]\n    }\n)\n\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now let's define some examples for this faithfulness metric."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'examples = [\n        mlflow.metrics.genai.EvaluationExample(\n            input="""Question: What is the company\'s policy on remote work?\ncontext: "Our company supports a flexible working environment. Employees can work remotely up to three days a week, provided they maintain productivity and attend all mandatory meetings." """,\n            output="Employees can work remotely up to three days a week if they maintain productivity and attend mandatory meetings.",\n            score=5,\n            justification="The answer is accurate and directly related to the question and context provided."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="""Question: What is the company\'s policy on remote work?\ncontext: "Our company supports a flexible working environment. Employees can work remotely up to three days a week, provided they maintain productivity and attend all mandatory meetings." """,\n            output="Employees are allowed to work remotely as long as they want.",\n            score=2,\n            justification="The answer is somewhat related but incorrect because it does not mention the three-day limit."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="""Question: What is the company\'s policy on remote work?\ncontext: "Our company supports a flexible working environment. Employees can work remotely up to three days a week, provided they maintain productivity and attend all mandatory meetings." """,\n            output="Our company supports flexible work arrangements.",\n            score=3,\n            justification="The answer is related to the context but does not specifically answer the question about the remote work policy."\n        ),\n        mlflow.metrics.genai.EvaluationExample(\n            input="""Question: What is the company\'s annual leave policy?\ncontext: "Employees are entitled to 20 days of paid annual leave per year. Leave must be approved by the employee\'s direct supervisor and should be planned in advance to ensure minimal disruption to work." """,\n            output="Employees are entitled to 20 days of paid annual leave per year, which must be approved by their supervisor.",\n            score=5,\n            justification="The answer is accurate and directly related to the question and context provided."\n        )]\n\n#  Define the custom metric\nfaithfulness = mlflow.metrics.genai.make_genai_metric(\n    name="faithfulness",\n    definition="Assesses how well the answer relates to the question and provided context.",\n    grading_prompt="Score from 1-5, where 1 is not related at all and 5 is highly relevant and accurate.",\n    examples=examples)\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Define out LLM function (in this case it can be any function that follows certain input/output formats that ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})}),")."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Using custom function\ndef my_llm(inputs):\n    answers = []\n    system_prompt = "Please answer the following question in formal language based on the context provided."\n    for index, row in inputs.iterrows():\n        print(\'INPUTS:\', row)\n        completion = openai.chat.completions.create(\n            model="gpt-3.5-turbo",\n            messages=[\n                {"role": "system", "content": system_prompt},\n                {"role": "user", "content": f"{row}"},\n            ],\n        )\n        answers.append(completion.choices[0].message.content)\n\n    return answers\n'})}),"\n",(0,a.jsx)(t.p,{children:"Resulting in a code that is similar to what we did before..."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'with mlflow.start_run() as run:\n    results = mlflow.evaluate(\n        my_llm,\n        eval_data,\n        model_type="text",\n        evaluators="default",\n        extra_metrics=[faithfulness],\n        evaluator_config={\n        "col_mapping": {\n            "inputs": "llm_inputs",\n           }}\n    )\nmlflow.end_run()\n'})}),"\n",(0,a.jsx)(t.h3,{id:"genai-metrics",children:"GenAI Metrics"}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, we can leverage MLflow's built-in metrics for generative AI, using the same examples."}),"\n",(0,a.jsxs)(t.p,{children:["MLflow provides several ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.metrics.html?highlight=genai%20answer#generative-ai-metrics",children:"built-in metrics"})," that use an LLM as a judge. Despite differences in implementation, these metrics are used in the same way. Simply include them in the ",(0,a.jsx)(t.code,{children:"extra_metrics"})," argument of the ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})})," function."]}),"\n",(0,a.jsxs)(t.p,{children:["In this case, we will use MLflow\u2019s built-in ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.metrics.html?highlight=genai%20answer#mlflow.metrics.genai.faithfulness",children:"faithfulness metric"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from mlflow.metrics.genai import EvaluationExample, faithfulness\nfaithfulness_metric = faithfulness(model="openai:/gpt-4")\nprint(faithfulness_metric)\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})})," simplifies the process of providing grading context, such as the documents retrieved by our system, directly into the evaluation. This feature integrates seamlessly with ",(0,a.jsx)(t.a,{href:"https://python.langchain.com/docs/concepts/#retrievers",children:"LangChain's retrievers"}),", allowing you to supply the context for evaluation as a dedicated column. For more details, refer to ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/llms/llm-evaluate/notebooks/rag-evaluation-llama2.html",children:"this example"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In this case, since our retrieved documents are already included within the final prompt and we are not leveraging LangChain for this tutorial, we will simply map the ",(0,a.jsx)(t.code,{children:"llm_input"})," column as our grading context."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'with mlflow.start_run() as run:\n    results = mlflow.evaluate(\n        my_llm,\n        eval_data,\n        model_type="text",\n        evaluators="default",\n        extra_metrics=[faithfulness_metric],\n        evaluator_config={\n        "col_mapping": {\n            "inputs": "llm_inputs",\n            "context": "llm_inputs",\n           }}\n    )\nmlflow.end_run()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["After the evaluation we get the following results:\n",(0,a.jsx)(t.img,{alt:"Gauge faithfulness Chart",src:n(8918).Z+"",width:"800",height:"400"})]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"By combining the Cultural Sensitivity score with our other calculated metrics, our travel agency can further refine its model to ensure the delivery of high-quality content across all languages. Moving forward, we can revisit and adjust the prompts used to boost our Cultural Sensitivity score. Alternatively, we could fine-tune a smaller model to maintain the same high level of cultural sensitivity while reducing costs. These steps will help us provide even better service to the agency's diverse customer base."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.evaluate",children:(0,a.jsx)(t.code,{children:"mlflow.evaluate()"})}),", combined with LLMs as judges, opens up new possibilities for nuanced and context-aware model evaluation. By creating custom metrics tailored to specific aspects of model performance, data scientists can gain deeper insights into their models' strengths and weaknesses."]}),"\n",(0,a.jsxs)(t.p,{children:["The flexibility offered by ",(0,a.jsx)(t.code,{children:"make_genai_metric()"})," allows you to create evaluation criteria that are perfectly suited to your specific use case. Whether you need structured guidance for your LLM judge or want full control over the prompting process, MLflow provides the tools you need."]}),"\n",(0,a.jsx)(t.p,{children:"As you explore MLflow evaluate and LLM-based metrics, remember that the key lies in designing thoughtful evaluation criteria and providing clear instructions to your LLM judge. With these tools at your disposal, you're well-equipped to take your model evaluation to the next level, ensuring that your language models not only perform well on traditional metrics but also meet the nuanced requirements of real-world applications."}),"\n",(0,a.jsx)(t.p,{children:"The built-in metrics, such as toxicity, offer standardized assessments that are crucial for ensuring the safety and accessibility of model outputs."}),"\n",(0,a.jsx)(t.p,{children:'As a final challenge, re-run all the tests performed but this time with "gpt-4o-mini" and see how the performance is affected.'})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8918:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/faithfulness-246906b0fa032bfe3bed8cdee648d7bf.png"},2960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gauge-c21a7facbde6cfee6d102ac805057db2.png"},514:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mlflow_evaluate.drawio-630de00051316c6b28dab80e5626f630.svg"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var a=n(7294);const i={},s=a.createContext(i);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
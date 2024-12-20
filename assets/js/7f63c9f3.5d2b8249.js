"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2472],{7476:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=l(5893),i=l(1151);const s={title:"MLflow 2.18.0",slug:"2.18.0",authors:["mlflow-maintainers"]},r=void 0,o={permalink:"/mlflow-website/releases/2.18.0",source:"@site/releases/2024-11-12-2.18.0-release.md",title:"MLflow 2.18.0",description:"We are excited to announce the release of MLflow 2.18.0! This release includes a number of significant features, enhancements, and bug fixes.",date:"2024-11-12T00:00:00.000Z",formattedDate:"November 12, 2024",tags:[],readingTime:4.955,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.18.0",slug:"2.18.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.19.0",permalink:"/mlflow-website/releases/2.19.0"},nextItem:{title:"MLflow 2.17.2",permalink:"/mlflow-website/releases/2.17.2"}},h={authorsImageUrls:[void 0]},a=[{value:"Python Version Update",id:"python-version-update",level:3},{value:"Major New Features",id:"major-new-features",level:3},{value:"Breaking Changes to ChatModel Interface",id:"breaking-changes-to-chatmodel-interface",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"We are excited to announce the release of MLflow 2.18.0! This release includes a number of significant features, enhancements, and bug fixes."}),"\n",(0,t.jsx)(n.h3,{id:"python-version-update",children:"Python Version Update"}),"\n",(0,t.jsxs)(n.p,{children:["Python 3.8 is now at an end-of-life point. With official support being dropped for this legacy version, ",(0,t.jsx)(n.strong,{children:"MLflow now requires Python 3.9"}),"\nas a minimum supported version."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: If you are currently using MLflow's ",(0,t.jsx)(n.code,{children:"ChatModel"})," interface for authoring custom GenAI applications, please ensure that you\nhave read the future breaking changes section below."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"major-new-features",children:"Major New Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud83e\uddba Fluent API Thread/Process Safety"})," - MLflow's fluent APIs for tracking and the model registry have been overhauled to add support for both thread and multi-process safety. You are now no longer forced to use the Client APIs for managing experiments, runs, and logging from within multiprocessing and threaded applications. (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13456",children:"#13456"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13419",children:"#13419"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud83e\udde9 DSPy flavor"})," - MLflow now supports logging, loading, and tracing of ",(0,t.jsx)(n.code,{children:"DSPy"})," models, broadening the support for advanced GenAI authoring within MLflow. Check out the ",(0,t.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/dspy/index.html",children:"MLflow DSPy Flavor"})," documentation to get started! (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13131",children:"#13131"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13279",children:"#13279"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13369",children:"#13369"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13345",children:"#13345"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/chenmoneygithub",children:"@chenmoneygithub"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13543",children:"#13543"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13800",children:"#13800"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13807",children:"#13807"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13289",children:"#13289"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/michael-berk",children:"@michael-berk"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud83d\udda5\ufe0f Enhanced Trace UI"})," - ",(0,t.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/tracing/index.html",children:"MLflow Tracing"}),"'s UI has undergone\na significant overhaul to bring usability and quality of life updates to the experience of auditing and investigating the contents of GenAI traces, from enhanced span content rendering using markdown to a standardized span component structure. (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13685",children:"#13685"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13357",children:"#13357"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13242",children:"#13242"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud83d\ude84 New Tracing Integrations"})," - ",(0,t.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/tracing/index.html",children:"MLflow Tracing"})," now supports ",(0,t.jsx)(n.strong,{children:"DSPy"}),", ",(0,t.jsx)(n.strong,{children:"LiteLLM"}),", and ",(0,t.jsx)(n.strong,{children:"Google Gemini"}),", enabling a one-line, fully automated tracing experience. These integrations unlock enhanced observability across a broader range of industry tools. Stay tuned for upcoming integrations and updates! (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13801",children:"#13801"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/TomeHirata",children:"@TomeHirata"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13585",children:"#13585"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\ud83d\udcca Expanded LLM-as-a-Judge Support"})," - MLflow now enhances its evaluation capabilities with support for additional providers, including ",(0,t.jsx)(n.code,{children:"Anthropic"}),", ",(0,t.jsx)(n.code,{children:"Bedrock"}),", ",(0,t.jsx)(n.code,{children:"Mistral"}),", and ",(0,t.jsx)(n.code,{children:"TogetherAI"}),", alongside existing providers like ",(0,t.jsx)(n.code,{children:"OpenAI"}),". Users can now also configure proxy endpoints or self-hosted LLMs that follow the provider API specs by using the new ",(0,t.jsx)(n.code,{children:"proxy_url"})," and ",(0,t.jsx)(n.code,{children:"extra_headers"})," options. Visit the ",(0,t.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/llm-evaluate/index.html#llm-as-a-judge-metrics",children:"LLM-as-a-Judge"})," documentation for more details! (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13715",children:"#13715"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13717",children:"#13717"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u23f0 Environment Variable Detection"})," - As a helpful reminder for when you are deploying models, MLflow now detects and reminds users of environment variables set during model logging, ensuring they are configured for deployment. In addition to this, the ",(0,t.jsx)(n.code,{children:"mlflow.models.predict"})," utility has also been updated to include these variables in serving simulations, improving pre-deployment validation. (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13584",children:"#13584"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"breaking-changes-to-chatmodel-interface",children:"Breaking Changes to ChatModel Interface"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ChatModel Interface Updates"})," - As part of a broader unification effort within MLflow and services that rely on or deeply integrate\nwith MLflow's GenAI features, we are working on a phased approach to making a consistent and standard interface for custom GenAI\napplication development and usage. In the first phase (planned for release in the next few releases of MLflow), we are marking\nseveral interfaces as deprecated, as they will be changing. These changes will be:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Renaming of Interfaces"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ChatRequest"})," \u2192 ",(0,t.jsx)(n.code,{children:"ChatCompletionRequest"})," to provide disambiguation for future planned request interfaces."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ChatResponse"})," \u2192 ",(0,t.jsx)(n.code,{children:"ChatCompletionResponse"})," for the same reason as the input interface."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata"})," fields within ",(0,t.jsx)(n.code,{children:"ChatRequest"})," and ",(0,t.jsx)(n.code,{children:"ChatResponse"})," \u2192 ",(0,t.jsx)(n.code,{children:"custom_inputs"})," and ",(0,t.jsx)(n.code,{children:"custom_outputs"}),", respectively."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Streaming Updates"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"predict_stream"})," will be updated to enable true streaming for custom GenAI applications. Currently, it returns a generator with synchronous outputs from predict. In a future release, it will return a generator of ",(0,t.jsx)(n.code,{children:"ChatCompletionChunks"}),", enabling asynchronous streaming. While the API call structure will remain the same, the returned data payload will change significantly, aligning with LangChain\u2019s implementation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Legacy Dataclass Deprecation"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dataclasses in ",(0,t.jsx)(n.code,{children:"mlflow.models.rag_signatures"})," will be deprecated, merging into unified ",(0,t.jsx)(n.code,{children:"ChatCompletionRequest"}),", ",(0,t.jsx)(n.code,{children:"ChatCompletionResponse"}),", and ",(0,t.jsx)(n.code,{children:"ChatCompletionChunks"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Other Features:"}),"\n",(0,t.jsx)(n.p,{children:"Here is the updated section with links to each PR ID and author:"}),"\n",(0,t.jsx)(n.p,{children:"markdown\nCopy code\nOther Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[Evaluate] Add Huggingface BLEU metrics to MLflow Evaluate (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/12799",children:"#12799"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/nebrass",children:"@nebrass"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Models / Databricks] Add support for ",(0,t.jsx)(n.code,{children:"spark_udf"})," when running on Databricks Serverless runtime, Databricks Connect, and prebuilt Python environments (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13276",children:"#13276"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13496",children:"#13496"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Scoring] Add a ",(0,t.jsx)(n.code,{children:"model_config"})," parameter for ",(0,t.jsx)(n.code,{children:"pyfunc.spark_udf"})," for customization of batch inference payload submission (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13517",children:"#13517"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracing] Standardize retriever span outputs to a list of MLflow ",(0,t.jsx)(n.code,{children:"Document"}),"s (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13242",children:"#13242"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[UI] Add support for visualizing and comparing nested parameters within the MLflow UI (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13012",children:"#13012"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/jescalada",children:"@jescalada"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[UI] Add support for comparing logged artifacts within the Compare Run page in the MLflow UI (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13145",children:"#13145"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/jescalada",children:"@jescalada"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Databricks] Add support for ",(0,t.jsx)(n.code,{children:"resources"})," definitions for ",(0,t.jsx)(n.code,{children:"LangChain"})," model logging (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13315",children:"#13315"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Databricks] Add support for defining multiple retrievers within ",(0,t.jsx)(n.code,{children:"dependencies"})," for Agent definitions (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13246",children:"#13246"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[Database] Cascade deletes to datasets when deleting experiments to fix a bug in MLflow's ",(0,t.jsx)(n.code,{children:"gc"})," command when deleting experiments with logged datasets (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13741",children:"#13741"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Models] Fix a bug with ",(0,t.jsx)(n.code,{children:"LangChain"}),"'s ",(0,t.jsx)(n.code,{children:"pyfunc"})," predict input conversion (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13652",children:"#13652"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Models] Fix signature inference for subclasses and ",(0,t.jsx)(n.code,{children:"Optional"})," dataclasses that define a model's signature (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13440",children:"#13440"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/bbqiu",children:"@bbqiu"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Fix an issue with async logging batch splitting validation rules (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13722",children:"#13722"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Fix an issue with ",(0,t.jsx)(n.code,{children:"LangChain"}),"'s autologging thread-safety behavior (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13672",children:"#13672"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Disable support for running Spark autologging in a threadpool due to limitations in Spark (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13599",children:"#13599"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Mark ",(0,t.jsx)(n.code,{children:"role"})," and ",(0,t.jsx)(n.code,{children:"index"})," as required for chat schema (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13279",children:"#13279"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/chenmoneygithub",children:"@chenmoneygithub"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracing] Handle raw response in OpenAI autolog (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13802",children:"#13802"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracing] Fix a bug with tracing source run behavior when running inference with multithreading on ",(0,t.jsx)(n.code,{children:"LangChain"})," models (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13610",children:"#13610"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Documentation updates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[Docs] Add docstring warnings for upcoming changes to ChatModel (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13730",children:"#13730"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/stevenchen-db",children:"@stevenchen-db"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Docs] Add a contributor's guide for implementing tracing integrations (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13333",children:"#13333"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Docs] Add guidance in the use of ",(0,t.jsx)(n.code,{children:"model_config"})," when logging models as code (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13631",children:"#13631"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Docs] Add documentation for the use of custom library artifacts with the ",(0,t.jsx)(n.code,{children:"code_paths"})," model logging feature (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13702",children:"#13702"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/TomeHirata",children:"@TomeHirata"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["[Docs] Improve ",(0,t.jsx)(n.code,{children:"SparkML"})," ",(0,t.jsx)(n.code,{children:"log_model"})," documentation with guidance on how to return probabilities from classification models (",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/pull/13684",children:"#13684"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.18.0",children:"release change log"}),", and check out the latest documentation on ",(0,t.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>r});var t=l(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
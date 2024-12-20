"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8414],{7211:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=l(5893),n=l(1151);const o={title:"MLflow 2.17.0",slug:"2.17.0",authors:["mlflow-maintainers"]},s=void 0,r={permalink:"/mlflow-website/releases/2.17.0",source:"@site/releases/2024-10-11-2.17.0-release.md",title:"MLflow 2.17.0",description:"2.17.0 (2024-10-11)",date:"2024-10-11T00:00:00.000Z",formattedDate:"October 11, 2024",tags:[],readingTime:3.185,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.17.0",slug:"2.17.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.17.1",permalink:"/mlflow-website/releases/2.17.1"},nextItem:{title:"MLflow 2.16.2",permalink:"/mlflow-website/releases/2.16.2"}},h={authorsImageUrls:[void 0]},a=[{value:"2.17.0 (2024-10-11)",id:"2170-2024-10-11",level:2},{value:"Major Features and notifications",id:"major-features-and-notifications",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"2170-2024-10-11",children:"2.17.0 (2024-10-11)"}),"\n",(0,i.jsx)(t.p,{children:"We are excited to announce the release of MLflow 2.17.0! This release includes several enhancements to extend the\nfunctionality of MLflow's ChatModel interface to further extend its versatility for handling custom GenAI application use cases.\nAdditionally, we've improved the interface within the tracing UI to provide a structured output for retrieved documents,\nenhancing the ability to read the contents of those documents within the UI.\nWe're also starting the work on improving both the utility and the versatility of MLflow's evaluate functionality for GenAI,\ninitially with support for callable GenAI evaluation metrics."}),"\n",(0,i.jsx)(t.h3,{id:"major-features-and-notifications",children:"Major Features and notifications"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"ChatModel enhancements"})," - As the GenAI-focused 'cousin' of ",(0,i.jsx)(t.code,{children:"PythonModel"}),", ",(0,i.jsx)(t.code,{children:"ChatModel"})," is getting some sizable functionality\nextensions. From native support for tool calling (a requirement for creating a custom agent), simpler conversions to the\ninternal dataclass constructs needed to interface with ",(0,i.jsx)(t.code,{children:"ChatModel"})," via the introduction of ",(0,i.jsx)(t.code,{children:"from_dict"})," methods to all data structures,\nthe addition of a ",(0,i.jsx)(t.code,{children:"metadata"})," field to allow for full input payload customization, handling of the new ",(0,i.jsx)(t.code,{children:"refusal"})," response type, to the\ninclusion of the interface type to the response structure to allow for greater integration compatibility.\n(",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13191",children:"#13191"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13180",children:"#13180"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13143",children:"#13143"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13102",children:"#13102"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13071",children:"#13071"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Callable GenAI Evaluation Metrics"})," - As the intial step in a much broader expansion of the functionalities of ",(0,i.jsx)(t.code,{children:"mlflow.evaluate"})," for\nGenAI use cases, we've converted the GenAI evaluation metrics to be callable. This allows you to use them directly in packages that support\ncallable GenAI evaluation metrics, as well as making it simpler to debug individual responses when prototyping solutions. (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13144",children:"#13144"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Audio file support in the MLflow UI"})," - You can now directly 'view' audio files that have been logged and listen to them from within the MLflow UI's\nartifact viewer pane."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"MLflow AI Gateway is no longer deprecated"})," - We've decided to revert our deprecation for the AI Gateway feature. We had renamed it to the\nMLflow Deployments Server, but have reconsidered and reverted the naming and namespace back to the original configuration."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Features:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Tracing] Add Standardization to retriever span outputs within MLflow tracing (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13242",children:"#13242"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add support for LlamaIndex ",(0,i.jsx)(t.code,{children:"Workflows"})," objects to be serialized when calling ",(0,i.jsx)(t.code,{children:"log_model()"})," (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13277",children:"#13277"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13305",children:"#13305"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13336",children:"#13336"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add tool calling support for ChatModel (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13191",children:"#13191"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add ",(0,i.jsx)(t.code,{children:"from_dict()"})," function to ChatModel dataclasses (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13180",children:"#13180"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add metadata field for ChatModel (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13143",children:"#13143"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Update ChatCompletionResponse to populate object type (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13102",children:"#13102"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add support for LLM response refusal (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13071",children:"#13071"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add support for resources to be passed in via ",(0,i.jsx)(t.code,{children:"langchain.log_model()"})," (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13315",children:"#13315"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Add support for setting multiple retrievers' schema via ",(0,i.jsx)(t.code,{children:"set_retriever_schema"})," (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13246",children:"#13246"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Eval] Make Evaluation metrics callable (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13144",children:"#13144"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[UI] Add audio support to artifact viewer UI (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13017",children:"#13017"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/sydneyw-spotify",children:"@sydneyw-spotify"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Databricks] Add support for route_optimized parameter in databricks deployment client (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13222",children:"#13222"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/prabhatkgupta",children:"@prabhatkgupta"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Bug fixes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Tracking] Fix tracing for LangGraph (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13215",children:"#13215"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Fix an issue with ",(0,i.jsx)(t.code,{children:"presigned_url_artifact"})," requests being in the wrong format (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13366",children:"#13366"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Update Databricks dependency extraction functionality to work with the ",(0,i.jsx)(t.code,{children:"langchain-databricks"})," partner package. (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13266",children:"#13266"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Model Registry] Fix retry and credential refresh issues with artifact downloads from the model registry (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/12935",children:"#12935"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/rohitarun-db",children:"@rohitarun-db"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Fix LangChain autologging so that langchain-community is not required for partner packages (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13172",children:"#13172"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Artifacts] Fix issues with file removal for the local artifact repository (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13005",children:"#13005"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/rzalawad",children:"@rzalawad"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Documentation updates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Docs] Add guide for building custom GenAI apps with ChatModel (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13207",children:"#13207"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Add updates to the MLflow AI Gateway documentation (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13217",children:"#13217"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/daniellok-db",children:"@daniellok-db"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Remove MLflow AI Gateway deprecation status (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13153",children:"#13153"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Add contribution guide for MLflow tracing integrations (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13333",children:"#13333"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Add documentation regarding the ",(0,i.jsx)(t.code,{children:"run_id"})," parameter within the ",(0,i.jsx)(t.code,{children:"search_trace"})," API (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/13251",children:"#13251"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Please try it out and report any issues on ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/issues",children:"the issue tracker"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>r,a:()=>s});var i=l(7294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
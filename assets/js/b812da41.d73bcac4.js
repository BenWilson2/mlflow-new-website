"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7584],{6041:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=l(5893),o=l(1151);const s={title:"MLflow 1.9.0",slug:"1.9.0",authors:["mlflow-maintainers"]},a=void 0,i={permalink:"/mlflow-website/releases/1.9.0",source:"@site/releases/2020-06-19-1.9.0-release.md",title:"MLflow 1.9.0",description:"We are happy to announce the availability of MLflow 1.9.0!",date:"2020-06-19T00:00:00.000Z",formattedDate:"June 19, 2020",tags:[],readingTime:.865,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.9.0",slug:"1.9.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.9.1",permalink:"/mlflow-website/releases/1.9.1"},nextItem:{title:"MLflow 1.8.0",permalink:"/mlflow-website/releases/1.8.0"}},r={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We are happy to announce the availability of ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.9.0",children:"MLflow 1.9.0"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"In addition to bug and documentation fixes, MLflow 1.9.0 includes the following major features and improvements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"log_model"})," and ",(0,n.jsx)(t.code,{children:"save_model"})," APIs now support saving model signatures (the model's input and output schema)\nand example input along with the model itself (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2698",children:"#2698"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2775",children:"#2775"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/tomasatdatabricks",children:"@tomasatdatabricks"}),"). Model signatures are used\nto reorder and validate input fields when scoring/serving models using the pyfunc flavor, ",(0,n.jsx)(t.code,{children:"mlflow models"}),"\nCLI commands, or ",(0,n.jsx)(t.code,{children:"mlflow.pyfunc.spark_udf"})," (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2920",children:"#2920"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/tomasatdatabricks",children:"@tomasatdatabricks"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/aarondav",children:"@aarondav"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Introduce fastai model persistence and autologging APIs under ",(0,n.jsx)(t.code,{children:"mlflow.fastai"})," (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2619",children:"#2619"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2689",children:"#2689"})," ",(0,n.jsx)(t.a,{href:"https://github.com/antoniomdk",children:"@antoniomdk"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add pluggable ",(0,n.jsx)(t.code,{children:"mlflow.deployments"})," API and CLI for deploying models to custom serving tools, e.g. RedisAI\n(",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2327",children:"#2327"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/hhsecond",children:"@hhsecond"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add plugin interface for executing MLflow projects against custom backends (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2566",children:"#2566"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/jdlesage",children:"@jdlesage"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Enable viewing PDFs logged as artifacts from the runs UI (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2859",children:"#2859"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/ankmathur96",children:"@ankmathur96"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Significant performance and scalability improvements to metric comparison and scatter plots in\nthe UI (",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/2447",children:"#2447"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/mjlbach",children:"@mjlbach"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For a comprehensive list of changes, see the ",(0,n.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.9.0",children:"release change log"}),", and check out the latest documentation on ",(0,n.jsx)(t.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>i,a:()=>a});var n=l(7294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
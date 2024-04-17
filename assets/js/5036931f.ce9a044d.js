"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7754],{8403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(5893),a=t(1151);const r={title:"Announcing MLflow Enhancements - Deep Learning with MLflow (Part 1)",description:"Highlighting the recent improvements in MLflow for Deep Learning workflows",slug:"deep-learning-part-1",authors:["abe-omorogbe","hubert-zub","yun-park","chen-qian","jesse-chan"],tags:["Deep Learning"],thumbnail:"img/blog/dl-chart-grouping.gif"},s=void 0,o={permalink:"/mlflow-website/blog/deep-learning-part-1",source:"@site/blog/2024-03-05-deep-learning-part-1/index.md",title:"Announcing MLflow Enhancements - Deep Learning with MLflow (Part 1)",description:"Highlighting the recent improvements in MLflow for Deep Learning workflows",date:"2024-03-05T00:00:00.000Z",formattedDate:"March 5, 2024",tags:[{label:"Deep Learning",permalink:"/mlflow-website/blog/tags/deep-learning"}],readingTime:5.175,hasTruncateMarker:!0,authors:[{name:"Abe Omorogbe",title:"Product Manager, ML at Databricks",url:"https://www.linkedin.com/in/abeomor/",imageURL:"/img/authors/abe.png",key:"abe-omorogbe"},{name:"Hubert Zub",title:"Software Engineer at Databricks",url:"https://www.linkedin.com/in/hubert-zub/",imageURL:"/img/authors/hubert.png",key:"hubert-zub"},{name:"Yun Park",title:"Software Engineer at Databricks",url:"https://www.linkedin.com/in/yunpark93/",imageURL:"/img/authors/yun.png",key:"yun-park"},{name:"Chen Qian",title:"Software Engineer at Databricks",url:"https://www.linkedin.com/in/thomas-chen-qian/",imageURL:"/img/authors/chen.png",key:"chen-qian"},{name:"Jesse Chan",title:"Software Engineer at Databricks",key:"jesse-chan"}],frontMatter:{title:"Announcing MLflow Enhancements - Deep Learning with MLflow (Part 1)",description:"Highlighting the recent improvements in MLflow for Deep Learning workflows",slug:"deep-learning-part-1",authors:["abe-omorogbe","hubert-zub","yun-park","chen-qian","jesse-chan"],tags:["Deep Learning"],thumbnail:"img/blog/dl-chart-grouping.gif"},unlisted:!1,nextItem:{title:"2023 Year in Review",permalink:"/mlflow-website/blog/mlflow-year-in-review"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},c=[{value:"Deep Learning API Improvements",id:"deep-learning-api-improvements",level:2},{value:"System Metrics",id:"system-metrics",level:3},{value:"Improved Logging Performance",id:"improved-logging-performance",level:3},{value:"Checkpointing for Deep Learning",id:"checkpointing-for-deep-learning",level:3},{value:"User Experience and Productivity Enhancements",id:"user-experience-and-productivity-enhancements",level:2},{value:"Metric Aggregation",id:"metric-aggregation",level:3},{value:"Chart Grouping Functionality",id:"chart-grouping-functionality",level:3},{value:"Slash (&quot;/&quot;) Logging Syntax",id:"slash--logging-syntax",level:3},{value:"Chart Searching",id:"chart-searching",level:3},{value:"Run Details Redesign",id:"run-details-redesign",level:3},{value:"Getting Started Updates",id:"getting-started-updates",level:2},{value:"New Tutorials and Docs",id:"new-tutorials-and-docs",level:3},{value:"Seamless login with mlflow.login()",id:"seamless-login-with-mlflowlogin",level:3},{value:"Get Started Today",id:"get-started-today",level:2},{value:"Feedback",id:"feedback",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In the quickly evolving world of artificial intelligence, where generative AI has taken center stage, the landscape of machine learning is\nevolving at an unprecedented pace. There has been a surge in the use of cutting-edge deep learning (DL) libraries like\n",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/index",children:"Transformers"}),", ",(0,i.jsx)(n.a,{href:"https://www.tensorflow.org/",children:"Tensorflow"}),",\nand ",(0,i.jsx)(n.a,{href:"https://pytorch.org/",children:"PyTorch"})," to fine-tune these generative AI models for enhanced performance.\nAs this trend accelerates, it's become clear that the tools used to build these models must rapidly evolve as well, particularly when it comes\nto managing and optimizing these deep learning workloads. MLflow offers a practical solution for managing the complexities of these machine learning projects."]}),"\n",(0,i.jsxs)(n.p,{children:["In collaboration with ",(0,i.jsx)(n.a,{href:"https://www.mosaicml.com/",children:"MosaicML"})," and the broader ML community, MLflow is thrilled to unveil a set of eagerly awaited enhancements.\nThis latest release (",(0,i.jsx)(n.a,{href:"https://www.mlflow.org/releases/2.11.0",children:"MLflow 2.11"}),") introduces updated tracking UI capabilities in direct response to\n",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/posts/mlflow-org_qualtrics-survey-qualtrics-experience-management-activity-7128154257924513793-RCDG?utm_source=share&utm_medium=member_desktop",children:"the feedback"}),"\nand needs of MLflow enthusiasts. These updates are not just incremental; they represent a leap forward in addressing the needs of MLflow users doing Deep Learning."]}),"\n",(0,i.jsx)(n.p,{children:"The evolution of enhanced Deep Learning capabilities is a testament to MLflow's commitment to serving the open-source community, ensuring that its offerings\nare not just keeping pace, but setting the pace in the rapidly evolving domain of machine learning."}),"\n",(0,i.jsx)(n.h2,{id:"deep-learning-api-improvements",children:"Deep Learning API Improvements"}),"\n",(0,i.jsx)(n.p,{children:"Leveraging valuable insights from our user community, we've implemented critical enhancements to the effective scale of metrics logging and the inclusion of\nsystem-related metric logging within our platform. These improvements encompass expanded scalability options, support for logging more iterations and the\nlogging of system metrics."}),"\n",(0,i.jsx)(n.h3,{id:"system-metrics",children:"System Metrics"}),"\n",(0,i.jsxs)(n.p,{children:["This feature allows you to ",(0,i.jsx)(n.a,{href:"https://mlflow.org/docs/latest/system-metrics/index.html?highlight=system",children:"monitor system metrics"})," and identify any hardware issues that might be impacting performance.\nMetrics such as CPU utilization, Memory usage, disk usage etc., from all nodes in your cluster can now be logged and visualized within the MLflow UI."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"System Metrics",src:t(9952).Z+"",width:"1600",height:"823"})}),"\n",(0,i.jsx)(n.h3,{id:"improved-logging-performance",children:"Improved Logging Performance"}),"\n",(0,i.jsxs)(n.p,{children:["We recently introduced both asynchronous and batch logging, making it easier to log both\n",(0,i.jsx)(n.a,{href:"https://mlflow.org/docs/latest/tracking/tracking-api.html#parallel-runs",children:"parallel and distributed"})," DL training sessions. Additionally, the MLflow Client\nnow supports up to ",(0,i.jsx)(n.strong,{children:"1 million"})," steps (iterations) when logging metrics, allowing users to log more steps during long-running DL jobs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Parallel Runs",src:t(2312).Z+"",width:"1600",height:"546"})}),"\n",(0,i.jsx)(n.h3,{id:"checkpointing-for-deep-learning",children:"Checkpointing for Deep Learning"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://mlflow.org/releases/2.11.0#autologging-for-tensorflow-and-pytorch-now-supports-checkpointing-of-model-weights:~:text=both%20PyTorch%20and-,TensorFlow,-for%20automatic%20model",children:"TensorFlow"}),"\nand ",(0,i.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/python_api/mlflow.pytorch.html#mlflow.pytorch.autolog",children:"PyTorch"})," now support model weight checkpointing when\nusing autologging."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DL Checkpointing",src:t(4492).Z+"",width:"1600",height:"981"})}),"\n",(0,i.jsx)(n.h2,{id:"user-experience-and-productivity-enhancements",children:"User Experience and Productivity Enhancements"}),"\n",(0,i.jsx)(n.p,{children:"We have introduced substantial improvements to user experience and feature organization within our platform. These enhancements include more\nsophisticated user interfaces and an intuitive redesign of the run details page, the addition of chart groups and metric aggregation, all\naimed at simplifying navigation and enhancing productivity especially for Deep Learning use cases."}),"\n",(0,i.jsx)(n.h3,{id:"metric-aggregation",children:"Metric Aggregation"}),"\n",(0,i.jsx)(n.p,{children:"We've enhanced the UI with metric aggregation, enabling you to aggregate metrics across multiple runs based on\ndatasets, tags, or parameters. These improvements significantly improve the time it takes to understand training results when working\nwith large DL models, enabling more nuanced and comprehensive analysis of overarching trends in model performance across multiple dimensions."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DL Metric Aggregation",src:t(5835).Z+"",width:"960",height:"549"})}),"\n",(0,i.jsx)(n.h3,{id:"chart-grouping-functionality",children:"Chart Grouping Functionality"}),"\n",(0,i.jsx)(n.p,{children:"You can now easily categorize and organize your metrics, such as training, testing, and system metrics into\nnamed groups within the MLflow UI. This organization allows for a comprehensive overview of all metrics, enabling quicker access and\nbetter management, particularly when handling experiments with many metrics."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DL Chart Grouping",src:t(9861).Z+"",width:"960",height:"551"})}),"\n",(0,i.jsx)(n.h3,{id:"slash--logging-syntax",children:'Slash ("/") Logging Syntax'}),"\n",(0,i.jsx)(n.p,{children:'To further streamline metric organization, we\'ve implemented a new logging syntax that uses slashes\n("/") to group metrics. For example, using mlflow.log_metric("x/y/score", 100) helps in structuring and segregating different types\nof data or metrics into hierarchical groups, making it easier to navigate and interpret the logs, especially when dealing with complex\nmodels and experiments.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nmlflow.log_metric('SVR/val_MAPE', mean_absolute_percentage_error(test_y, pred_y))\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DL Slash Logging",src:t(1910).Z+"",width:"1000",height:"574"})}),"\n",(0,i.jsx)(n.h3,{id:"chart-searching",children:"Chart Searching"}),"\n",(0,i.jsx)(n.p,{children:"We've significantly enhanced the search functionality within our platform, enabling more robust and intuitive searching\nacross charts, parameters, and metrics. This upgrade allows for quicker and more precise retrieval of specific data points, streamlining the\nprocess of analyzing and comparing different aspects of your experiments."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DL Chart Searching",src:t(1486).Z+"",width:"999",height:"472"})}),"\n",(0,i.jsx)(n.h3,{id:"run-details-redesign",children:"Run Details Redesign"}),"\n",(0,i.jsx)(n.p,{children:"We reorganized the Run Details UI to a modular tabbed layout, added new drag and drop UI functionality so that you can\ncan now render logged tables. This enhancement will make it easier to organize your runs and experiments."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DL Run Details Redesign",src:t(8712).Z+"",width:"1000",height:"631"})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-updates",children:"Getting Started Updates"}),"\n",(0,i.jsxs)(n.p,{children:["Following extensive feedback from our user community, we've introduced significant updates to enhance the\n",(0,i.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/getting-started/index.html",children:"getting started"})," documentation within MLflow. These updates include a\n",(0,i.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/deep-learning/index.html",children:"comprehensive overhaul"})," of our documentation for easier navigation and\n",(0,i.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/deep-learning/pytorch/quickstart/pytorch_quickstart.html",children:"enriched guidance"}),", along with a streamlined\n",(0,i.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/python_api/mlflow.html#mlflow.login",children:"login API"}),". These enhancements, reflecting our commitment to improving the\nuser experience and workflow, aim to empower our users to achieve more with greater speed and ease."]}),"\n",(0,i.jsx)(n.h3,{id:"new-tutorials-and-docs",children:"New Tutorials and Docs"}),"\n",(0,i.jsx)(n.p,{children:"We've overhauled our documentation to offer a more comprehensive, user-friendly experience with practical examples\nto support both newcomers and experienced practitioners with the information they need to start a Deep Learning project."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deep Learning Docs",src:t(7740).Z+"",width:"1021",height:"558"})}),"\n",(0,i.jsx)(n.h3,{id:"seamless-login-with-mlflowlogin",children:"Seamless login with mlflow.login()"}),"\n",(0,i.jsxs)(n.p,{children:["We've streamlined our authentication processes.\n",(0,i.jsx)(n.a,{href:"https://mlflow.org/docs/latest/getting-started/tracking-server-overview/index.html#method-2-use-free-hosted-tracking-server-databricks-community-edition",children:"This method"}),"\nprovides a simple way to connect MLflow to your tracking server without having to leave your development environment.\n",(0,i.jsx)(n.a,{href:"https://mlflow.org/blog/databricks-ce",children:"Try it out today"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Login Update",src:t(330).Z+"",width:"1159",height:"453"})}),"\n",(0,i.jsx)(n.h2,{id:"get-started-today",children:"Get Started Today"}),"\n",(0,i.jsxs)(n.p,{children:["Dive into the latest MLflow updates today and enhance the way you manage your machine learning projects! With our newest enhancements,\nincluding advanced metric aggregation, automatic capturing of system metrics, intuitive feature grouping, and streamlined search capabilities,\nMLflow is here to elevate your data science workflow to new heights.\n",(0,i.jsx)(n.a,{href:"https://mlflow.org/releases/2.11.0",children:"Get started now with MLflow's cutting-edge tools and features"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install mlflow==2.11\n\nmlflow ui --port 8080\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import mlflow\n\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.datasets import load_diabetes\nfrom sklearn.ensemble import RandomForestRegressor\n\n# Set our tracking server uri for logging\nmlflow.set_tracking_uri(uri="http://127.0.0.1:8080")\n\nmlflow.autolog()\n\ndb = load_diabetes()\nX_train, X_test, y_train, y_test = train_test_split(db.data, db.target)\n\nrf = RandomForestRegressor(n_estimators=100, max_depth=6, max_features=3)\n# MLflow triggers logging automatically upon model fitting\nrf.fit(X_train, y_train)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"feedback",children:"Feedback"}),"\n",(0,i.jsxs)(n.p,{children:["We value your input! Our ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/mlflow/projects/4",children:"feature roadmap"})," prioritization is guided by feedback from the ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/feed/update/urn:li:activity:7128154257924513793",children:"MLflow late 2023 survey"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow",children:"GitHub Issues"})," and ",(0,i.jsx)(n.a,{href:"https://mlflow-users.slack.com/join/shared_invite/zt-1iffrtbly-UNU8hV03aV8feUeGmqf_uA#/shared-invite/email",children:"Slack"}),". Look out for our next survey later this year, by participating you can help ensure that the features you want are implemented in MLflow. You can also create an ",(0,i.jsx)(n.a,{href:"https://github.com/mlflow/mlflow",children:"issue on GitHub"})," or join our ",(0,i.jsx)(n.a,{href:"https://mlflow-users.slack.com/join/shared_invite/zt-1iffrtbly-UNU8hV03aV8feUeGmqf_uA#/shared-invite/email",children:"Slack"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9861:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-chart-grouping-f7f232a7f4048fdddde3338c5ed30902.gif"},1486:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-chart-searching-a06459f5a16b9ad28e7571d592cea5bd.gif"},4492:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-checkpointing-b1f298b18bd0e09facca8751a5cd599a.png"},7740:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-docs-93b181a7480d0a38c003a4ba44012825.png"},5835:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-metric-aggregation-a160faaae5aa4cee5b270ddc327fbda9.gif"},8712:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-run-details-d776f564ca6e435cdffbf070d5f02b0b.gif"},1910:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dl-slash-logging-21f02b8e210f4dbb614f3025ae8248b4.png"},330:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/login-update-578121a523809b9c607c73f811975f41.png"},2312:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/parallel-runs-d0e00c0275d69ccf3f879086d7f26e6f.png"},9952:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/system-metrics-b16140bd7099bca6362a3f04a6525a76.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
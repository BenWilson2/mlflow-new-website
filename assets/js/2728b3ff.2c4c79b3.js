"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5255],{9522:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(5893),o=i(1151);const r={title:"MLflow 2.11.0",slug:"2.11.0",authors:["mlflow-maintainers"]},s=void 0,l={permalink:"/mlflow-website/releases/2.11.0",source:"@site/releases/2024-03-01-2.11.0-release.md",title:"MLflow 2.11.0",description:"MLflow 2.11.0 includes several major features and improvements",date:"2024-03-01T00:00:00.000Z",formattedDate:"March 1, 2024",tags:[],readingTime:6.595,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.11.0",slug:"2.11.0",authors:["mlflow-maintainers"]},unlisted:!1,nextItem:{title:"MLflow 2.10.2",permalink:"/mlflow-website/releases/2.10.2"}},a={authorsImageUrls:[void 0]},d=[{value:"New Deep Learning Focused Improvements in the MLflow UI",id:"new-deep-learning-focused-improvements-in-the-mlflow-ui",level:3},{value:"Support for PEFT, unrestrictive Pipeline logging, and weight-less model logging in transformers",id:"support-for-peft-unrestrictive-pipeline-logging-and-weight-less-model-logging-in-transformers",level:3},{value:"Autologging for TensorFlow and PyTorch now supports checkpointing of model weights",id:"autologging-for-tensorflow-and-pytorch-now-supports-checkpointing-of-model-weights",level:3},{value:"ChatModel interface for a unified Chat experience with pyfunc models",id:"chatmodel-interface-for-a-unified-chat-experience-with-pyfunc-models",level:3},{value:"Keras 3 support in MLflow",id:"keras-3-support-in-mlflow",level:3},{value:"Mistral AI models are now available in the MLflow Deployments Server",id:"mistral-ai-models-are-now-available-in-the-mlflow-deployments-server",level:3},{value:"MLflow now supports the OpenAI 1.x SDK",id:"mlflow-now-supports-the-openai-1x-sdk",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"MLflow 2.11.0 includes several major features and improvements"}),"\n",(0,t.jsx)(n.p,{children:"With the MLflow 2.11.0 release, we're excited to bring a series of large and impactful features that span both GenAI and Deep Learning use cases."}),"\n",(0,t.jsx)(n.h3,{id:"new-deep-learning-focused-improvements-in-the-mlflow-ui",children:"New Deep Learning Focused Improvements in the MLflow UI"}),"\n",(0,t.jsx)(n.p,{children:"The MLflow Tracking UI got an overhaul to better support the review and comparison of training runs for Deep Learning workloads. From grouping to large-scale metric plotting throughout\nthe iterations of a DL model's training cycle, there are a large number of quality of life improvements to enhance your Deep Learning MLOps workflow."}),"\n",(0,t.jsx)(n.h3,{id:"support-for-peft-unrestrictive-pipeline-logging-and-weight-less-model-logging-in-transformers",children:"Support for PEFT, unrestrictive Pipeline logging, and weight-less model logging in transformers"}),"\n",(0,t.jsxs)(n.p,{children:["Support for the popular ",(0,t.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/llms/transformers/guide/index.html#peft-models-in-mlflow-transformers-flavor",children:"PEFT"})," library from HuggingFace is now available\nin the ",(0,t.jsx)(n.code,{children:"mlflow.transformers"})," flavor. In addition to PEFT support, we've removed the restrictions on Pipeline types\nthat can be logged to MLflow, as well as the ability to, when developing and testing models, log a transformers pipeline without copying foundational model weights. These\nenhancements strive to make the transformers flavor more useful for cutting-edge GenAI models, new pipeline types, and to simplify the development process of prompt engineering, fine-tuning,\nand to make iterative development faster and cheaper. Give the updated flavor a try today! (#11240, @B-Step62)"]}),"\n",(0,t.jsx)(n.h3,{id:"autologging-for-tensorflow-and-pytorch-now-supports-checkpointing-of-model-weights",children:"Autologging for TensorFlow and PyTorch now supports checkpointing of model weights"}),"\n",(0,t.jsxs)(n.p,{children:["We've added support to both ",(0,t.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/python_api/mlflow.pytorch.html#mlflow.pytorch.autolog",children:"PyTorch"})," and\n",(0,t.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/python_api/mlflow.tensorflow.html#mlflow.tensorflow.autolog",children:"TensorFlow"})," for automatic model weights checkpointing (including resumption from a\nprevious state) for the auto logging implementations within both flavors. This highly requested feature allows you to automatically configure long-running Deep Learning training\nruns to keep a safe storage of your best epoch, eliminating the risk of a failure late in training from losing the state of the model optimization. (#11197, #10935, @WeichenXu123)"]}),"\n",(0,t.jsx)(n.h3,{id:"chatmodel-interface-for-a-unified-chat-experience-with-pyfunc-models",children:"ChatModel interface for a unified Chat experience with pyfunc models"}),"\n",(0,t.jsxs)(n.p,{children:["We've added a new interface to Pyfunc for GenAI workloads. The new ",(0,t.jsx)(n.code,{children:"ChatModel"})," interface allows for interacting with a deployed GenAI chat model as you would with any other provider.\nThe simplified interface (no longer requiring conformance to a Pandas DataFrame input type) strives to unify the API interface experience. (#10820, @daniellok-db)"]}),"\n",(0,t.jsx)(n.h3,{id:"keras-3-support-in-mlflow",children:"Keras 3 support in MLflow"}),"\n",(0,t.jsxs)(n.p,{children:["We now support Keras 3. This large overhaul of the Keras library introduced new fundamental changes to how Keras integrates with different DL frameworks, bringing with it\na host of new functionality and interoperability. To learn more, see the ",(0,t.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/deep-learning/keras/quickstart/quickstart_keras.html",children:"Keras 3.0 Tutorial"}),"\nto start using the updated model flavor today! (#10830, @chenmoneygithub)"]}),"\n",(0,t.jsx)(n.h3,{id:"mistral-ai-models-are-now-available-in-the-mlflow-deployments-server",children:"Mistral AI models are now available in the MLflow Deployments Server"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://mistral.ai/",children:"Mistral AI"})," has been added as a native ",(0,t.jsx)(n.a,{href:"https://www.mlflow.org/docs/latest/llms/deployments/index.html#providers",children:"provider"})," for the MLflow Deployments Server. You can\nnow create proxied connections to the Mistral AI services for completions and embeddings with their powerful GenAI models. (#11020, @thnguyendn)"]}),"\n",(0,t.jsx)(n.h3,{id:"mlflow-now-supports-the-openai-1x-sdk",children:"MLflow now supports the OpenAI 1.x SDK"}),"\n",(0,t.jsx)(n.p,{children:"We've added compatibility support for the OpenAI 1.x SDK. Whether you're using an OpenAI LLM for model evaluation or calling OpenAI within a LangChain model, you'll now be able to\nutilize the 1.x family of the OpenAI SDK without having to point to deprecated legacy APIs. (#11123, @harupy)"}),"\n",(0,t.jsx)(n.p,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[UI] Revamp the MLflow Tracking UI for Deep Learning workflows, offering a more intuitive and efficient user experience (#11233, @daniellok-db)"}),"\n",(0,t.jsx)(n.li,{children:"[Data] Introduce the ability to log datasets without loading them into memory, optimizing resource usage and processing time (#11172, @chenmoneygithub)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Introduce logging frequency controls for TensorFlow, aligning it with Keras for consistent performance monitoring (#11094, @chenmoneygithub)"}),"\n",(0,t.jsxs)(n.li,{children:["[Models] Add PySpark DataFrame support in ",(0,t.jsx)(n.code,{children:"mlflow.pyfunc.predict"}),", enhancing data compatibility and analysis options for batch inference (#10939, @ernestwong-db)"]}),"\n",(0,t.jsx)(n.li,{children:"[Models] Introduce new CLI commands for updating model requirements, facilitating easier maintenance, validation and updating of models without having to re-log (#11061, @daniellok-db)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Update Embedding API for sentence transformers to ensure compatibility with OpenAI format, broadening model application scopes (#11019, @lu-wang-dl)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Improve input and signature support for text-generation models, optimizing for Chat and Completions tasks (#11027, @es94129)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Enable chat and completions task outputs in the text-generation pipeline, expanding interactive capabilities (#10872, @es94129)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Add node id to system metrics for enhanced logging in multi-node setups, improving diagnostics and monitoring (#11021, @chenmoneygithub)"}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Implement ",(0,t.jsx)(n.code,{children:"mlflow.config.enable_async_logging"})," for asynchronous logging, improving log handling and system performance (#11138, @chenmoneygithub)"]}),"\n",(0,t.jsx)(n.li,{children:"[Evaluate] Enhance model evaluation with endpoint URL support, streamlining performance assessments and integrations (#11262, @B-Step62)"}),"\n",(0,t.jsx)(n.li,{children:"[Deployments] Implement chat & chat streaming support for Cohere, enhancing interactive model deployment capabilities (#10976, @gabrielfu)"}),"\n",(0,t.jsx)(n.li,{children:"[Deployments] Enable Cohere streaming support, allowing real-time interaction functionalities for the MLflow Deployments server with the Cohere provider (#10856, @gabrielfu)"}),"\n",(0,t.jsx)(n.li,{children:"[Docker / Scoring] Optimize Docker images for model serving, ensuring more efficient deployment and scalability (#10954, @B-Step62)"}),"\n",(0,t.jsxs)(n.li,{children:["[Scoring] Support completions (",(0,t.jsx)(n.code,{children:"prompt"}),") and embeddings (",(0,t.jsx)(n.code,{children:"input"}),") format inputs in the scoring server, increasing model interaction flexibility (#10958, @es94129)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Bug Fixes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Model Registry] Correct the oversight of not utilizing the default credential file in model registry setups (#11261, @B-Step62)"}),"\n",(0,t.jsx)(n.li,{children:"[Model Registry] Address the visibility issue of aliases in the model versions table within the registered model detail page (#11223, @smurching)"}),"\n",(0,t.jsxs)(n.li,{children:["[Models] Ensure ",(0,t.jsx)(n.code,{children:"load_context()"})," is called when enforcing ",(0,t.jsx)(n.code,{children:"ChatModel"})," outputs so that all required external references are included in the model object instance (#11150, @daniellok-db)"]}),"\n",(0,t.jsx)(n.li,{children:"[Models] Rectify the keras output dtype in signature mismatches, ensuring data consistency and accuracy (#11230, @chenmoneygithub)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Resolve spark model loading failures, enhancing model reliability and accessibility (#11227, @WeichenXu123)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Eliminate false warnings for missing signatures in Databricks, improving the user experience and model validation processes (#11181, @B-Step62)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Implement a timeout for signature/requirement inference during Transformer model logging, optimizing the logging process and avoiding delays (#11037, @B-Step62)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Address the missing dtype issue for transformer pipelines, ensuring data integrity and model accuracy (#10979, @B-Step62)"}),"\n",(0,t.jsx)(n.li,{children:"[Models] Correct non-idempotent predictions due to in-place updates to model-config, stabilizing model outputs (#11014, @B-Step62)"}),"\n",(0,t.jsxs)(n.li,{children:["[Models] Fix an issue where specifying ",(0,t.jsx)(n.code,{children:"torch.dtype"})," as a string was not being applied correctly to the underlying transformers model (#11297, #11295, @harupy)"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Fix ",(0,t.jsx)(n.code,{children:"mlflow.evaluate"})," ",(0,t.jsx)(n.code,{children:"col_mapping"})," bug for non-LLM/custom metrics, ensuring accurate evaluation and metric calculation (#11156, @sunishsheth2009)"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Resolve the ",(0,t.jsx)(n.code,{children:"TensorInfo"})," TypeError exception message issue, ensuring clarity and accuracy in error reporting for users (#10953, @leecs0503)"]}),"\n",(0,t.jsxs)(n.li,{children:["[Tracking] Enhance ",(0,t.jsx)(n.code,{children:"RestException"})," objects to be picklable, improving their usability in distributed computing scenarios where serialization is essential (#10936, @WeichenXu123)"]}),"\n",(0,t.jsx)(n.li,{children:"[Tracking] Address the handling of unrecognized response error codes, ensuring robust error processing and improved user feedback in edge cases (#10918, @chenmoneygithub)"}),"\n",(0,t.jsxs)(n.li,{children:["[Spark] Update hardcoded ",(0,t.jsx)(n.code,{children:"io.delta:delta-spark_2.12:3.0.0"})," dependency to the correct scala version, aligning dependencies with project requirements (#11149, @WeichenXu123)"]}),"\n",(0,t.jsxs)(n.li,{children:["[Server-infra] Adapt to newer versions of python by avoiding ",(0,t.jsx)(n.code,{children:"importlib.metadata.entry_points().get"}),", enhancing compatibility and stability (#10752, @raphaelauv)"]}),"\n",(0,t.jsx)(n.li,{children:"[Server-infra / Tracking] Introduce an environment variable to disable mlflow configuring logging on import, improving configurability and user control (#11137, @jmahlik)"}),"\n",(0,t.jsxs)(n.li,{children:["[Auth] Enhance auth validation for ",(0,t.jsx)(n.code,{children:"mlflow.login()"}),", streamlining the authentication process and improving security (#11039, @chenmoneygithub)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Documentation Updates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Docs] Introduce a comprehensive notebook demonstrating the use of ChatModel with Transformers and Pyfunc, providing users with practical insights and guidelines for leveraging these models (#11239, @daniellok-db)"}),"\n",(0,t.jsx)(n.li,{children:"[Tracking / Docs] Stabilize the dataset logging APIs, removing the experimental status (#11229, @dbczumar)"}),"\n",(0,t.jsx)(n.li,{children:"[Docs] Revise and update the documentation on authentication database configuration, offering clearer instructions and better support for setting up secure authentication mechanisms (#11176, @gabrielfu)"}),"\n",(0,t.jsxs)(n.li,{children:["[Docs] Publish a new guide and tutorial for MLflow data logging and ",(0,t.jsx)(n.code,{children:"log_input"}),", enriching the documentation with actionable advice and examples for effective data handling (#10956, @BenWilson2)"]}),"\n",(0,t.jsx)(n.li,{children:"[Docs] Upgrade the documentation visuals by replacing low-resolution and poorly dithered GIFs with high-quality HTML5 videos, significantly enhancing the learning experience (#11051, @BenWilson2)"}),"\n",(0,t.jsx)(n.li,{children:"[Docs / Examples] Correct the compatibility matrix for OpenAI in MLflow Deployments Server documentation, providing users with accurate integration details and supporting smoother deployments (#11015, @BenWilson2)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,t.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.11.0",children:"release change log"}),", and check out the latest documentation on ",(0,t.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
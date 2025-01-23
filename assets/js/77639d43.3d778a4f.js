"use strict";(self.webpackChunknaptha_docs=self.webpackChunknaptha_docs||[]).push([[4404],{7634:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=i(4848),r=i(8453);const s={sidebar_label:"Create a New User"},a="Creating Your First Naptha User Account",l={id:"Tutorials/create-a-new-user",title:"Creating Your First Naptha User Account",description:"What is a Naptha User Account?",source:"@site/docs/Tutorials/create-a-new-user.md",sourceDirName:"Tutorials",slug:"/Tutorials/create-a-new-user",permalink:"/Tutorials/create-a-new-user",draft:!1,unlisted:!1,editUrl:"https://github.com/NapthaAI/docs/tree/main/docs/Tutorials/create-a-new-user.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create a New User"},sidebar:"docs",previous:{title:"List of Tutorials",permalink:"/Tutorials/"},next:{title:"Your First Agent Module",permalink:"/Tutorials/module-guide"}},c={},o=[{value:"What is a Naptha User Account?",id:"what-is-a-naptha-user-account",level:2},{value:"1. Getting Started",id:"1-getting-started",level:2},{value:"Install the SDK",id:"install-the-sdk",level:3},{value:"2. Creating Your Account",id:"2-creating-your-account",level:2},{value:"Method 1: Interactive Signup (Recommended)",id:"method-1-interactive-signup-recommended",level:3},{value:"Method 2: Pre-configured Setup",id:"method-2-pre-configured-setup",level:3},{value:"3. Verifying Your Setup",id:"3-verifying-your-setup",level:2},{value:"Check Available Nodes",id:"check-available-nodes",level:3},{value:"Try a Sample Agent",id:"try-a-sample-agent",level:3},{value:"Verify Programmatically",id:"verify-programmatically",level:3},{value:"4. Best Practices",id:"4-best-practices",level:2},{value:"Security",id:"security",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Need Help?",id:"need-help",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"creating-your-first-naptha-user-account",children:"Creating Your First Naptha User Account"})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-a-naptha-user-account",children:"What is a Naptha User Account?"}),"\n",(0,t.jsx)(n.p,{children:"Your Naptha account is your identity on the Naptha platform. It allows you to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deploy and manage agents, tools, environments and other modules on the Naptha Hub"}),"\n",(0,t.jsx)(n.li,{children:"Access and interact with the Naptha Hub's features and services"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through the process of creating your first Naptha user account step by step."}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Prerequisites"}),(0,t.jsx)(n.p,{children:"Before we begin, ensure you have:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python 3.8 or higher installed"}),"\n",(0,t.jsxs)(n.li,{children:["Poetry package manager (",(0,t.jsx)(n.code,{children:"pipx install poetry"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Basic familiarity with command line tools"}),"\n",(0,t.jsx)(n.li,{children:"Git installed"}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"1-getting-started",children:"1. Getting Started"}),"\n",(0,t.jsx)(n.h3,{id:"install-the-sdk",children:"Install the SDK"}),"\n",(0,t.jsx)(n.p,{children:"First, clone and install the Naptha SDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NapthaAI/naptha-sdk.git\ncd naptha-sdk\npoetry install\npoetry shell\ncp .env.example .env #set up your environment variables\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-creating-your-account",children:"2. Creating Your Account"}),"\n",(0,t.jsx)(n.p,{children:"You have two methods to choose from:"}),"\n",(0,t.jsx)(n.h3,{id:"method-1-interactive-signup-recommended",children:"Method 1: Interactive Signup (Recommended)"}),"\n",(0,t.jsx)(n.p,{children:"The simplest way to create a new account is through the interactive CLI. Run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha signup\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Guide you through username/password creation"}),"\n",(0,t.jsx)(n.li,{children:"Generate your cryptographic public/private keypair"}),"\n",(0,t.jsx)(n.li,{children:"Automatically save your credentials to the .env file"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"method-2-pre-configured-setup",children:"Method 2: Pre-configured Setup"}),"\n",(0,t.jsx)(n.p,{children:"If you prefer setting credentials beforehand:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit your ",(0,t.jsx)(n.code,{children:".env"})," file with your desired credentials:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# .env file\nHUB_USERNAME=your_username\nHUB_PASSWORD=your_password\nPRIVATE_KEY=your_private_key  # Optional - will be generated if not provided\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run signup:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha signup\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-verifying-your-setup",children:"3. Verifying Your Setup"}),"\n",(0,t.jsx)(n.h3,{id:"check-available-nodes",children:"Check Available Nodes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha nodes\n"})}),"\n",(0,t.jsx)(n.h3,{id:"try-a-sample-agent",children:"Try a Sample Agent"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'naptha run agent:hello_world_agent -p "firstname=sam surname=altman"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"verify-programmatically",children:"Verify Programmatically"}),"\n",(0,t.jsxs)(n.p,{children:["You can also verify the new credentials programmatically via the ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/naptha-sdk/",children:"client SDK"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from naptha_sdk.client.naptha import Naptha\n\nasync def verify_credentials():\n    try:\n        async with Naptha() as naptha:\n            await naptha.hub.signin(os.getenv("HUB_USERNAME"), os.getenv("HUB_PASSWORD"))\n            return True\n    except Exception as e:\n        print(f"Credential verification failed: {str(e)}")\n        return False\n'})}),"\n",(0,t.jsx)(n.h2,{id:"4-best-practices",children:"4. Best Practices"}),"\n",(0,t.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Protect Your Private Key"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Never share your private key"}),"\n",(0,t.jsxs)(n.li,{children:["Back up your ",(0,t.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,t.jsx)(n.li,{children:"Use environment variables in production"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Password Guidelines"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use strong passwords (12+ characters)"}),"\n",(0,t.jsx)(n.li,{children:"Mix uppercase, lowercase, numbers, symbols"}),"\n",(0,t.jsx)(n.li,{children:"Avoid common words or patterns"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"maintenance",children:"Maintenance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keep the SDK updated by fetching the latest version from GitHub or PyPI"}),"\n",(0,t.jsx)(n.li,{children:"Review registered agents periodically"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Connection Issues"}),(0,t.jsx)(n.p,{children:"If you're having trouble connecting:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check your node URL in ",(0,t.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Local node\nNODE_URL=http://localhost:7001\n\n# Hosted node\nNODE_URL=http://node.naptha.ai:7001\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify credentials:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat .env\n"})}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Authentication Issues"}),(0,t.jsx)(n.p,{children:"If you're having trouble authenticating:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure correct credentials in ",(0,t.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Try creating a new account with a different username and password and re-run the signup command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha signup\n"})}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(n.p,{children:"Once your account is set up, you can:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Explore available agents:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"naptha agents\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create your own agent:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Clone the ",(0,t.jsx)(n.a,{href:"https://github.com/NapthaAI/module_template?tab=readme-ov-file",children:"base template"})]}),"\n",(0,t.jsx)(n.li,{children:"Follow the template instructions for prototyping, testing and deploying your agent"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can also follow our ",(0,t.jsx)(n.a,{href:"/Tutorials/module-guide",children:"Quick Guide to Creating and Publishing Your First Agent Module on Naptha"})," to create your\nown agent."]})}),"\n",(0,t.jsx)(n.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Join our ",(0,t.jsx)(n.a,{href:"https://naptha.ai/naptha-community",children:"Discord Community"})]}),"\n",(0,t.jsxs)(n.li,{children:["Follow us on ",(0,t.jsx)(n.a,{href:"https://twitter.com/NapthaAI",children:"Twitter"})]}),"\n",(0,t.jsxs)(n.li,{children:["Join us on ",(0,t.jsx)(n.a,{href:"https://warpcast.com/naptha",children:"Farcaster"})]}),"\n",(0,t.jsxs)(n.li,{children:["Get help with technical issues on ",(0,t.jsx)(n.a,{href:"https://github.com/NapthaAI/naptha-sdk/issues",children:"GitHub"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
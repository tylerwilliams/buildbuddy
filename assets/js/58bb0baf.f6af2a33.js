(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,h=s["".concat(l,".").concat(p)]||s[p]||b[p]||i;return n?r.a.createElement(h,o(o({ref:t},d),{},{components:n})):r.a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(126)),l={id:"enterprise-mac-rbe",title:"Enterprise Mac RBE Setup",sidebar_label:"Enterprise Mac RBE Setup"},o={unversionedId:"enterprise-mac-rbe",id:"enterprise-mac-rbe",isDocsHomePage:!1,title:"Enterprise Mac RBE Setup",description:"Deploying Mac executors requires a little extra love since the deployment process can't easily be automated via Kubernetes.",source:"@site/../docs/enterprise-mac-rbe.md",slug:"/enterprise-mac-rbe",permalink:"/docs/enterprise-mac-rbe",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-mac-rbe.md",version:"current",sidebar_label:"Enterprise Mac RBE Setup",sidebar:"someSidebar",previous:{title:"Enterprise RBE Setup",permalink:"/docs/enterprise-rbe"},next:{title:"Prometheus Metrics",permalink:"/docs/prometheus-metrics"}},c=[{value:"Deploying a BuildBuddy cluster",id:"deploying-a-buildbuddy-cluster",children:[]},{value:"Mac environment setup",id:"mac-environment-setup",children:[{value:"Downloading XCode",id:"downloading-xcode",children:[]},{value:"Installing XCode",id:"installing-xcode",children:[]},{value:"Installing Homebrew",id:"installing-homebrew",children:[]}]},{value:"Installing the BuildBuddy Mac executor",id:"installing-the-buildbuddy-mac-executor",children:[{value:"Download the BuildBuddy executor",id:"download-the-buildbuddy-executor",children:[]},{value:"Make the executor executable",id:"make-the-executor-executable",children:[]},{value:"Create directories",id:"create-directories",children:[]},{value:"Create config file",id:"create-config-file",children:[]},{value:"Create a Launch Agent .plist file",id:"create-a-launch-agent-plist-file",children:[]},{value:"Update Launch Agent plist permissions",id:"update-launch-agent-plist-permissions",children:[]},{value:"Start the Launch Agent",id:"start-the-launch-agent",children:[]},{value:"Verify installation",id:"verify-installation",children:[]}]},{value:"Optional setup",id:"optional-setup",children:[{value:"Optional: Enable Autologin",id:"optional-enable-autologin",children:[]},{value:"Optional: Install Java",id:"optional-install-java",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Deploying Mac executors requires a little extra love since the deployment process can't easily be automated via Kubernetes."),Object(i.b)("h2",{id:"deploying-a-buildbuddy-cluster"},"Deploying a BuildBuddy cluster"),Object(i.b)("p",null,"First you'll need to deploy the BuildBuddy app which serves the BuildBuddy UI, acts as a scheduler, and handles caching - which we still recommend deploying to a Linux Kubernetes cluster. "),Object(i.b)("p",null,"You can follow the standard ",Object(i.b)("a",{parentName:"p",href:"/docs/enterprise-rbe"},"Enterprise RBE Setup")," instructions to get your cluster up and running."),Object(i.b)("h2",{id:"mac-environment-setup"},"Mac environment setup"),Object(i.b)("p",null,"Once you have a BuildBuddy cluster deployed with RBE enabled, you can start setting up your Mac executors."),Object(i.b)("h3",{id:"downloading-xcode"},"Downloading XCode"),Object(i.b)("p",null,"When starting with a clean Mac, you'll first need to make sure XCode is installed. You can download XCode from ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/download/more/"},"Apple's Developer Website")," (you'll need an Apple Developer account)."),Object(i.b)("p",null,"We recommend installing at least XCode 12.2 (which is the default XCode version used if no ",Object(i.b)("inlineCode",{parentName:"p"},"--xcode_version")," Bazel flag is specified)."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If installing on many machines, we recommend downloading the XCode .xip file to a location you control (like a cloud storage bucket) and downloading from there using a simple curl command. This reduces the number of times you have to login to your Apple Developer account."))),Object(i.b)("h3",{id:"installing-xcode"},"Installing XCode"),Object(i.b)("p",null,"Once your .xip file is downloaded, you can expand it with the following command."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"xip --expand Xcode_12.2.xip\n")),Object(i.b)("p",null,"You can then move it to your ",Object(i.b)("inlineCode",{parentName:"p"},"Applications")," directory with the version number as a suffix (so multiple XCode versions can be installed together and selected between using the ",Object(i.b)("inlineCode",{parentName:"p"},"--xcode_version")," Bazel flag)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"mv Xcode.app /Applications/Xcode_12.2.app\n")),Object(i.b)("p",null,"If this is the first XCode version you're installing, you'll want to select it as your default XCode version with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"sudo xcode-select -s /Applications/Xcode_12.2.app\n")),Object(i.b)("p",null,"You can then accept the license with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"sudo xcodebuild -license accept\n")),Object(i.b)("p",null,'And run the "first launch" with'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"sudo xcodebuild -runFirstLaunch\n")),Object(i.b)("h3",{id:"installing-homebrew"},"Installing Homebrew"),Object(i.b)("p",null,"You'll likely want to install ",Object(i.b)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," on your fresh executor to make installing other software easier. You can install it with the following line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),Object(i.b)("h2",{id:"installing-the-buildbuddy-mac-executor"},"Installing the BuildBuddy Mac executor"),Object(i.b)("p",null,"Now that the environment is configured, we can download and install the BuildBuddy Mac executor."),Object(i.b)("h3",{id:"download-the-buildbuddy-executor"},"Download the BuildBuddy executor"),Object(i.b)("p",null,"The latest BuildBuddy executor binary can be downloaded with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"curl -fSL https://storage.googleapis.com/buildbuddy-tools/binaries/buildbuddy-executor -o buildbuddy-executor\n")),Object(i.b)("h3",{id:"make-the-executor-executable"},"Make the executor executable"),Object(i.b)("p",null,"In order to run the executor binary, we must first make it executable with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"chmod +x buildbuddy-executor\n")),Object(i.b)("h3",{id:"create-directories"},"Create directories"),Object(i.b)("p",null,"If you don't already have any launch agents installed, you'll need to make sure the ",Object(i.b)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/")," directory exits with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mkdir -p ~/Library/LaunchAgents/\n")),Object(i.b)("p",null,"You'll also need a directory to store the executor's disk cache and execution roots. We recommend ",Object(i.b)("em",{parentName:"p"},"avoiding")," using the ",Object(i.b)("inlineCode",{parentName:"p"},"/tmp")," directory since this is periodically cleaned up."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mkdir -p buildbuddy\n")),Object(i.b)("h3",{id:"create-config-file"},"Create config file"),Object(i.b)("p",null,"You'll need to create a ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," with the following contents:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'executor:\n  root_directory: "/Users/YOUR_USERNAME/buildbuddy/remote_build"\n  app_target: "grpcs://YOUR_BUILDBUDDY_CLUSTER_URL:443"\n  local_cache_directory: "/Users/YOUR_USERNAME/buildbuddy/filecache"\n  local_cache_size_bytes: 100000000000  # 100GB\n')),Object(i.b)("p",null,"Make sure to replace ",Object(i.b)("em",{parentName:"p"},"YOUR_USERNAME")," with your Mac username and ",Object(i.b)("em",{parentName:"p"},"YOUR_BUILDBUDDY_CLUSTER_URL")," with the grpc url the BuildBuddy cluster you deployed. If you deployed the cluster without an NGINX Ingress, you'll need to update the protocol to grpc:// and the port to 1985."),Object(i.b)("h3",{id:"create-a-launch-agent-plist-file"},"Create a Launch Agent .plist file"),Object(i.b)("p",null,"Now that everything is in place, we can create a LaunchAgent .plist file that tells Mac OS to keep the executor binary running on launch, and restart it if ever stops."),Object(i.b)("p",null,"Make sure to replace ",Object(i.b)("em",{parentName:"p"},"YOUR_USERNAME")," with your Mac username and ",Object(i.b)("em",{parentName:"p"},"YOUR_MACS_NETWORK_ADDRESS")," with the IP address or DNS name of the Mac."),Object(i.b)("p",null,"You can place this file in ",Object(i.b)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/buildbuddy-executor.plist"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\n<!DOCTYPE plist PUBLIC \\"-//Apple//DTD PLIST 1.0//EN\\" \\"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">\n<plist version=\\"1.0\\">\n    <dict>\n        <key>Label</key>\n        <string>buildbuddy-executor</string>\n        <key>EnvironmentVariables</key>\n        <dict>\n            <key>MY_HOSTNAME</key>\n            <string>YOUR_MACS_NETWORK_ADDRESS</string>\n            <key>MY_POOL</key>\n            <string></string>\n        </dict>\n        <key>WorkingDirectory</key>\n        <string>/Users/YOUR_USERNAME</string>\n        <key>ProgramArguments</key>\n        <array>\n            <string>./buildbuddy-executor</string>\n            <string>--config_file</string>\n            <string>config.yaml</string>\n        </array>\n        <key>KeepAlive</key>\n        <true/>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>StandardErrorPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stderr.log</string>\n        <key>StandardOutPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stdout.log</string>\n    </dict>\n</plist>\n')),Object(i.b)("h3",{id:"update-launch-agent-plist-permissions"},"Update Launch Agent plist permissions"),Object(i.b)("p",null,"You may need to update the file's permissions with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"chmod 600 ~/Library/LaunchAgents/buildbuddy-executor.plist\n")),Object(i.b)("h3",{id:"start-the-launch-agent"},"Start the Launch Agent"),Object(i.b)("p",null,"You can load the Launch Agent with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"launchctl load ~/Library/LaunchAgents/buildbuddy-executor.plist\n")),Object(i.b)("p",null,"And start it with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"launchctl start buildbuddy-executor\n")),Object(i.b)("h3",{id:"verify-installation"},"Verify installation"),Object(i.b)("p",null,"You can verify that your BuildBuddy Executor successfully connected to the cluster by live tailing the stdout file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"tail -f buildbuddy_stdout.log\n")),Object(i.b)("h2",{id:"optional-setup"},"Optional setup"),Object(i.b)("h3",{id:"optional-enable-autologin"},"Optional: Enable Autologin"),Object(i.b)("p",null,"If your Mac executor restarts for whatever reason, you'll likely want to enable auto login so the executor will reconnect after rebooting instead of getting stuck on a login screen."),Object(i.b)("p",null,"There's a convenient ",Object(i.b)("inlineCode",{parentName:"p"},"brew")," package called ",Object(i.b)("inlineCode",{parentName:"p"},"kcpassword")," that makes this easy."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'brew tap xfreebird/utils\nbrew install kcpassword\n\nsudo enable_autologin "MY_USER" "MY_PASSWORD"\n')),Object(i.b)("h3",{id:"optional-install-java"},"Optional: Install Java"),Object(i.b)("p",null,"If you're doing a lot of Java builds on your Mac executors that are not fully hermetic (i.e. rely on the system installed Java rather than the remote Java SDK shipped by Bazel), you can install the JDK with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"brew install --cask adoptopenjdk\n")))}u.isMDXComponent=!0}}]);
import{_ as s,c as a,o,N as n}from"./chunks/framework.cd9250a1.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Front-end/ts.md"}'),t={name:"Front-end/ts.md"},e=n(`<h2 id="tsconfig-json" tabindex="-1">tsconfig.json <a class="header-anchor" href="#tsconfig-json" aria-label="Permalink to &quot;tsconfig.json&quot;">​</a></h2><h3 id="typeroots" tabindex="-1">typeRoots <a class="header-anchor" href="#typeroots" aria-label="Permalink to &quot;typeRoots&quot;">​</a></h3><p>在TypeScript中，可以通过typeRoots选项为项目定义类型文件的搜索位置。该选项用于指定包含类型声明文件（.d.ts）的根目录。如果你使用了第三方库，并且这些库没有自己的类型声明文件，你就需要手动创建声明文件（或者从其他地方获取）并将它们放在typeRoots目录中。</p><p>typeRoots选项通常在tsconfig.json文件中进行配置。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;typeRoots&quot;: [&quot;./typings&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面的例子中，将<code>&quot;./typings&quot;</code>目录作为默认的类型文件搜索路径。如果你想要添加多个位置，你可以简单地将它们添加到数组中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;typeRoots&quot;: [&quot;./typings&quot;, &quot;./node_modules/@types&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面的例子中，<code>&quot;./typings&quot;</code>和<code>&quot;./node_modules/@types&quot;</code>两个目录都会被搜索以寻找类型文件。</p><p>请注意，如果typeRoots选项未指定，则TypeScript只会在当前包含源代码的目录中搜索类型易声明文件。因此，如果使用了第三方库且未提供类型声明文件，则无法编译您的项目并会出现错误提示。使用typeRoots选项可以帮助您管理您的类型声明文件，使得您的项目更加容易维护和扩展。</p><h3 id="declaration" tabindex="-1">declaration <a class="header-anchor" href="#declaration" aria-label="Permalink to &quot;declaration&quot;">​</a></h3><p>可以将其设置为 <code>true</code> 来让 tsc 自动生成相应的 <code>.d.ts</code> 文件：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">declaration</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),p=[e];function l(c,r,i,d,y,u){return o(),a("div",null,p)}const D=s(t,[["render",l]]);export{A as __pageData,D as default};

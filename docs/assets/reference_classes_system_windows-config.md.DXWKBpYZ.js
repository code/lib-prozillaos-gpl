import{_ as e,c as s,o as a,a2 as t}from"./chunks/framework.81OU27y8.js";const k=JSON.parse('{"title":"Class WindowsConfig","description":"","frontmatter":{"outline":"deep","package":"@prozilla-os/core","head":[["meta",{"name":"og:title","content":"Class WindowsConfig | ProzillaOS Docs"}],["meta",{"name":"twitter:title","content":"Class WindowsConfig | ProzillaOS Docs"}],["meta",{"name":"og:description","content":"Documentation for ProzillaOS and its packages."}],["meta",{"name":"twitter:description","content":"Documentation for ProzillaOS and its packages."}],["link",{"rel":"canonical","href":"https://os.prozilla.dev/docs/reference/classes/system/windows-config"}],["meta",{"name":"og:url","content":"https://os.prozilla.dev/docs/reference/classes/system/windows-config"}],["meta",{"name":"twitter:url","content":"https://os.prozilla.dev/docs/reference/classes/system/windows-config"}],["meta",{"name":"og:locale","content":"en_US"}],["meta",{"name":"og:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"twitter:image","content":"https://os.prozilla.dev/docs/prozilla-os-title-banner.png"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}]]},"headers":[],"relativePath":"reference/classes/system/windows-config.md","filePath":"reference/classes/system/windows-config.md"}'),i={name:"reference/classes/system/windows-config.md"},n=t(`<h1 id="class-windowsconfig" tabindex="-1">Class <a href="https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/system/configs/windowsConfig.ts" target="_blank" rel="noreferrer"><code>WindowsConfig</code></a> <a class="header-anchor" href="#class-windowsconfig" aria-label="Permalink to &quot;Class [\`WindowsConfig\`](https://github.com/prozilla-os/ProzillaOS/blob/main/packages/core/src/features/system/configs/windowsConfig.ts)&quot;">​</a></h1><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><blockquote><p><code>new WindowsConfig(options)</code></p></blockquote><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><br><h4 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h4><ul><li><strong>Optional</strong></li><li><strong>Type:</strong> <code>WindowsConfigOptions</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WindowsConfigOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	screenMargin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	titleSeparator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	minScreenSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="note custom-block github-alert"><p class="custom-block-title">References</p><p></p><ul><li><a href="/docs/reference/classes/utils/vector2">Vector2</a></li></ul></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="screenmargin" tabindex="-1">screenMargin <a class="header-anchor" href="#screenmargin" aria-label="Permalink to &quot;screenMargin&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>32</code></li></ul><p>The margin in CSS pixels that windows will keep between them and the edges of the screen on smaller devices</p><h3 id="titleseparator" tabindex="-1">titleSeparator <a class="header-anchor" href="#titleseparator" aria-label="Permalink to &quot;titleSeparator&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>&quot;-&quot;</code></li></ul><p>A string that is placed between different parts of a window title</p><h3 id="minscreensize" tabindex="-1">minScreenSize <a class="header-anchor" href="#minscreensize" aria-label="Permalink to &quot;minScreenSize&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/reference/classes/utils/vector2"><code>Vector2</code></a></li><li><strong>Default:</strong> <code>new Vector2(350, 350)</code></li></ul><p>If the user&#39;s screen is smaller than these values, windows will always be maximized</p><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Keep these values as low as possible, as this limits some functionality of the OS on devices with certain screen sizes.</p></div>`,20),o=[n];function r(l,c,p,d,h,g){return a(),s("div",null,o)}const u=e(i,[["render",r]]);export{k as __pageData,u as default};
